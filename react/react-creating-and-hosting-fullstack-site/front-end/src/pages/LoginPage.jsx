import { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function loginFn() {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles');
    } catch(err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h1>Login</h1>

      {error && <p>{error}</p>}

      <label>Email &nbsp;&nbsp;
        <input 
          placeholder='bob@bobmail.com' 
          value={email} 
          onChange={evt => setEmail(evt.target.value)} />
      </label><br /><br />

      <label>Password &nbsp;&nbsp;
        <input 
          placeholder='*******' 
          type='password' 
          value={password} 
          onChange={evt => setPassword(evt.target.value)} />
      </label><br /><br />

      <button onClick={loginFn} style={{border:'1px solid black'}}>Log In</button><br /><br />

      <Link to='/create-account'>No account? Don't have a cow. Create one, here.</Link>
    </>
  )
}