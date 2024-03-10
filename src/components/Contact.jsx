import React from 'react';
import { RiMailLine, RiLinkedinLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';

function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-[#ffffff] rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#006d77]">Contact Me</h2>
          <MdClose className="text-gray-600 cursor-pointer" />
        </div>
        <form >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#E29578]" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#E29578]" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#E29578]"></textarea>
          </div>
          <button type="submit" className="bg-[#006d77] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#83c5be] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#006d77] focus:ring-opacity-50">Submit</button>
        </form>
        <div className="flex justify-center mt-4">
          <a href="mailto:your@email.com">
            <RiMailLine className="text-[#006d77] text-2xl cursor-pointer mx-2 hover:text-[#004e58]" />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
            <RiLinkedinLine className="text-[#006d77] text-2xl cursor-pointer mx-2 hover:text-[#004e58]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
