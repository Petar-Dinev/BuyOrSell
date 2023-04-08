import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const Register = () => {
  const { onRegisterSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <section>
      <form
        id="register"
        method="post"
        onSubmit={onSubmit}
      >
        <div>
        <h2>Register</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={changeHandler}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={changeHandler}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={changeHandler}
          required
        />

        <button type="submit">Register</button>

        <p>
            <span>If you already have profile click <Link to="/login">here</Link></span>
        </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
