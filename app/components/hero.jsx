import Button from './ButtonGrad';
import 'animate.css';

const Hero = () => {
  return (
    <section
      id='Home'
      className='h-[80vh] w-full p-8 flex gap-10 relative items-center flex-col justify-center'
    >
      <div className='animacionCirculo absolute flex items-center top-12 justify-center  w-full h-full'>
        <div className='circle'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
      </div>
      <div className='z-20 flex flex-col items-center justify-center gap-4'>
        <h1 className=' text-[32px] text-[#303036] animacionSuperiorTexto text-center lg:text-[72px]'>
          Innovating Chemistry
        </h1>
        <p className='text-[18px] text-[#303036] animacionInferiorTexto max-w-[700px] text-center'>
          Discover the synergy of technology and chemistry
          at XChem, where we revolutionise high-value
          chemical synthesis for accelerating the present
          and for a more transparent and reproducible
          future.
        </p>
      </div>
      <div className='animacionBotones flex items-center justify-center w-full z-20'>
        <Button
          props='Learn More'
          href={'#Contact'}
          clase='carder'
        />
      </div>
    </section>
  );
};
export default Hero;
