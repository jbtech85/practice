import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Card, Header, Title, Subtitle, Form, FormGroup, FormGroupWrapper, 
  Input, InputIcon, ErrorMessage, Button, LinkText, InputErrorMessage } from './Register.style';




export function Register() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '', formError: '' });
  const [loading, setLoading] = useState(false);

  const resetError = { username: '', email: '', password: '', formError: '' }

  const validate = () => {
    let newErrors = resetError;
    if (username.trim().length < 3) newErrors.username = 'Username must be at least 3 characters long';

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) newErrors.email = 'Invalid email format';

    if (password.length < 8) newErrors.password = 'Password must be at least 8 characters long';

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      setErrors(resetError);
      await signUp(email, password, username);
      navigate('/');
    } catch (error) {
      setErrors({
        ...errors,
        formError: 'Failed to create account1'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Header>
          <Title data-testid="register-header">Create Account</Title>
          <Subtitle>Join our community today</Subtitle>
        </Header>

        <Form onSubmit={handleSubmit}>
          {errors.formError && (
            <ErrorMessage>
              <UserPlus size={18} />
              {errors.formError}
            </ErrorMessage>
          )}
          <FormGroupWrapper>
            <FormGroup>

              <InputIcon>
                <User size={18} />
              </InputIcon>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

            </FormGroup>
            {errors.username && <InputErrorMessage>{errors.username}</InputErrorMessage>}
          </FormGroupWrapper>
          <FormGroupWrapper>
            <FormGroup>
              <InputIcon>
                <Mail size={18} />
              </InputIcon>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />


            </FormGroup>
            {errors.email && <InputErrorMessage>{errors.email}</InputErrorMessage>}
          </FormGroupWrapper>
          <FormGroupWrapper>
            <FormGroup>

              <InputIcon>
                <Lock size={18} />
              </InputIcon>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            {errors.password && <InputErrorMessage>{errors.password}</InputErrorMessage>}
          </FormGroupWrapper>

          <Button type="submit" disabled={loading} data-testid="create-account-btn">
            {loading ? (
              'Creating account...'
            ) : (
              <>
                <UserPlus size={18} />
                Create Account
              </>
            )}
          </Button>

          <LinkText>
            Already have an account?
            <Link to="/login">Log in</Link>
          </LinkText>
        </Form>
      </Card>
    </Container>
  );
}