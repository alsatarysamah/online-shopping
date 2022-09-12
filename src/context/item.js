import React, { useContext, useState, useEffect } from "react";
// import getAPI from "../hooks/getAPI";
import Axios from "axios";
import cookie from "react-cookies";
export const ItemContext = React.createContext();

export default function Item(props) {
  // const setting=useContext(settingContext);

  const [item, setItem] = useState([]);
  

  const state = {
    item: item,
    setItem: setItem,
  };
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    };

    Axios.get("http://localhost:3800/item", config)
      .then((data) => {
        setItem(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [item]);
  return (
    <>
      <ItemContext.Provider value={state}>
        {props.children}
      </ItemContext.Provider>
    </>
  );
}
