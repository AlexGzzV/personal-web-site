import React from "react";
import './WhyUsComponent.css';
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const WhyUs = (props) => {

  const { t } = useTranslation();

  return(
    <section id="why-us" className="why-us">
      <Container>
        <div className="section-title">
          <h2>{t("whyus-title")}</h2>
          <h5>{t("whyus-subtitle")}</h5>
        </div>
        <Row>
          <Col className="card-item align-items-stretch d-flex mt-5" data-aos-delay="100" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="var(--main-heading-color)" icon="mdi:think-outline" /></div>
              <h4><span>{t("whyus-card-1-title")}</span></h4>
              <p>{t("whyus-card-1-text")}</p>
            </div>
          </Col>
          <Col className="card-item align-items-stretch d-flex mt-5" data-aos-delay="200" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="var(--main-heading-color)" icon="material-symbols:partner-exchange" /></div>
              <h4><span>{t("whyus-card-2-title")}</span></h4>
              <p>{t("whyus-card-2-text")}</p>
            </div>
          </Col>
          <Col className="card-item align-items-stretch d-flex mt-5" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="var(--main-heading-color)" icon="ph:magnifying-glass-bold" /></div>
              <h4><span>{t("whyus-card-3-title")}</span></h4>
              <p>{t("whyus-card-3-text")}</p>
            </div>
          </Col>
          <Col className="card-item align-items-stretch d-flex mt-5" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="var(--main-heading-color)" icon="solar:checklist-outline" /></div>
              <h4><span>{t("whyus-card-4-title")}</span></h4>
              <p>{t("whyus-card-4-text")}</p>
            </div>
          </Col>
          <Col className="card-item align-items-stretch d-flex mt-5" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="var(--main-heading-color)" icon="material-symbols:support-agent-sharp" /></div>
              <h4><span>{t("whyus-card-5-title")}</span></h4>
              <p>{t("whyus-card-5-text")}</p>
            </div>
          </Col>
          <Col className="card-item align-items-stretch d-flex mt-5" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="var(--main-heading-color)" icon="streamline:industry-innovation-and-infrastructure-solid" /></div>
              <h4><span>{t("whyus-card-6-title")}</span></h4>
              <p>{t("whyus-card-6-text")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhyUs;