import React, { useContext } from "react";
import "./PaquetesComponent.css";
import { GlobalContext } from "../../../context/GlobalContextProvider";
import { Col, Container, Row } from "reactstrap";
import Card from "./card";

const Paquetes = (props) => {

  const { data } = useContext(GlobalContext);

  const sliceList = (list) => {
    let chunk = [];
    for(let i = 0; i < list.length; i += 4){
      chunk.push(list.slice(i, i + 4));
    }

    return(
      <>{
        chunk.map((row, index)=>(
          <Row key={index} className="mb-4">
            {
              row.map(item=>(
                <Col key={item.id} className="align-items-stretch d-flex" data-aos={item.aos} data-aos-delay="100" lg={4}>
                  <Card data={item}/>
                </Col>
              ))
            }
          </Row>
        ))
      }</>
    )
  }

  return(
    <section id="paquetes" className="paquetes">
      <Container>
      <div data-aos="fade-up" className="section-title">
          <h2>CONOCE NUESTROS PAQUETES</h2>
        </div>
        {
          sliceList(data)
        }
      </Container>
    </section>
  );
}

export default Paquetes;