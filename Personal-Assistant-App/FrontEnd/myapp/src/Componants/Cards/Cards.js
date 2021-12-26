import { Button, Modal, Form, Table, ToggleButton } from "react-bootstrap";
import "./cards.css";
import img from "../../img/Home.png";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  function deleteCard(e) {
    axios.delete(`/deleteGoal/${decodedData.id}`).then((res) => {
      console.log(res);
    });
  }

  function addtask(id) {
    const newForm = {
      name: name,
      status: taskStatus,
      BigGoalID: id,
    };

    axios.post(`/task/postTask/${decodedData.id}`, newForm).then((res) => {
      console.log(res.data.BigGoals);

      setBigGoals(res.data.BigGoals);
      // console.log(res.data.tasks);
      nav("/");
      // console.log(bigGoal.id);
    });
  }

  function getTask(goalId) {
    console.log(goalId);

    axios.get(`/task/editTask/${goalId}`).then((res) => {
      console.log(res);

      // console.log(bigGoal.id);
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
                  <Button variant="primary" onClick={handleShow}>
                    Tasks
                  </Button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Tasks List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <br />
                        {/* ----------------------------------------------------------- */}
                        {/*                        
                        <div className="Tasks">
                          {goal.tasks.map((task) => {
                            return (
                              <>

                                <p className="pTask">Task Name: {task.name}</p>
                                <p className="pTask">Task Status: {task.status}</p>

                              </>
                            );
                          })}
                        </div> */}

                        <Table striped bordered hover size="sm">
                          <thead>
                            <tr>
                              <th>Task Name</th>
                              <th>Task Status</th>
                              <th>Done</th>
                              <th>Delete</th>
                            </tr>
                          </thead>

                          <tbody>
                            {goal.tasks.map((task) => {
                              return (
                                <>
                                  <tr>
                                    <td className="pTask"> {task.name}</td>
                                    <td className="pTask">{task.status}</td>
                                    <td>
                                      {" "}
                                      <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                        checked={checked}
                                        value="1"
                                        onChange={(e) =>
                                          setChecked(e.currentTarget.checked)
                                        }
                                      >
                                        Checked
                                      </ToggleButton>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </Table>

                        {/* ------------------------------------------------------------- */}
                        <br />
                        <br />

                        <Form.Label>Task Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Task"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Label>Status:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Status"
                          onChange={(e) => setTaskStatus(e.target.value)}
                        />
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => addtask(goal._id)}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>

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
                  {/* <div className="Tasks">
                    {goal.tasks.map((task) => {
                      return (
                        <>
                          <p className="pTask">Task Name: {task.name}</p>
                          <p className="pTask">Task Status: {task.status}</p>
                        </>
                      );
                    })}
                  </div> */}
                </div>
              </div>
            </div>

            // <p>{goal.name}</p>
          );
        })}
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
