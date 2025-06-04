import Image from 'next/image';

import NewsButtons from './NewsItemButtons';

Image;
const NewsCard = ({ news }) => {
  return (
    <div className='flex gap-8'>
      <Image
        src={news?.image}
        alt={news?.title}
        className='w-[115px] md:w-[221px] h-[115px] md:h-[246px] object-cover rounded-2xl'
      />
      <div className='flex flex-col gap-6'>
        <h3 className='text-md md:text-2xl text-white font-medium md:leading-10'>
          {news?.title}
        </h3>
        <NewsButtons />
      </div>
    </div>
  );
};

export default NewsCard;
