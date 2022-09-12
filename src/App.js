import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/navBar.js";
import Footer from "./components/footer/footer.js";
import SignupForm from "./components/signup/signupForm";
import LoginForm from "./components/loginForm/loginForm";
import { Route, Routes } from "react-router-dom";
import Login, { LoginContext } from "./context/login";
import Items from "./components/items/items";
// import Items from "./components/items/items";
import AddForm from "./components/addForm/addForm";
import UpdateForm from "./components/updateForm/updateForm";
import { useContext, useEffect } from "react";
import Axios from "axios";
import Details from "./components/details/details";
import Item from "./context/item";
// import I from "./context/details"
function App() {
  
  // const loginContext = useContext(LoginContext);
  // useEffect(() => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${loginContext.user.token}` },
  //   };
  //   if (loginContext?.user?.token)
  //     Axios.get("http://localhost:3800/item", config)
  //       .then((data) => {
  //         setItem(data.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  // }, []);
  return (
    <>
      <Login>
        <Item>
        {/* <I> */}
        <NavBar></NavBar>
       
        <Routes>
          <Route path="/online-shopping" element={<Items />} />
          <Route path="/addItem" element={<AddForm />} />
          <Route path="/updateItem" element={<UpdateForm />} />
          
          <Route path="/details" element={<Details />} />

        </Routes>
        {/* </I> */}
        </Item>
      </Login>
        <Footer></Footer>
       
    </>
  );
}

export default App;
