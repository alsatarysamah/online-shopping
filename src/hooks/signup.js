
import axios from "axios";

export default function signup(username,password){
axios.post("http://localhost:3800/signup",{username,password}).
then((data)=>{
    console.log(data);
}).catch((e)=>{console.log(e);})
}