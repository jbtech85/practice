import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Post } from './Post';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import * as api from '../../lib/api';
import { useAuth } from '../../contexts/AuthContext';

vi.mock('../../lib/api');
vi.mock('../lib/storage');
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
  }

});