import React from "react";
import "./footer.css";
import { Button, Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const Footer = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <footer>
      <Container className="py-5">
        <Row>
          <Col lg={2} xs={4}>
            <h5>Sección</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Inicio</a></li>
              <li className="nav-item mb-2"><a href="#about" className="nav-link p-0 text-muted">Nosotros</a></li>
              <li className="nav-item mb-2"><a href="#services" className="nav-link p-0 text-muted">Servicios</a></li>
              <li className="nav-item mb-2"><a href="#paquetes" className="nav-link p-0 text-muted">Paquetes</a></li>
            </ul>
          </Col>
          <Col lg={2} xs={4}>
            <h5>Sección</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Inicio</a></li>
              <li className="nav-item mb-2"><a href="#about" className="nav-link p-0 text-muted">Nosotros</a></li>
              <li className="nav-item mb-2"><a href="#services" className="nav-link p-0 text-muted">Servicios</a></li>
              <li className="nav-item mb-2"><a href="#paquetes" className="nav-link p-0 text-muted">Paquetes</a></li>
            </ul>
          </Col>
          <Col lg={2} xs={4}>
            <h5>Sección</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Inicio</a></li>
              <li className="nav-item mb-2"><a href="#about" className="nav-link p-0 text-muted">Nosotros</a></li>
              <li className="nav-item mb-2"><a href="#services" className="nav-link p-0 text-muted">Servicios</a></li>
              <li className="nav-item mb-2"><a href="#paquetes" className="nav-link p-0 text-muted">Paquetes</a></li>
            </ul>
          </Col>
          <Col className="mt-4 mt-lg-0" lg={6} sm={12}>
            <form onSubmit={handleSubmit}>
              <h5>Suscríbete para recibir nuevas ofertas.</h5>
              <p>Resúmen mensual de nuestras novedades.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Correo electrónico</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Correo electrónico" />
                <Button color="primary">Suscribete</Button>
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 AEGIS SYSTEMS. Todos los derechos reservados.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" target="_blank" rel="noreferrer" href="https://www.twitter.com"><Icon color="#fff" icon="mdi:twitter" fontSize={"2rem"}/></a></li>
              <li className="ms-3"><a className="link-dark" target="_blank" rel="noreferrer" href="https://www.instagram.com"><Icon color="#fff" icon="mdi:instagram" fontSize={"2rem"}/></a></li>
              <li className="ms-3"><a className="link-dark" target="_blank" rel="noreferrer" href="https://www.facebook.com"><Icon color="#fff" icon="mdi:facebook" fontSize={"2rem"}/></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;