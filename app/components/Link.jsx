import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from '../animation/anim';

const index = ({ data, index }) => {
  return (
    <motion.div
      key={index}
      custom={data.index}
      variants={slide}
      animate='enter'
      exit='exit'
      initial='initial'
      className='relative flex items-center h-20'
    >
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
};
export default index;