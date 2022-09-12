import Axios from "axios";

export default function postAPI(id, token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  Axios.delete(`https://samah-shopping-server.herokuapp.com/item/${id}`, config)
    .then((data) => {
      console.log({ data });
    })
    .catch((e) => {
      console.log(e);
    });
}
