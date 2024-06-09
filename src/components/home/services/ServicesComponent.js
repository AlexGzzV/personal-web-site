import React from "react";
import "./ServicesComponent.css";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const Services = (props) => {

  const { t } = useTranslation();

  return(
    <section id="services" className="services" style={{backgroundColor: "var(--bs-gray-900)"}}>
      <Container>
        <div className="section-title">
          <h2>{t("services-title")}</h2>
        </div>
        <Row >
          <Col className="align-items-stretch d-flex mt-3 mt-lg-0" lg={4}>
            <div className="services-card">
              <div className="icon-box">
                <div className="icon"><Icon color="#9ca3af" icon="pajamas:earth" /></div>
                <h4><span>{t("services-card-1-title")}</span></h4>
                <p>{t("services-card-1-text")}</p>
              </div>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-3 mt-lg-0" lg={4}>
            <div className="services-card">
              <div className="icon-box">
                <div className="icon"><Icon color="#9ca3af" icon="bi:phone" /></div>
                <h4><span>{t("services-card-2-title")}</span></h4>
                <p>{t("services-card-2-text")}</p>
              </div>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-3 mt-lg-0" lg={4}>
            <div className="services-card">
              <div className="icon-box">
                <div className="icon"><Icon color="#9ca3af" icon="material-symbols:code" /></div>
                <h4><span>{t("services-card-3-title")}</span></h4>
                <p>{t("services-card-3-text")}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;