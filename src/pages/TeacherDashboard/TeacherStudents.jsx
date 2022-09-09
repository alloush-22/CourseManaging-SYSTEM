import React from "react";
import CourseTable from "../../components/Tabels/AdminTable/AdminTable";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import "../../assets/styles/AdminTeacher.css";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function TeacherStudents() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="AdminTeacherContainer">
      <Row className="Row">
        <Col xs={12} className="mb-5 mt-5">
          <h1>Add Student</h1>
          <>
            <Button variant="primary" onClick={handleShow} style={{marginTop:"20px"}}>
              Add New Student
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Adding New Student</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="FirstName"
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="LastName" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="UserName">
                    <Form.Label>user Name</Form.Label>
                    <Form.Control type="text" placeholder="UserName" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="PhoneNumber">
                    <Form.Label>Phone Name</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Submmit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </Col>
        <Col></Col>
      </Row>

      <Row className="Row">
        <Col xs={12} className="mb-5 mt-5">
          <h1>Student Lissting</h1>
        </Col>
        <Col></Col>
      </Row>

      <Row className="Row">
        <CourseTable />
      </Row>
    </Container>
  );
}

export default TeacherStudents;
