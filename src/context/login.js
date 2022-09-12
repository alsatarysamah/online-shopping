import React,{useState,useEffect} from "react";
import cookie from "react-cookies";
import superAgent  from "superagent";

import jwt from 'jsonwebtoken';
import base64 from 'base-64';
export const LoginContext=React.createContext();
export default function Login(props){
const [loggedIn,setLoggedIn]=useState(false);
const [loginClicked,setloginClicked]=useState(false);
const [user, setUser] = useState({
    username: cookie.load('username') || "",
    actions: cookie.load('actions') || []
});
const can =(userId)=>{
return user.id===userId;
}
const login =async (username,password)=>{
    try{
const response= await superAgent.post("http://localhost:3800/signin").set('authorization',
 `Basic ${base64.encode(`${username}:${password}`)}`);
 console.log(response.body) 
  validateMyUser(response.body.user)
    }catch {
        alert("invalid username or password")
    }
}
const validateMyUser = (user) => {
    if (user.token) {
        setLoggedIn(true);
        setUser(user);
        cookie.save('token', user.token);
        cookie.save('username', user.username);
        cookie.save('actions', user.actions);
        console.log({loggedIn});
    } else {
        setLoggedIn(false);
        setUser({});
        alert("invalid username or password")
    }
}
const logout =()=>{
    setLoggedIn(false);
    setUser({});
    cookie.remove('token');
    cookie.remove('actions');
    cookie.remove('username');
}
const click=()=>{
    console.log("clickkkkkkkkkkkkkkkkkkkk");
    setloginClicked(true)
}
    const state={
        loggedIn:loggedIn,
        user:user,
        can:can,
        login:login,
        logout:logout,
        click:click,
        loginClicked:loginClicked

    }

    return(
    <>
    <LoginContext.Provider value={state}>
    {props.children}
    </LoginContext.Provider>
    
    
    </>
    )

}