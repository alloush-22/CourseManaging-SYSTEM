import "bootstrap/dist/css/bootstrap.min.css";



import AdminHome from "./pages/AdminDashboard/AdminHome";
import Sidebar from "./components/SideBar/Sidebar";
import Home from "./pages/AdminDashboard/AdminHome"
import AdminTeachers from "./pages/AdminDashboard/AdminTeachers"
import AdminCourses from "./pages/AdminDashboard/AdminCourses"
import Dashboard from  "./pages/AdminDashboard/Dashboard"
 import CourseListingPage from "./pages/CourseListing/CourseListingPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentProfile from "./pages/StudentProfile/StudentProfilePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TeacherDashboard from "./pages/TeacherDashboard/Dashboard"
import TeacherCourses from "./pages/TeacherDashboard/TeacherCourses"

import AdminDashboard from "./pages/AdminDashboard/Dashboard"
import Auth from "./components/login/Auth"

function App() {
  return (

    <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route  path="/auth" element={<Auth/>} /> 
      <Route path="/admin" element={<Dashboard/>} />
      <Route path="/TeacherDashboard/TeacherCourses" element={<TeacherCourses/>} />
      <Route path="/AdminDashboard/Dashboard" element={<AdminDashboard/>} />
      <Route path="/AdminDashboard/AdminHome" element={<Home/>} />
      <Route path="/AdminDashboard/AdminTeachers" element={<AdminTeachers/>} />
      <Route path="/AdminCourses" element={<AdminCourses/>} />
      <Route path="/CourseListing" element={<CourseListingPage/>} />
      <Route path="/LandingPage" element={<CourseListingPage/>} />
      <Route path="/StudentProfile" element={<StudentProfile/>} />
    </Routes>
  </Router>
  );
}

export default App;
