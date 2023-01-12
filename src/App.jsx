import React from "react";
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Nav/Nav";

function App() {
  return (
   <Router>
    <Navigation />
   </Router>
  );
}

export default App;
