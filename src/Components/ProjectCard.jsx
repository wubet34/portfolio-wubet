import React from "react";
import { Icons } from "../assets";
import { ExternalLink } from "lucide-react";
import tomato from '../assets/tomato.png';
import virtual from '../assets/virtual.png';
import estate from '../assets/estate.png';

const projects = [
  {
    title: "Tomato Food Delivery UI",
    image: tomato,
    description:
      "Order your favorite food online with a sleek front-end interface. Browse a diverse menu, add items to your cart, and experience an intuitive and appetizing UI designed for food lovers.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://github.com/wubet34/Tomato",
    live: "https://wubet34.github.io/Tomato"
  },
  {
    title: "Estate Real Estate UI",
    image: estate,
    description:
      "Explore homes that fit your dreams with this responsive front-end design. Navigate property listings, learn about the brand, and enjoy a clean, professional interface tailored for real estate browsing.",
    tech: ["React.js", "CSS"],
    link: "https://github.com/wubet34/E-state",
    live: "https://wubet34.github.io/E-state/"
  },
  {
    title: "VirtualR Dashboard UI",
    image: virtual,
    description:
      "Empower your creativity with a front-end interface designed for VR app developers. Discover intuitive layouts and interactive dashboard elements that turn ideas into immersive experiences.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://github.com/wubet34/Virtual",
    live: "https://w-virtual.netlify.app/"
  },
];


const ProjectCard = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 transition-colors overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((item, i) => (
                <li
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-500 hover:underline"
              >
                <Icons.github />
                View Code
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-500 hover:underline"
              >
                <ExternalLink />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
