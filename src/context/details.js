import React, {  useState } from "react";

export const DetailsContext = React.createContext();

export default function I(props) {
  // const setting=useContext(settingContext);

  const [item, setItem] = useState();
  
  const settingItem=(item)=>{
    setItem(item);
     }
  const state = {
    item: item,
    settingItem: settingItem,

  };

  return (
    <>
      <I.Provider value={state}>
        {props.children}
      </I.Provider>
    </>
  );
}
