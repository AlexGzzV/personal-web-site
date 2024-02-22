import React from "react";
import { Routes, Route } from "react-router-dom";
import Aos from 'aos';
import Home from "./views/home/Home";
import Header from "./views/header/Header";

const ReactRoutes = () => {
  Aos.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default ReactRoutes;