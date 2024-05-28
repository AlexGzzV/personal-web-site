import React from "react";
import './AboutComponent.css';
import { Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const About = (props) => {
  return(
    <section id="about" className="about">
      <Container>
        <div data-aos="fade-up" className="section-title">
          <h2>QUIÉNES SOMOS</h2>
        </div>
        <Row className="content">
          <Col className="mx-auto" data-aos="fade-right" lg={6}>
            <p>
              Somos un grupo de jóvenes apasionados por la tecnología y el diseño, unidos por un sueño común: transformar ideas en experiencias digitales extraordinarias. 
              En AEGIS SYSTEMS, nos especializamos en el desarrollo de páginas web innovadoras y personalizadas, combinando creatividad y experiencia técnica para llevar tu visión al mundo en línea.
            </p>
            <p>
              Cada miembro de nuestro equipo aporta una perspectiva única y especializada. Desde diseñadores gráficos hasta desarrolladores de software, 
              todos compartimos un entusiasmo contagioso por lo que hacemos. Creemos que cada proyecto es una oportunidad para aprender, crecer y crear algo realmente especial.
            </p>
            <p>
              Nosotros no solo construimos sitios web, sino que también construimos relaciones. Escuchamos atentamente tus necesidades, entendemos tus objetivos y trabajamos codo a codo contigo para asegurar que cada detalle refleje tu esencia y valores. 
              Nuestro compromiso es ofrecerte soluciones digitales que no solo cumplan, sino que superen tus expectativas.
            </p>
          </Col>
          <Col className="mx-auto" data-aos="fade-right" lg={6}>
            <p>
              En AEGIS SYSTEMS, la innovación y la calidad son nuestro sello distintivo. Estamos aquí para ayudarte a destacar en el mundo digital, 
              ofreciéndote un servicio personalizado y una experiencia colaborativa que hará que tu proyecto sea tan único como tú.
            </p>
            <p>
              Gracias por confiar en nosotros y permitirnos ser parte de tu viaje digital.
            </p>
            <p>El equipo de AEGIS SYSTEMS - Tu socio en innovación digital.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;