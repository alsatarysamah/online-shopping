import Axios from "axios";

export default async function  updateFav(item, user) {
  user.favItems.push(item.id);
  console.log({ user });
  console.log("fav", typeof user.favItems);

  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

 await Axios.put(
    `https://samah-shopping-server.herokuapp.com/user/${user.id}`,
    { fav: user.favItems },
    config
  )
    .then((data) => {
      console.log({ data });
      return data.data.favItems;
    })
    .catch((e) => {
      console.log(e);
    });
}
