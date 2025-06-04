import Image from 'next/image';

const Quote = ({ client }) => {
  return (
    <div className='flex flex-col p-[45px] bg-[#161616] rounded-[10px] w-[427px] max-h-[400px]'>
      <div className='relative'>
        <Image
          src={client?.image}
          alt={client?.name}
          width={64}
          height={60}
          className='rounded-full object-cover'
        />
        <p className='p-2 bg-green-400 rounded-full text-lg text-black absolute top-0 right-0'>
          "
        </p>
      </div>
      <p className='text-white font-semibold mt-[10px]'>{client?.name}</p>
      <p className='text-lg text-white leading-[27px] mt-4'>{client?.quote}</p>
    </div>
  );
};

export default Quote;
