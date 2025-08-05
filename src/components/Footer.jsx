import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F7C8D4] text-black py-4 border-t">
      <div className="container mx-auto px-6">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-2">
          <a
            href="https://www.tiktok.com/@scrubsbakery._?_t=ZS-8vpkyes91zo&_r=1" // Replace with actual TikTok URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black transition"
          >
            <FaTiktok size={22} />
          </a>
          <a
            href="https://www.instagram.com/scrubsbakery._?igsh=bnA0aG1xeng2a3Q1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-pink-600 transition"
          >
            <FaInstagram size={22} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-[#202020] font-[Josefin Sans, Arial, sans-serif]">
          © Scrubs Bakery All Rights Reserved 2025 | Developed by{" "}
          <strong>
            <a
              href="https://devrexdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Devrex Digital
            </a>
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
