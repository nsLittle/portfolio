"use client";
import { FaDownload, FaPrint, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <>
      <section className="flex flex-col justify-center sm:justify-end items-center sm:items-end px-6 sm:px-20 pt-[130px] sm:pt-[160px] pb-12 sm:pb-[25vh] text-center sm:text-right">
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl sm:text-6xl font-bold">Resume</h2>

          <div className="pt-5 mt-0 flex justify-center sm:justify-end gap-x-8 text-[color:var(--text-color)]">
            <a
              href="/images/hata-resume.pdf"
              download
              aria-label="Download PDF">
              <FaDownload className="w-5 h-5 hover:text-black cursor-pointer" />
            </a>
            <a
              href="/images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open PDF to Print">
              <FaPrint className="w-5 h-5 hover:text-black cursor-pointer" />
            </a>
          </div>

          <h5 className="text-3xl  pt-5">Fullstack Software Engineer</h5>
          <div className="job-title flex flex-row mt-4">
            <p className="text-center sm:text-right ml-auto mr-0 pt-[5px] w-[90%] text-lg">
              Strategic administrator turned software engineer, I translate
              complexity into clarity, directing the ground operations of a $5M
              research lab, and designing-building applications by leveraging
              language models with precision and intent
            </p>
          </div>
          <div className="text-base pt-5 w-full sm:w-[75%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Designed, built and deployed full-stack applications, including
                a mobile habit tracker for a global executive leadership coach
              </li>
              <li className="before:content-['•'] before:mr-4">
                Created custom, adaptive curriculum for four children, three
                with IEPs, blending project-based learning with differentiated
                instruction grounded in neurodiverse and trauma-informed
                practices.
              </li>
              <li className="before:content-['•'] before:mr-4">
                Scaled a solo entrepreneur CEO’s LinkedIn content presence with
                a 6-month period, resulting in a 1,000% increase in impressions
                and 200% in connections
              </li>
            </ul>
          </div>

          <h5 className="text-3xl pt-10">Technical Skills</h5>
          <div className="flex justify-end mt-4">
            <p className="text-center sm:text-right w-[90%] text-lg">
              JavaScript | React.js | Next.js | React Native | Node.js |
              Express.js | MongoDB | TypeScript | APIs | JWT Authentication |
              Swagger | Git | Postman | Mocha | Tailwind | CSS | Bootstrap |
              Netlify | Heroku | Render
            </p>
          </div>
          <h5 className="text-3xl pt-10">Education</h5>

          <div className="job-title flex flex-col gap-x-2 mt-4">
            <p className="font-bold text-base pt-[5px] text-xl">Parsity.io,</p>
            <div className="text-base w-full text-center sm:text-right mx-auto ml-auto mr-0">
              <ul className="text-lg">
                <li>Software Engineering Program</li>
              </ul>
            </div>
          </div>

          <div className="job-title flex flex-col gap-x-2 mt-4">
            <p className="font-bold text-base pt-[5px] text-xl">
              Smith College,{" "}
            </p>
            <div className="text-base w-full text-center sm:text-right ml-auto mr-0 mx-auto text-lg">
              <ul className="text-lg">
                <li>Major, anthropology</li>
                <li>Minor, internationl relations</li>
              </ul>
            </div>
          </div>

          <h5 className="text-3xl pt-10">Project Experience</h5>

          <div className="flex flex-col sm:hidden gap-y-1 mt-8 text-center">
            <p className="font-bold text-xl">Habit App</p>
            <p className="text-base text-lg">
              Community-Driven Habit Formation Platform
            </p>
          </div>

          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-4">
            Community-Driven Habit Formation Platform |{" "}
            <span className="font-bold text-xl">Habit App</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Delivered a full-stack mobile app that supports habit-building
                through team feedback, cycle-based reflection, and optional
                reminders
              </li>
              <li className="before:content-['•'] before:mr-4">
                Built with React Native (Expo), Node.js, Express, MongoDB, and
                JWT, deployed to Render, with a demo-ready Android .apk
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:hidden gap-y-1 mt-8 text-center">
            <p className="font-bold text-xl">Reframer</p>
            <p className="text-base text-lg">Real-Time AI Reframing App</p>
          </div>

          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-8">
            Real-Time AI Reframing App |{" "}
            <span className="font-bold text-xl">Reframer</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Created a web app that transforms a user’s negative self-talk
                into constructive reframes using selectable personas, ranging
                from supportive growth mindset to blunt, no-nonsense redirection
              </li>
              <li className="before:content-['•'] before:mr-4">
                Built with Next.js, ChatGPT API, and Netlify to demonstrate how
                AI can shape tone, clarity, and intent in real time
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:hidden gap-y-1 mt-8 text-center">
            <p className="font-bold text-xl">Contact List</p>
            <p className="text-base text-lg">Contact Management App</p>
          </div>

          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-8">
            Contact Management App |{" "}
            <span className="font-bold text-xl">Contact List</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Expanded a starter Next.js project into a fully functional
                contact management app with dynamic routing and TypeScript
              </li>
              <li className="before:content-['•'] before:mr-4">
                Built with Next.js, React, TypeScript, and Context API,
                showcasing modular state management and clean user interaction
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:hidden gap-y-1 mt-8 text-center">
            <p className="font-bold text-xl">Portfolio Site</p>
            <p className="text-base text-lg">Personal Developer Portfolio</p>
          </div>

          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-8">
            Personal Developer Portfolio |{" "}
            <span className="font-bold text-xl">Portfolio Site</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Deployed a personal website to showcase projects, skills, and
                contact information
              </li>
              <li className="before:content-['•'] before:mr-4">
                Created with Next.js, React, Email.js, and Netlify, featuring a
                modular architecture, contact form, and clean visual
              </li>
            </ul>
          </div>

          <h5 className="text-3xl pt-10 mb-8">Experience</h5>
          <div className="flex flex-col items-center sm:hidden text-center">
            <p className="font-bold text-xl">HopeMakers Collective</p>
            <p className="text-base text-lg">Member</p>
            <p className="text-base text-lg">2024 – present</p>
          </div>

          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg">
            2024 – present | Member |{" "}
            <span className="font-bold text-xl">HopeMakers Collective</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Designed and built a mobile app enabling users to build
                sustainable habits through peer-driven accountability and
                community engagement, using React Native, Expo, Node.js,
                Express, MongoDB, SendGrid, and JWT authentication
              </li>
              <li className="before:content-['•'] before:mr-4">
                Conceptualized and executed a consistent LinkedIn content
                strategy for the founder, writing 2–3 high-quality posts/week
                that increased output by 700%, impressions by 1,000%, and
                followers by 20% (3,000+ in 6 months), averaging 10,000 monthly
                impressions from a previously underutilized account
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:hidden mt-8 text-center">
            <p className="font-bold text-xl">Parsity</p>
            <p className="text-base text-lg">Software Engineer Student</p>
            <p className="text-base text-lg">2024 – 2025</p>
          </div>
          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-8">
            2024 – present | Software Engineer Student |{" "}
            <span className="font-bold text-xl">Parsity</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Built full-stack applications using the MERN stack with features
                like dynamic filtering, pagination, and user authentication to
                improve performance and UX
              </li>
              <li className="before:content-['•'] before:mr-4">
                Engineered backend inventory systems with MongoDB, integrated
                Swagger for API documentation, and used Postman for testing and
                debugging RESTful endpoints
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:hidden mt-8 text-center">
            <p className="font-bold text-xl">AirBnB</p>
            <p className="text-base text-lg">SuperHost</p>
            <p className="text-base text-lg">2019 - 2023</p>
          </div>
          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-8">
            2019 - 2023 | SuperHost |{" "}
            <span className="font-bold text-xl">AirBnB</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Transformed a $400K property into a $1M luxury rental by
                applying strategic renovations, and optimizing guest experience
                enhancements
              </li>
              <li className="before:content-['•'] before:mr-4">
                Maintained Superhost status for 4 consecutive years by
                delivering consistently 5-star guest experiences, resulting in a
                high occupancy rate, recurring clientele, and increased revenue
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:hidden mt-8 text-center">
            <p className="font-bold text-xl">Boston Children&apos;s Hospital</p>
            <p className="text-base text-lg">
              Lab Administrator | Lieberman Lab
            </p>
            <p className="text-base text-lg">2010 - 2013</p>
          </div>
          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-8">
            2010 - 2013 | Lab Administrator | Lieberman Lab |{" "}
            <span className="font-bold text-xl">
              Boston Children&apos;s Hospital
            </span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Managed $2.5M+ in annual biomedical research funding, ensuring
                grant compliance and enabling consistent achievement of funding
                objectives
              </li>
              <li className="before:content-['•'] before:mr-4">
                Streamlined onboarding and operations for 20+ lab members while
                supporting a high-performing Harvard PI in securing successful
                grant applications and high-impact publications
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:hidden mt-8 text-center">
            <p className="font-bold text-xl">MIT Media Lab</p>
            <p className="text-base text-lg">
              Program Manager | Center for Future Banking
            </p>
            <p className="text-base text-lg">2008 - 2010</p>
          </div>
          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-8">
            2008 - 2010 | Program Manager | Center for Future Banking |{" "}
            <span className="font-bold text-xl">MIT Media Lab</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Supprted the successful acquisition and management of $5M in
                funding from Bank of America by facilitating cross-institutional
                alignment and surfacing early insights on stakeholder dynamics
              </li>
              <li className="before:content-['•'] before:mr-4">
                Directed a $5M research portfolio, aligning over 300
                interdisciplinary projects with sponsor goals to maximize ROI
                and deepen engagement
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:hidden mt-8 text-center">
            <p className="font-bold text-xl">MIT Media Lab</p>
            <p className="text-base text-lg">
              Lab Administrator | Cognitive Machines Group
            </p>
            <p className="text-base text-lg">2007 - 2010</p>
          </div>
          <p className="hidden sm:block text-base pt-[5px] text-right ml-auto mr-0 text-lg mt-8">
            2007 - 2010 | Lab Administrator | Cognitive Machines Group |{" "}
            <span className="font-bold text-xl">MIT Media Lab</span>
          </p>

          <div className="text-base pt-5 w-full sm:w-[90%] text-center sm:text-right ml-auto mr-0">
            <ul className="text-center sm:text-right list-none space-y-2 text-lg">
              <li className="before:content-['•'] before:mr-4">
                Directed a $5M research portfolio, aligning over 300
                interdisciplinary projects with sponsor goals to maximize ROI
                and deepen engagement
              </li>
              <li className="before:content-['•'] before:mr-4">
                Created and implemented the hiring and workflow systems for a
                12-person transcription team supporting a multi-year behavioral
                research study; ensured high-quality data delivery under tight
                timelines
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
