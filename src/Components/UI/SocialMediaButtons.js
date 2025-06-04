import Image from 'next/image';

const SocialMediaButton = ({ Icon, label }) => {
  return (
    <button className='w-[256px] h-[56px] flex items-center gap-3 px-1 py-2 rounded-full bg-[#ffffff3d] text-white'>
      <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary'>
        <Image src={Icon} alt={`${label} icon`} className='w-6 h-6' />
      </div>
      <span className='text-md font-medium'>{label}</span>
    </button>
  );
};

export default SocialMediaButton;
