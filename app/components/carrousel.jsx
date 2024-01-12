import React from 'react';
import style from './styles/carrousel.module.css';
import 'animate.css';

const Carrousel = () => {
  return (
    <div className={`${style.slider} animacionBotones`}>
      <div className={`${style.slideTrack}`}>
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <div className={`!w-[150px] ${style.slide}`}>
              <img
                src='./images/logoheader.webp'
                alt='logo'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./logoswhite/norachem.webp'
                alt='logo'
                className='object-contain'
              />
            </div>
            <div className={`!w-[150px] ${style.slide}`}>
              <img
                src='./images/ChimiaDAO Logo - PNG - By Dcmat.webp'
                alt='logo'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./logoswhite/norachem.webp'
                alt='logo'
                className='object-contain'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./images/DeSci Bogotá Logo - PNG - By Dcmat.webp'
                alt='logo'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./logoswhite/norachem.webp'
                alt='logo'
                className='object-contain'
              />
            </div>
            <div className={`!w-[150px] ${style.slide}`}>
              <img
                src='./images/ChimiaDAO Logo - PNG - By Dcmat.webp'
                alt='logo'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./images/DeSci Bogotá Logo - PNG - By Dcmat.webp'
                alt='logo'
                className='object-contain'
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Carrousel;
