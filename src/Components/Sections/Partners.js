import PartnersItem from '../UI/PartnersItem';

import BMW from '@/assets/partners/BMW.png';
import CIB from '@/assets/partners/CIB.png';
import HUAWEI from '@/assets/partners/HUAWEI.png';
import NASA from '@/assets/partners/NASA.png';
import NAAS from '@/assets/partners/NAAS.png';

const Partners = () => {
  return (
    <section className='flex flex-col gap-2 md:gap-16 items-center justify-center'>
      <h2 className='text-lg md:text-5xl text-white leading-[60px] font-medium'>
        Our Partners
      </h2>
      <div className='overflow-hidden w-full py-6'>
        <div className='whitespace-nowrap animate-marquee'>
          <div className='inline-flex gap-6'>
            <PartnersItem Logo={BMW} />
            <PartnersItem Logo={CIB} />
            <PartnersItem Logo={HUAWEI} />
            <PartnersItem Logo={NASA} />
            <PartnersItem Logo={NAAS} />
            {/* remove the reset */}
            <PartnersItem Logo={BMW} />
            <PartnersItem Logo={CIB} />
            <PartnersItem Logo={HUAWEI} />
            <PartnersItem Logo={NASA} />
            <PartnersItem Logo={NAAS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
