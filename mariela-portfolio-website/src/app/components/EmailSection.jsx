"use client";
import React from "react";

const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00ADB5]/10 to-transparent blur-3xl -left-4 top-1/2 transform -translate-y-1/2"></div>
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always open. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
      </div>

      <div className="z-10">
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
            <input 
                type="email" id="email" required 
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-[#00ADB5] outline-none"
                placeholder="mariela@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
            <textarea 
                name="message" id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-[#00ADB5] outline-none"
                placeholder="Let's talk about..."
            />
          </div>
          <button type="submit" className="bg-[#00ADB5] hover:bg-[#008d94] text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;