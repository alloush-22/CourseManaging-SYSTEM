import React from "react";
import CourseTable from "../../components/Tabels/CourseTable/CourseTable";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/styles/AdminCourse.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function TeacherCourses() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="teachercourses">
      <Container fluid>
        <Row xs={12} className="Row" >
          <Col xs={12} className="mb-5 mt-5">
            <h1>Add Course</h1>
            <>
              <Button
                variant="primary"
                onClick={handleShow}
                style={{ marginTop: "20px" }}
              >
                Add New Course
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Adding New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="Topic">
                      <Form.Label>Topic</Form.Label>
                      <Form.Control type="text" placeholder="Topic" autoFocus />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Tittle">
                      <Form.Label>Tittle</Form.Label>
                      <Form.Control type="text" placeholder="Tittle" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" placeholder="Description" />
                    </Form.Group>

                    <Form.Group controlId="Course Image" className="mb-3">
                      <Form.Label>Course Image</Form.Label>
                      <Form.Control type="text" placeholder="imageUrl" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Duration">
                      <Form.Label>Duration</Form.Label>
                      <Form.Control type="text" placeholder="Duration" />
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

        <Row xs={12} className="Row">
          <Col xs={12} className="mb-5 mt-5">
            <h1>Course Lissting</h1>
          </Col>
          <Col></Col>
        </Row>

        <Row className="Row" xs={12}>
          <CourseTable />
        </Row>
      </Container>
    </div>
  );
}

export default TeacherCourses;
