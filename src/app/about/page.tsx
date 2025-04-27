"use client";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { FaDownload, FaPrint, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/selfie.1.jpg",
    "/images/selfie.2.jpg",
    "/images/selfie.3.jpg",
    "/images/selfie.4.jpg",
    "/images/selfie.5.jpg",
    "/images/selfie.6.png",
  ];

  const texts = [
    "I'm a software developer crafting human-centered tools that make life simpler, smarter, and more joyful.",
    "Master juggler of priorities, nurturer of creativity, I find beauty in the mundane and chaotic.",
    "Curiosity fuels the soul, sometimes kills the cat.",
    "Cats have nine lives, and I have five. Numbers are in my favor.",
    "Life's greatest joys often come from small, thoughtful moments. Technology can help amplify that joy.",
    "Whimsy is a daily necessity.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <div className="ml-[100px] pt-[130px] pb-[100px] text-[#737373]">
        <h2 className="text-7xl font-bold">About</h2>
        <div className="flex flex-row items-start justify-between gap-12 px-[100px] pt-[80px] pl-[40px]">
          <div className="relative w-[320px] h-[320px]">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Selfie ${index + 1}`}
                className={`absolute top-0 left-0 w-[320px] h-auto rounded shadow-md transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="relative w-[45%] min-h-[140px] mt-[120px]">
            {texts.map((text, index) => (
              <p
                key={index}
                className={`absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                } text-[#737373] filter grayscale text-lg text-center`}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
