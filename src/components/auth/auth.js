import React, { useContext } from "react";
import { LoginContext } from "../../context/login";
import { When } from "react-if";

export default function Auth(props) {
 
  const loginContext = useContext(LoginContext);
  return (
    <>
      <When condition={loginContext.loggedIn && loginContext.can(props.userId)}>
        {props.children}
      </When>
    </>
  );
}
