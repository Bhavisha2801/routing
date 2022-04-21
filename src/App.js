import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import ProductCard from './Components/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductCard />} />
      </Routes>
    </div>
  );
}

export default App;
