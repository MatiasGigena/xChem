import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from '../animation/anim';

const index = ({ data }) => {
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate='enter'
      exit='exit'
      initial='initial'
      className='relative flex items-center h-20'
    >
      <Link
        className='text-[40px] lg:text-[45px]'
        href={data.href}
      >
        {data.title}
      </Link>
    </motion.div>
  );
};
export default index;
