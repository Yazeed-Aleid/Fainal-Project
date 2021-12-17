import React from "react";
import './navbar.css'
import img from '../../img/sign-in-alt-solid.svg'

function Navbar() {
  return (

      <div className="navbar">
        <div className="left">

          <img src="https://img.icons8.com/dusk/128/000000/home.png" className="home2"/>
        </div>
        <div className="right">
          <span>Yazeed</span>
          <span>Sign Up/login</span>
          {/* <span><img src={img} /></span> */}
          {/* <span><img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-sign-up-call-to-action-bearicons-flat-bearicons-1.png"/></span> */}
          <img src="https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
      </div>
 
    
  );
}
export default Navbar;
