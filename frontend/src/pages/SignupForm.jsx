//our library tools
import { useState } from 'react';
import { Link } from 'react-router-dom';

//=======================================
function SignupForm() {
  //firstlyyyy, create our states that start as empty strings
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  //DATA VALIDATION - email has @, username isn't blank, password isn't blank
  const isValid =
    email.includes('@') && username.trim().length > 0 && password.length > 0;

  //submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault(); //react will handle page loading, not the browser

    //now, lets make a request to our serverr
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, phoneNumber, password }),
    });

    //thenn, we "wait" until the server responds/"await"
    const data = await response.json();
    console.log('Sign up response:', data);
  };

  return (
    <div className="signup_page">
      <h1>PXLBOOTH</h1>
      <p>your desktop for pixels & memories</p>

      <form onSubmit={handleSubmit}> {/* connect form to the above function */}
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