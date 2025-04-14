import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <>
      <Header />

      <div className="w-full bg-white"></div>

      <div className="ml-[50px] pt-[50px] text-gray-900">
        <h2 className="text-6xl font-bold text-gray-600">Resume</h2>
        <h5 className="text-xl pt-[15px]">Experience</h5>

        <div className="job-title flex flex-row">
          <p className="text-base pt-[5px]">HopeMakers Collective,</p>
          <p className="text-base pt-[5px]">Member, </p>
          <p className="text-base pt-[5px]">(2024 - present)</p>
        </div>
        <div className="text-sm w-[85%] mx-auto text-justify">
          <ul>
            <li>
              Developed mobile app allowing users establish and sustain habits
              through community support.
            </li>
            <li>
              Currently developing a community web hub with AI-personalized
              platform, offering exclusive member content, and tiered
              memberships.
            </li>
          </ul>
        </div>

        <div className="job-title flex flex-row">
          <p className="text-base pt-[5px]">Parsity,</p>
          <p className="text-base pt-[5px]">Software Engineer Student, </p>
          <p className="text-base pt-[5px]">(2024 - present)</p>
        </div>

        <div className="text-sm w-[85%] mx-auto text-justify">
          <ul>
            <li>
              Built applications using the MERN stack, implementing dynamic
              filtering, pagination, and authentication to enhance the user
              experience; implemented backend inventory system using MongoDB,
              and Swagger API documentation.
            </li>
          </ul>
        </div>

        <div className="job-title flex flex-row">
          <p className="text-base pt-[5px]">AirBnB,</p>
          <p className="text-base pt-[5px]">SuperHost, </p>
          <p className="text-base pt-[5px]">(2019 - 2023)</p>
        </div>

        <div className="text-sm w-[85%] mx-auto text-justify">
          <ul>
            <li>
              Transformed a $400 property into a $1M luxury Stowe ski chalet by
              leveraging strategic renovations, marketing, and guest experience
              enhancements.
            </li>
            <li>
              Achieved and maintained Superhost status for 4 consecutive years,
              earning consistent 5-star reviews and building a loyal guest base
              through attention to detail, exceptional communication, and
              personalized service, resulting in a high occupancy rate,
              recurring clients, and increased revenue.
            </li>
          </ul>
        </div>

        <div className="job-title flex flex-row">
          <p className="text-base pt-[5px]">Boston Children's Hospital, </p>
          <p className="text-base pt-[5px]">Lab Administrator, Lieberman Lab</p>
          <p className="text-base pt-[5px]">(2010 - 2013)</p>
        </div>

        <div className="text-sm w-[85%] mx-auto text-justify">
          <ul>
            <li>
              Ensured accurate execution of grant requirements and compliance
              across $2.5M+ in annual biomedical research funding, enabling the
              lab to consistently meet funding objectives.
            </li>
            <li>
              Established an organized and efficient workflow for a
              high-performing Harvard professor, empowering a focus on driving
              successful grant applications and groundbreaking publications.
            </li>
            <li>
              Oversaw budgetary and onboarding processes for 20+ lab personnel,
              streamlining the integration of undergraduates, postdoctoral
              fellows, and international researchers.
            </li>
          </ul>
        </div>

        <div className="job-title flex flex-row">
          <p className="text-base pt-[5px]">MIT Media Lab, </p>
          <p className="text-base pt-[5px]">
            Program Manager, Center for Future Banking,
          </p>
          <p className="text-base pt-[5px]">(2008 - 2010)</p>
        </div>
        <div className="text-sm w-[85%] mx-auto text-justify">
          <ul>
            <li>
              Managed a $5M research budget with precision, balancing resource
              allocation among 300+ research projects to connect sponsors with
              initiatives, which maximized value and strengthened partnerships.
            </li>
            <li>
              Directed planning and execution of 5-10 sponsor engagement events
              monthly, fostering high-impact collaborations between academic
              researchers and corporate executives.
            </li>
            <li>
              Recruited and led a team of three administrative staff, ensuring
              seamless execution of sponsor visits and operational logistics.
            </li>
          </ul>
        </div>

        <div className="job-title flex flex-row">
          <p className="text-base pt-[5px]">MIT Media Lab, </p>
          <p className="text-base pt-[5px]">
            Administrative Assistant, Cognitive Machines Group,
          </p>
          <p className="text-base pt-[5px]">(2007 - 2010)</p>
        </div>
        <div className="text-sm w-[85%] mx-auto text-justify">
          {" "}
          <ul>
            <li>
              Delivered financial oversight for an $800K annual research group
              budget, maintaining compliance with grant requirements and
              ensuring financial health.
            </li>
            <li>
              Built and led a team of 12+ transcribers for a complex multi-year
              data tracking project, delivering high-quality results under
              strict timelines.
            </li>
          </ul>
        </div>

        <h5 className="text-xl pt-[15px]">Education</h5>
        <div className="job-title flex flex-row">
          <p className="text-base pt-[5px]">Parsity.io, </p>
          <p className="school-details">software engineering program,</p>

          <div className="job-title flex flex-row">
            <p className="text-base pt-[5px]">Smith College, </p>
            <p className="school-details">
              Major (anthropology); Minor (internationl relations),
            </p>
          </div>
        </div>
        <p className="text">Technical Skills</p>
        <div className="technical">
          <p className="skills">
            <b>Technical Skills:</b> JavaScript | TypeScript | React.js |
            Next.js | React Native | Node.js | Express.js | MongoDB | Mongoose |
            RESTful APIs | JWT Authentication | Swagger | Git | Postman | Mocha
            | Tailwind CSS | Bootstrap | Netlify | Vercel | Heroku
          </p>
        </div>
        <p className="text">Downloadable PDF</p>

        {/* <div className="box-pdf">
            <iframe
              className="pdf"
              src="/images/resume.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div> */}
        {/* <div className="icon-section scrolling" ref={scrollRef}>
            <img className="icon-gray" src="/images/react.png" alt="react" />
            <img className="icon-gray" src="/images/nextjs.png" alt="nextjs" />
            <img className="icon-gray" src="/images/node.png" alt="nodejs" />
            <img className="icon-gray" src="/images/mongo.png" alt="mongodb" />
            <img className="icon-gray" src="/images/expo.png" alt="Expo" />
            <img className="icon-gray" src="/images/js.png" alt="javascript" />
            <img className="icon-gray" src="/images/html.png" alt="html" />
            <img className="icon-gray" src="/images/css.png" alt="html" />
            <img
              className="icon-gray"
              src="/images/github-octo.png"
              alt="github-octo"
            />
            <img
              className="icon-gray"
              src="/images/netlify.png"
              alt="netlify"
            />
            <img className="icon-gray" src="/images/heroku.png" alt="heroku" />
            <img
              className="icon-gray"
              src="/images/wordpress.png"
              alt="wordpress"
            />
          </div> */}
      </div>
    </>
  );
}
