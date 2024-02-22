import React from "react";
import './Home.css';
import { Container } from "reactstrap";
import Banner from "../../components/home/banner/BannerComponent";
import About from "../../components/home/about/AboutComponent";
import Services from "../../components/home/services/ServicesComponent";

const Home = () => {
  return(
    <>
      <Banner />
      <main>
        <About />
        <Services />
      </main>
    </>
  )
}

export default Home;