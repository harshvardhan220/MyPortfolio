import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import SnakeGame from "./Components/SnakeGame/SnakeGame";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-[100%]">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutMe />} />
          <Route
            path="/projects"
            element={<div className="h-[85vh]">Projects</div>}
          />
          <Route
            path="/contact"
            element={<div className="h-[85vh]">Contact</div>}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
