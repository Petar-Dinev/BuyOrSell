import styles from './loginCSS.css'
const Login = () => {
  return (
    <form action="/login" method="post" style={styles}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
