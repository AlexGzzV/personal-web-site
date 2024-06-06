import React from "react";
import "./ContactComponent.css";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";

const Contact = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <section id="contact-us" className="contact-us">
      <Container>
        <div className="section-title">
          <h2>CONTÁCTANOS</h2>
        </div>
        <Row>
          <Col lg={6}>
           <div>
            <h2>¡Conéctate con Nosotros!</h2>
            {/* <p>En AEGIS SYSTEMS, estamos emocionados de saber de ti. Tu visión y tus necesidades son nuestra prioridad, y queremos asegurarnos de que recibas la atención personalizada que mereces.</p> */}
            <p>
              ¿Tienes una idea brillante para un proyecto web? ¿Necesitas asistencia técnica o simplemente quieres conocer más sobre nuestros servicios? 
              No dudes en ponerte en contacto con nosotros. Nuestro equipo de profesionales está aquí para responder a tus preguntas y ayudarte a dar el siguiente paso hacia el éxito digital.
            </p>
            <p>Regístrate y completa nuestro formulario de contacto. Es fácil y rápido, y nos permitirá ofrecerte la solución perfecta, adaptada a tus objetivos.</p>
            <p>¿Por qué esperar? Conéctate con nosotros hoy y juntos haremos realidad tus ideas.</p>
            <p>AEGIS SYSTEMS - Tu socio en innovación digital.</p>
           </div>
          </Col>
          <Col lg={6}>
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
                <Input type="phone" name="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Número telefónico" />
                <Label for="exampleEmail">Número telefónico</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="textarea" name="message" placeholder="Mensaje" />
                <Label for="exampleEmail">Descríbenos brevemente tu idea</Label>
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