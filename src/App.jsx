import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import { Home, Coding, Class } from "./Pages/index.js";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/classroom" element={<Home></Home>}></Route>
      <Route path="/coding" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
