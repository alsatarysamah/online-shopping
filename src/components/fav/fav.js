import "./fav.css";
import { ItemContext } from "../../context/item";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/login";

export default function Fav(props) {
  const loginContext = useContext(LoginContext);
  const itemContext = useContext(ItemContext);
  const [favs, setFavs] = useState([]);
  console.log("all ",itemContext.allItems);
  console.log("fav==> ", loginContext.user);

  return (
    <>
      {loginContext.user.favItems?.map((element) => (
        <p>{element}</p>
      ))}
    </>
  );
}
