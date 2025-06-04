const PhilosophyData = ({ title, description }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-5xl text-white font-semibold leading-[60px]'>
        {title}
      </h3>
      <p className='text-lg text-[#646a69] font-medium'>{description}</p>
    </div>
  );
};

export default PhilosophyData;
