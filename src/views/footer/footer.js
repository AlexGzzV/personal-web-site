import React from "react";
import "./footer.css";
import { Col, Container, Row } from "reactstrap";

const Footer = (props) => {

  return(
    <footer>
      <Container>
        <Row>
          <Col><h1>Hola mundo!</h1></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;