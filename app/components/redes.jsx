'use client';
import { motion } from 'framer-motion';
import { mobileLinkVars } from '../animation/anim';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BiLogoTiktok } from 'react-icons/bi';
import { BsLinkedin, BsDiscord } from 'react-icons/bs';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { Facebook } from '@mui/icons-material';
import { HiOutlineMail } from 'react-icons/hi';

const Redes = () => {
  return (
    <div className='flex flex-col w-full mt-2 gap-4 lg:w-[75%] lg:mt-12 lg:gap-28  text-white '>
      <div className='flex flex-col gap-5  overflow-hidden'>
        <motion.p
          className=' text-xl lg:text-4xl font-extralight'
          variants={mobileLinkVars}
        >
          Nuestras{' '}
          <span className='text-[#715bd4] font-light'>
            redes
          </span>
        </motion.p>
        <motion.div
          variants={mobileLinkVars}
          className='flex gap-5 items-center '
        >
          <a
            aria-label='Instagram'
            href='https://www.instagram.com/maycamevolve/'
            target='_blank'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <InstagramIcon />
          </a>
          <a
            aria-label='Tiktok'
            href='https://www.tiktok.com/@maycamevolve'
            target='_blank'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <BiLogoTiktok style={{ fontSize: '1.5rem' }} />
          </a>
          <a
            aria-label='Twitter'
            href='https://twitter.com/maycamevolve/'
            target='_blank'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <TwitterIcon />
          </a>
          <a
            aria-label='Youtube'
            href='https://www.youtube.com/c/MaycamEvolve/videos'
            target='_blank'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <YouTubeIcon />
          </a>
          <a
            aria-label='Linkedin'
            href='https://www.linkedin.com/company/maycamevolve/?originalSubdomain=ar'
            target='_blank'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <BsLinkedin />
          </a>
          <a
            aria-label='Behance'
            href='https://www.behance.net/maycamevolve'
            target='_blank'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <AiFillBehanceCircle
              style={{ fontSize: '1.5rem' }}
            />
          </a>
          <a
            aria-label='Facebook'
            href='https://www.facebook.com/MaycamEvolve/'
            target='_blank'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <Facebook />
          </a>
          <a
            aria-label='Discord'
            href='https://discord.com/invite/r7qHmd6u6g'
            target='_blank'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <BsDiscord style={{ fontSize: '1.5rem' }} />
          </a>
          <a
            aria-label='Email'
            href='mailto:hola@maycamevolve.com'
            className='cursor-pointer2 hover:text-[#715bd4]'
          >
            <HiOutlineMail style={{ fontSize: '1.5rem' }} />
          </a>
        </motion.div>
      </div>
      <div className='flex flex-col overflow-hidden gap-4'>
        <motion.p
          variants={mobileLinkVars}
          className=' text-xl lg:text-4xl font-extralight'
        >
          Nuestros{' '}
          <span className='text-[#715bd4] font-light'>
            Departamentos
          </span>
        </motion.p>
        <motion.ul
          variants={mobileLinkVars}
          className='flex flex-col gap-4 '
        >
          <li className='flex text-xs lg:text-base gap-16 lg:gap-20'>
            <span className='w-16 lg:w-24 '>General</span>
            <span>
              hola<span className='text-[#715bd4]'>@</span>
              maycamevolve.com
            </span>
          </li>
          <li className='flex text-xs lg:text-base gap-16 lg:gap-20'>
            <span className='w-16 lg:w-24'>Marketing</span>
            <span>
              meg<span className='text-[#715bd4]'>@</span>
              maycamevolve.com
            </span>
          </li>
          <li className='flex text-xs lg:text-base gap-16 lg:gap-20'>
            <span className='w-16 lg:w-24'>Deportivo</span>
            <span>
              marketing
              <span className='text-[#715bd4]'>@</span>
              maycamevolve.com
            </span>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};
export default Redes;
