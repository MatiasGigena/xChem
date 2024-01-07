'use client';
import { menuSlide } from '../animation/anim';
import Link from './Link';
import { motion } from 'framer-motion';
import CurveComponent from './curve';

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
  ];
  return (
    <motion.div
      variants={menuSlide}
      animate='enter'
      exit='exit'
      initial='initial'
      className='h-screen w-full lg:w-auto bg-gradient-to-r from-[#ffc324] to-[#ff7f50] fixed top-0 right-0  text-white '
    >
      <div className='box-border h-full p-[20%] lg:p-[100px] flex flex-col  '>
        <div className='flex h-full flex-col justify-start gap-[12px] text-[56px] mt-[80px]'>
          <div className='header mb-[40px]'>
            <p className='text-white text-2xl '>
              Navigation
            </p>
          </div>
          {items.map((item, index) => {
            return <Link data={{ ...item, index }} />;
          })}
        </div>
      </div>
      <CurveComponent />
    </motion.div>
  );
};
export default NavItems;
