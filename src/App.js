import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/navBar.js";
import Footer from "./components/footer/footer.js";
import SignupForm from "./components/signup/signupForm";
import LoginForm from "./components/loginForm/loginForm";
import { Route, Routes } from "react-router-dom";
import Login from "./context/login";
import Items from "./components/items/items";
// import Items from "./components/items/items";
import AddForm from "./components/addForm/addForm";
function App() {
  // static contextType = LoginContext;
  
  return (
    <>
    <Login>
      <NavBar></NavBar>
      {/* <SignupForm></SignupForm> */}
      <Routes>
        <Route path="/online-shopping" element={<Items />} />
        <Route path="/addItem" element={<AddForm />} />
      </Routes>
      <Footer></Footer>
      </Login>
    </>
  );
}

export default App;
