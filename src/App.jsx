import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Snowfall from 'snowfall';

function App() {
  return (
   
    <div className="scroll-smooth w-full  bg-white dark:bg-gray-900 text-black dark:text-white transition-colors shadow">
       <Snowfall color="#82c3d9"/> 
      <Header />
      <Hero />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
