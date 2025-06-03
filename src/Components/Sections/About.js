import Image from 'next/image';

import BG from '@/assets/About/BG.png';

const AboutUs = () => {
  return (
    <section className='h-[626px] mb-[500px] flex items-center justify-center relative'>
      <Image
        alt='About Us Background'
        src={BG}
        className='absolute top-0 right-105'
      />
      <div className='w-[800px] flex flex-col items-center justify-center gap-8 z-10'>
        <h2 className='text-5xl text-white leading-[60px] font-medium'>
          About Us
        </h2>
        <p className='text-justify text-md text-[#d9d9d9]'>
          Welcome to{' '}
          <span className='text-primary'>Focus Marketing Solutions</span>! We're
          a creative team dedicated to driving your business forward with
          innovative marketing strategies. From digital marketing to social
          media management, we're here to help you succeed.{' '}
          <span className='text-primary'>
            Let's build something extraordinary together.
          </span>
        </p>
        <button className='w-[148px] h-[56px] mt-2 text-primary text-lg font-medium border border-primary rounded-full hover:bg-purple-700 hover:text-white transition'>
          Read more
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
