'use client';
import styles from './styles/sponsors.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { mobileLinkVars } from '../animation/anim';

const Companies = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [carouselReady, setCarouselReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCarouselReady(true);
    }, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setSlidesToShow(4);
      } else if (window.innerWidth > 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth > 520) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: !slidesToShow ? 4 : slidesToShow,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: 'ease-in-out',
    arrows: false,
    swipe: false,
    draggable: false,
  };

  return (
    <motion.section
      variants={mobileLinkVars}
      className='     
            rounded-2xl
            lg:rounded-full
            border-2
            border-[#715bd4]
            gap-3
            sm:gap-8
            md:gap-9
            xl:gap-14
            py-4
            md:pt-8
            md:pb-8
            lg:pt-12
            lg:pb-12 
            w-full
            m-7 
            z-20        
        '
      id='companies'
    >
      <div className={styles.mainContainer}>
        {carouselReady && (
          <Slider {...settings}>
            <a
              href='https://www.gatorade.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2`}
            >
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/GATORADE WHITE.png'}
                alt='MustHaveApps Logo'
                fill
                priority={true}
              />
            </a>
            <a
              href='https://ggpoker.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-[1.30]`}
            >
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/GGPOKER White 2.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </a>
            <a
              href='https://www.jbl.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2`}
            >
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/JBL QUANTUM V WHITE.png'}
                alt='Headway Logo'
                fill
                priority={true}
              />
            </a>
            <a
              href='https://maycamgames.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2`}
            >
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/MAYCAMGAMES White.png'}
                alt='Instories Logo'
                fill
                priority={true}
              />
            </a>

            <a
              href='https://prex.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-150`}
            >
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/PREX White.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </a>
            <a
              href='https://www.redragonzone.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-105`}
            >
              <Image
                sizes={
                  '(max-width: 768px) 90vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/REDRAGON White.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </a>
            <a
              href='https://sanignacio.com.ar/index.html'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-110`}
            >
              <Image
                sizes={
                  '(max-width: 768px) 90vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/San Ignacio White.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </a>
            <a
              href='https://www.seagate.com/la/es/'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-105`}
            >
              <Image
                sizes={
                  '(max-width: 768px) 90vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/SEAGATE WHITE.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </a>
          </Slider>
        )}
      </div>
    </motion.section>
  );
};

export default Companies;
