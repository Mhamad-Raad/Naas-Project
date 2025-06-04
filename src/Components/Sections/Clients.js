import QuotesList from '../UI/QuotesList';

const Clients = () => {
  return (
    <section className='w-full h-[1048px] bg-primary flex flex-col items-center mb-[400px] gap-20 overflow-hidden'>
      <h2 className='text-white text-5xl mt-50'>Our clients opinions</h2>
      <QuotesList />
    </section>
  );
};

export default Clients;
