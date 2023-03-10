import Navbar from "./components/Navbar";
import List from "./components/List";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<List  />}/>
          <Route path="add" element={<AddProduct  />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
