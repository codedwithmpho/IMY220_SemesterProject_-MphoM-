import { Link } from 'react-router-dom';

function Splash() {
  return (
    <div className="splash_page">

      <h1>PXLBOOTH</h1>
      <p>your desktop for pixels & memories</p>

      <form>
        <label>
          Email address<br></br>
          <input type="email" name="email" />
        </label>

        <br></br>
        <label>
          Password<br></br>
          <input type="password" name="password" />
        </label>

        <br></br>
        <button type="submit">Log In</button>
      </form>

      <p>New here? <Link to="/signup">Create an account</Link></p>
    </div>
  );
}

export default Splash;