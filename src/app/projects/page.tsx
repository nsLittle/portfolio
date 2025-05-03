"use client";
import { FaDownload, FaPrint, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <>
      <section className="flex flex-col justify-center sm:justify-end items-center sm:items-end px-6 sm:px-20 pt-[130px] sm:pt-[160px] pb-12 sm:pb-[25vh] text-center sm:text-right">
        <div className="w-full">
          <h2 className="text-5xl sm:text-6xl font-bold">Projects</h2>
          <div className="flex flex-col items-end text-right mt-8">
            <div className="space-y-6 mb-8">
              <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
                <div className="sm:text-right flex-1">
                  <h5 className="text-3xl  pt-5">Habit App</h5>
                  <p className="text-xl mt-1 mb-2">
                    React Native | Node.js | Express | MongoDB
                  </p>
                  <p className="text-lg max-w-4xl ml-auto">
                    Built a mobile-first, full-stack app designed around habit
                    formation using feedback loops and reflection intervals.
                    Developed in React Native and Express, with RESTful APIs for
                    user, habit, and feedback data. Implemented JWT-based
                    authentication and secure route protection with token
                    persistence. Created a reminder engine with configurable
                    cadence, and enabled team feedback via invitation emails.
                  </p>
                </div>
              </div>
              <div className="flex justify-center sm:justify-end flex-wrap gap-4 mt-4">
                <a
                  href="https://www.loom.com/embed/c552437966af4f2899eb77eaa36ecf2a?sid=464cf749-baff-49e0-83b4-9545469653c7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group">
                  <img
                    src="/images/thumbprint-loom-one.png"
                    alt="Habit App Thumbnail 1"
                    className="w-54 rounded shadow-md group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.loom.com/embed/7127d045d9e149d0afdde2d8868bcdbe?sid=7d7c6bb7-f0ee-473a-8d38-28737d4bf85e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group">
                  <img
                    src="/images/thumbprint-loom-two.png"
                    alt="Habit App Thumbnail 2"
                    className="w-54 rounded shadow-md group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
                <div className="sm:text-right flex-1">
                  <h5 className="text-3xl  pt-5">
                    Power of Prompt Engineering
                  </h5>
                  <p className="text-xl mt-1 mb-2">
                    React | Next.js | OpenAI API
                  </p>
                  <p className="text-lg max-w-4xl ml-auto">
                    Reframer is a real-time AI communication tool powered by a
                    custom integration with the ChatGPT API. Built with Next.js
                    and React, it offers three distinct personas—Growth Mindset,
                    Asian Auntie, and Professional Polisher, to transform user
                    input on the fly. Each prompt is dynamically routed to
                    produce context-aware, stylistically tailored responses. The
                    app is deployed on Netlify, and showcases the power of
                    persona-driven prompt engineering in sharpening messaging
                    and tone.
                  </p>
                </div>
              </div>
              <div className="flex justify-center sm:justify-end flex-wrap gap-4 mt-4">
                <a
                  href="https://reframer-473c134b8246.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group">
                  <img
                    src="/images/thumbprint-reframer.png"
                    alt="Reframer Thumbprint"
                    className="w-54 rounded shadow-md group-hover:scale-105 transition"
                  />
                </a>
                <a
                  href="https://negativity-reframer-5d42696baa3b.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group">
                  <img
                    src="/images/thumbprint-negativity.png"
                    alt="Negativity Thumbprint"
                    className="w-54 rounded shadow-md group-hover:scale-105 transition"
                  />
                </a>
                <a
                  href="https://limitless-reframer-7e82e380af02.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group">
                  <img
                    src="/images/thumbprint-limitless.png"
                    alt="Limitless Thumbprint"
                    className="w-54 rounded shadow-md group-hover:scale-105 transition"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
                <div className="sm:text-right flex-1">
                  <h5 className="text-3xl  pt-5">Contact Management System</h5>
                  <p className="text-xl mt-1 mb-2">
                    React | Typescript | Next.js
                  </p>
                  <p className="text-lg max-w-4xl ml-auto">
                    Designed a responsive CRUD system using React and TypeScript
                    with component typing and state management. Implemented
                    sortable, searchable lists of contact data with dynamic
                    filtering. Built out custom hooks for form validation and
                    modular input handling. Deployed on Netlify for static
                    serving.
                  </p>
                </div>
              </div>
              <div className="flex justify-center sm:justify-end flex-wrap gap-4 mt-4">
                <a
                  href="https://dream-contact-list.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group">
                  <img
                    src="/images/thumbprint-contact-three.png"
                    alt="Contact List Thumbprint"
                    className="w-50 rounded shadow-md group-hover:scale-105 transition border-8 border-gray-400"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dream-contact-list.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group">
                  <img
                    src="/images/thumbprint-contact-three.png"
                    alt="Contact List Thumbprint"
                    className="w-50 rounded shadow-md group-hover:scale-105 transition border-8 border-gray-400"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/*
            <div className="space-y-6 mb-8">
              <div className="flex sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-12">
                <div className="sm:text-right flex-1">
                  <h3 className="text-2xl font-semibold">
                    Contact Management System
                  </h3>
                  <p className="text-sm mt-1 mb-2">
                    React | Typescript | Next.js
                  </p>
                  <p className="text-gray-600 mb-4">
                    Designed a responsive CRUD system using React and TypeScript
                    with component typing and state management. Implemented
                    sortable, searchable lists of contact data with dynamic
                    filtering. Built out custom hooks for form validation and
                    modular input handling. Deployed on Netlify for static
                    serving.
                  </p>

                  <div className="flex justify-end flex-wrap gap-4 mt-4">
                    <a
                      href="https://dream-contact-list.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="/images/thumbprint-contact-three.png"
                        alt="Contact List Thumbprint"
                        className="w-[85%] sm:w-[25%] md:w-[280px] max-w-[300px] rounded shadow-md hover:scale-105 transition border-8 border-gray-400"
                      />
                    </a>
                    <a
                      href="https://dream-contact-list.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="/images/thumbprint-contact-three.png"
                        alt="Contact List Thumbprint"
                        className="w-[85%] sm:w-[25%] md:w-[280px] max-w-[300px] rounded shadow-md hover:scale-105 transition border-8 border-gray-400"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
