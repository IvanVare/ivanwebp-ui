import React from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBarP from "./components/NavBarP";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBarP />}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/inicio" element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
