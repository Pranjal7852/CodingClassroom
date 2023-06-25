import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Home, Coding, ClassRoom } from "./Pages/index.js";
import "./App.css";
import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/classroom" element={<ClassRoom></ClassRoom>}></Route>
        <Route path="/coding" element={<Coding></Coding>}></Route>
      </Routes>
    </>
  );
}

export default App;
