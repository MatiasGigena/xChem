'use client';
import { useState } from 'react';
import NavItems from './navItems';
import { AnimatePresence } from 'framer-motion';
import 'animate.css';
const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className='w-full animacionInferior glassmorphism2 fixed  z-50  pl-8 pr-16 py-5 lg:pl-64 lg:pr-72 lg:py-10'>
      <ul className=' text-3xl h-full flex justify-between items-center'>
        <li className='text-[#303036] flex items-center justify-center gap-2'>
          <p className='h-8 conic-gradient w-8 rounded-full'></p>
          <button onClick={handleClick}>xChem</button>
        </li>
        <li className='flex items-center text-[#828289] justify-center gap-4 h-full '>
          <p>Menu</p>
          <div
            onClick={() => setIsActive(!isActive)}
            className='conic-gradient z-10 fixed right-0 m-4 lg:m-60 w-[40px] h-[40px] cursor-pointer rounded-[50%] flex items-center justify-center'
          >
            <div
              className={`burger z-10 ${
                isActive ? 'burgerActive ' : ''
              }`}
            ></div>
          </div>
        </li>
      </ul>
      <AnimatePresence mode='wait'>
        {isActive && <NavItems />}
      </AnimatePresence>
    </nav>
  );
};
export default Nav;
