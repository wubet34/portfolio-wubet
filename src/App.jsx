// App.jsx
import React from 'react';
import Header from './Components/Header';
import { Routes,Route } from 'react-router-dom';
import Hero from './Components/Hero';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project from './Components/Project';

function App() {
  return (
    <div>
      
     <Header  />
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/contact' element={<Contact/>} />
        
      </Routes>
    </div>
  );
}

export default App;