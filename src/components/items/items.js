import "./items.css";
import { When } from "react-if";
import SignupForm from "../signup/signupForm";
import LoginForm from "../loginForm/loginForm";
import { LoginContext } from "../../context/login";
import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Auth from "../auth/auth";
import { Card, Button, H5 } from "@blueprintjs/core";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import deleteAPI from "../../hooks/deleteAPI";
import { ItemContext } from "../../context/item";
import Popup from "reactjs-popup";
// import { DetailsContext } from "../../context/details";
export default function Items(props) {
  const [iconColor, setIconColor] = useState("pink");
  // const [show, setShow] = useState(false);
  // const [chosenItem, setChosenItem] = useState({});

  // const handleClose = () => setShow(false);
  // const handleShow = () => {
  //   setChosenItem(element.movie);
  //   setShow(true);
  // }
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
      Axios.get("https://samah-shopping-server.herokuapp.com/item", config)
        .then((data) => {
          setItem(data.data);
          itemContext.settingAllItem(data.data)
        })
        .catch((e) => {});
  }, []);
  const addFav = async (favitem) => {
    loginContext.user.favItems.push(favitem.id);

    const config = {
      headers: { Authorization: `Bearer ${loginContext.user.token}` },
    };

    await Axios.put(
      `https://samah-shopping-server.herokuapp.com/user/${loginContext.user.id}`,
      { fav: loginContext.user.favItems },
      config
    )
      .then((data) => {
        console.log({ data });
        return data.data.favItems;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <When condition={!loginContext.loginClicked && !loginContext.loggedIn}>
        <SignupForm></SignupForm>
      </When>
      <When condition={!loginContext.loggedIn && loginContext.loginClicked}>
        <LoginForm></LoginForm>
      </When>
      <When condition={loginContext.loggedIn && loginContext.loginClicked}>
        <div className="grid">
          {item.map((element) => {
            return (
              <div>
                <Card className="item">
                  <FaHeart
                    className="heart"
                    style={{ color: iconColor }}
                    onClick={() => {
                      addFav(element);
                    }}
                  ></FaHeart>

                  <H5>{element.name}</H5>
                  <img src={element.imgUrl}></img>
                  {/* <p>{element.description}</p> */}
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
                        console.log(element.name);
                        itemContext.setting(element);
                        navigate("/updateItem");
                      }}
                    />
                  </Auth>

                  <Popup
                    className="view"
                    trigger={<button>view</button>}
                    position="right center"
                  >
                    <div id="itemPop">
                      <H5>{element.name}</H5>
                      <img src={element.imgUrl}></img>
                      <p>{element.description}</p>
                      <p> {element.price} JD</p>
                    </div>
                  </Popup>
                </Card>
              </div>
            );
          })}
        </div>
      </When>
    </>
  );
}
