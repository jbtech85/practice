import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Post } from './Post';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import * as api from '../../lib/api';
import * as storage from '../../lib/storage';
import { useAuth } from '../../contexts/AuthContext';
import userEvent from '@testing-library/user-event';

vi.mock('../../lib/api');
vi.mock('../../lib/storage');
vi.mock('../../contexts/AuthContext', () => ({
  useAuth: vi.fn()
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ id: '1' }),
    useNavigate: () => mockNavigate
  };
});

const mockPost = {
  id: 1,
  userId: 1,
  title: 'Test Post',
  body: 'This is my test post.\nHere is another paragraph!',
  likesCount: 2,
  commentsCount: 1,
  isLiked: false
};

const mockUser = {
  id: 1,
  name: 'Bane Doe',
  username: 'miNombreEsBane',
  email: 'bane@legion_of_doom.com'
};

const mockComments = [
  {
    id: 1,
    postId: 1,
    name: 'miNombreEsBane',
    body: 'I must find the Batman.',
    email: 'bane@legion_of_doom.com'
  }
];

const setup = (authUser = mockUser) => {
  (useAuth as Mock).mockReturnValue({ user: authUser });

  (api.fetchPost as Mock).mockResolvedValue(mockPost);
  (api.fetchUser as Mock).mockResolvedValue(mockUser);
  (api.fetchComments as Mock).mockResolvedValue(mockComments);
};

describe('<Post /> Component', () => {
  beforeEach(() => {
    setup();
    vi.clearAllMocks();
  });

  const renderComponent = () => {
    return (
      render(
        <MemoryRouter initialEntries={['/posts/1']}>
          <Routes>
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
        </MemoryRouter>
      )
    )
  };

  it('renders loading state', async () => {
    renderComponent();

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  // if user is not authed, and is on this page, redirect them to login page
  it('redirects if user is not logged in', async () => {
    (useAuth as Mock).mockReturnValue({ user: null });
    (api.fetchUser as Mock).mockResolvedValue(null);
    renderComponent();

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

  it('handles post not found', async () => {
    (api.fetchPost as Mock).mockResolvedValue(null);

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText(/post not found/i)).toBeInTheDocument();
    });
  });

  it('handles like button toggle', async () => {
    (storage.toggleLike as Mock).mockReturnValue(true);
    const user = userEvent.setup();
    renderComponent();

    expect(await screen.findByText('Test Post')).toBeInTheDocument();

    // const likeButton = await screen.getAllByTestId('likeButton-1')[0];
    const likeButton = await screen.getByTestId('likeButton-1'); // also works
    await user.click(likeButton);
    expect(storage.toggleLike).toHaveBeenCalledWith(1);
  });

  it('adds a new comment on submission', async () => {
    (api.createComment as Mock).mockResolvedValue({
      id: 2,
      name: 'Gah Doe',
      email: 'gah@example.com',
      body: 'New comment here eh'
    });

    const user = userEvent.setup();
    renderComponent()

    const textarea = await screen.findByRole('textbox');
    await user.type(textarea, 'New comment here eh');

    const button = screen.getByRole('button', { name: /comment/i });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText('New comment here eh')).toBeInTheDocument();
      expect(screen.getByText(/comments \(2\)/i)).toBeInTheDocument();
    });
  });

  it('handles comment creation error gracefully', async () => {
    const error = new Error('Failed to comment');
    (api.createComment as Mock).mockRejectedValue(error);
    const user = userEvent.setup();
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

    renderComponent();

    const textarea = await screen.findByRole('textbox');
    await user.type(textarea, 'Will fail');

    const button = screen.getByRole('button', { name: /comment/i });
    await user.click(button);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error adding comment:', error);
    });

    consoleErrorSpy.mockRestore();
  });

  it('deletes a comment', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    (api.fetchComments as Mock).mockResolvedValue([
      ...mockComments,
      {
        id: 2,
        name: 'Commenter',
        email: 'grain@example.com',
        body: 'Well said',
        postId: '1'
      }
    ]);
    const user = userEvent.setup();
    await renderComponent();

    expect(await screen.findByText('Test Post')).toBeInTheDocument(); // seems to be a check for if things have loaded
    await user.click(screen.getByTestId(`${mockComments[0].id}-deleteBtn`));

    expect(screen.queryByText(mockComments[0].body)).not.toBeInTheDocument();

  });

  it('updates comment content when edited', async () => {
    const updatedText = 'Updated comment text';
    (api.createComment as Mock).mockResolvedValue({
      ...mockComments[0],
      body: updatedText
    });
    const user = userEvent.setup();
    await renderComponent();

    expect(await screen.findByText('Test Post')).toBeInTheDocument();
    await user.click(screen.getByTestId(`${mockComments[0].id}-editBtn`));

    const textarea = await screen.getByTestId('editInput');
    await user.clear(textarea);
    await user.type(textarea, updatedText);

    const button = screen.getByRole('button', { name: /save changes/i });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText(updatedText)).toBeInTheDocument();
      expect(screen.getByText(/comments \(1\)/i)).toBeInTheDocument();
    });
  });


  it('handles rapid comment edits correctly', async () => {
    let resolveFirstEdit!: (value: unknown) => void;
    let resolveSecondEdit!: (value: unknown) => void;

    const firstEditPromise = new Promise(resolve => {
      resolveFirstEdit = resolve;
    });

    const secondEditPromise = new Promise(resolve => {
      resolveSecondEdit = resolve;
    });

    // first edit will resolve after second edit
    (api.createComment as Mock)
      .mockImplementationOnce(() => firstEditPromise)
      .mockImplementationOnce(() => secondEditPromise);
    
    const user = userEvent.setup();
    await renderComponent();

    expect(await screen.findByText('Test Post')).toBeInTheDocument();
    // begin first edit
    await user.click(screen.getByTestId(`${mockComments[0].id}-editBtn`));
    const textarea = await screen.getByTestId('editInput');
    await user.clear(textarea);
    await user.type(textarea, 'First!');
    await user.click(screen.getByRole('button', { name: /save changes/i }));
    
    // begin second edit
    await user.click(screen.getByTestId(`${mockComments[0].id}-editBtn`));
    const textareaTheSequel = await screen.getByTestId('editInput');
    await user.clear(textareaTheSequel);
    await user.type(textareaTheSequel, 'Second edit');
    await user.click(screen.getByRole('button', { name: /save changes/i }));

    // resolve second edit first
    resolveSecondEdit({
      ...mockComments[0],
      body: 'Second edit'
    });

    // then resolve first edit
    resolveFirstEdit({
      ...mockComments[0],
      body: 'First!'
    });

    // final state should show the second edit
    await waitFor(() => {
      expect(screen.getByText('Second edit')).toBeInTheDocument();
      expect(screen.queryByText('First!')).not.toBeInTheDocument();
    });

  });


});