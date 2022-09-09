import React from 'react'
import Sidebar from  "../../components/TeacherSideBar/Sidebar"
import {BrowserRouter as Router , Route ,Routes} from  "react-router-dom";
import Home from "./TeacherHome"
import TeacherCourses from "./TeacherCourses"
import TeacherStudents from "./TeacherStudents"

function Dashboard() {
  return (
    <div>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/teachercourses' element={<TeacherCourses/>}/>
          <Route path='/teacherstudents'  element={<TeacherStudents/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Dashboard
