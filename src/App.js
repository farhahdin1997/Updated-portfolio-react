import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import NavBar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";


 function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <About/>
     
    </div>
  );
}

export default App;

