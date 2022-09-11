// import React, { useContext, useState, useEffect } from "react";
// // import getAPI from "../hooks/getAPI";
// export const settingContext = React.createContext();

// export default function item(props) {
//   // const setting=useContext(settingContext);

//   const [item, setItem] = useState([]);

//   const state = {
//    item:item,setItem:setItem
//   };
//   useEffect(() => {
//     const arr = getData("input");
//     console.log({ arr });
//     if (arr) {
//       setCount(arr.count);
//       setShowCompleted(arr.show);
//     }
//   }, [showCompleted, count]);
//   return (
//     <>
//       <settingContext.Provider value={state}>
//         {props.children}
//       </settingContext.Provider>
//     </>
//   );
// }
