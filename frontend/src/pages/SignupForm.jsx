import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const isValid =
    email.includes('@') && username.trim().length > 0 && password.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, phoneNumber, password }),
    });
    const data = await response.json();
    console.log('Sign up response:', data);
  };

  return (
    <div className="signup_page">
      <h1>PXLBOOTH</h1>
      <p>your desktop for pixels & memories</p>

      <form onSubmit={handleSubmit}>
        <label>
          Email address<br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone number<br />
          <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Username<br />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password<br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" disabled={!isValid}>Sign Up</button>
      </form>

      <p>Have an account? <Link to="/">Log in</Link></p>
    </div>
  );
}

export default SignupForm;