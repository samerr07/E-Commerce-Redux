import React from "react";
import "./App.css";
import Header from "./common/Header";
import TopBar from "./common/TopBar";
import MidHeader from "./common/MidHeader";
import Footer from "./common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";
import NotFoundPage from "./pages/NotFoundPage";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <TopBar />
        <MidHeader />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
