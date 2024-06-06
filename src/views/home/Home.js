import React from "react";
import './Home.css';
import Banner from "../../components/home/banner/BannerComponent";
import About from "../../components/home/about/AboutComponent";
import Conocenos from "../../components/home/conocenos/ConocenosComponent";
import WhyUs from "../../components/home/why-us/WhyUsComponent";
import Services from "../../components/home/services/ServicesComponent";
import Contact from "../../components/home/contact-us/ContactComponent";

const Home = () => {
  return(
    <>
      {/* <Banner /> */}
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