import React from "react";
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { NavLink as Navlink } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
    <div className="wraper">
      <form action="">
        <h2>Login</h2>
        <div className="input-box">
          <input type="text" placeholder="username" required />
          <FaUser className="icons" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
          <FaLock className="icons" />
        </div>

        <div className="forget">
          <label>
            {" "}
            <input type="checkbox" /> Remember me{" "}
          </label>
          <a href="#">forget password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register">
          <p>
            Don't have an account?
            <a href="#">
              {" "}
              <Navlink to="/register">Sign Up</Navlink>
            </a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
