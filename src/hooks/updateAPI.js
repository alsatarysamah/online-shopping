import Axios from "axios";


export default function updateAPI(item,token,id){
    
console.log({item});
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const bodyParameters = {
      item
    };
    
    Axios.put( 
        `http://localhost:3800/item${id}`,
      item,
      config
    ).then((data)=>{console.log({data});}).catch((e)=>{console.log(e);});

}