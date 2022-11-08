import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/style.css";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";
import Outlets from "./components/Outlets";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
        <Route path="/location" element={<Outlets />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
