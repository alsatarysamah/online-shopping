import { Link } from "react-router-dom";
import "./navBar.css";
import { LoginContext } from "../../context/login";
import { useContext } from "react";
import { When } from "react-if";
export default function NavBarToDo() {
  const loginContext = useContext(LoginContext);

  return (
    <>
      <nav class="bp4-navbar .modifier " id="nav">
        <div class="bp4-navbar-group bp4-align-left">
          {/* <div class="bp4-navbar-heading" className="link" >
            Mr Shop
          </div> */}
          <Link to={`/online-shopping`} className="link" >Mr Shop</Link >
        </div>
        <div class="bp4-navbar-group bp4-align-right">
          {/* <Link to={`/todo-app`} className="link" >Home</Link > */}
          {/* <Link to={`/login`}  className="link">Login</Link> */}
          <span class="bp4-navbar-divider"></span>
          <When
            condition={!loginContext.loggedIn && !loginContext.loginClicked}
          >
            <button
              class="bp4-button bp4-minimal "
              onClick={() => {
                loginContext.click();
              }}
            >
              Signin
            </button>
            
          </When>
          <When condition={loginContext.loggedIn && loginContext.loginClicked}>
          <Link to={`/addItem`}  className="link">Add Item</Link>
            <button
              class="bp4-button bp4-minimal "
              onClick={() => {
                loginContext.logout();
              }}
            >
              Logout
            </button>

          </When>
        </div>
      </nav>
    </>
  );
}
