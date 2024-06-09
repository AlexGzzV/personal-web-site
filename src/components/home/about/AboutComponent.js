import React from "react";
import './AboutComponent.css';
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";

const About = (props) => {

  const { t } = useTranslation();

  return(
    <section id="about" className="about section-bg py-lg-0 mt-3 mt-lg-5">
      <Container className="px-lg-0" fluid>
        <Row className="content m-0 m-lg-5 d-flex">
          <Col className="mx-auto py-0 py-lg-5 mt-5 mt-lg-0 order-1 order-lg-0" lg={6}>
            <div className="section-title">
              <h2>{t("about-title")}</h2>
            </div>
            <p>
              {t("about-text-1")}
            </p>
            <p>{t("about-text-2")}</p>
            <p>
            {t("about-text-3")}
            </p>
            <p>
            {t("about-text-4")}
            </p>
          </Col>
          <Col className="mx-auto order-0 order-lg-1" lg={6}>
            <img src="/images/about-us.jpg" alt="ABOUT US BANNER" width="100%"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;