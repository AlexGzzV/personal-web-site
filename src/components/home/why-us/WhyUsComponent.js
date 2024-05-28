import React from "react";
import './WhyUsComponent.css';
import { Col, Container, Row } from "reactstrap";
import { Icon } from '@iconify/react';

const WhyUs = (props) => {

  return(
    <section id="why-us" className="why-us">
      <Container>
        <div data-aos="fade-up" className="section-title">
          <h2>¿POR QUÉ NOSOTROS?</h2>
          <h5>En AEGIS SYSTEMS, sabemos que tienes muchas opciones cuando se trata de elegir un equipo para desarrollar tu sitio web. Aquí te mostramos por qué somos la mejor opción para ti:</h5>
        </div>
        <Row>
          <Col className="align-items-stretch d-flex mt-4" data-aos="fade-up" data-aos-delay="100" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="mdi:think-outline" /></div>
              <h4><a href="">Pasión y Creatividad</a></h4>
              <p>Somos un equipo joven y entusiasta, apasionado por la tecnología y el diseño. Nos encanta lo que hacemos y eso se refleja en cada proyecto que emprendemos. 
                Nuestra creatividad e innovación son el motor que impulsa soluciones únicas y personalizadas para cada cliente.</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4" data-aos="zoom-in" data-aos-delay="200" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="material-symbols:partner-exchange" /></div>
              <h4><a href="">Experiencia y Profesionalismo</a></h4>
              <p>Aunque somos una empresa joven, cada uno de nosotros es un profesional en su campo con una sólida formación y experiencia. 
                Combinamos lo mejor de ambos mundos: la frescura y la energía de una nueva empresa con la experiencia y el conocimiento de expertos en la industria.</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4" data-aos="fade-down" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="ph:magnifying-glass-bold" /></div>
              <h4><a href="">Enfoque Personalizado</a></h4>
              <p>Entendemos que cada proyecto es único. Por eso, dedicamos tiempo a conocer tus necesidades específicas y objetivos. Trabajamos codo a codo contigo, 
                asegurándonos de que cada detalle refleje tu visión y valores, creando soluciones digitales que realmente te representen.</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4" data-aos="fade-down" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="solar:checklist-outline" /></div>
              <h4><a href="">Calidad y Detalle</a></h4>
              <p>La calidad es nuestra prioridad. Nos aseguramos de que cada línea de código, cada diseño y cada funcionalidad cumplan con los más altos estándares. 
                No dejamos nada al azar, y nuestra atención al detalle garantiza un producto final impecable.</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4" data-aos="fade-down" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="material-symbols:support-agent-sharp" /></div>
              <h4><a href="">Soporte y Mantenimiento</a></h4>
              <p>Nuestro compromiso contigo no termina cuando el proyecto está terminado. Ofrecemos soporte continuo y mantenimiento para asegurarnos de que tu sitio web funcione sin problemas y se mantenga actualizado con las últimas tecnologías y tendencias.</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4" data-aos="fade-down" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="streamline:industry-innovation-and-infrastructure-solid" /></div>
              <h4><a href="">Innovación Constante</a></h4>
              <p>El mundo digital está en constante evolución, y nosotros también. Nos mantenemos al día con las últimas tendencias y tecnologías para ofrecerte soluciones modernas y efectivas que mantengan tu sitio web a la vanguardia.</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4" data-aos="fade-down" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="material-symbols:communication" /></div>
              <h4><a href="">Transparencia y Comunicación</a></h4>
              <p>Creemos en la importancia de una comunicación abierta y transparente. Te mantenemos informado en cada etapa del proceso, y estamos siempre disponibles para responder a tus preguntas y escuchar tus sugerencias.</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4" data-aos="fade-down" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="carbon:task-complete" /></div>
              <h4><a href="">Resultados Tangibles</a></h4>
              <p>Nuestro objetivo es ayudarte a alcanzar tus metas. Ya sea aumentar tu visibilidad en línea, mejorar la experiencia del usuario o impulsar tus ventas, estamos aquí para ofrecer resultados tangibles que marquen la diferencia en tu negocio.</p>
            </div>
          </Col>
          <Col className="align-items-stretch d-flex mt-4" data-aos="fade-down" data-aos-delay="300" lg={4}>
            <div className="icon-box">
              <div className="icon"><Icon color="#47b2e4" icon="hugeicons:hot-price" /></div>
              <h4><a href="">Relación Calidad-Precio</a></h4>
              <p>Ofrecemos servicios de alta calidad a precios competitivos. Sabemos que cada peso cuenta, especialmente para nuevas empresas y pequeños negocios. Con nosotros, 
                obtienes el máximo valor por tu inversión, sin comprometer la calidad ni la atención personalizada que te mereces.</p>
            </div>
          </Col>
          <Col className="mt-5" lg={12}>
          <h5>En AEGIS SYSTEMS, no solo creamos sitios web; creamos experiencias digitales que destacan y conectan. Confía en nosotros para llevar tu presencia en línea al siguiente nivel. ¡Hablemos y comencemos a construir juntos tu futuro digital!</h5>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhyUs;