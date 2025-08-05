import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 bg-green-500 p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all duration-300 transform hover:translate-y-[-6px] hover:shadow-xl">
      <a
        href="https://wa.me/+923419065269" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-4xl" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
