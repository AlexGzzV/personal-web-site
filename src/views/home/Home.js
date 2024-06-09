import React from "react";
import './Home.css';
import About from "../../components/home/about/AboutComponent";
import Conocenos from "../../components/home/conocenos/ConocenosComponent";
import WhyUs from "../../components/home/why-us/WhyUsComponent";
import Services from "../../components/home/services/ServicesComponent";
import Contact from "../../components/home/contact-us/ContactComponent";

const Home = () => {
  return(
    <>
      <About />
      <main>
        <WhyUs />
        <Conocenos />
        <Services />
        <Contact />
      </main>
    </>
  )
}

export default Home;