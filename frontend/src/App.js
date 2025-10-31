import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Kitesurf from './components/Kitesurf';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Kitesurf />
      <Booking />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;