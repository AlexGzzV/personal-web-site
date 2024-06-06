import React, { useContext } from "react";
import "./ServicesComponent.css";
import { GlobalContext } from "../../../context/GlobalContextProvider";
import { Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const Services = (props) => {

  return(
    <section id="services" className="services" style={{backgroundColor: "var(--bs-gray-900)"}}>
      <Container>
        <div className="section-title">
          <h2>NUESTROS SERVICIOS</h2>
        </div>
        <Row >
          <Col className="align-items-stretch d-flex" lg={4}>
            <div className="services-card">
              <div className="icon-box">
                <div className="icon"><Icon color="#9ca3af" icon="pajamas:earth" /></div>
                <h4><a href="">Desarrollo Web</a></h4>
                <p>Creamos sitios web responsivos y fáciles de usar que muestran su marca e involucran a su audiencia.</p>
              </div>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex" lg={4}>
            <div className="services-card">
              <div className="icon-box">
                <div className="icon"><Icon color="#9ca3af" icon="bi:phone" /></div>
                <h4><a href="">Aplicaciones Móbiles</a></h4>
                <p>Desarrolle aplicaciones móviles de vanguardia que brinden una experiencia de usuario perfecta en plataformas iOS y Android.</p>
              </div>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex" lg={4}>
            <div className="services-card">
              <div className="icon-box">
                <div className="icon"><Icon color="#9ca3af" icon="material-symbols:code" /></div>
                <h4><a href="">Sowftware Personalizado</a></h4>
                <p>Soluciones de software hechas a medida que abordan sus necesidades comerciales únicas y agilizan sus operaciones.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;