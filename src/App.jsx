import React from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Nav/Nav";
import About from "./pages/About";
import Home from "./components/Home/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
