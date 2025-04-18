"use client";
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
    "I&aposm a software developer passionate about creating human-centered solutions by leveraging technology to make our lives simpler, more efficient, and more fulfilling.",
    "Master of priority juggling, nurturer of creativity, and finder of beauty in the mundane and chaotic. At life and at work.",
    "Curiosity fuels the soul, and killed the cat.",
    "Cats have nine lives, and I have five cats.  The math is in my favor.",
    "Life&aposs greatest joys often come from small, thoughtful moments. Technology should be simple in utility and amplify one's joy.",
    "Whimsy? It&aposs a daily necessity. Period.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <Header />

      <div className="ml-[100px] pt-[130px] pb-[100px] text-[#5a5a5a]">
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
                } text-red-500 filter grayscale text-lg text-center`}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
