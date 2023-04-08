import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import styles from "./LoginCss.module.css";

const Login = () => {
  const { onLoginSubmit } = useAuthContext();

  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    // errorsFromServer: '',
  });

  const onBlurHandler = (e) => {
    if (
      e.target.name === "email" &&
      (!e.target.value.includes("@") || !e.target.value.includes("."))
    ) {
      setErrors((state) => ({ ...state, emailError: "Invalid email!" }));
    } else {
      setErrors((state) => ({ ...state, emailError: "" }));
    }

    if (e.target.name === "password" && e.target.value.length < 4) {
      setErrors((state) => ({
        ...state,
        passwordError: "password must be at least 4 character length",
      }));
    } else {
      setErrors((state) => ({ ...state, passwordError: "" }));
    }
  };

  return (
    <section>
      <form action="/login" method="post" style={styles} onSubmit={onSubmit}>
        <div>
          <h2>Login</h2>
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            onBlur={onBlurHandler}
            required
          />
          {errors.emailError ? <span>{errors.emailError}</span> : null}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
            onBlur={onBlurHandler}
            required
          />
          {errors.passwordError ? <span>{errors.passwordError}</span> : null}
        </div>
        <div>
          <button type="submit">Login</button>
          <p>
            <span>
              If u dont have account go register{" "}
              <Link to="/register">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
