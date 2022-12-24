import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Category from "./components/Category";
import Statistic from "./components/Statistic";
import Location from "./components/Location";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Hero />
      <ProductList />
      <Category />
      <Statistic />
      <Location />
    </div>
  );
}

export default App;
