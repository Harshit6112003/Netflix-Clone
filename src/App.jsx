import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login"; 
import Signup from "./pages/signup";  
import Netflix from "./pages/netflix";
import Player from "./pages/player";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/player" element={<Player/>} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
