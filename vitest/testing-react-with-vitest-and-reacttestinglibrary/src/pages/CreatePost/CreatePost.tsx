import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Title, Form, FormGroup, Label, Input, 
  TextArea, ErrorMessage, SubmitButton } from './CreatePost.style';



const postSchema = z. object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  content: z.string().min(1, 'Content is requried')
});

type PostFormData = z.infer<typeof postSchema>;

export function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema)
  });

  const onSubmit = async (data: PostFormData) => {
    try {
      const token = localStorage.getItem('token');
      if(!token) {
        throw new Error('Not authenticated');
      }

      // there is no known VITE_API_URL, and I'm not sure what products is supposed to be.
      // Pretty sure this is just psuedo code, since the mock function doesn't need the functionality to work.
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ${token}'
        },
        body: JSON.stringify({
          title: data.title,
          description: data.content,
          price: 0,
          categoryId: 1,
          images: ['https://picsum.photos/seed/${Date.now()}/800/400']
        })
      });


    } catch (error) {
      console.log('Error creating post: ', error);
    }
  };

  if(!user) {
    navigate('/login');
    return null;
  }

  return (
    <Container>
      <Title>Create a new post</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            {...register('title')}
          />
          {errors.title && (
            <ErrorMessage>{errors.title.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="content">Content</Label>
          <TextArea
            id="content"
            {...register('content')}
          />
          {errors.content && (
            <ErrorMessage>{errors.content.message}</ErrorMessage>
          )}
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Publishing...' : 'Publish Post'}
        </SubmitButton>
      </Form>
    </Container>
  );
}