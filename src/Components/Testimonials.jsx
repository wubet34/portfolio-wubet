import React, { useEffect, useState } from "react";
import { Icons, Testimonial } from "../assets";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === Testimonial.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? Testimonial.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-colors pt-20" id='testimonials'>
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Client <span className="border-b-2 border-green-500">Testi</span>monials
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          What clients and colleagues say about working with me
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 text-center">
        {Testimonial.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ease-in-out ${
              index === current ? "opacity-100 block" : "opacity-0 hidden"
            } bg-white dark:bg-gray-800 shadow rounded-2xl p-20`}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6 text-green-500">
              <Icons.quote className="w-10 h-10 opacity-80" />
            </div>

            {/* Text */}
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic">
              “{item.body}”
            </p>

            {/* Profile */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={item.profile}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
              />

              <div className="text-left">
                <h2 className="font-semibold">{item.name}</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.company}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8 mb-8">
          {Testimonial.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current
                  ? "bg-green-500 scale-110"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
