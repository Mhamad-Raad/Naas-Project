import PhilosophyData from '../UI/PhilosophyData';

import NetProfitChart from '../charts/NetProfitChart';
import DonutChart from '../charts/DonutChart';

const Philosophy = () => {
  const PData = [
    {
      id: 1,
      title: '1,200+',
      description: 'Clients',
    },
    {
      id: 2,
      title: '20+',
      description: 'Branches',
    },
    {
      id: 3,
      title: '200+',
      description: 'Number of Employees',
    },
    {
      id: 4,
      title: '315+',
      description: 'Sales Representative',
    },
  ];
  return (
    <section className='px-6 md:px-[72px] flex flex-col'>
      <div className='w-full pb-4 flex items-center gap-2 border-b brder-[#d9dedd]'>
        <div className='w-2 h-2 bg-[#f2f2f2] rounded-full' />
        <p className='text-sm text-primary leading-5'>
          The company's philosophy
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-between mt-14'>
        <div className='md:w-[592px] flex flex-col gap-6'>
          <h2 className='text-[32px] md:text-[62px] text-primary md:leading-[75px]'>
            We bear the responsibility of developing the sector.
          </h2>
          <p className='text-md md:text-2xl text-[#646a69] md:leading-[36px]'>
            Elevate your brand with our comprehensive marketing solutions,
            including Digital Marketing, Content Creation, and Social Media
            Strategy. Enhance visibility through expert SEO and PPC management,
          </p>
        </div>
        <div className='w-full md:w-[334px] flex flex-wrap md:flex-col gap-6 md:gap-[64px] mt-3 md:mt-0'>
          {PData.map((item) => (
            <PhilosophyData
              title={item.title}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className='mt-[86px] flex flex-col gap-[25px]'>
        <h3 className='text-2xl font-semibold'>Our charts</h3>

        <div className='flex flex-col md:flex-row gap-[48px]'>
          <NetProfitChart />
          <DonutChart />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
