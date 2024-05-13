import React from "react";
import { Routes, Route } from "react-router-dom";
import Aos from 'aos';
import GlobalContextProvider from "./context/GlobalContextProvider";
import Home from "./views/home/Home";
import Header from "./views/header/Header";
import Footer from "./views/footer/footer";

const ReactRoutes = () => {
  Aos.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

  return(
    <div>
      <GlobalContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </GlobalContextProvider>
    </div>
  )
}

export default ReactRoutes;