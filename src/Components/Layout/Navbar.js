import Image from 'next/image';

// import Link from 'next/link';

import ContactUsButton from '../UI/ContactUsButton';
import JoinUsButton from '../UI/JoinUsButton';

import Logo from '@/assets/Logo.png';

const Navbar = () => {
  return (
    <nav className='w-full text-white px-12 py-4 flex items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <Image src={Logo} alt='Logo' width={135} height={40} />
      </div>

      <ul className='flex gap-x-8 items-center text-sm font-medium'>
        <li>
          <a href='#home' className='hover:text-gray-300'>
            Home
          </a>
        </li>
        <li>
          <a href='#about' className='hover:text-gray-300'>
            About us
          </a>
        </li>
        <li>
          <a href='#services' className='hover:text-gray-300'>
            Services
          </a>
        </li>
        <li>
          <a href='#branches' className='hover:text-gray-300'>
            Branches
          </a>
        </li>
        <li className='flex gap-1 items-center relative'>
          <a href='#jobs' className='hover:text-gray-300'>
            Jobs
          </a>
          <span className='text-[12px] bg-primary px-1.5 py-0.5 rounded-full'>
            12
          </span>
        </li>
      </ul>

      <div className='hidden md:flex items-center space-x-4'>
        <ContactUsButton className='w-[112px] h-[47px]' />
        <JoinUsButton className='w-[87px] h-[47px]' />
      </div>
    </nav>
  );
};

export default Navbar;
