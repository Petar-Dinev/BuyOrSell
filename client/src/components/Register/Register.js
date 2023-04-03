import styles from "./registerCSS.css";

export const Register = ({userData, createUser, onUserDataChange}) => {
  return (
    <form action="/register" method="post" style={styles} onSubmit={createUser}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={userData.username} onChange={onUserDataChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={userData.email} onChange={onUserDataChange} required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={userData.password} onChange={onUserDataChange} required />

      <label htmlFor="confirm_password">Confirm Password:</label>
      <input
        type="password"
        id="confirm_password"
        name="confirm_password"
        required
      />

      <button type="submit">Register</button>
    </form>
  );
};
