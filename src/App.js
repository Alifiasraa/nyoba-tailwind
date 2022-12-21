import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Category from "./components/Category";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Hero />
      <ProductList />
      <Category />
    </div>
  );
}

export default App;
