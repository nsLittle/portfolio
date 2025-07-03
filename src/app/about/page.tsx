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
    "/images/selfie.5.png",
    "/images/selfie.6.jpg",
  ];

  const texts = [
    "I’m a strategic administrator turned software engineer, known for translating complexity into clarity.",
    "After directing ground operations for a $5M research lab, I now design and build full-stack applications by leveraging language models and clean, purposeful code.",
    "I'm a software developer crafting human-centered tools that make life simpler, smarter, and more joyful.",
    "Master juggler of priorities, nurturer of creativity, I find beauty in the mundane and chaotic.",
    "Whimsy is a daily necessity.",
    "Ready to build something joyful? Open to part-time contracts, project collaborations, or creative engineering roles. Let's talk!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <section className="flex flex-col justify-center sm:justify-end items-center sm:items-end px-6 sm:px-20 pt-[130px] sm:pt-[160px] pb-12 sm:pb-[25vh] text-center sm:text-right">
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl sm:text-6xl font-bold mb-20 sm:mb-16">
            About
          </h2>

          <div className="flex flex-row sm:gap-10 items-center sm:items-center justify-end mt-8 sm:mt-2">
            {/* TEXT BLOCK */}
            <div className="flex w-full sm:w-3/5 items-center justify-center text-center sm:justify-end sm:text-right px-2">
              <div className="max-w-xl">
                <p className="text-xl sm:text-3xl leading-relaxed sm:leading-loose opacity-100 !text-opacity-100">
                  {texts[activeIndex]}
                </p>
              </div>
            </div>

            {/* IMAGE BLOCK */}
            <div className="relative w-[280px] sm:w-[400px] md:w-[460px] h-[460px]">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Selfie ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded shadow-md transition-opacity duration-1000 ease-in-out ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
