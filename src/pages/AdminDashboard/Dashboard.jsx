import React from 'react'
import Sidebar from  "../../components/SideBar/Sidebar"
import {BrowserRouter as Router , Route ,Routes} from  "react-router-dom";
import Home from "./AdminHome"
import AdminTeachers from "./AdminTeachers"
import AdminCourses from "./AdminCourses"

function Dashboard() {
  return (
    <div>
      {/* <Router> */}
        <Sidebar/>
        {/* <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/adminteachers' element={<AdminTeachers/>}/>
          <Route path='/admincourses'  element={<AdminCourses/>}/>
        </Routes> */}
      {/* </Router> */}
    </div>
  )
}

export default Dashboard
