import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <div className="signup_page">

      <h1>PXLBOOTH</h1>
      <p>your desktop for pixels & memories</p>

      <form>
        <label>
          Email address<br></br>
          <input type="email" name="email" />
        </label>
        <br></br>
        <label>
          Phone number<br></br>
          <input type="number" name="phone_number" />
        </label>
        <br></br>
        <label>
          Username<br></br>
          <input type="text" name="username" />
        </label>
        <br></br>
        <label>
          Password<br></br>
          <input type="password" name="password" />
        </label>

        <br></br>
        <button type="submit">Sign Up</button>
      </form>

      <p>Have an account? <Link to="/">Log in</Link></p>
    </div>
  );
}

export default SignupForm;