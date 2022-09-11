import { When } from "react-if";
import SignupForm from "../signup/signupForm";
import LoginForm from "../loginForm/loginForm";
import { LoginContext } from "../../context/login";
import { useContext } from "react";
export default function Items(props) {
    const loginContext = useContext(LoginContext);

  return (
    <>
      <When condition={!loginContext.loginClicked}>
        <SignupForm></SignupForm>
      </When>
      <When condition={!loginContext.loggedIn && loginContext.loginClicked}>
        <LoginForm></LoginForm>
      </When>
    <When condition={loginContext.loggedIn&&loginContext.loginClicked}>
      <p>hi</p>
      </When>
    </>
  );
}
