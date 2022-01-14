import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./Reports.css";

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
  const [show, setShow] = useState(false);
  const [rgoals, setRgoals] = useState([]);

  let decodedData;
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    decodedData = jwt_decode(storedToken, { payload: true });
    // console.log(decodedData);
    let expirationDate = decodedData.ex;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.removeItem("token");
    }
  }

  console.log(decodedData.id);

  useEffect(() => {
    axios.get(`user/userGoals/${decodedData.id}`).then((res) => {
      console.log(res.data);
      setRgoals(res.data);
    });
  }, []);

  console.log(rgoals);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Goal name</th>
            <th>Type</th>
            <th>Status</th>
            <th>EndDate</th>
            <th>Comment</th>
          </tr>
        </thead>

        <tbody>
          {rgoals.map((goal) => {
            return (
              <tr>
                <td>{goal.name}</td>
                <td>{goal.type}</td>
                <td>{goal.status}</td>
                <td>{goal.endDate.split("T")[0]}</td>
                <td>{goal.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Reports;
