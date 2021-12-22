import react, { useState, useEffect } from "react";
import "./form.css";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function FormPage() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, SetStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [comment, setComment] = useState("");
  const [task, setTask] = useState([]);
  const nav = useNavigate();

  //   const []
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
  console.log(decodedData);

  function formPage(e) {
    const newForm = {
      name: name,
      type: type,
      status: status,
      endDate: endDate,
      comment: comment,
      task: task,
    };

    console.log(endDate);

    // axios.post(`/biggoal/postGoal`,newForm)
    // .then((res)=>{
    //     console.log(res);
    // })

    axios.post(`/biggoal/postGoal/${decodedData.id}`, newForm).then((res) => {
      console.log(res);
      nav("/");
    });


 
  
     axios.post(`/task/postTask/${decodedData.id}`)
    .then((res)=>{
      console.log(res);
      // console.log(bigGoal.id);
    })

  }

  return (
    <div className="main">
      <div></div>
      <div>
        <Form>
          <br />
          <Link to="/">
            <img
              src="https://img.icons8.com/dusk/128/000000/home.png"
              className="home2"
            />
          </Link>
          <br />
          <br />

          <Form.Label>Goal Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Big Goal"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label>Type:</Form.Label>
          <Form.Control
            type="text"
            placeholder="type"
            onChange={(e) => setType(e.target.value)}
          />
          <Form.Label>Status:</Form.Label>
          <Form.Control
            type="text"
            placeholder="status"
            onChange={(e) => setStatus(e.target.value)}
          />
          <Form.Label>Start Date:</Form.Label>
          <Form.Control
            type="date"
            placeholder="Start Date"
            onChange={(e) => SetStartDate(e.target.value)}
          />
          <Form.Label>End Date:</Form.Label>
          <Form.Control
            type="date"
            placeholder="End Date"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Form.Label>Add Comment:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add any Comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <Form.Label>Enter Yore Tasks:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tasks"
            onChange={(e) => setTask(e.target.value)}
          />
          {/* <button type="button" class="btn btn-warning" >Add Task</button> */}
        </Form>
        <br />
        <br />
        {/* <Link to='/'> */}
        <button
          type="button"
          class="btn btn-warning"
          onClick={(e) => formPage(e)}
        >
          Goal
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
export default FormPage;
