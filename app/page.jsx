'use client';
import AboutUs from './components/AboutUs';
import OurApproach from './components/OurApproach';
import Carrousel from './components/carrousel';
import Hero from './components/hero';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div className='min-h-screen w-full  bg-[#F9FAFA]'>
      <Hero />
      <Carrousel />
      <AboutUs />
      <OurApproach />
      <Contact />
    </div>
  );
};
export default App;
