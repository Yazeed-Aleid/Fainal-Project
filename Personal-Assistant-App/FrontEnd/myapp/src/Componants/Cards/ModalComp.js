import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
import axios from "axios";
export default function ModalComp({
  show = false,
  handleClose,
  remove,
  goal,
  decodedData,
  bigGoalId,
}) {
  const [mygoal, setGoal] = useState({
    tasks: [{ name: "", status: "", id: "" }],
  });

  useEffect(() => {
    if (goal != "") setGoal(goal);
    console.log("mygoaljsjjsjsws", mygoal);
  }, [goal]);

  const [name, setName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [bigGoal, setBigGoal] = [];
  // const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  /* Delete */

  function deleteCard(id) {
    axios
      .delete(`/task/deleteTask/${decodedData.id}/${bigGoalId}/${id}`)
      .then((res) => {
        console.log(res.data);
        // setLoading(true);
        let myid = res.data.BigGoals.filter((e) => {
          // console.log(myid);

          return e._id == bigGoalId;
        });
        setGoal(myid[0]);
        // setGoal(myNewList[0]);
      });
  }

  /* Add */
  function addtask(id) {
    const newForm = {
      name: name,
      status: taskStatus,
      BigGoalID: id,
    };

    axios.post(`/task/postTask/${decodedData.id}`, newForm).then((res) => {
      let myid = res.data.BigGoals.filter((e) => {
        return e._id == bigGoalId;
      });
      // console.log("this is my id ", myid);
      setGoal(myid[0]);
    });
  }

  /* Edit */

  /*Save */

  function saveTask(id) {
    const newForm = {
      status: taskStatus,
      BigGoalID: id,
    };
    console.log(newForm);
    try {
      axios
        .put(`/task/editTask/${decodedData.id}/${bigGoalId}/${id}`, newForm)
        .then((res) => {
          let myid = res.data.BigGoals.filter((e) => {
            return e._id == bigGoalId;
          });
          setGoal(myid[0]);

          console.log("this is my id ", res);
        });
    } catch (err) {
      console.log("you");
    }
  }

  console.log(mygoal);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Tasks List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <br />

          <Table striped bordered hover size="sm">
            <thead>
              <tr className="header">
                {/* <th>Done</th> */}
                <th>Task Name</th>
                <th>Task Status</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              {mygoal.tasks.map((task) => {
                // Why is not working ????
                return (
                  <>
                    <tr>
                      <td className="pTask"> {task.name}</td>

                      <td className="pTask">
                        {" "}
                        <Form.Select
                          onChange={(e) => setTaskStatus(e.target.value)}
                        >
                          <option>{task.status}</option>
                          <option value="To Do">To Do</option>
                          <option value="In progress">In progress</option>
                          <option value="Pending">Pending </option>
                          <option value="Canceled">Canceled</option>
                          <option value="Done">Done</option>
                        </Form.Select>
                      </td>

                      <td className="delBtn">
                        <img
                          src={remove}
                          className="rem"
                          onClick={() => deleteCard(task._id)}
                        />
                      </td>
                      <td>
                        <Button
                          onClick={() => {
                            saveTask(task._id);
                          }}
                        >
                          Save
                        </Button>
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
          <Form.Select onChange={(e) => setTaskStatus(e.target.value)}>
            <option>Select task status</option>
            <option value="To Do">To Do</option>
            <option value="In progress">In progress</option>
            <option value="Pending">Pending </option>
            <option value="Canceled">Canceled</option>
            <option value="Done">Done</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => addtask(goal._id)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

