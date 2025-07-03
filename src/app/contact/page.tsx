"use client";

import React, { useState } from "react";
import { FaDownload, FaPrint, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [templateParams, setTemplateParams] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateParams({
      ...templateParams,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error("Missing required EmailJS environment variables.");
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setTemplateParams({
          fullName: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send the message. Please try again later.");
      });
  };

  return (
    <>
      <section className="flex flex-col justify-center sm:justify-end items-center sm:items-end min-h-[90vh] sm:min-h-[95vh] px-6 sm:px-20 pt-[130px] sm:pt-[160px] pb-12 sm:pb-[25vh] text-center sm:text-right">
        <div className="w-full max-w-4xl sm:max-w-[65%]">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 sm:mb-12">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={templateParams.fullName}
                onChange={handleChange}
                className="text-black dark:text-black text-right w-full bg-[#fdfaf3] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 border border-gray-300 rounded-md px-4 py-2 bg-white dark:bg-white"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={templateParams.email}
                onChange={handleChange}
                className="text-black dark:text-black text-right w-full bg-[#fdfaf3] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 border border-gray-300 rounded-md px-4 py-2 bg-white dark:bg-white"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={templateParams.message}
                onChange={handleChange}
                rows={5}
                className="text-black dark:text-black text-right w-full bg-[#fdfaf3] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 border border-gray-300 rounded-md px-4 py-2 bg-white dark:bg-white"
                required></textarea>
            </div>

            <button className="!bg-gray-700 dark:bg-gray-400 text-white px-6 py-2 rounded-md shadow-md hover:bg-neutral-900 hover:shadow-lg hover:scale-105 transform transition duration-200">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
