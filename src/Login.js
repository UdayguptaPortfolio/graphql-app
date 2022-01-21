import React, { useState } from "react";
import "./App.css";
import {CHECK_USER} from './Mutations';
import { useMutation } from "@apollo/client";

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
 const [login,{error}]=useMutation(CHECK_USER,
    {
        onCompleted: (data) => {
          console.log(data) // the response
        },
        onError: (error) => {
          console.log(error); // the error if that is the case
        },
      }
    );  
const loginUser=()=>{
    login({
        variables:inputField
    })
};
    return (
        <div className='App'>
            <div className="Login">
                <h1>Login</h1>
                <input type="text" placeholder="Enter Your Username...." name="Username" onChange={(e)=>inputHandler(e)} value={inputField.Username} />
        <input type="email" placeholder="Enter Your Email...." name="email" onChange={(e)=>inputHandler(e)} value={inputField.email}/>
            <input type="password" placeholder="Enter Your Password...." name="Password" onChange={(e)=>inputHandler(e)} value={inputField.Password} />
        <br/><br/><br/><br/><br/><br/><br/><button onClick={loginUser}>Login</button> 
            </div>
            </div>
    )
}

export default Signin;