import react from 'react'
import './login.css'
import img from '../../img/Home.png'
import {useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import jwt from "jwt-decode";



function Login() {

    
    const [email, setEmail] = useState("");
   
    const [password, setPassword] = useState("");


    const nav = useNavigate()
    
    function LogInUser(){

    const logIN=({
        email:email,
        password: password

    })

    axios.post("http://localhost:3001/registration/login",logIN)
    .then((res)=>{
        console.log(res);
        if (res.data) {
            const token = res.data.token;
            const authorSign = jwt(token); // decode your token here
            localStorage.setItem("token", token);
             nav("/")
            // navigate("/");
          }
        
    })
    
    

}


    return (
        <div className="login">
            <div className="formContainer">
                <div className="topL"></div>
                <div className="bottom"></div>
                <form>
                    <label>Email</label><br />
                    <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br />
                    <label>Password</label><br />
                    <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} /><br />
                    <span>Registration page <Link to="/Registration">Signup</Link></span>
                </form>
                <button className='btn' onClick={()=>LogInUser()}>Log In</button>
            </div>

            <div id='imgSection'>
                <img src={img} alt='' />
            </div>
        </div>
    );
}

export default Login;