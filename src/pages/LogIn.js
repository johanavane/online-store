import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LogIn.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  function toggleShow() {
    console.log("first");
    console.log(hidden);
    setHidden(!hidden);
    console.log("after");
    console.log(hidden);
  }

  return (
    <div className="logonContainer">
      <div className="form">
        <h1> Log In </h1>
        <form className="loginForm">
          {/* Username Input */}
          <div className="loginEmail">
            <label>
              <p>Email</p>
              <input type="text" />
            </label>
          </div>

          {/* Password Input */}
          <div className="loginPassword">
            <label>
              <p>Password</p>
              <i onClick={toggleShow} className="eyeIcon">
                {hidden ? <FaEyeSlash /> : <FaEye />}
              </i>
              <input type={hidden ? "password" : "text"} />
            </label>
          </div>

          {/* Forgot Password */}
          <div className="forgotPassword">
            <label>
              {/* <input type="checkbox" name="checked" /> */}
              <a> Forgot password? </a>
            </label>
          </div>

          {/* Login Button */}
          <div className="loginButton">
            <button> Sign in </button>
          </div>
        </form>
        {/* Link to Sign Up */}
        <div className="linkSignup">
          <a>New member? </a>
          {/* <a href="/SignUp">Sign up</a> */}
          <Link to="/SignUp">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
