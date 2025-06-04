import Image from 'next/image';

const ServiceItem = ({ service }) => {
  return (
    <div className='w-[152px] h-[256px] md:w-[384px] md:h-auto flex flex-col justify-start items-center gap-8'>
      <div className='w-[118px] h-[118px] md:w-[152px] md:h-[152px] bg-[#f1f1f1] rounded-md flex items-center justify-center'>
        <div className='w-[111px] h-[111px] md:w-[143px] md:h-[143px] bg-primary rounded-full flex items-center justify-center'>
          <Image src={service?.icon} alt={service?.title} />
        </div>
      </div>
      <div className='mt-2 flex flex-col items-center justify-center gap-[10px]'>
        <h3 className='text-center text-md md:text-[21px] text-white font-medium leading-6'>
          {service?.title}
        </h3>
        <p className='text-[#646a69] text-center'>{service?.description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
