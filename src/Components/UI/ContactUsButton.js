const ContactUsButton = ({ className = '' }) => {
  const baseStyles =
    'flex items-center justify-center border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition';
  return <button className={`${baseStyles} ${className}`}>Contact us</button>;
};

export default ContactUsButton;
