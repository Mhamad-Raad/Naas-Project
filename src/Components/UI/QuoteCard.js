import Image from 'next/image';

const QuoteCard = ({ client }) => {
  return (
    <div className='flex flex-col p-[45px] bg-[#161616] rounded-[10px] w-[314px] md:w-[427px] max-h-[400px]'>
      <div className='relative w-[64px]'>
        <Image
          src={client?.image}
          alt={client?.name}
          width={64}
          height={60}
          className='rounded-full object-cover'
        />
        <p className='pt-3 w-4 h-4 bg-green-400 rounded-full text-lg text-black absolute top-0 right-0 flex items-center justify-center'>
          &quot;
        </p>
      </div>
      <p className='text-white font-semibold mt-[10px]'>{client?.name}</p>
      <p className='text-sm md:text-lg text-white leading-[27px] mt-4'>
        {client?.quote}
      </p>
    </div>
  );
};

export default QuoteCard;
