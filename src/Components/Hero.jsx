import React from 'react';
import { Icons } from '../assets';
import image from '../assets/me.JPG';


const Hero = () => {
  return (
    <div id='hero' className='w-full  bg-white dark:bg-gray-900 text-black dark:text-white transition-colors shadow'>
      <div className="flex flex-col lg:flex-row justify-around px-8 lg:px-20 py-10 mx-auto gap-20 items-center lg:items-start">

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start p-4">
          <h1 className='text-5xl lg:text-6xl text-center lg:text-start py-4'>
            Frontend <span className='bg-linear-to-r from-green-500 to-orange-500 text-transparent bg-clip-text'>Developer &</span>  UI/UX Designer
          </h1>
          <p className='text-center lg:text-start py-4'>
            I create beautiful, functional, and responsive web experiences with modern technologies and best practices.
          </p>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-5">
           <button
  onClick={() => document.getElementById("project").scrollIntoView({ behavior: "smooth" })}
  className=" w-full md:w-auto bg-linear-to-r from-green-500 to-green-800 px-6 py-3 rounded-md text-white text-xl cursor-pointer hover:bg-linear-to-l transition duration-300"
>
  View My Work
</button>

<button
  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
  className=" w-full md:w-auto px-6 py-3 rounded-md border border-green-500 dark:text-white text-xl cursor-pointer hover:bg-linear-to-l from-green-500 to-green-800 hover:text-white transition duration-300 text-center"
>
  Contact Me
</button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 p-6">
            {[ 
              { icon: <Icons.github />, link: "https://github.com/wubet34" },
              { icon: <Icons.linkedin />, link: "https://www.linkedin.com/in/wubet-alebachew-a376592a6/" },
              { icon: <Icons.mail />, link: "mailto:wubet453@gmail.com" }

            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full 
                           hover:text-white dark:hover:text-black 
                           transition-colors duration-300 ease-in-out 
                           hover:scale-110 hover:bg-linear-to-r hover:from-green-500 hover:to-green-800 
                           flex items-center justify-center"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end w-full">
          <img className='rounded-full w-64 h-64 object-cover lg:h-94 lg:w-94 border-8 border-gray-100' src={image} alt="Profile" />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
