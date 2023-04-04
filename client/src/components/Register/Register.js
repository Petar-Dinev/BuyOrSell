import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/userService";
import styles from "./registerCSS.css";

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const navigate = useNavigate();

  const onUserDataChange = (e) => {
    setUserData(state => ({...state, [e.target.name]: e.target.value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const {confirmPassword, ...userInfo} = userData
    if(userData.password === userData.confirmPassword) {
      const user = await register({...userInfo})
       console.log(user);
    } else {
      alert('passwords missmatch')
    }
    
    navigate('/login')
  }

  return (
    <form action="/register" method="post" style={styles} onSubmit={onSubmitHandler}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={userData.username} onChange={onUserDataChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={userData.email} onChange={onUserDataChange} required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={userData.password} onChange={onUserDataChange} required />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={userData.confirmPassword}
        onChange={onUserDataChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
