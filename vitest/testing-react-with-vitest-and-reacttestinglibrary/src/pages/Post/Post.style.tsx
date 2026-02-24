import styled from 'styled-components';


export const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const Article = styled.article`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 24rem;
  object-fit: cover;
`;

export const PostContent = styled.div`
  padding: 2.5rem;
`;

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #111827;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 2rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4b5563;
  font-size: 0.875rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const PostStats = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const StatButton = styled.button<{ isLiked?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isLiked ? '#2563eb' : '#6b7280'};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const PostBody = styled.div`
  color: #374151;
  line-height: 1.8;
  font-size: 1.125rem;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

export const CommentsSection = styled.div`
  margin-top: 3rem;
`;

export const CommentsHeader = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1.5rem;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const LoginPrompt = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f3f4f6;
  border-radius: 1rem;
  margin-bottom: 2rem;

  p {
    color: #4b5563;
    margin-bottom: 1rem;
  }

  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
