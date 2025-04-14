import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;