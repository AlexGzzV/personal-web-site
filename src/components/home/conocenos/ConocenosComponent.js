import React from "react";
import "./ConocenosComponent.css";
import { Col, Container, Row } from "reactstrap";
import ProfileCard from "./components/ProfileCard";

const Conocenos = (props) => {

  const data = [
    {
      id: 1,
      name: "Alejandro",
      lastName: "González Vallejo",
      email: "aleex.vallejo94@gmail.com",
      description: "CEO de AEGIS SYSTEMS y desarrollador especialista en tecnologías .NET con C#.",
      jobPosition: "CEO, Software Developer",
      image: "/images/1-intro-photo-final.jpg"
    },
    {
      id: 2,
      name: "Alejandra",
      lastName: "Salas",
      email: "aleex.vallejo94@gmail.com",
      description: "Especialista en diseño UI/UX",
      jobPosition: "UI/UX Designer",
      image: "/images/ale-salas-2.jpg"
    },
    {
      id: 3,
      name: "Xally Berenice",
      lastName: "Dorantes",
      email: "aleex.vallejo94@gmail.com",
      description: "Esta es una descripcion de prueba",
      jobPosition: "Project Manager",
      image: "/images/xally-2.jpg"
    },
    {
      id: 4,
      name: "Jessica",
      lastName: "Aguirre",
      email: "aleex.vallejo94@gmail.com",
      description: "Desarrolladora de sistemas y especialista DBA",
      jobPosition: "Software Developer, DBA",
      image: "/images/jessy-1.jpg"
    },
    {
      id: 5,
      name: "Angel Eduardo",
      lastName: "Saucedo Sanchez",
      email: "angeleduardo388@gmail.com",
      description: "Especialista en desarrollo móvil con .NET Xamarin y .NET MAUI",
      jobPosition: "Mobile Developer",
      image: "/images/angel-1.jpg"
    }
  ]

  return(
    <section id="conocenos" className="conocenos section-bg">
      <Container>
        <div data-aos="fade-up" className="section-title">
          <h2>CONOCE A NUESTROS ESPECIALISTAS</h2>
          <p>En AEGIS SYSTEMS, creemos que el éxito de cualquier proyecto radica en las personas detrás de él. Nuestro equipo está compuesto por un grupo talentoso de desarrolladores, 
            diseñadores y especialistas en tecnología que trabajan en armonía para llevar tus ideas al siguiente nivel.</p>
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