import Axios from "axios";

export default function updateAPI(item, token, oldItem,isPrice) {
  console.log({ item });
  if(isPrice){
    item.price=oldItem.price;
  }
  for (const key in item) {
    if (item[key] === "" 
    ) item[key] = oldItem[key];
   

  }
  console.log({ item });
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    item,
  };

  Axios.put(`https://samah-shopping-server.herokuapp.com/item/${oldItem.id}`, item, config)
    .then((data) => {
      console.log({ data });
    })
    .catch((e) => {
      console.log(e);
    });
}
