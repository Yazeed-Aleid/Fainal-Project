import { Button } from "react-bootstrap";
import "./cards.css";
import img from "../../img/Home.png";
const Cards = () => {
  return (
    <div>
      <div id="container">
        <div id="card">
          <div id="test">
            <div className="nameOfGoal">
              <h3>Big Goal Name</h3>
            </div>
            <div className="status">
              <p>In progress</p>
            </div>
            <div className="type">
              <h4>Project</h4>
            </div>
            <div className="progressBar">
              <p>Progress bar</p>
            </div>
            <div className="date">
              <p>End Date</p>
            </div>
          </div>
        </div>

        <div id="card">
          <div id="test">
            <div className="nameOfGoal">
              <h3>Big Goal KJKJL</h3>
            </div>
            <div className="status">
              <p>In progress</p>
            </div>
            <div className="type">
              <h4>Project</h4>
            </div>
            <div className="progressBar">
              <p>Progress bar</p>
            </div>
            <div className="date">
              <p>End Date</p>
            </div>
          </div>
        </div>

        <div id="card">
          <div id="test">
            <div className="nameOfGoal">
              <h3>Big Goal KJKJL</h3>
            </div>
            <div className="status">
              <p>In progress</p>
            </div>
            <div className="type">
              <h4>Project</h4>
            </div>
            <div className="progressBar">
              <p>Progress bar</p>
            </div>
            <div className="date">
              <p>End Date</p>
            </div>
          </div>
        </div>

        <div id="card1">
          <div id="test">
            <div className="nameOfGoal">
              <h3>Big Goal Name</h3>
            </div>
            <div className="status">
              <p>In progress</p>
            </div>
            
            {/* priority */}
            <div className="type">
              <h4>Project</h4>
            </div>
            <div className="progressBar">
              <p>Progress bar</p>
            </div>
            <div className="date">
              <p>End Date</p>
            </div>
          </div>
        </div>
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
