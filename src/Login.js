import React, { useState } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./Queries";

function Signin(){
    const[inputField,setInputField]=useState({
        Username:'',
        email:'',
        Password:''
        
    })
    const inputHandler=(event)=>{
        setInputField({
            ...inputField,[event.target.name]:event.target.value
        });
    }
const {data}=useQuery(GET_USER_LIST);
console.log(data);  

const login=()=>{
if(data===inputField){
    console.log("Logged In Successfully")
}else{
    console.log("Login Credentials Wrong")
}
};
    return (
        <div className='App'>
            <div className="Login">
                <h1>Login</h1>
                <input type="text" placeholder="Enter Your Username...." name="Username" onChange={(e)=>inputHandler(e)} value={inputField.Username} />
        <input type="email" placeholder="Enter Your Email...." name="email" onChange={(e)=>inputHandler(e)} value={inputField.email}/>
            <input type="password" placeholder="Enter Your Password...." name="Password" onChange={(e)=>inputHandler(e)} value={inputField.Password} />
        <br/><br/><br/><br/><br/><br/><br/><button onClick={login}>Login</button> 
            </div>
            </div>
    )
}

export default Signin;