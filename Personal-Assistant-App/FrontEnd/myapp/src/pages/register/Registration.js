import react, { useEffect, useState } from "react";
import "./register.css";
import img from "../../img/Home.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Registration() {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const nav = useNavigate()
  

 

  function register() {
    // e.preventdefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };
    // console.log(newUser)
    axios.post("/registration/register", newUser).then((res) => {
      console.log(res);
     nav("/Login")
  
    });



  }




  return (
    <div className="register">
      <div className="formContainer">
        <div className="top"></div>
        <div className="bottom"></div>
        <form>
          <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            type="text"
            placeholder="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </form>
        <button className="btn" onClick={register}>
          Submit
        </button>
      </div>
      <div className="imgSection">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Registration;
