import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../../assets/styles/CardListing.css";
import "../../assets/styles/CardListing.css"
import data from "../../components/CourseListing/data";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import SearchIcon from "../../assets/images/SearchIcon.png";
import courseIcon from "../../assets/images/courseIcon.png";
import { useState } from "react";


export default function CourseListing() {

    const [Filter, SetFilter] = useState("");
    const searchText = (event) => {
      SetFilter(event.target.value);
    };
    console.warn(Filter);

    let dataSearch = data.cardData.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(Filter.toString().toLowerCase())
        );
      });



  const renderCard = (card, index) => {
    return (
      <Card
        key={index}
        style={{ width: "400px", height: "auto" }}
        className="Hijazibox"
      >
        <Card.Img variant="top" src={card.img} style={{ height: "300px" }} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>{card.desc}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Button variant="primary">Enroll</Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <Container fluid className="card-Listing-Container">
        <Row style={{ height: "200px", textAlign: "center" }}>
          <h1 style={{ marginTop: "100px" }}>Courses:</h1>

          <div style={{ textAlign: "center" }}>
            <InputGroup
              className="mb-3"
              style={{ width: "500px", textAlign: "center" }}
            >
              <InputGroup.Text>
                <img src={courseIcon} alt="" style={{ height: "20px" }} />
              </InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" 
              value={Filter}
              onChange={searchText.bind(this)}
              />
              <InputGroup.Text>
                <img src={SearchIcon} alt="" style={{ height: "20px" }} />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Row>

       

        <Row xs={1}>
          <Col lg xl xxl={2}></Col>
          <Col lg xl xxl={8}>
            <div className="Hijazigrid">{dataSearch.map(renderCard)}</div>
          </Col>
          <Col lg xl xxl={2}></Col>
        </Row>
      </Container>
    </>
  );
}
