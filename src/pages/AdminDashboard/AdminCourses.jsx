import React from 'react'
import CourseTable from "../../components/Tabels/CourseTable/CourseTable"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import "../../assets/styles/AdminCourse.css"
import Sidebar from '../../components/SideBar/Sidebar';

function AdminCourses() {
  return (
    <div className='admincourses'>

      <Sidebar/>
      <Container  fluid className='AdminCourseContainer' >
      

        
        <Row xs={12} className='Row'>
            <Col xs={12} className="mb-5 mt-5"><h1>Course Lissting</h1></Col>
            <Col></Col>
        </Row>

        <Row className='Row' xs={12}>
          <CourseTable/>
        </Row>
      </Container>

      {/* <div className='AdminCourseContainer' style={{height:"100vh" ,marginLeft:"250px"}}>
        
      </div> */}
      

    </div>
  )
}

export default AdminCourses
