import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Comment } from './Comment';

const mockComment = {
  id: 1,
  postId: 1,
  name: 'Chi Doe',
  body: 'This is the test comment.',
  email: 'chester@testmail.com'
};

describe('Comment component', () => {
  it('renders comment with author and content', () => {
    render(
      <Comment
        comment={mockComment}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
        canModify={false}
      />
    );

    // expect
  })
})