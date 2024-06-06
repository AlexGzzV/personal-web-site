import React from "react";
import './AboutComponent.css';
import { Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const About = (props) => {
  return(
    <section id="about" className="about section-bg py-lg-0 mt-3 mt-lg-5">
      <Container className="px-lg-0" fluid>
        <Row className="content m-0 m-lg-5 d-flex">
          <Col className="mx-auto py-0 py-lg-5 mt-5 mt-lg-0 order-1 order-lg-0" lg={6}>
            <div className="section-title">
              <h2>¿QUIÉNES SOMOS?</h2>
            </div>
            <p>
              Somos un grupo de jóvenes apasionados por la tecnología, unidos por un sueño común: transformar ideas en experiencias extraordinarias. 
            </p>
            <p>En AEGIS SYSTEMS, nos especializamos en el desarrollo de software innovadores y personalizados, combinando creatividad y experiencia técnica para llevar tu visión al mundo en línea.</p>
            <p>
              Nosotros no solo creamos software, sino que también construimos relaciones. Escuchamos atentamente tus necesidades, entendemos tus objetivos y trabajamos codo a codo contigo para asegurar que cada detalle refleje tu esencia y valores. 
              Nuestro compromiso es ofrecerte soluciones digitales que no solo cumplan, sino que superen tus expectativas.
            </p>
            <p>
              En AEGIS SYSTEMS, la innovación y la calidad son nuestro sello distintivo. Estamos aquí para ayudarte a destacar en el mundo digital, 
              ofreciéndote un servicio personalizado y una experiencia colaborativa que hará que tu proyecto sea tan único como tú.
            </p>
          </Col>
          <Col className="mx-auto order-0 order-lg-1" lg={6}>
            <img src="/images/about-us.jpg" width="100%"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;