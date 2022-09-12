import Axios from "axios";


export default function postAPI(item,token){
    
console.log({item});
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const bodyParameters = {
      item
    };
    
    Axios.post( 
        "https://samah-shopping-server.herokuapp.com/item",
      item,
      config
    ).then((data)=>{console.log({data});}).catch((e)=>{console.log(e);});

}