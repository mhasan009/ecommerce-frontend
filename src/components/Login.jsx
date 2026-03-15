import "../styles/login.css";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = ({ openSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="login" aria-labelledby="login-title">
      <h2 id="login-title" className="login__title">
        Login
      </h2>

      <form className="login__form" aria-label="Login form">
        <div className="login__form-group">
          <label className="login__label" htmlFor="login-email">
            Email
          </label>
          <input
            type="email"
            id="login-email"
            className="login__input"
            placeholder="Enter Email"
            aria-required="true"
          />
        </div>

        <div className="login__form-group">
          <label className="login__label" htmlFor="login-password">
            Password
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="login-password"
              className="login__input"
              placeholder="Enter Password"
              aria-required="true"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer", marginLeft: "8px" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="login__form-footer">
          <label className="login__checkbox-label">
            <input type="checkbox" className="login__checkbox" />
            <span className="login__checkbox-text">Remember Me</span>
          </label>
          <a href="#" className="login__forgot" aria-label="Forgot Password">
            Forgot Password?
          </a>
        </div>

        <div className="login__form-group">
          <button type="submit" className="login__submit" aria-label="Login">
            Login
          </button>
        </div>
      </form>

      <div className="login__footer">
        <span className="login__footer-text">Don't have an account?</span>
        <button
          type="button"
          className="login__footer-btn"
          onClick={openSignUp}
          aria-label="Sign Up"
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Login;
