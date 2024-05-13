import React from "react";
import './ServicesComponent.css';
import { Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const Services = (props) => {

  return(
    <section id="services" className="services section-bg">
      <Container>
        <div data-aos="fade-up" className="section-title">
          <h2>NUESTROS SERVICIOS</h2>
        </div>
        <Row>
          <Col className="align-items-stretch d-flex" data-aos="fade-up" data-aos-delay="100" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="streamline:web" /></div>
              <h4><a href="">Sitios Web</a></h4>
              <p>Sitios Web adaptados a tus necesidades para atraer y mantener a tus clientes</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="material-symbols:mail-outline" /></div>
              <h4><a href="">Correos Personalizados</a></h4>
              <p>Ofrecemos correos personalizados para que tu negocio sea más profesional</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4 mt-md-0" data-aos="fade-down" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="bx-cloud" /></div>
              <h4><a href="">Servicios en la Nube</a></h4>
              <p>Con los servicios en la nube, tendrás muchas más facilidades para impulsar tu negocio</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services;