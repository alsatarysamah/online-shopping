import React, { useContext, useEffect, useState } from "react";
import "./loginForm.css";
import { LoginContext } from "../../context/login";
import { When } from "react-if";

export default function LoginForm(props) {
  const loginContext = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  /////////submit/////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginContext);
    // console.log("name  ",e.uname.value)
  loginContext.click(true);
  try{
    loginContext.login(username, password);
  }catch(e){
    alert("invalid username or password")
  }
  };
  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  
  // useEffect(()=>{console.log("effect",loginContext.loginClicked);},[])
  return (
    <>
      <When condition={!loginContext.loggedIn&&loginContext.loginClicked}>
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
              {/* <input type="submit" onClick={handleSubmit} /> */}
              <button type="submit" onClick={handleSubmit} >Signin</button>
            </div>
          </form>
        </div>
      </When>
      <When condition={loginContext.loggedIn}>
                    <div>
                        {loginContext.user.username}
                    </div>
                    <button id="loginButton" onClick={loginContext.logout} >Logout</button>
                </When>
    </>
  );
}