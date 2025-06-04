import Image from 'next/image';

import BG from '@/assets/About/BG.png';

const AboutUs = () => {
  return (
    <section className='px-3 md:px-0 md:h-[626px] flex items-center justify-center relative overflow-visible md:overflow-hidden oxerflow-x-hidden'>
      {/* <Image
        alt='About Us Background'
        src={BG}
        className='absolute top-10 md:top-0 md:right-105 h-[803px] w-[842px] md:w-auto md:h-auto'
      /> */}
      <div className='w-[800px] flex flex-col items-center justify-center gap-8 z-10'>
        <h2 className='text-2xl md:text-5xl text-white leading-[60px] font-medium'>
          About Us
        </h2>
        <p className='text-center md:text-justify text-md text-[#d9d9d9]'>
          Welcome to{' '}
          <span className='text-primary'>Focus Marketing Solutions</span>!
          We&apos;re a creative team dedicated to driving your business forward
          with innovative marketing strategies. From digital marketing to social
          media management, we&apos;re here to help you succeed.{' '}
          <span className='text-primary'>
            Let&apos;s build something extraordinary together.
          </span>
        </p>
        <button className='w-full md:w-[148px] h-[56px] mt-2 text-[#9350f2] text-lg font-medium bg-transparent border border-[#9350f2] rounded-full hover:bg-purple-700 hover:text-white transition'>
          Read more
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
