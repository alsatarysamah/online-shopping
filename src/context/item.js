import React, { useContext, useState, useEffect } from "react";
// import getAPI from "../hooks/getAPI";
import Axios from "axios";
import cookie from "react-cookies";
export const ItemContext = React.createContext();


export default function Item(props) {
  // const setting=useContext(settingContext);

  const [item, setItem] = useState();
  const [allItem,setAllItem]=useState(cookie.load("all") || {});
  
const settingUpdate=(updated)=>{
  setItem(updated)
  cookie.save("all", allItem);
}
const settingAllItem=(items)=>{
  setAllItem(items);
}
  const state = {
    item: item,
    setting: settingUpdate,
    settingAllItem:settingAllItem
  };

  return (
    <>
      <ItemContext.Provider value={state}>
        {props.children}
      </ItemContext.Provider>
    </>
  );
}
