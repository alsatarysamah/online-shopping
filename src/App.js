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
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Details from "./components/details/details";
import Item from "./context/item";
import Fav from "./components/fav/fav"

function App() {
  
  return (
    <div id="app">
      <Login>
        <Item>
       
        <NavBar></NavBar>
       
        <Routes >
          <Route index path="/online-shopping" element={<Items />} />
          <Route path="/addItem" element={<AddForm />} />
          <Route path="/updateItem" element={<UpdateForm />} />
          
          <Route path="/details" element={<Details />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
        
        </Item>
      </Login>
        <Footer></Footer>
       
    </div>
  );
}

export default App;
