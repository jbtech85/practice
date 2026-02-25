import { useState } from 'react';
import { Pencil, Trash2, Clock } from 'lucide-react';
import { CommentForm } from '../CommentForm/CommentForm';
import type { Comment as CommentType } from '../../types/blog';
import { CommentContainer, CommentHeader, CommentAuthor, 
  CommentActions, ActionButton, CommentContent } from './Comment.style';

interface CommentProps {
  comment: CommentType;
  onEdit: (id: number, content: string) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  canModify: boolean;
}

export function Comment({ comment, onEdit, onDelete, canModify=false }: CommentProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = async({ content }: { content: string }) => {
    await onEdit(comment.id, content);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if(window.confirm('Sure you want to delete this comment?')) {
      await onDelete(comment.id);
    }
  };

  if(isEditing) {
    return (
      <CommentContainer>
        <CommentForm
          onSubmit={ handleEdit }
          initialValue={ comment.body }
          submitLabel="Save Changes"
          inputTestId="editInput"
        />
      </CommentContainer>
    );
  }

  return (
    <CommentContainer>
      <CommentHeader>
        <CommentAuthor>
          <h4>{comment.name}</h4>
          <p>
            <Clock size={14} />
            {new Date().toLocaleDateString()}
          </p>
        </CommentAuthor>

        {canModify && (
          <CommentActions>
            <ActionButton onClick={() => setIsEditing(true)} title="Edit" data-testid={`${comment.id}-editBtn`}>
              <Pencil size={18} />
            </ActionButton>

            <ActionButton onClick={handleDelete} title="Delete" data-testid={`${comment.id}-deleteBtn`}>
              <Trash2 size={18} />
            </ActionButton>
          </CommentActions>
        )}
      </CommentHeader>
      <CommentContent>{comment.body}</CommentContent>
    </CommentContainer>
  );
}