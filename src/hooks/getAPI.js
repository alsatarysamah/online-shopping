import Axios from "axios";

export default function getAPI(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  Axios.get("http://localhost:3800/item", config)
    .then((data) => {
    //   console.log(data.data);
      return data.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
