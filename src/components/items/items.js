import { When } from "react-if";
import SignupForm from "../signup/signupForm";
import LoginForm from "../loginForm/loginForm";
import { LoginContext } from "../../context/login";
import { useContext, useEffect, useState } from "react";
import getAPI from "../../hooks/getAPI";
import Auth from "../auth/auth";
import { Card, Button, H5 } from "@blueprintjs/core";
import Axios from "axios";
import "./items.css";
import { useNavigate } from "react-router-dom";
import deleteAPI from "../../hooks/deleteAPI";
import { ItemContext } from "../../context/item";
// import { DetailsContext } from "../../context/details";
export default function Items(props) {
  const navigate = useNavigate();
  const loginContext = useContext(LoginContext);
  const itemContext = useContext(ItemContext);
  // const detailsContext = useContext(DetailsContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${loginContext.user.token}` },
    };
    if (loginContext?.user?.token)
      Axios.get("http://localhost:3800/item", config)
        .then((data) => {
          setItem(data.data);
        })
        .catch((e) => {});
  }, [item]);
  return (
    <>
      <When condition={!loginContext.loginClicked && !loginContext.loggedIn}>
        <SignupForm></SignupForm>
      </When>
      <When condition={!loginContext.loggedIn && loginContext.loginClicked}>
        <LoginForm></LoginForm>
      </When>
      <When condition={loginContext.loggedIn && loginContext.loginClicked}>
        {itemContext?.item.map((element) => {
          return (
            <div id="grid">
              <Card className="item">
                <H5>{element.name}</H5>
                <img src="{element.imgUrl}"></img>
                <p>{element.description}</p>
                <p> {element.price} JD</p>
                <Auth userId={element.userId}>
                  <Button
                    text="Delete"
                    onClick={() => {
                      deleteAPI(element.id, loginContext.user.token);
                    }}
                  />
                  <Button
                    text="Update"
                    onClick={() => {
                      navigate("/addItem");
                    }}
                  />
                </Auth>
                <Button
                  text="View"
                  onClick={() => {
                    // detailsContext.settingItem(element);
                    navigate("/details");
                  }}
                />
              </Card>
            </div>
          );
        })}
      </When>
    </>
  );
}
