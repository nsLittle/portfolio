"use client";
import { FaDownload, FaPrint, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <div className="ml-[100px] pt-[130px] pb-[100px] text-[#5a5a5a]">
        <h2 className="text-7xl font-bold">Projects</h2>

        <h5 className="ml-[25px] text-3xl pt-[50px]">Habit App</h5>
        <div className="ml-[25px] job-title flex flex-col gap-x-2 mt-4">
          <p className="text-base pt-[15px] pl-[25px] w-[80%] font-bold">
            React Native | Node.js | Express | MongoDB
          </p>
          <p className="text-base pt-[15px] pl-[25px] w-[80%]">
            Built a mobile-first full-stack app focused on feedback-driven habit
            tracking. Includes reminder logic, teammate feedback loops, and
            secure user authentication via JWT.
          </p>
        </div>
        <div className="flex flex-row gap-6 text-base pl-[50px] pt-[20px] w-[40%] text-justify">
          <iframe
            src="https://www.loom.com/embed/c552437966af4f2899eb77eaa36ecf2a?sid=464cf749-baff-49e0-83b4-9545469653c7"
            allowFullScreen
            className="w-full max-w-md aspect-video rounded shadow-md"></iframe>
          <iframe
            src="https://www.loom.com/embed/7127d045d9e149d0afdde2d8868bcdbe?sid=7d7c6bb7-f0ee-473a-8d38-28737d4bf85e"
            allowFullScreen
            className="w-full max-w-md aspect-video rounded shadow-md"></iframe>
        </div>

        <h5 className="ml-[25px] text-3xl pt-[50px]">
          Power of Prompt Engineering
        </h5>
        <div className="ml-[25px] job-title flex flex-col gap-x-2 mt-4">
          <p className="text-base pt-[15px] pl-[25px] w-[80%] font-bold">
            React | Next.js | OpenAI API
          </p>
          <p className="text-base pt-[15px] pl-[25px] w-[80%]">
            Integrated ChatGPT via custom API routing to transform user inputs
            into real-time, reframed outputs.
          </p>
        </div>
        <div className="flex flex-row gap-6 text-base pl-[50px] pt-[20px] w-[80%] text-justify">
          <a
            href="https://reframer-473c134b8246.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/images/thumbprint-reframer.png"
              alt="Reframer Thumbprint"
              className="w-50 rounded shadow-md hover:scale-105 transition"
            />
          </a>
          <a
            href="https://negativity-reframer-5d42696baa3b.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/images/thumbprint-negativity.png"
              alt="Negativity Thumbprint"
              className="w-50 rounded shadow-md hover:scale-105 transition"
            />
          </a>
          <a
            href="https://limitless-reframer-7e82e380af02.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/images/thumbprint-limitless.png"
              alt="Limitless Thumbprint"
              className="w-50 rounded shadow-md hover:scale-105 transition"
            />
          </a>
        </div>

        <h5 className="ml-[25px] text-3xl pt-[50px]">
          Contact Management System
        </h5>
        <div className="ml-[25px] job-title flex flex-col gap-x-2 mt-4">
          <p className="text-base pt-[15px] pl-[25px] w-[80%] font-bold">
            React | Typescript | Next.js
          </p>
          <p className="text-base pt-[15px] pl-[25px] w-[80%]">
            CRUD application allowing users to add, edit, delete, and sort
            contacts.
          </p>
        </div>
        <div className="flex flex-row gap-6 text-base pl-[50px] pt-[20px] w-[80%] text-justify">
          <a
            href="https://dream-contact-list.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/images/thumbprint-contact-one.png"
              alt="Contact List Thumbprint"
              className="w-50 rounded shadow-md hover:scale-105 transition"
            />
          </a>
          <a
            href="https://dream-contact-list.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/images/thumbprint-contact-two.png"
              alt="Contact List Thumbprint"
              className="w-50 rounded shadow-md hover:scale-105 transition"
            />
          </a>
        </div>
      </div>
    </>
  );
}
