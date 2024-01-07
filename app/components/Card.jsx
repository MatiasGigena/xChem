'use client';
import { useRef } from 'react';
import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import Image from 'next/image';

const Card = ({
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  i,
  img,
  subtitle,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [2, 1]
  );
  const scale = useTransform(progress, range, [
    1,
    targetScale,
  ]);
  return (
    <div
      ref={container}
      className='h-screen mt-[150px] lg:mt-[50px] p-8 lg:p-0 flex justify-center items-center sticky top-10 lg:top-0'
    >
      <motion.div
        className={`h-[600px] lg:w-[1000px] lg:h-[500px] relative top-[-25%] flex flex-col p-[50px] origin-top rounded-[25px] ${color} shadow-lg`}
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <p className='text-2xl lg:text-3xl text-[#303036] font-semibold text-start lg:text-center'>
          {title}
        </p>
        <div className='flex-col justify-start items-start lg:flex-row flex h-full mt-[15px] lg:mt-[50px] gap-[25px] lg:gap-[50px]'>
          <div className='flex-col gap-1 lg:gap-4 w-full lg:w-[70%] flex items-center justify-center'>
            <p className='text-lg w-full lg:text-xl text-[#303036] font-medium text-start'>
              {subtitle}
            </p>
            <p className=' text-xs lg:text-base text-[#303036]'>
              {description}
            </p>
          </div>
          <div className='relative w-full h-[200px] lg:w-[80%] lg:h-full lg:rounded-[25px] overflow-hidden '>
            <motion.div
              style={{ scale: imageScale }}
              className='h-full w-full'
            >
              <Image fill src={img} className='cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Card;
