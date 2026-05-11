"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="px-6 py-12 lg:py-20" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <div className="col-span-7 place-self-center text-center lg:text-left sm:text-left">
          <h1 className="text-white mb-5 text-4xl lg:text-7xl font-extrabold leading-tight sm:text-5xl">
            <span className="text-[#00ADB5]">Hello, I'm {" "}</span>
            <br />
            <TypeAnimation
              sequence={['Mariela', 1000, 'a Web Developer', 1000, 'a Mobile Developer', 1000, 'a UI/UX Designer', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-8 lg:text-xl leading-relaxed max-w-2xl">
            I specialize in crafting high-performance web and mobile applications with a focus on sleek, 
            modern user experiences. Let's build something exceptional together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-[#00ADB5] text-white font-bold hover:bg-[#008d94] transition-all shadow-[0_0_20px_rgba(0,173,181,0.3)]">
              Hire Me
            </button>
            <a 
              href="/resume.pdf" 
              download="Mariela_Resume.pdf"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#00ADB5] to-purple-600 text-white font-semibold transition-all text-center inline-block"
            >
              <span className="block bg-[#121212] hover:bg-[#181818] rounded-full px-5 py-2">
                Download Resume
              </span>
            </a>
          </div>
        </div>

        <div className="col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative rounded-full w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] overflow-hidden border-2 border-[#00ADB5]/50 shadow-[0_0_60px_rgba(0,173,181,0.2)]">
            <Image
              src="/images/mariela.png"
              alt="hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;