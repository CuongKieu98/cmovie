// swiper bundle styles
import "swiper/css/bundle";
// swiper core styles
import "swiper/css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Routesv6 from "./config/Routesv6";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>     
      <Header />
      <Routesv6 />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
