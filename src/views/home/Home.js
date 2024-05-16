import React from "react";
import './Home.css';
import { Container } from "reactstrap";
import Banner from "../../components/home/banner/BannerComponent";
import About from "../../components/home/about/AboutComponent";
import Services from "../../components/home/services/ServicesComponent";
import Paquetes from "../../components/home/paquetes/PaquetesComponent";
import Contact from "../../components/home/contact-us/ContactComponent";

const Home = () => {
  return(
    <>
      <Banner />
      <main>
        <About />
        <Services />
        <Paquetes />
        <Contact />
      </main>
    </>
  )
}

export default Home;