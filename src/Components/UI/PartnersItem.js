import Image from 'next/image';

const PartnersItem = ({ Logo }) => {
  return (
    <div className='w-[419px] h-[88px] flex items-center justify-center bg-white rounded-lg'>
      <Image
        src={Logo}
        alt='Partner Logo'
        className='max-w-[110px] max-h-[75px]'
      />
    </div>
  );
};

export default PartnersItem;
