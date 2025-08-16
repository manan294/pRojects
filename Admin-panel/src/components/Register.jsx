import React from "react";
import "../styles/Register.css";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { MdDriveFileRenameOutline,MdEmail } from "react-icons/md";
import { NavLink as Navlink } from "react-router-dom";

const Register = () => {
  return (
    <div className="regcontainer">
      <div className="wraper">
        <form action="">
          <h2>Sign Up</h2>
          <div className="input-box">
            <input type="text" placeholder="Full name" required />
            <MdDriveFileRenameOutline className="icons" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icons" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
            <MdEmail className="icons" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required />
            <FaLock className="icons" />
          </div>

          <div className="signbtn">
            <button type="submit">
              {" "}
              Sign up with Google
              <FaGoogle className="sibtn" />
            </button>
            <button type="submit">
              {" "}
              Sign up with Github
              <FaGithub className="sibtn" />
            </button>
          </div>
          <button type="submit"> Sign Up</button>

          <div className="register">
            <p>
              Back to
              <a href="#">
                {" "}
                <Navlink to="/login">Login</Navlink>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
