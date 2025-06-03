import ServiceItem from '../UI/ServiceItem';

import VideoMaking from '@/assets/Services/VideoMaking';
import SocialMediaMarketing from '@/assets/Services/SocialMediaMarketing';
import MarketingStrategy from '@/assets/Services/MarketingStrategy';
import EmailMarketing from '@/assets/Services/EmailMarketing';
import ContentWriting from '@/assets/Services/ContentWriting';
import Branding from '@/assets/Services/Branding';

const Services = () => {
  const services = [
    {
      title: 'Video Making',
      description: 'Creating engaging and professional videos for your brand.',
      icon: VideoMaking,
    },
    {
      title: 'Social Media Marketing',
      description:
        'Boosting your online presence through strategic social media campaigns.',
      icon: SocialMediaMarketing,
    },
    {
      title: 'Marketing Strategy',
      description:
        'Developing tailored marketing strategies to achieve your business goals.',
      icon: MarketingStrategy,
    },
    {
      title: 'Email Marketing',
      description:
        'Crafting effective email campaigns to engage your audience.',
      icon: EmailMarketing,
    },
    {
      title: 'Content Writing',
      description:
        'Producing high-quality content that resonates with your target audience.',
      icon: ContentWriting,
    },
    {
      title: 'Branding',
      description:
        'Building a strong brand identity that stands out in the market.',
      icon: Branding,
    },
  ];

  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-5xl'>Our Services</h2>
      <p className='mt-4 text-lg text-[#646a69]'>
        ransforming your online presence with innovative digital strategies
      </p>
      <div className='mt-[136px] flex flex-wrap justify-center items-center gap-y-23 gap-x-8'>
        {services.map((service, index) => (
          <ServiceItem service={service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
