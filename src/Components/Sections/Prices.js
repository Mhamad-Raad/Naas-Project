import PriceListing from '../UI/PricingListing';

const Pricing = () => {
  return (
    <section className='px-22 flex gap-8 mb-[500px]'>
      <div className='w-[723px] flex flex-col gap-3'>
        <h2 className='w-[591px] text-[67px] text-white font-bold'>
          Simple pricing for your Business
        </h2>
        <p className='text-lg text-white opacity-[68]'>
          We have several powerful plans to showcase your business and get
          discovered as a creative entrepreneurs. Everything you need.
        </p>
      </div>
      <PriceListing />
    </section>
  );
};

export default Pricing;
