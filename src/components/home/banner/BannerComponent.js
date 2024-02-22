import React from "react";
import { Container, Row, Col } from "reactstrap";
import './BannerComponent.css';

const Banner = (props) => {
   return(
    <section id="home">
      <Container>
        <Row>
          <Col data-aos="fade-up" className="col1" lg={6}>
            <h1>Las Mejores Soluciones Para Tu Negocio</h1>
            <h2>Diseños Web con Bootstrap y MUI</h2>
          </Col>
          <Col data-aos="fade-down" className="col2" lg={6}>
            <img className="animated" src="/images/hero-img.png"/>
          </Col>
        </Row>
      </Container>
    </section>
   )
}

export default Banner;