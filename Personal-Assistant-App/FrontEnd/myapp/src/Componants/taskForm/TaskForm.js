import react, { useState, useEffect } from "react";
import "./taskForm.css";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import { Button } from 'react-bootstrap';

function TaskForm() {
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

          <Form.Label>Task Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Task"
            // onChange={(e) => setName(e.target.value)}
          />

          <Form.Label>Status:</Form.Label>
          <Form.Control
            type="text"
            placeholder="status"
            // onChange={(e) => setStatus(e.target.value)}
          />
          {/* <button type="button" class="btn btn-warning" >Add Task</button> */}
        </Form>
        <br />
        <br />
        {/* <Link to='/'> */}
        {/* <button
          type="button"
          class="btn btn-warning"
          onClick={(e) => addtask(e)}
        >
          Add Task
        </button> */}
        {/* </Link> */}
      </div>
    </div>
  );
}
export default TaskForm;
