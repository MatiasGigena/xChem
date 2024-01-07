const AboutUs = () => {
  return (
    <section
      id='About'
      className='min-h-screen lg:h-[70vh] mt-14 lg:mt-0 p-8 gap-8  w-full flex flex-col lg:flex-row items-center justify-center '
    >
      <article className='lg:h-[450px] bg-white shadow-lg lg:w-[450px]  '>
        <div className='h-full p-8 w-full flex flex-col justify-center gap-6 items-center'>
          <img
            src='./images/image (2).webp'
            alt='img'
            className=' object-cover max-h-[180px] w-full '
          />
          <div className='flex lg:h-[150px] flex-col gap-3'>
            <p className='text-2xl text-[#303036] font-semibold'>
              Synthesis Pioneering
            </p>
            <span className='text-[#303036]'>
              XChem specializes in reproducible synthesis of
              high-value chemicals, emphasizing reliability
              and innovation. We aim for universal
              efficiency in chemical synthesis, shaping a
              transformative future.
            </span>
          </div>
        </div>
      </article>
      <article className='lg:h-[450px] bg-white shadow-lg lg:w-[450px]  '>
        <div className='h-full p-8 w-full flex flex-col justify-center gap-6 items-center'>
          <img
            src='./images/image (4).webp'
            alt='img'
            className=' object-cover max-h-[180px] w-full'
          />
          <div className='flex lg:h-[150px] flex-col gap-3'>
            <p className='text-2xl text-[#303036] font-semibold'>
              Chemputer Enhancement
            </p>
            <span className='text-[#303036]'>
              In-situ DoE: Our pioneering approach allows
              the Chemputer to adapt and optimize in
              real-time, leading to a self-improving,
              efficient, and precise synthesis system.
            </span>
          </div>
        </div>
      </article>
      <article className='lg:h-[450px] bg-white shadow-lg lg:w-[450px]  '>
        <div className='h-full p-8 w-full flex flex-col justify-center gap-6 items-center'>
          <img
            src='./images/image (3).webp'
            alt='img'
            className=' object-cover max-h-[180px] w-full'
          />
          <div className='flex  lg:h-[150px] flex-col gap-3'>
            <p className='text-2xl text-[#303036] font-semibold'>
              Hardware Advancement
            </p>
            <span className='text-[#303036]'>
              XChem has advanced the Chemputer’s technology,
              customizing its design, materials, and
              functionality, including hardware adaptations
              for complex chemical syntheses
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};
export default AboutUs;
