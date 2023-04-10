import { Link } from "react-router-dom";
import { useState } from 'react'
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

  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const onBlurHandler = (e) => {
    if (e.target.name === "username" && e.target.value.length < 5) {
      setErrors((state) => ({
        ...state,
        usernameError: "username must be at least 5 characters length",
      }));
    } else {
      setErrors((state) => ({ ...state, usernameError: "" }));
    }

    if (
      e.target.name === "email" &&
      (!e.target.value.includes("@") || !e.target.value.includes("."))
    ) {
      setErrors((state) => ({ ...state, emailError: "Invalid email!" }));
    } else {
      setErrors((state) => ({ ...state, emailError: "" }));
    }

    if (e.target.name === "password" && e.target.value.length < 6) {
      setErrors((state) => ({
        ...state,
        passwordError: "password must be at least 6 character length",
      }));
    } else {
      setErrors((state) => ({ ...state, passwordError: "" }));
    }
  };

  const onBlurPasswordsChek = (e) => {
     if(e.target.name === "confirmPassword" && (values.password !== values.confirmPassword)) {
      setErrors((state) => ({...state, confirmPasswordError: 'passwords miss match!'}))
     } else {
      setErrors((state) => ({...state, confirmPasswordError: ''}))
     }
  }

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
          onBlur={onBlurHandler}
          required
        />
        {errors.usernameError ? <span>{errors.usernameError}</span> : null}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
          onBlur={onBlurHandler}
          required
        />
        {errors.emailError ? <span>{errors.emailError}</span> : null}

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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={changeHandler}
          onBlur={onBlurPasswordsChek}
          required
        />
        {errors.confirmPasswordError ? <p style={{color: 'red'}}>{errors.confirmPasswordError}</p> : null}

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
