import React from "react";
import './navbar.css'
import img from '../../img/sign-in-alt-solid.svg'
import {Link,useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


function Navbar() {
  let decodedData;
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    decodedData = jwt_decode(storedToken, { payload: true });
    // console.log(decodedData);
    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.removeItem("token");
    }
  }

  const nav = useNavigate()


  function logOut(){

    localStorage.clear();
    nav('/login')

  }
  
  return (

      <div className="navbar">
        <div className="left">

          <img src="https://img.icons8.com/dusk/128/000000/home.png" className="home2"/>
        </div>
        <div className="right">
          <span><b>Welcome</b></span>
         
          
            <span>{decodedData.username}</span>
            <span onClick={()=>logOut()}>LogOut</span>
          {/* <span><img src={img} /></span> */}
          {/* <span><img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-sign-up-call-to-action-bearicons-flat-bearicons-1.png"/></span> */}
          <img src="https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
      </div>
 
    
  );
}
export default Navbar;
