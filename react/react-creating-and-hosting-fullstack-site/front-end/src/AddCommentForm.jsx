import { useState } from "react";

export default function AddCommentForm({ onAddComment }) {
  const [nameText, setNameText] = useState('');
  const [commentText, setCommentText] = useState('');

  return (
    <div>
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input value={nameText} onChange={(event => setNameText(event.target.value))} />
      </label>
      <label>
        Comment:
        <input value={commentText} onChange={(event => setCommentText(event.target.value))} />
      </label>
      <button onClick={() => {
          onAddComment({nameText,commentText});
          setNameText('');
          setCommentText('');
        }}>
        Add Comment
      </button>
    </div>
  )
}