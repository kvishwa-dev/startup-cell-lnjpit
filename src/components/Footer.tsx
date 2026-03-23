import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-center">
        
        {/* Left Side - Important Links */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Important Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://lnjpitchapra.ac.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LNJPIT Chapra
              </a>
            </li>
            <li>
              <a href="https://startup.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Startup Bihar
              </a>
            </li>
            <li>
              <a href="https://www.startupindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Startup India
              </a>
            </li>
          </ul>
        </div>

        {/* Center Content */}
        <div className="mb-6 md:mb-0 text-center">
          <p className="text-lg font-semibold">
            Startup Cell – LNJPIT Chapra
          </p>
          <p className="text-sm mt-2">
            © 2026 All Rights Reserved.
          </p>
        </div>

        {/* Right Side - Contact & Social */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">startupcell@lnjpitchapra.ac.in</p>

          <div className="flex justify-center md:justify-end gap-4 mt-3 text-xl">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaXTwitter />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;