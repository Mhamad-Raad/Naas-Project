const JoinUsButton = ({ className = '' }) => {
  const baseStyles =
    'flex items-center justify-center bg-primary text-white text-sm rounded-full hover:bg-purple-700 transition';
  return <button className={`${baseStyles} ${className}`}>Join us</button>;
};

export default JoinUsButton;
