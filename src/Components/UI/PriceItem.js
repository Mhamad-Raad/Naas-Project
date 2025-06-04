'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PriceItem = ({
  title,
  description,
  price,
  badge,
  button,
  open,
  onClick,
  index,
  active,
}) => {
  return (
    <button
      type='button'
      className={`w-[480px] rounded-xl overflow-hidden ${
        active ? 'bg-primary text-white' : 'bg-[#1a1a1a] text-primary'
      } transition-all duration-300`}
      onClick={onClick}
    >
      <div className='flex justify-between items-center px-6 py-4 cursor-pointer'>
        <h3
          className={`text-[27px] font-medium flex items-center gap-3 ${
            active ? 'text-white' : 'text-primary'
          }`}
        >
          {title}

          {badge && (
            <div className='w-[82px] h-[36px] flex items-center justify-center bg-white text-primary text-sm font-semibold rounded'>
              {badge}
            </div>
          )}
        </h3>
        {open ? (
          <div className='p-1 rounded-full bg-[#7e6581d7]'>
            <ChevronUp className='w-5 h-5' />
          </div>
        ) : (
          <div className='p-1 rounded-full bg-primary text-white'>
            <ChevronDown className='w-5 h-5' />
          </div>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key='content'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='px-6 pb-6'
          >
            <p className='mb-4 text-sm text-white/80'>{description}</p>
            <div className='flex items-center justify-between'>
              <span className='text-2xl font-bold text-white'>{price}</span>
              {button && (
                <div
                  className='bg-white text-primary px-4 py-2 rounded-lg font-medium'
                  type='button'
                >
                  {button}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default PriceItem;
