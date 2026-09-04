//our library tools
import { useState } from 'react';
import { Link } from 'react-router-dom';

//=======================================
function Splash() {
  //firstlyyyy, create our two states that start as empty strings
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //DATA VALIDATION - valid email adress and password
  const isValid = email.includes('@') && password.length > 0;

  //submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault(); //react will handle page loading

    //now, lets make a request to our serverr
    const response = await fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    //thenn, we "wait" until the server responds/"await"
    const data = await response.json();
    console.log('Sign in response:', data);
  };

  return (
    <div className="splash_page">
      <h1>PXLBOOTH</h1>
      <p>your desktop for pixels & memories</p>

     <form onSubmit={handleSubmit}>  {/* connect form to the above function */}
        <label>
          Email address<br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />  
        <label>
          Password<br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={!isValid}>Log In</button>
      </form>

      <p>New here? <Link to="/signup">Create an account</Link></p>
    </div>
  );
}

export default Splash;