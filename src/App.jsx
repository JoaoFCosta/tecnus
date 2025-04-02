import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./scss/style.scss";

import { Home } from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
