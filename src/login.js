import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Registion from "./Registion"
import { NavLink } from "react-router-dom";
import "./login.css"
function Login( ) {
      const[Email, setEmail]=useState("");
      const[Password, setPassword]=useState("");
      const[EmailError,setEmailError]=useState("false");
      const[PasswordError,setPasswordError]=useState("false");
    function validation(str) {
         if (Email && str=='email') {
            setEmailError(true);
        } else if(!Email && str=='email'){
            setEmailError(false);
        }
        else if(Password && str=='password'){
            setPasswordError(true);
        }
        else if(!Password && str=='password'){
            setPasswordError(false);
        }
        // if (!Email && str === 'email') {
        //     alert('Email is missing');
        // } 
        // if (!Password && str === 'password') {
        //     alert('Password is missing');
        // }
    }
    function validation1() {
        let auth = JSON.parse(localStorage.getItem("first"));
        let isExit = false
        for (let i = 0; i < auth.length; i++) {
            if (Email == auth[i].Email && Password == auth[i].Password) {
                isExit=true
                break
        } else {
        isExit = false
        } 
        }
        console.log(isExit);
        if (isExit == true) {
            alert("login succesfully");
        } else {
            alert("login unsuccesfully");
        }
    }
    return(
        <div id='box'>
            <div>
            <label>Email:</label>
            </div>
            <div>
            <input type="email" id="email" onBlur={()=>validation("email")} value={Email}  onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div style={{color: 'red'}}>
               {EmailError? " ":"Email is requried*"}
            </div>
            <div>
                <label>password:</label>
            </div>
            <div>
                <input type="password" id="password" onBlur={()=>validation("password")} value={Password}  onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div style={{color: 'red'}}>
               {PasswordError? " ":"Password is requried*"}
            </div>
            <br></br>
            <div>
            <input type="button" value="submit" onClick={()=>validation1()}></input>
            </div>
            <div>
                <p>
                    Don't have an account?
                    {/* <NavLink to="/register">Sign Up</NavLink> */}
                     <a href='/register'>Sign up</a>
                </p>
            </div>
        </div>
    )
}
export default Login;