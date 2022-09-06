import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../../assets/styles/CardListing.css";

import data from "../../components/CourseListing/data";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import SearchIcon from "../../assets/images/SearchIcon.png";
import courseIcon from "../../assets/images/courseIcon.png";
import { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";

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
      <Col>
      <Card key={index} style={{ width: "400px", height: "auto" }} className="Cards">
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
      </Col>
    );
  };

  return (
    <>
      <Container fluid className="card-Listing-Container">
        <Row style={{ height: "auto", textAlign: "center" }}>
          <h1 style={{ marginTop: "100px" }}>Courses:</h1>

          <div style={{ textAlign: "center" }}>
            <InputGroup
              className="mb-3"
              style={{ width: "350px", textAlign: "center" ,margin:"auto",marginTop:"50px"}}
            >
              <InputGroup.Text>
                <img src={courseIcon} alt="" style={{ height: "20px" }} />
              </InputGroup.Text>
              <Form.Control
                aria-label="Amount (to the nearest dollar)"
                value={Filter}
                onChange={searchText.bind(this)}
                
              />
              <InputGroup.Text>
                <img src={SearchIcon} alt="" style={{ height: "20px" }} />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Row>


        <Row xs={1} md={4} className="g-1" style={{marginTop:"50px"}}>
          
            
              {dataSearch.map(renderCard)}
           
          
        </Row>

        {/* <Row xs={1}>
          <Col md={2} lg={2} xl={2} xxl={2}></Col>

          <Col md={8} lg={8} xl={8} xxl={8}>
            <div className="">
              <CardGroup>{dataSearch.map(renderCard)}</CardGroup>
            </div>
          </Col>

          <Col md={2} lg={2} xl={2} xxl={2}></Col>
        </Row> */}
      </Container>
    </>
  );
}
