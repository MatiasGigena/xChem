'use client'
import { menuSlide } from '../animation/anim'
import Link from './Link'
import { motion } from 'framer-motion'
import CurveComponent from './Curve'

const NavItems = () => {
  const items = [
    {
      title: 'Home',
      href: '#Home',
    },
    {
      title: 'About Us',
      href: '#About',
    },
    {
      title: 'Our Approach',
      href: '#Approach',
    },
    {
      title: 'Contact',
      href: '#Contact',
    },
  ]
  return (
    <motion.div
      variants={menuSlide}
      animate='enter'
      exit='exit'
      initial='initial'
      className='h-screen w-full lg:w-[470px] bg-gradient-to-r from-[#20265c]  to-[#e5564c] fixed top-0 right-0  text-white '
    >
      <div className='box-border h-full  py-[20%] lg:py-[100px] justify-center items-center flex flex-col  '>
        <div className='flex h-full flex-col justify-start gap-[20px]  mt-[80px]'>
          <div className='header mb-[40px]'>
            <p className='text-white text-2xl '>
              Navigation
            </p>
          </div>
          {items.map((item, index) => {
            return <Link key={index} data={{ ...item }} />
          })}
        </div>
      </div>
      <CurveComponent />
    </motion.div>
  )
}
export default NavItems
