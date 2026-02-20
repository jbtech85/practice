import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { PostCard } from './PostCard';

const mockPost = {
  id: 1,
  userId: 1,
  title: 'Test Post',
  body: 'A'.repeat(250), // ha, nice
  likesCount: 5,
  commentsCount: 3,
  isLiked: false,
};

describe('PostCard component', () => {
  it('renders post title, content, and # of likes/comments', () => {
    render(
      <MemoryRouter>
        <PostCard post={mockPost} authorName="John Doe" onLike={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Test Post/i })).toBeInTheDocument();
    expect(screen.getByText(/a{200}\.\.\./i)).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('does not truncate if body is under 200 characters', () => {
    const shortPost = { ...mockPost, body: 'Short body' };
    render(
      <MemoryRouter>
        <PostCard post={shortPost} authorName="Jane Doe" onLike={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByText('Short body')).toBeInTheDocument();
    expect(screen.queryByText('...')).not.toBeInTheDocument();
  });

  
});