import React from 'react';
import style from './styles/carrousel.module.css';
import 'animate.css';

const Carrousel = () => {
  return (
    <div className={`${style.slider} animacionBotones`}>
      <div className={`${style.slideTrack}`}>
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <div className={style.slide}>
              <img
                src='./images/logoheader.png'
                alt='logo'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./logoswhite/norachem.png'
                alt='logo'
                className='object-contain'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./images/logoheader.png'
                alt='logo'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./logoswhite/norachem.png'
                alt='logo'
                className='object-contain'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./images/logoheader.png'
                alt='logo'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./logoswhite/norachem.png'
                alt='logo'
                className='object-contain'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./images/logoheader.png'
                alt='logo'
              />
            </div>
            <div className={style.slide}>
              <img
                src='./logoswhite/norachem.png'
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
