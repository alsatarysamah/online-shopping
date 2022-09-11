import React, { useContext, useState } from "react";
// import "./loginForm.css";
import { LoginContext } from "../../context/login";
import { When } from "react-if";
import signup from "../../hooks/signup";
import LoginForm from "../loginForm/loginForm";
export default function SignupForm(props) {
    const loginContext = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  /////////submit/////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username,password)
  };
  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <>

        <div className="loginForm">
          <form>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                name="uname"
                required
                onChange={usernameHandler}
              />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                required
                onChange={passwordHandler}
              />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <button type="submit" onClick={handleSubmit} >Signup</button>
            </div>
          </form>
        </div>
        
     
    </>
  );
}