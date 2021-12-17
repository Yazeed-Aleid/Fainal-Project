import react from "react";
import { useState, useEffect } from "react";
import Navbar from "../../Componants/navbar/Navbar";
import Sidebar from "../../Componants/sidebar/Slidebar";
import Cards from "../../Componants/Cards/Cards";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div>
        <Sidebar />
        </div>
        <div>
          <Navbar />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Home;
