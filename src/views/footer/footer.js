import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = (props) => {

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <footer>
      <Container className="py-5">
        <Row>
          <Col lg={2} xs={4}>
            <h5>{t("footer-section-1-title")}</h5>
            <ul className="nav flex-column">
              {/* <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Inicio</a></li> */}
              <li className="nav-item mb-2"><a href="#about" className="nav-link p-0 text-muted">{t("header-about")}</a></li>
              <li className="nav-item mb-2"><a href="#why-us" className="nav-link p-0 text-muted">{t("header-why-us")}</a></li>
              <li className="nav-item mb-2"><a href="#conocenos" className="nav-link p-0 text-muted">{t("header-meet-us")}</a></li>
              <li className="nav-item mb-2"><a href="#services" className="nav-link p-0 text-muted">{t("header-services")}</a></li>
              <li className="nav-item mb-2"><a href="#contact-us" className="nav-link p-0 text-muted">{t("header-contact")}</a></li>
            </ul>
          </Col>
          <Col lg={2} xs={4}>

          </Col>
          <Col lg={2} xs={4}>
          </Col>
          <Col className="mt-4 mt-lg-0" lg={6} sm={12}>
            {/* <form onSubmit={handleSubmit}>
              <h5>{t("footer-section-2-title")}</h5>
              <p>{t("footer-section-2-subtitle")}</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input id="newsletter1" type="text" className="form-control" placeholder={t("footer-section-2-lbl")} />
                <Button color="primary">{t("footer-section-2-btn")}</Button>
              </div>
            </form> */}
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 AEGIS SYSTEMS. {t("footer-rights")}</p>
            <ul className="list-unstyled d-flex">
              {/* <li className="ms-3"><a className="link-dark" target="_blank" rel="noreferrer" href="https://www.twitter.com"><Icon color="#fff" icon="mdi:twitter" fontSize={"2rem"}/></a></li>
              <li className="ms-3"><a className="link-dark" target="_blank" rel="noreferrer" href="https://www.instagram.com"><Icon color="#fff" icon="mdi:instagram" fontSize={"2rem"}/></a></li>
              <li className="ms-3"><a className="link-dark" target="_blank" rel="noreferrer" href="https://www.facebook.com"><Icon color="#fff" icon="mdi:facebook" fontSize={"2rem"}/></a></li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;