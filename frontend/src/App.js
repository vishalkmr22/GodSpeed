import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Team from './components/Team';
import About from './components/About';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleAuthSuccess = (message) => {
    alert(message);
    navigate('/');
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Product />
              <Team />
              <About />
              <Pricing />
            </>
          } />
          <Route path="/login" element={<Login onSuccess={() => handleAuthSuccess('Login successful!')} />} />
          <Route path="/signup" element={<Signup onSuccess={() => handleAuthSuccess('Signup successful!')} />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;