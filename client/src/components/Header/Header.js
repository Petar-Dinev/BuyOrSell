import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuthContext } from "../../contexts/AuthContext";

function Header() {
  const { isAuthenticated, userData } = useAuthContext();

  return (
    <header style={styles}>
      <h1>
        <Link to="/">CarsTrade</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          {isAuthenticated && (
            <>
              <span style={{color: "red","marginLeft": "1rem"}}>Hello {userData.username}</span>
              <li>
                <Link to="/catalog/createAd">Create Ad</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
