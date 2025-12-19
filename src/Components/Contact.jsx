import React, { useRef, useState } from "react";
import { Icons } from "../assets";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState({ message: "", type: "", show: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dlosgkn", // your EmailJS service ID
        "template_quttver", // your EmailJS template ID
        form.current,
        "vs3a6fDah1kJm1fM_" // your EmailJS public key
      )
      .then(
        () => {
          showPopup("Message sent successfully!", "success");
          e.target.reset();
        },
        () => {
          showPopup("Failed to send message. Please try again.", "error");
        }
      );
  };

  const showPopup = (message, type) => {
    setPopup({ message, type, show: true });
    setTimeout(() => setPopup({ message: "", type: "", show: false }), 3000);
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition-colors pt-20 mb-20 relative"
    >
      {/* Popup */}
      {popup.show && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg font-medium shadow-lg text-white z-50 transition-all transform duration-300 ${
            popup.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {popup.message}
        </div>
      )}

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Get <span className="border-b-2 border-green-500">In To</span>uch
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I'm currently available for freelance projects or full-time opportunities.
            Whether you need a complete website, a redesign, or consultation on your
            frontend architecture, I'd love to hear about your project.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Icons.location className="text-green-500 mt-1" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600 dark:text-gray-400">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icons.mail className="text-green-500 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600 dark:text-gray-400">wubet453@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icons.phone className="text-green-500 mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600 dark:text-gray-400">+251 920 29 14 97</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full lg:flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-4 space-y-5"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
