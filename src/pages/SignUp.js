import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "../styles/SignUp.css";

function SignUp() {
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
    <div className="signUpContainer">
      <div className="signUpForm">
        <h1> Sign Up </h1>
        <form>
          {/* Username Input */}
          <div className="signUpEmail">
            <label>
              <p>Email</p>
              <input type="text" />
            </label>
          </div>

          {/* Password Input */}
          <div className="signUpPassword">
            <label>
              <p>Password</p>
              <i onClick={toggleShow} className="eyeIcon">
                {hidden ? <FaEyeSlash /> : <FaEye />}
              </i>
              <input type={hidden ? "password" : "text"} />
            </label>
          </div>

          {/* SignUp Button */}
          <div className="signUpButton">
            <button> Sign in </button>
          </div>
        </form>
        {/* Link to Sign Up */}
        <div className="linkLogIn">
          <a>Existing member? </a>
          <a href="/LogIn">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
