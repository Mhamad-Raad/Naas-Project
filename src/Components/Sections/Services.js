import ServiceItem from '../UI/ServiceItem';

import VideoMaking from '@/assets/Services/VideoMaking.png';
import SocialMediaMarketing from '@/assets/Services/SocialMediaMarketing.png';
import MarketingStrategy from '@/assets/Services/MarketingStrategy.png';
import EmailMarketing from '@/assets/Services/EmailMarketing.png';
import ContentWriting from '@/assets/Services/ContentWriting.png';
import Branding from '@/assets/Services/Branding.png';

const Services = () => {
  const services = [
    {
      title: 'Video Making',
      description: 'Random text',
      icon: VideoMaking,
    },
    {
      title: 'Social Media Marketing',
      description:
        'Random text',
      icon: SocialMediaMarketing,
    },
    {
      title: 'Marketing Strategy',
      description:
        'Random text',
      icon: MarketingStrategy,
    },
    {
      title: 'Email Marketing',
      description:
        'Random text',
      icon: EmailMarketing,
    },
    {
      title: 'Content Writing',
      description:
        'Random text',
      icon: ContentWriting,
    },
    {
      title: 'Branding',
      description:
        'Random text',
      icon: Branding,
    },
  ];

  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-2xl md:text-5xl'>Our Services</h2>
      <p className='mt-4 text-lg text-center md:text-left text-[#646a69]'>
        ransforming your online presence with innovative digital strategies
      </p>
      <div className='mt-10 md:mt-[136px] flex flex-wrap justify-center items-center gap-y-23 gap-x-8'>
        {services.map((service, index) => (
          <ServiceItem service={service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
