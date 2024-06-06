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
      description: "Desarrollador fullstack .NET y CEO de la empresa. Ha participado y desarrollado multiples proyectos educativos y gubernamentales, teniendo una basta experiencia en software corporativo.",
      jobPosition: "CEO, .NET Developer",
      image: "/images/alex-1.jpg"
    },
    {
      id: 2,
      name: "Alejandra",
      lastName: "Salas",
      email: "aleex.vallejo94@gmail.com",
      description: "Diseñadora e ilustradora, su experiencia la hace abarcar tanto diseños para aplicaciones de escritorio y móviles, como imagen corporativa y diseño de material publicitario.",
      jobPosition: "UI/UX Designer",
      image: "/images/ale-salas-2.jpg"
    },
    {
      id: 3,
      name: "Xally Berenice",
      lastName: "Dorantes",
      email: "aleex.vallejo94@gmail.com",
      description: "Ha liderado múltiples proyectos exitosos a lo largo de su carrera. Su habilidad para coordinar equipos, gestionar recursos y asegurar que los plazos y objetivos se cumplan la convierte en una pieza clave de nuestro equipo.",
      jobPosition: "Project Manager",
      image: "/images/xally-2.jpg"
    },
    {
      id: 4,
      name: "Jessica",
      lastName: "Aguirre",
      email: "aleex.vallejo94@gmail.com",
      description: "Cuenta con más de 10 años de experiencia en el desarrollo de software, abarcando diversas tecnologías le permiten abordar proyectos complejos y entregar soluciones robustas y eficientes.",
      jobPosition: "Senior Developer, DBA",
      image: "/images/jessy-1.jpg"
    },
    {
      id: 5,
      name: "Angel Eduardo",
      lastName: "Saucedo Sanchez",
      email: "angeleduardo388@gmail.com",
      description: "Experto en las tecnologías .NET Xamarin y .NET MAUI. A lo largo de su carrera, ha desarrollado múltiples aplicaciones móviles para diversas empresas, destacándose por su capacidad para adaptarse a las necesidades de cada cliente.",
      jobPosition: "Xamarin/MAUI Developer",
      image: "/images/angel-1.jpg"
    }
  ]

  return(
    <section id="conocenos" className="conocenos section-bg">
      <Container>
        <div className="section-title">
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