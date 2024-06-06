import React from "react";
import { Container, Row, Col } from "reactstrap";
import './BannerComponent.css';

const Banner = (props) => {
   return(
    <section id="home">
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center" lg={6}>
            <h1>AEGIS SYSTEMS</h1>
            <h2>Las Mejores Soluciones Para Tu Negocio</h2>
          </Col>
          <Col className="col2" lg={6}>
            <img className="animated" src="/images/hero-img.png"/>
          </Col>
        </Row>
      </Container>
    </section>
   )
}

export default Banner;