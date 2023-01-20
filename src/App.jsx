import React from "react";
import Navigation from "./components/Nav/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Navigation />
        <Home />
        <About />
        <Projects />
        <Contact />

    </>
  );
}

export default App;
