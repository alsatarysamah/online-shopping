import { When } from "react-if";
import SignupForm from "../signup/signupForm";
import LoginForm from "../loginForm/loginForm";
import { LoginContext } from "../../context/login";
import { useContext, useEffect, useState } from "react";
import getAPI from "../../hooks/getAPI";

import { Card, Button, H5 } from "@blueprintjs/core";
import Axios from "axios";
import "./items.css";
export default function Items(props) {
  const loginContext = useContext(LoginContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${loginContext.user.token}` },
    };

    Axios.get("http://localhost:3800/item", config)
      .then((data) => {
        setItem(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <When condition={!loginContext.loginClicked}>
        <SignupForm></SignupForm>
      </When>
      <When condition={!loginContext.loggedIn && loginContext.loginClicked}>
        <LoginForm></LoginForm>
      </When>
      <When condition={loginContext.loggedIn && loginContext.loginClicked}>
        {item?.map((element) => {
          return (
            <div id="grid">
              <Card className="item">
                <H5>{element.name}</H5>
                <img src={element.imgUrl}></img>
                <p>{element.description}</p>
                <p>  {element.price} JD</p>

                <Button text="Delete" />
                <Button text="Update" />
              </Card>
            </div>
          );
        })}
      </When>
    </>
  );
}
