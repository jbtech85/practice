import { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function createAccountFn() {
    // reset error each time
    setError(null);

    if(password !== confirmPassword) {
      setError('Password and Confirm Password must match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles');
    } catch(err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h1>Create Account</h1>
      
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
      <label>Confirm password &nbsp;&nbsp;
        <input 
          placeholder='********' 
          type='password' 
          value={confirmPassword} 
          onChange={evt => setConfirmPassword(evt.target.value)} />
      </label><br /><br />

      <button onClick={createAccountFn} style={{border:'1px solid black'}}>Log In</button><br /><br />

      <Link to="/login">Already have an account? Log in.</Link>
    </>
  )
}