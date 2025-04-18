"use client";
import { FaDownload, FaPrint, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <>
      <Header />

      <div className="ml-[100px] pt-[130px] pb-[100px] text-[#5a5a5a]">
        <h2 className="text-7xl font-bold">Resume</h2>

        <div className="mt-0 flex justify-end gap-x-8 pr-[80px] text-[#5a5a5a]">
          <a href="/images/hata-resume.pdf" download aria-label="Download PDF">
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

        <h5 className="ml-[25px] text-3xl pt-[25px]">
          Fullstack Software Engineer
        </h5>
        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px] w-[80%]">
            Strategic administrator turned software engineer, I translate
            complexity into clarity, directing the ground operations of a $5M
            research lab, and designing-building applications by leveraging
            language models with precision and intent
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Designed, built and deployed full-stack applications, including a
              mobile habit tracker for a global executive leadership coach
            </li>
            <li>
              Scaled a solo entrepreneur CEO’s LinkedIn content presence with a
              6-month period, resulting in a 1,000% increase in impressions and
              200% in connections
            </li>
          </ul>
        </div>

        <h5 className="ml-[25px] text-3xl pt-[20px]">Technical Skills</h5>
        <div className="flex justify-left mt-4 px-4">
          <p className="text-base pt-[5px] pl-[50px] w-[85%]">
            JavaScript | React.js | Next.js | React Native | Node.js |
            Express.js | MongoDB | TypeScript | APIs | JWT Authentication |
            Swagger | Git | Postman | Mocha | Tailwind | CSS | Bootstrap |
            Netlify | Heroku | Render
          </p>
        </div>
        <h5 className="ml-[25px] text-3xl pt-[20px]">Education</h5>

        <div className="ml-[25px] job-title flex flex-col gap-x-2 mt-4">
          <p className="font-bold text-base pt-[5px]">Parsity.io,</p>
          <div className="text-base pl-[50px] w-[80%] text-justify">
            <ul className="list-disc list-outside ml-0 space-y-2">
              <li>Software Engineering Program</li>
            </ul>
          </div>
        </div>

        <div className="ml-[25px] job-title flex flex-col gap-x-2 mt-4">
          <p className="font-bold text-base pt-[5px]">Smith College, </p>
          <div className="text-base pl-[50px] w-[80%] text-justify">
            <ul className="list-disc list-outside ml-0 space-y-2">
              <li>Major, anthropology</li>
              <li>Minor, internationl relations</li>
            </ul>
          </div>
        </div>

        <h5 className="ml-[25px] text-3xl pt-[20px]">Project Experience</h5>
        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">Habit App</span> | Community-Driven
            Habit Formation Platform
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Delivered a full-stack mobile app that supports habit-building
              through team feedback, cycle-based reflection, and optional
              reminders
            </li>
            <li>
              Built with React Native (Expo), Node.js, Express, MongoDB, and
              JWT, deployed to Render, with a demo-ready Android .apk
            </li>
          </ul>
        </div>

        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">Reframer</span> | Real-Time AI Reframing
            App
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Created a web app that transforms a user’s negative self-talk into
              constructive reframes using selectable personas, ranging from
              supportive growth mindset to blunt, no-nonsense redirection
            </li>
            <li>
              Built with Next.js, ChatGPT API, and Netlify to demonstrate how AI
              can shape tone, clarity, and intent in real time
            </li>
          </ul>
        </div>

        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">Contact List</span> | Contact Management
            App
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Expanded a starter Next.js project into a fully functional contact
              management app with dynamic routing and TypeScript
            </li>
            <li>
              Built with Next.js, React, TypeScript, and Context API, showcasing
              modular state management and clean user interaction
            </li>
          </ul>
        </div>

        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">Portfolio Site</span> | Personal
            Developer Portfolio
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Deployed a personal website to showcase projects, skills, and
              contact information
            </li>
            <li>
              Created with Next.js, React, Email.js, and Netlify, featuring a
              modular architecture, contact form, and clean visual
            </li>
          </ul>
        </div>

        <h5 className="ml-[25px] text-3xl pt-[20px]">Experience</h5>
        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">HopeMakers Collective</span> | Member |
            2024 - present
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Designed and built a mobile app enabling users to build
              sustainable habits through peer-driven accountability and
              community engagement, using React Native, Expo, Node.js, Express,
              MongoDB, SendGrid, and JWT authentication
            </li>
            <li>
              Conceptualized and executed a consistent LinkedIn content strategy
              for the founder, writing 2–3 high-quality posts/week that
              increased output by 700%, impressions by 1,000%, and followers by
              20% (3,000+ in 6 months), averaging 10,000 monthly impressions
              from a previously underutilized account
            </li>
          </ul>
        </div>
        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">Parsity</span> | Software Engineer
            Student | 2024 - present
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Built full-stack applications using the MERN stack with features
              like dynamic filtering, pagination, and user authentication to
              improve performance and UX
            </li>
            <li>
              Engineered backend inventory systems with MongoDB, integrated
              Swagger for API documentation, and used Postman for testing and
              debugging RESTful endpoints
            </li>
          </ul>
        </div>
        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">AirBnB</span> | SuperHost | 2019 - 2013
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Transformed a $400K property into a $1M luxury rental by applying
              strategic renovations, and optimizing guest experience
              enhancements
            </li>
            <li>
              Maintained Superhost status for 4 consecutive years by delivering
              consistently 5-star guest experiences, resulting in a high
              occupancy rate, recurring clientele, and increased revenue
            </li>
          </ul>
        </div>
        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">Boston Children&apos;s Hospital</span> |
            Lab Administrator | Lieberman Lab | 2010 - 2013
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Managed $2.5M+ in annual biomedical research funding, ensuring
              grant compliance and enabling consistent achievement of funding
              objectives
            </li>
            <li>
              Streamlined onboarding and operations for 20+ lab members while
              supporting a high-performing Harvard PI in securing successful
              grant applications and high-impact publications
            </li>
          </ul>
        </div>
        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">MIT Media Lab</span> | Program Manager |
            Center for Future Banking | 2008 - 2010
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Supprted the successful acquisition and management of $5M in
              funding from Bank of America by facilitating cross-institutional
              alignment and surfacing early insights on stakeholder dynamics
            </li>
            <li>
              Directed a $5M research portfolio, aligning over 300
              interdisciplinary projects with sponsor goals to maximize ROI and
              deepen engagement
            </li>
          </ul>
        </div>
        <div className="ml-[25px] job-title flex flex-row gap-x-2 mt-4">
          <p className="text-base pt-[5px]">
            <span className="font-bold">MIT Media Lab</span> | Administrative
            Assistant | Cognitive Machines Group | 2007 - 2010
          </p>
        </div>
        <div className="text-base pl-[50px] pt-[5px] w-[80%] text-justify">
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              Directed a $5M research portfolio, aligning over 300
              interdisciplinary projects with sponsor goals to maximize ROI and
              deepen engagement
            </li>
            <li>
              Created and implemented the hiring and workflow systems for a
              12-person transcription team supporting a multi-year behavioral
              research study; ensured high-quality data delivery under tight
              timelines
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
