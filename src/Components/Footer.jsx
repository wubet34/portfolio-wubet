import React from "react";
import { Icons } from "../assets";

const Footer = () => {
  const date = new Date();

  const socialLinks = [
    { icon: <Icons.github size={24} />, link: "https://github.com/wubet34" },
    { icon: <Icons.linkedin size={24} />, link: "https://www.linkedin.com/in/wubet-alebachew-a376592a6/" },
    { icon: <Icons.mail size={24} />, link: "mailto:wubet453@gmail.com" },
  ];

  return (
    <footer className="flex flex-col items-center justify-center p-8 w-full bg-gray-800 dark:bg-gray-900 text-white transition-colors shadow">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-500 to-orange-600 mb-2">
        WubetAlebachew
      </h1>
      <p className="text-gray-300 text-center mb-6">
        Frontend Developer & UI/UX Designer creating exceptional digital experiences
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-5 mb-6">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white 
                       flex items-center justify-center transition-all duration-300 
                       hover:scale-110 hover:bg-linear-to-r hover:from-green-500 hover:to-green-700"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <hr className="w-full border-gray-600 mb-4" />

      <p className="text-gray-400 text-sm">
        © {date.getFullYear()} Wubet Alebachew. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
