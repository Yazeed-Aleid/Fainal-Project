import "./sidebar.css";
import img from "../../img/Home.png";
import img2 from "../../img/job.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FormPage from "../../Componants/form/FormPage";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <img src={img} alt="" className="home1" />

        <br />
        <br />
        <br />
      
        <Link to='/form'>
          <img
            src="https://img.icons8.com/color/100/000000/add--v1.png"
            className="add"
            onClick={() => console.log("hi")}
          />
        </Link>

        <br />
        <br />
        <br />
        <br />
        <br />
        <h5>
          <img
            src="https://img.icons8.com/color/96/000000/dashboard-layout.png"
            className="dash"
          />
          Dashboard
        </h5>
        <br />
        <br />
        <br />
        <h5>
          <img
            src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-setting-notifications-justicon-lineal-justicon.png"
            className="setting"
          />
          Setting{" "}
        </h5>
        <br />
        <br />
        <br />
        {/* <Link to='/Reports'> */}
        <h5>
        <Link to='/Reports' >
          <img
            src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-report-project-management-itim2101-lineal-color-itim2101.png"
            className="repo"
          />
          Reports
          </Link>

        </h5>
        {/* </Link> */}


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <img src={img2}/> */}
      </div>

      <br />
      <br />
    </>
  );
};

export default Sidebar;
