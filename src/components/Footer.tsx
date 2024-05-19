
const Footer = () => {
  return (
    <div className="px-8 max-w-[1244px] mt-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between  mb-12">
        <div className="flex flex-col justify-center mb-6">
          <ul>
            <li className="text-lg font-bold mb-3">About</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">Press</li>
            <li className="text-gray-500">Investors</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center mb-6">
          <ul>
            <li className="text-lg font-bold mb-3">Discover</li>
            <li className="text-gray-500">Collections</li>
            <li className="text-gray-500">Talk</li>
            <li className="text-gray-500">Events</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center mb-6">
          <ul>
            <li className="text-lg font-bold mb-3">For Business</li>
            <li className="text-gray-500">Business Login</li>
            <li className="text-gray-500">Claim Business</li>
            <li className="text-gray-500">Advertise</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center mb-6">
          <ul>
            <li className="text-lg font-bold mb-3">Languages</li>
            <li className="text-gray-500">Select Language</li>
            <li className="text-gray-500">Explore</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
