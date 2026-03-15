import React, { useState } from "react";
import "../styles/register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = ({ openLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="register" aria-labelledby="register-title">
      <h2 id="register-title" className="register__title">
        Sign Up
      </h2>

      <form className="register__form" aria-label="Sign up form">
        <div className="register__form-group">
          <label className="register__label" htmlFor="register-name">
            Name
          </label>
          <input
            type="text"
            id="register-name"
            className="register__input"
            placeholder="Enter Your Name"
            aria-required="true"
          />
        </div>

        <div className="register__form-group">
          <label className="register__label" htmlFor="register-email">
            Email
          </label>
          <input
            type="email"
            id="register-email"
            className="register__input"
            placeholder="Enter Email"
            aria-required="true"
          />
        </div>

        <div className="register__form-group">
          <label className="register__label" htmlFor="register-password">
            Password
          </label>
          <div
            className="register__input-wrapper"
            style={{ position: "relative" }}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="register-password"
              className="register__input"
              placeholder="Enter Password"
              aria-required="true"
            />
            <span
              className="register__toggle"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="register__form-group">
          <button
            type="submit"
            className="register__submit"
            aria-label="Sign Up"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="register__footer">
        <span className="register__footer-text">Already have an account?</span>
        <button
          type="button"
          className="register__footer-btn"
          onClick={openLogin}
          aria-label="Login instead"
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default Register;
