'use client'
import AboutUs from './components/AboutUs'
import OurApproach from './components/OurApproach'
import Carrousel from './components/Carrousel'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Contact from './components/Contact'
import useDimension from '@/hooks/useDimension'

const App = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { width } = useDimension()

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    if (width < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  })
  return (
    <div className='min-h-screen w-full  bg-[#F9FAFA]'>
      <Hero />
      <Carrousel />
      <AboutUs />
      <OurApproach isMobile={isMobile} />
      <Contact />
    </div>
  )
}
export default App
