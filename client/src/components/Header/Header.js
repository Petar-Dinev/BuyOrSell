import {Link} from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header style={styles}>
      <h1><Link to="/">CarsTrade</Link></h1>
      <nav>
        <ul>
          <li><Link to="/cars">Catalog</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
