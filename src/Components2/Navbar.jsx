import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";
function Navbar() {
    return (
        <nav className="navbar">
        <div className="logo-section">
            <img src={logo} alt="logo" className="logo-img" />
            <h1 className="logo-text">
            Bangalore Bakery
            </h1>
        </div>
        <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Cakes</li>
            <li>Gallery</li>
        </ul>
        </nav>
    );
}

export default Navbar;