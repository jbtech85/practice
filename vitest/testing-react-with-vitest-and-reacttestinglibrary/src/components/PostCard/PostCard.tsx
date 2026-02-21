import { Link } from 'react-router-dom';
import { ThumbsUp, MessageSquare, Calendar, User } from 'lucide-react';
import type { PostWithCounts } from '../../types/blog';
import type React from 'react';
import { Article, PostImage, PostContent, PostTitle, PostExcerpt, 
  PostMeta, PostAuthor, PostStats, StatButton } from './PostCard.style';


interface PostCardProps {
  post: PostWithCounts;
  authorName: string;
  onLike: (postId: number, e: React.MouseEvent) => void;
}

export function PostCard({ post, authorName, onLike }: PostCardProps) {
  return (
    <Article>
      <Link to={`/post/${post.id}`}>
        <PostImage
          src={`https://picsum.photos/seed/${post.id}/800/400`}
          alt={post.title}
        />
        
        <PostContent>
          <PostTitle>{post.title}</PostTitle>

          <PostExcerpt>
            {post.body.slice(0, 200)}
            {post.body.length > 200 ? '...' : ''}
          </PostExcerpt>

          <PostMeta>
            <PostAuthor>
              <span>
                <User size={16} />
                {authorName}
              </span>
              
              <span>
                <Calendar size={16} />
                {new Date().toLocaleDateString()}
              </span>
            </PostAuthor>

            <PostStats>
              <StatButton
                onClick={(e) => onLike(post.id, e)}
                isLiked={post.isLiked}
              >
                <ThumbsUp size={16} />
                <span>{post.likesCount}</span>
              </StatButton>

              <StatButton as="div">
                <MessageSquare size={16} />
                <span>{post.commentsCount}</span>
              </StatButton>
            </PostStats>
          </PostMeta>
        </PostContent>
      </Link>
    </Article>
  );
}