import React, { useState } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { CREATE_USER } from "./Mutations";
import { useMutation } from "@apollo/client";
import { GET_USER_LIST } from "./Queries";

function Register(){
    const[inputField,setInputField]=useState({
        Username:'',
        email:'',
        Password:''
        
    })
const [createPost,{error}]=useMutation(CREATE_USER)

const inputHandler=(event)=>{
    setInputField({
        ...inputField,[event.target.name]:event.target.value
    });
}

// const {data}=useQuery(GET_USER_LIST);
// // console.log(data);

    const register=()=>{
        console.log(inputField);
        createPost({
            variables:inputField
        })
    };
    return(
        <div className="App">
        <div className="registration">
        <h1>Registration</h1>
        <input type="text" placeholder="Username" name="Username" onChange={(e)=>inputHandler(e)} value={inputField.Username} />
        <input type="email" placeholder="Email" name="email" onChange={(e)=>inputHandler(e)} value={inputField.email}/>
            <input type="password" placeholder="Password" name="Password" onChange={(e)=>inputHandler(e)} value={inputField.Password} />
        <br/><br/><br/><br/><br/><br/><br/><button onClick={register}>Register</button> 
        </div>
        </div>
    )
}

export default Register;