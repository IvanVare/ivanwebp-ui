import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
//Componentes
import NavBarP from "./components/NavBarP";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBarP />}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/inicio" element={<Home></Home>}></Route>
          <Route path="/acercade" element={<AboutMe></AboutMe>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
