import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <Link to="/home">PXLBOOTH</Link><br></br>
      <Link to="/home">Home</Link><br></br>
      <Link to="/profile/1">Profile</Link><br></br>
      <Link to="/">Log Out</Link>
    </nav>
  );
}

export default Header;