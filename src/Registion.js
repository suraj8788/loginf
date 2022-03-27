import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
function Registion( ) {
    const[firstName, setfirstName]=useState("");
    const[lastName, setlastname]=useState("");
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("")
    const[Contact,setContact]=useState("");
    const[firstNameError,setfirstNameError]=useState("true");
    const[lastNameError,setlastNameError]=useState("true");
    const[EmailError,setEmailError]=useState("true");
    const[PasswordError,setPasswordError]=useState("true");
    const[NumberError,setNumberError]=useState("true");
    function Alert( ) {
        if (!firstName) {
            alert("frist name is required");
        }
        else if(!lastName){
            alert("last name is requried");
        }
        else if(!Email){
            alert("Email is required");
        }
        else if(!Contact){
            alert("number is required");
        }
    }
    function validation(str) {
        // let inputId2= document.getElementById(str).value;
        // if (str=="fname" && !inputId2) {
        //     alert("first name is missing");
        // }
        // else if (str=="lname" && !inputId2) {
        //     alert("last name is missing");
        // }
        // else if (str=="password" && !inputId2) {
        //     alert("password is missing");
        // }
        // else if (str=="email" && !inputId2) {
        //     alert("eamil is missing")
        // }
        // else if(str=="number1" && !inputId2){
        //     alert("number is missing");
        // }
        if (firstName && str=='fname') {
            setfirstNameError(true);
        } else if (!firstName && str=='fname'){
            // alert("has")
            setfirstNameError(false);
        }
        else if (lastName && str=='lname') {
            setlastNameError(true)
        } else if  (!lastName && str=='lname'){
            setlastNameError(false);
        }
        else if (Email && str=='email') {
            setEmailError(true)
        } else if(!Email && str=='email'){
            setEmailError(false)
        }
         else if (Contact && str=='number1') {
            setNumberError(true)
        } else if(!Contact && str=='number1'){
            setNumberError(false)
        }else if (Password && str=='password') {
            setPasswordError(true)
        } else if(!Password && str=='password'){
            setPasswordError(false)
        }

    }
    function Json() {
        let Fname=document.getElementById("fname").value;
        let Lname=document.getElementById("lname").value;
        let Email=document.getElementById("email").value;
        let Password=document.getElementById("password").value;
        let ContactNumber=document.getElementById("number1").value;
        let Objjson={
            "Frist name":Fname,
            "last name": Lname,
            "Email":Email,
            "Password":Password,
            "Contact Number":ContactNumber,
        };
        let localvalues=[];
        let dataArr = JSON.parse(localStorage.getItem('first'));
        if (dataArr) {
            dataArr.push(Objjson);
            localStorage.setItem('first', JSON.stringify(dataArr));
        } else {
            localvalues.push(Objjson);
            localStorage.setItem('first',JSON.stringify(localvalues));
        }
    }
 return (
     <div id='box1'>
         <div>
             <label>Frist Name:</label>
         </div>
         <div>
             <input type="text" id='fname' placeholder='Suraj' value={firstName} onChange={(e)=>setfirstName(e.target.value)} onBlur={()=>validation("fname")}></input>
         </div>
         <div style={{color: 'red'}}>
             {firstNameError? "":"*frist name is requried*"}
         </div>
         <br></br>
         <div>
             <label>Last Name:</label>
         </div>
         <div>
             <input type="text" id='lname' placeholder='sule' value={lastName} onChange={(e)=>setlastname(e.target.value)}onBlur={()=>validation("lname")}></input>
         </div>
         <div style={{color: 'red'}}>
             {lastNameError? "":"last name is requried*"}
         </div>
         <br></br>
         <div>
             <label>Email:</label>
         </div>
         <div>
             <input type="email" id='email' placeholder='surajsue007@gmail.com'value={Email} onChange={(e)=>setEmail(e.target.value)}onBlur={()=>validation("email")}></input>
         </div>
         <div style={{color: 'red'}}>
             {EmailError? " ":"Email is requried*"}
         </div>
         <br></br>
         <div>
             <label>Password:</label>
         </div>
         <div>
             <input type="password" id='password' placeholder='**********' onBlur={()=>validation("password")}value={Password} onChange={(e)=>setPassword(e.target.value)}></input>
         </div>
         <div style={{color: 'red'}}>
             {PasswordError?"":"Password is required*"}
         </div>
         <br></br>
         <div>
             <label>Contact Number:</label>
         </div>
         <div>
             <input type="number" id='number1' placeholder='11111111'value={Contact} onChange={(e)=>setContact(e.target.value)}onBlur={()=>validation("number1")}></input>
         </div>
         <div style={{color: 'red'}}>
             {NumberError?"":"number is required*"}
         </div>
         <br></br>
         <div>
             <input type="button" id='submit' value="submit" onClick={()=>{
                Json()
                Alert() 
             }} ></input>
         </div>
         <div>
             <p>
                 Already have an account ?
                 {/* <NavLink to={'/'}>Login</NavLink> */}
                 <a href='/'>login </a>
             </p>
         </div>
         <div>
            * Details of user  *
         </div>
         <br></br>
         <div>
             full Name:{firstName} {lastName}
         </div>
         <br></br>
         <div>
            Email:{Email}
         </div>
         <br></br>
         <div>
             Contact Number:{Contact}
         </div>
     </div>
 )
}
export default Registion;