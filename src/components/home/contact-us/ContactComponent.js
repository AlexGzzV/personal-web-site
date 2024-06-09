import React from "react";
import "./ContactComponent.css";
import { useTranslation } from "react-i18next";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";

const Contact = (props) => {

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <section id="contact-us" className="contact-us">
      <Container>
        <div className="section-title">
          <h2>{t("contact-title")}</h2>
        </div>
        <Row>
          <Col lg={6}>
           <div>
            <h2>{t("contact-subtitle")}</h2>
            {/* <p>En AEGIS SYSTEMS, estamos emocionados de saber de ti. Tu visión y tus necesidades son nuestra prioridad, y queremos asegurarnos de que recibas la atención personalizada que mereces.</p> */}
            <p>
            {t("contact-text-1")}
            </p>
            <p>{t("contact-text-2")}</p>
            <p>{t("contact-text-3")}</p>
            <p>{t("contact-text-4")}</p>
           </div>
          </Col>
          <Col lg={6}>
            <form onSubmit={handleSubmit}>
              <FormGroup floating>
                <Input type="text" name="name" placeholder="Nombre completo" />
                <Label for="exampleEmail">{t("contact-input-lbl-1")}</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="email" name="email" placeholder="Correo electrónico" />
                <Label for="exampleEmail">{t("contact-input-lbl-2")}</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="phone" name="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Número telefónico" />
                <Label for="exampleEmail">{t("contact-input-lbl-3")}</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="textarea" name="message" placeholder="Mensaje" />
                <Label for="exampleEmail">{t("contact-input-lbl-4")}</Label>
              </FormGroup>
              <Input className="btn btn-primary" type="submit" value={t("contact-button")} />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;