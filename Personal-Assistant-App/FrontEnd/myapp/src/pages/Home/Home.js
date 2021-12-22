import react from "react";
import { useState, useEffect } from "react";
import Navbar from "../../Componants/navbar/Navbar";
import Sidebar from "../../Componants/sidebar/Slidebar";
import Cards from "../../Componants/Cards/Cards";
import FormPage from "../../Componants/form/FormPage";
import "./home.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {useNavigate  } from "react-router-dom";


function Home() {

  const nav = useNavigate()

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
  


  return (
    <>
    {(function(){
if(decodedData == undefined){
  nav('/registration')
  
}
else{
  {console.log("home comp")}
  return(

<div className="home">
        <div>
          <Sidebar />
        </div>
        <div>
          {/* <FormPage/> */}
          <Navbar />
          <Cards />
        </div>
      </div>
  )
}
    })()}
    
      
    </>
  );
}

export default Home;
