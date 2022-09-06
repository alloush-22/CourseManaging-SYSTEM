import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import Navbar from "../../components/Navbar/Navbar";
// import { Footer } from "../../components/Footer/Footer";
import Button from "react-bootstrap/Button";

export default function StudentProfile() {
  return (
    <>
      <Navbar />

      <div className="gradient-custom-2" style={{ backgroundColor: "#CFD8DC" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5">Andy Horwitz</MDBTypography>
                    <MDBCardText>New York</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <Button
                      variant="outline-secondary"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        color: "black",
                      }}
                    >
                      Edit Profile Image
                    </Button>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Full Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            Johnatan Smith
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />

                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>User Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">Jony</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            example@example.com
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            (097) 234-5678
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Enrooled Courses
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </MDBCardText>
                  </div>
                  <MDBRow>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                      <h2>Course Tittle</h2>
                      <Button
                      variant="outline-secondary"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        color: "black",
                      }}
                    >
                      Delet course
                    </Button>
                    </MDBCol>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                      <h2>Course Tittle</h2>
                      <Button
                      variant="outline-secondary"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        color: "black",
                      }}
                    >
                      Delet course
                    </Button>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="g-2">
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                      <h2>Course Tittle</h2>
                      <Button
                      variant="outline-secondary"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        color: "black",
                      }}
                    >
                      Delet course
                    </Button>
                    </MDBCol>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                      <h2>Course Tittle</h2>
                      <Button
                      variant="outline-secondary"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        color: "black",
                      }}
                    >
                      Delet course
                    </Button>

                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      {/* <Footer /> */}
    </>
  );
}
