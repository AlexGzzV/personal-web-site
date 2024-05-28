import React from "react";
import './Home.css';
import { Container } from "reactstrap";
import Banner from "../../components/home/banner/BannerComponent";
import About from "../../components/home/about/AboutComponent";
import Conocenos from "../../components/home/conocenos/ConocenosComponent";
import WhyUs from "../../components/home/why-us/WhyUsComponent";
import Paquetes from "../../components/home/paquetes/PaquetesComponent";
import Contact from "../../components/home/contact-us/ContactComponent";

const Home = () => {
  return(
    <>
      <Banner />
      <main>
        <About />
        <Conocenos />
        <WhyUs />
        <Paquetes />
        <Contact />
      </main>
    </>
  )
}

export default Home;