import Image from 'next/image';

import NewsCard from '../UI/NewsCard';
import NewsButtons from '../UI/NewsItemButtons';

import Img1 from '@/assets/News/Img1.png';
import Img2 from '@/assets/News/Img2.png';
import Img3 from '@/assets/News/Img3.png';
import Img4 from '@/assets/News/Img4.png';

const News = () => {
  const NewsData = [
    {
      id: 2,
      image: Img2,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
    },
    {
      id: 3,
      image: Img3,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
    },
    {
      id: 4,
      image: Img4,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
    },
  ];
  return (
    <section className='w-full px-22 flex flex-col gap-[108px]'>
      <div className='flex justify-between items-center'>
        <h2 className='text-[44px] font font-medium leading-[54px]'>News</h2>
        <button className='w-[167px] h-[55px] text-sm text-white font-medium bg-primary rounded-full'>
          View all news
        </button>
      </div>

      <div className='flex gap-8'>
        <div className='flex flex-col gap-8'>
          <Image
            src={Img1}
            alt='News Image 1'
            className='w-[696px] h-[460px] object-cover rounded-2xl'
          />
          <div className='w-[696px] flex flex-col gap-4'>
            <NewsButtons />
            <h3 className='mt-2 text-[32px] text-white font-medium leading-10'>
              We specialize in fostering effective partnerships with supportive
              companies to drive mutual success.
            </h3>
            <p className='text-lg text-[#646a69] leading-[26px]'>
              We are committed to building effective partnerships with
              supporting companies, contributing to the advancement,
              development, and expansion of the sector through diverse
              capabilities, expertise, and technological innovation.
            </p>
          </div>
        </div>
        <div className='w-[530px] flex flex-col gap-8'>
          {NewsData.map((news) => (
            <NewsCard news={news} key={news.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
