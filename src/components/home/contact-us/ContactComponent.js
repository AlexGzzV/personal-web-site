import React from "react";
import "./ContactComponent.css";
import { useTranslation } from "react-i18next";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";

const Contact = (props) => {

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleKeyDown = (e) => {
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"];
    const length = e.target.value.length;
    if(!allowedKeys.includes(e.key) || (length >= 10 && e.key != "Backspace")){
      e.preventDefault();
    }
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
                <Input type="phone" name="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Número telefónico" onKeyDown={handleKeyDown}/>
                <Label for="exampleEmail">{t("contact-input-lbl-3")}</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="textarea" name="message" placeholder="Mensaje" style={{minHeight: '100px'}}/>
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