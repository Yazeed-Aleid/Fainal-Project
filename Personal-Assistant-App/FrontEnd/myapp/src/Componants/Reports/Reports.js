import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Modal,
  Form,
  Table,
  ToggleButton,
  ProgressBar,
  Dropdown,
  ButtonGroup,
  option,
} from "react-bootstrap";

function Reports() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, SetStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [comment, setComment] = useState("");
  const [task, setTask] = useState([]);
  const nav = useNavigate();


  
  return(
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
        
          {/* <button type="button" class="btn btn-warning" >Add Task</button> */}
        </Form>
        <br />
        <br />
        {/* <Link to='/'> */}
   
        {/* </Link> */}
      </div>
    </div>
  );
}  



export default Reports;
