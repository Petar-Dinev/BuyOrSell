import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Copyright &copy; 2023</p>
        <ul className={styles.nav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
