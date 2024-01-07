import Button from './ButtonGrad';

const Contact = () => {
  return (
    <section
      id='Contact'
      className='h-[90vh] contact p-8 flex gap-10 relative items-center flex-col justify-center'
    >
      <div className='w-full bg-[#f9fafa] h-full absolute flex items-center top-12  justify-center  '>
        <div className='circle'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
      </div>
      <div className='z-20 flex flex-col items-center justify-center gap-4'>
        <h1 className='text-[#303036] text-[26px]  text-center lg:text-[72px]'>
          Your Pathway Begins Here
        </h1>
        <p className=' text-[18px] lg:text-[24px] text-[#303036]  max-w-[700px] text-center'>
          Reach out to learn more about our technologies,
          services, or to discuss potential collaborations.
          Our team is ready to embark on this exciting
          journey with you.
        </p>
      </div>
      <div className='animate__animated flex items-center justify-center w-full z-20'>
        <Button
          props='Contact Us'
          href={'mailto:info@xchem.io'}
        />
      </div>
    </section>
  );
};
export default Contact;
