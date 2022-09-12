import Axios from "axios";

export default function getAPI(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  Axios.get("https://samah-shopping-server.herokuapp.com/item", config)
    .then((data) => {
    //   console.log(data.data);
      return data.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
