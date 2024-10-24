import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col justify-between items-center">
        <NavBar />
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center w-full">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/promotions" element={<div className="content">Promotions Page</div>} />
            <Route path="/contact" element={<div className="content">Contact Page</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
