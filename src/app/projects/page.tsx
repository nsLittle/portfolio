"use client";
import { FaDownload, FaPrint, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <section className="min-h-screen px-6 sm:px-12 py-12 max-w-5xl mx-auto space-y-16 pt-[150px]">
        <div>
          <h2 className="text-5xl font-bold mb-6">Projects</h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Habit App
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-3">
                React Native | Node.js | Express | MongoDB
              </p>
              <p className="text-gray-600 mb-4">
                Built a mobile-first full-stack app focused on feedback-driven
                habit tracking. Includes reminder logic, teammate feedback
                loops, and secure user authentication via JWT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.loom.com/embed/c552437966af4f2899eb77eaa36ecf2a?sid=464cf749-baff-49e0-83b4-9545469653c7"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/images/thumbprint-loom-one.png"
                    alt="Reframer Thumbprint"
                    className="w-60 rounded shadow-md hover:scale-105 transition"
                  />
                </a>
                <a
                  href="https://www.loom.com/embed/7127d045d9e149d0afdde2d8868bcdbe?sid=7d7c6bb7-f0ee-473a-8d38-28737d4bf85e"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/images/thumbprint-loom-two.png"
                    alt="Reframer Thumbprint"
                    className="w-60 rounded shadow-md hover:scale-105 transition"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Power of Prompt Engineering
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-3">
                React | Next.js | OpenAI API
              </p>
              <p className="text-gray-600 mb-4">
                Integrated ChatGPT via custom API routing to transform user
                inputs into real-time, reframed outputs using prompt-engineering
                techniques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://reframer-473c134b8246.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/images/thumbprint-reframer.png"
                    alt="Reframer Thumbprint"
                    className="w-60 rounded shadow-md hover:scale-105 transition"
                  />
                </a>

                <a
                  href="https://negativity-reframer-5d42696baa3b.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/images/thumbprint-negativity.png"
                    alt="Negativity Thumbprint"
                    className="w-60 rounded shadow-md hover:scale-105 transition"
                  />
                </a>
                <a
                  href="https://limitless-reframer-7e82e380af02.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/images/thumbprint-limitless.png"
                    alt="Limitless Thumbprint"
                    className="w-60 rounded shadow-md hover:scale-105 transition"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Contact Management System
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-3">
                React | Typescript | Next.js
              </p>
              <p className="text-gray-600 mb-4">
                CRUD application allowing users to add, edit, delete, and sort
                contacts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://dream-contact-list.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/images/thumbprint-contact-three.png"
                    alt="Contact List Thumbprint"
                    className="w-60 rounded shadow-md hover:scale-105 transition border-8 border-gray-700"
                  />
                </a>
                <a
                  href="https://dream-contact-list.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/images/thumbprint-contact-three.png"
                    alt="Contact List Thumbprint"
                    className="w-60 rounded shadow-md hover:scale-105 transition border-8 border-gray-700"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
