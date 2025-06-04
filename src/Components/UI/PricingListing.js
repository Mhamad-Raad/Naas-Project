'use client';

import { useState } from 'react';
import PriceItem from './PriceItem';

const pricingData = [
  {
    title: 'Intro',
    description: 'Basic intro features.',
    price: 'Free',
  },
  {
    title: 'Base',
    description: 'Base plan for small teams.',
    price: '$49',
  },
  {
    title: 'Pro',
    description:
      'Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu',
    price: '$123',
    badge: 'Save $40',
    button: 'Try 1 month',
  },
  {
    title: 'Enterprise',
    description: 'Full enterprise suite for scale.',
    price: 'Custom',
  },
];

const PricingListing = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col gap-4'>
      {pricingData.map((item, index) => (
        <PriceItem
          key={index}
          open={openIndex === index}
          onClick={() => toggle(index)}
          index={index}
          active={openIndex === index}
          {...item}
        />
      ))}
    </div>
  );
};

export default PricingListing;
