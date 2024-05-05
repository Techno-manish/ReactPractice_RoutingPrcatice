// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navBar">
    <div className="logoContainer">
      <img
        className="logoImage"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>
    <ul className="navLinkContainer">
      <li className="listItem">
        <Link className="navLink" to="/">
          Home
        </Link>
      </li>
      <li className="listItem">
        <Link className="navLink" to="/about">
          About
        </Link>
      </li>
      <li className="listItem">
        <Link className="navLink" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
