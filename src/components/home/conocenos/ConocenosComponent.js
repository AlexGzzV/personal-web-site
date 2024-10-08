import React from "react";
import "./ConocenosComponent.css";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import ProfileCard from "./components/ProfileCard";

const Conocenos = (props) => {

  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      name: "Alejandro",
      lastName: "González Vallejo",
      email: "aleex.vallejo94@gmail.com",
      description: t("meetus-person-1"),
      jobPosition: ".NET Developer",
      image: "/images/alex-1.jpg"
    },
    {
      id: 2,
      name: "Alejandra",
      lastName: "Salas",
      email: "aleex.vallejo94@gmail.com",
      description: t("meetus-person-2"),
      jobPosition: "UI/UX Designer",
      image: "/images/ale-salas-2.jpg"
    },
    {
      id: 3,
      name: "Xally Berenice",
      lastName: "Dorantes",
      email: "aleex.vallejo94@gmail.com",
      description: t("meetus-person-3"),
      jobPosition: "Project Manager",
      image: "/images/xally-2.jpg"
    },
    {
      id: 4,
      name: "Jessica",
      lastName: "Aguirre",
      email: "aleex.vallejo94@gmail.com",
      description: t("meetus-person-4"),
      jobPosition: "Senior Developer, DBA",
      image: "/images/jessy-1.jpg"
    },
    {
      id: 5,
      name: "Angel Eduardo",
      lastName: "Saucedo Sanchez",
      email: "angeleduardo388@gmail.com",
      description: t("meetus-person-5"),
      jobPosition: "Xamarin/MAUI Developer",
      image: "/images/angel-1.jpg"
    },
    // {
    //   id: 6,
    //   name: "Dorian Karim",
    //   lastName: "Mata Garcia",
    //   email: "angeleduardo388@gmail.com",
    //   description: t("meetus-person-6"),
    //   jobPosition: "El gordo Tonny",
    //   image: "/images/karim-1.jpg"
    // }
  ]

  return(
    <section id="conocenos" className="conocenos section-bg">
      <Container>
        <div className="section-title">
          <h2>{t("meetus-title")}</h2>
          <p>{t("meetus-subtitle")}</p>
        </div>
        <Row>
          
            {
              data.map(item=>(
                <Col className="mt-3 d-flex align-items-stretch" key={item.id} lg={4}>
                  <ProfileCard data={item} />
                </Col>
              ))
            }
        </Row>
      </Container>
    </section>
  );
}

export default Conocenos;