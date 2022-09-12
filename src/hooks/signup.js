
import axios from "axios";

export default function signup(username,password){
axios.post("https://samah-shopping-server.herokuapp.com/signup",{username,password}).
then((data)=>{
    console.log(data);
}).catch((e)=>{alert(" username is empty or already exists ")})
}