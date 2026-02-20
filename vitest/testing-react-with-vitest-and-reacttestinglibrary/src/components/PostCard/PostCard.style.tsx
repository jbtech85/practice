import styled from 'styled-components';


export const Article = styled.article`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Article}:hover & {
    transform: scale(1.05);
  }
`;

export const PostContent = styled.div`
  padding: 1.5rem;
`;

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

export const PostExcerpt = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const PostStats = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StatButton = styled.button<{ isLiked?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isLiked ? '#2563eb' : '#6b7280'};
  background: ${props => props.isLiked ? '#eff6ff' : 'transparent'};
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.isLiked ? '#dbeafe' : '#f3f4f6'};
    transform: translateY(-1px);
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

