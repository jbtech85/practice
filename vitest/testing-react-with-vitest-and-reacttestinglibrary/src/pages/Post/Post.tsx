import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageSquare, ThumbsUp, Calendar, User } from 'lucide-react';
import { fetchPost, fetchComments, fetchUser, createComment } from '../../lib/api';
import { toggleLike } from '../../lib/storage';
import { CommentForm } from '../../components/CommentForm/CommentForm';
import { Comment } from '../../components/Comment/Comment';
import { useAuth } from '../../contexts/AuthContext';
import type { PostWithCounts, Comment as CommentType, User as UserType } from '../../types/blog';
import { Container, Article, PostImage, PostContent, PostTitle, PostMeta, AuthorInfo, PostStats, 
  StatButton, PostBody, CommentsSection, CommentsHeader, CommentsList, LoginPrompt } from './Post.style';


// this was the point I stopped copying everything by hand as an excuse to practice React.  Now to copy Register.tsx and get back to Vitest.
// was fun learning Zod and react-hook-forms though!  And it made me really happy seeing styled-components in the wild.  For the record, I think Tailwind makes code look messy and hard to read..
export function Post() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState<PostWithCounts | null>(null);
  const [author, setAuthor] = useState<UserType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const loadPost = async () => {
      if (!id) return;
      
      try {
        const postData = await fetchPost(parseInt(id));
        setPost(postData);
        
        const [authorData, commentsData] = await Promise.all([
          fetchUser(postData.userId),
          fetchComments(postData.id)
        ]);
        
        setAuthor(authorData);
        setComments(commentsData.reverse()); // Show newest comments first
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id, navigate, user]);

  const handleComment = async ({ content }: { content: string }) => {
    if (!post || !user) return;

    try {
      const comment = await createComment(post.id, {
        name: user.username,
        email: user.email,
        body: content
      });
      
      setComments(prev => [comment, ...prev]); // Add new comment at the top
      setPost(prev => prev ? { ...prev, commentsCount: prev.commentsCount + 1 } : null);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleEditComment = async (commentId: number, content: string) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, body: content }
        : comment
    ));
  };

  const handleDeleteComment = async (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
    setPost(prev => prev ? { ...prev, commentsCount: prev.commentsCount - 1 } : null);
  };

  const handleLike = () => {
    if (!post) return;
    
    const isLiked = toggleLike(post.id);
    setPost({ ...post, isLiked, likesCount: isLiked ? 1 : 0 });
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!post || !author) {
    return <div className="text-center py-8">Post not found</div>;
  }

  return (
    <Container>
      <Article>
        <PostImage
          src={`https://picsum.photos/seed/${post.id}/1200/600`}
          alt={post.title}
        />
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            <AuthorInfo>
              <span>
                <User size={18} />
                {author.name}
              </span>
              <span>
                <Calendar size={18} />
                {new Date().toLocaleDateString()}
              </span>
            </AuthorInfo>
            <PostStats>
              <StatButton onClick={handleLike} isLiked={post.isLiked}>
                <ThumbsUp size={20} />
                <span>{post.likesCount}</span>
              </StatButton>
              <StatButton as="div">
                <MessageSquare size={20} />
                <span>{post.commentsCount}</span>
              </StatButton>
            </PostStats>
          </PostMeta>
          <PostBody>
            {post.body.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PostBody>
        </PostContent>
      </Article>

      <CommentsSection>
        <CommentsHeader>Comments ({post.commentsCount})</CommentsHeader>
        {user ? (
          <CommentForm onSubmit={handleComment} />
        ) : (
          <LoginPrompt>
            <p>Please sign in to comment.</p>
            <a href="/login">Sign In</a>
          </LoginPrompt>
        )}

        <CommentsList>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onEdit={handleEditComment}
              onDelete={handleDeleteComment}
              canModify={user?.email === comment.email}
            />
          ))}
        </CommentsList>
      </CommentsSection>
    </Container>
  );
}