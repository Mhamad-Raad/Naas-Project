import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import ClientCard from './QuoteCard';

import P1 from '@/assets/Clients/P1.png';
import P2 from '@/assets/Clients/P2.png';
import P3 from '@/assets/Clients/P3.png';

const clients = [
  {
    name: 'Jonathan Sweeney',
    image: P1,
    quote:
      'I love that model. I [used to have to]call all around, and I absolutely lovethat model that you could save me the time and headache of doing that.',
  },
  {
    name: 'Barbara Cook',
    image: P2,
    quote:
      'I am so happy with your company. Ever since my insurer switched to you, everything and everybody I’ve spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!',
  },
  {
    name: 'Mary Rogers',
    image: P3,
    quote:
      'I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful.',
  },
  {
    name: 'Jonathan Sweeney',
    image: P1,
    quote:
      'I love that model. I [used to have to]call all around, and I absolutely lovethat model that you could save me the time and headache of doing that.',
  },
  {
    name: 'Barbara Cook',
    image: P2,
    quote:
      'I am so happy with your company. Ever since my insurer switched to you, everything and everybody I’ve spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!',
  },
  {
    name: 'Mary Rogers',
    image: P3,
    quote:
      'I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful.',
  },
];

const QuotesList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const card = container?.children[index + 1];
    if (card && container) {
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      container.scrollTo({
        left: cardCenter - containerCenter,
        behavior: 'smooth',
      });
    }
    setCurrentIndex(index);
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className='flex flex-col items-center w-full relative'>
      {currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg'
        >
          <ChevronLeft className='w-5 h-5' />
        </button>
      )}

      {currentIndex < clients.length - 1 && (
        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, clients.length - 1))
          }
          className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg'
        >
          <ChevronRight className='w-5 h-5' />
        </button>
      )}
      <div
        ref={containerRef}
        className='flex overflow-x-hidden snap-x snap-mandatory px-6 gap-4 w-full max-w-screen-xl scroll-smooth'
      >
        <div style={{ width: '50%' }} className='shrink-0' />

        {clients.map((client, i) => (
          <div
            key={i}
            className='shrink-0 snap-center'
            style={{ width: '427px' }}
          >
            <ClientCard client={client} />
          </div>
        ))}

        <div style={{ width: '50%' }} className='shrink-0' />
      </div>

      <div className='flex gap-2 mt-6'>
        {clients.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuotesList;
