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
import "./cards.css";
import img from "../../img/Home.png";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import remove from "../../img/remove.png";
import ModalComp from "./ModalComp";
import Reports from "../Reports/Reports";
const Cards = () => {
  const [name, setName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [bigGoals, setBigGoals] = useState([]);
  const nav = useNavigate();
  const [loding, setLoding] = useState(true);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [bigGoalId, setBigGoalId] = useState();

  const now = 60;

  const [mygoal, setGoal] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (e, id) => {
    setGoal(e);
    setShow(true);

    setBigGoalId(id);
  };

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
  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/userGoals/${decodedData.id}`)

      .then((res) => {
        console.log(res.data);
        setBigGoals(res.data);
        setLoding(false);
      });
  }, []);

  if (loding) {
    return (
      <>
        <p>LODING</p>
      </>
    );
  }

  function getTask(goalId) {
    console.log(goalId);

    axios.get(`/task/editTask/${goalId}`).then((res) => {
      console.log(res);

      // console.log(bigGoal.id);
    });
  }

  function deleteGoal(id) {
    axios
      .delete(`/biggoal/deleteGoal/${decodedData.id}/${id}`)
      .then((res) => {
        console.log(res);

        setBigGoals(res.data.BigGoals);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  return (
    <div>
      <div id="container">
        {bigGoals.map((goal) => {
          return (
            <div>
              <div id="card">
                <div id="test">
                  <Button
                    variant="primary"
                    onClick={() => handleShow(goal, goal._id)}
                  >
                    Tasks
                  </Button>

                  <img
                    onClick={() => deleteGoal(goal._id)}
                    className="remvCard"
                    src="https://img.icons8.com/color/48/000000/delete-forever.png"
                  />

                  <div className="nameOfGoal">
                    <h3>{goal.name}</h3>
                  </div>
                  <div className="type">
                    <p>{goal.type}</p>
                  </div>
                  <div className="status">
                    <h4>{goal.status}</h4>
                  </div>
                  <div className="EndDate">
                    <p>{goal.endDate.split("T")[0]}</p>
                  </div>
                  <div>
                    <ProgressBar animated now={now} label={`${now}%`} />
                  </div>
                </div>
              </div>
            </div>

            // <p>{goal.name}</p>
          );
        })}


        <ModalComp
          show={show}
          handleClose={handleClose}
          remove={remove}
          setName={setName}
          setTaskStatus={setTaskStatus}
          goal={mygoal ? mygoal : ""}
          decodedData={decodedData}
          bigGoalId={bigGoalId}
        />
        {/* <Reports bigGoals={bigGoals} /> */}
      </div>
    </div>
  );
};

export default Cards;

/* 
    {/* <div className="card">
    
        <div className="content">
          <h3 className="nameOfGoal">Big Goal Name</h3>
          <h4 className="status">High</h4>
          <h4 className="status">In progress</h4>
          <h4 className="type">Project</h4>
          <p className="progressBar">Progress bar</p>
          
          <p className="date">EndDate</p>
        </div>
      </div> */
