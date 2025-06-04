import PriceListing from '../UI/PricingListing';

const Pricing = () => {
  return (
    <section className='px-6 md:px-22 flex flex-col md:flex-row gap-8'>
      <div className='md:w-[723px] flex flex-col gap-3'>
        <h2 className='md:w-[591px] text-center md:text-left text-2xl md:text-[67px] text-white font-bold'>
          Simple pricing for your Business
        </h2>
        <p className='text-md md:text-lg text-center md:text-left text-white opacity-[68]'>
          We have several powerful plans to showcase your business and get
          discovered as a creative entrepreneurs. Everything you need.
        </p>
      </div>
      <PriceListing />
    </section>
  );
};

export default Pricing;
