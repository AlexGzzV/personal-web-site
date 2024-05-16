import React from "react";
import "./ContactComponent.css";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";

const Contact = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <section id="contact-us" className="contact-us section-bg">
      <Container>
        <div data-aos="fade-up" className="section-title">
          <h2>CONTÁCTANOS</h2>
        </div>
        <Row>
          <Col lg={6} data-aos="slide-right">
           <div>
            <h2>Contáctanos</h2>
            <p>Envíanos tu información y en breve nos estaremos comunicando contigo.</p>
           </div>
          </Col>
          <Col lg={6} data-aos="slide-left">
            <form onSubmit={handleSubmit}>
              <FormGroup floating>
                <Input type="text" name="name" placeholder="Nombre completo" />
                <Label for="exampleEmail">Nombre completo</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="email" name="email" placeholder="Correo electrónico" />
                <Label for="exampleEmail">Correo electrónico</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="textarea" name="message" placeholder="Mensaje" />
                <Label for="exampleEmail">Mensaje</Label>
              </FormGroup>
              <Input className="btn btn-primary" type="submit" value="Enviar" />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;