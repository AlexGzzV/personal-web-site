import React from "react";
import './AboutComponent.css';
import { Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const About = (props) => {
  return(
    <section id="about" className="about">
      <Container>
        <div data-aos="fade-up" className="section-title">
          <h2>SOBRE NOSOTROS</h2>
        </div>
        <Row className="content">
          <Col data-aos="fade-right" lg={4}>
            <p>
              En Aegis Systems (Aegis: escudo mítico de Zeus y Atenea, simbolizando protección y poder), somos un equipo de desarrolladores y diseñadores expertos en el desarrollo de aplicaciones Web,
              trabajamos para brindar el mejor servicio para tu negocio y mejorar la exposición digital de tu empresa.
            </p>
          </Col>
          <Col data-aos="fade-right" lg={4}>
            <div className="c-center">
              <p>¿Por qué nosotros?</p>
              <ul>
                <li><Icon color="#47b2e4" icon="ri-check-double-line" /> Servicios de confianza</li>
                <li><Icon color="#47b2e4" icon="ri-check-double-line" /> Trato profesional</li>
                <li><Icon color="#47b2e4" icon="ri-check-double-line" /> Precios accesibles</li>
              </ul>
            </div>
          </Col>
          <Col data-aos="fade-left" lg={4}>
            <p>
              Utilizamos las mejores herramientas en el mercado para satisfacer las necesidades de nuestros clientes,
              te aseguramos calidad y estabilidad en cada uno de nuestros servicios que tenemos para ti.
            </p>
            {/* <a href="#" class="btn-learn-more">Saber más</a> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;