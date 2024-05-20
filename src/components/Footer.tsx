const Footer = () => {
  return (
    <footer className="footer px-12 max-w-[1244px] my-8 mx-auto">
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Terms</a>
        <a className="link link-hover">Privacy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Discover</h6>
        <a className="link link-hover">Categories list</a>
      </nav>
      <nav>
        <h6 className="footer-title">For Business</h6>
        <a className="link link-hover">Business</a>
      </nav>
      <nav>
        <h6 className="footer-title">Cities</h6>
        <a className="link link-hover">Los Angeles CA</a>
        <a className="link link-hover">Washington DC</a>
        <a className="link link-hover">Houston TX</a>
      </nav>
    </footer>
  );
};
<div className="px-8 max-w-[1244px] mt-8 mx-auto">
  <div className="flex flex-col md:flex-row justify-between  mb-12">
    <div className="flex flex-col justify-center mb-6">
      <ul>
        <li className="text-lg font-bold mb-3">About</li>
        <li className="text-gray-500">Terms</li>
        <li className="text-gray-500">Privacy</li>
      </ul>
    </div>
    <div className="flex flex-col justify-center mb-6">
      <ul>
        <li className="text-lg font-bold mb-3">Discover</li>
        <li className="text-gray-500">Categories list</li>
      </ul>
    </div>
    <div className="flex flex-col justify-center mb-6">
      <ul>
        <li className="text-lg font-bold mb-3">For Business</li>
        <li className="text-gray-500">Business</li>
      </ul>
    </div>
    <div className="flex flex-col justify-center mb-6">
      <ul>
        <li className="text-lg font-bold mb-3">Cities</li>
        <li className="text-gray-500">Los Angeles CA</li>
        <li className="text-gray-500">Washington DC</li>
        <li className="text-gray-500">Houston TX</li>
      </ul>
    </div>
  </div>
</div>;

export default Footer;
