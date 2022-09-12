import React, { useContext, useEffect, useState } from "react";
import "./loginForm.css";
import { LoginContext } from "../../context/login";
import { When } from "react-if";
import {ItemContext} from "../../context/item"
import Axios from "axios";
export default function LoginForm(props) {
  const loginContext = useContext(LoginContext);
  const itemContext=useContext(ItemContext)
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
  
  // useEffect(()=>{
  //   console.log("effect",loginContext.loggedIn);
  //   if(loginContext.loggedIn)
  //   {const config = {
  //     headers: { Authorization: `Bearer ${loginContext.user.token}` },
  //   };
  //   if (loginContext?.user?.token)
  //     Axios.get("http://localhost:3800/item", config)
  //       .then((data) => {
  //         console.log(data.data);
  //         itemContext.settingAllItem(data.data)
        
  //       })
  //       .catch((e) => {});}
  // },[])
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
              <button id="loginButton" type="submit" onClick={handleSubmit} >Signin</button>
            </div>
          </form>
        </div>
      </When>
      <When condition={loginContext.loggedIn}>
                    <div>
                        {loginContext.user.username}
                    </div>
                    <button  onClick={loginContext.logout} >Logout</button>
                </When>
    </>
  );
}