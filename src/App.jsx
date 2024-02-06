import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
