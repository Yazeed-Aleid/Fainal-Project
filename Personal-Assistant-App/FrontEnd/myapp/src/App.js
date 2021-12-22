import Login from "./pages/login/Login";
import Registration from "./pages/register/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPage from "./Componants/form/FormPage";
import Admin from "./pages/Admin/Admin";
import TaskForm from "./Componants/taskForm/TaskForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/TaskForm" element={<TaskForm />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
