import Header from "../components/Header";
import Footer from "../components/Footer";

const Resume = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="box">
                    <h1>Resume</h1>
                    <p className="text">Experience</p>
                        <div className="experience">
                            <div className="experience-item">
                                <div className="job-title">
                                    <p className="org">HopeMakers Collective,</p>
                                    <p className="job">Member,</p>
                                    <p className="job">(2024 - present)</p>
                                </div>
                                <div className="job-bullets">
                                    <ul>
                                        <li>Development of a mobile app to help users establish and sustain habits through the support of their community</li>
                                        <li>Currently developing a community web hub with AI-personalized platform, offering exclusive member content, and tiered memberships.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experience-item">
                                <div className="job-title">
                                    <p className="org">Parsity,</p>
                                    <p className="job">Student Software Engineer,</p>
                                    <p className="job">(2024 - present)</p>
                                </div>

                                <div className="job-bullets"></div>
                                    <ul>
                                        <li>Built applications using the MERN stack, implementing dynamic filtering, pagination, and user authentication. </li>
                                    </ul>
                            </div>

                            <div className="experience-item">
                                <div className="job-title">
                                    <p className="org">AirBnB,</p>
                                    <p className="job">SuperHost,</p>
                                    <p className="job">(2019 - 2023)</p>
                                </div>

                                <div className="job-bullets"></div>
                                    <ul>
                                        <li>
                                        Transformed a $400 property into a $1M luxury Stowe ski chalet by leveraging strategic renovations, marketing, and guest experience enhancements.
                                        </li>
                                        <li>
                                        Achieved and maintained Superhost status for 4 consecutive years, earning consistent 5-star reviews and building a loyal guest base through attention to detail, exceptional communication, and personalized service, resulting in a high occupancy rate, return clients,  and increased revenue.
                                        </li>
                                    </ul>
                            </div>

                            <div className="experience-item">
                                <div className="job-title">
                                    <p className="org">Boston Children's Hospital, Boston,</p>
                                    <p className="job"> Lab Administrator, Lieberman Lab</p>
                                    <p className="job">(2010 - 2013)</p>
                                </div>

                                <div className="job-bullets"></div>
                                    <ul>
                                        <li>
                                        Responsible for ensuring accurate execution of grant requirements and compliance across $2.5M+ in annual biomedical research funding, enabling the lab to consistently meet funding objectives.
                                        </li>
                                        <li>
                                        Established an organized and efficient workflow for a high-performing Harvard professor, empowering her to focus on driving successful grant applications and groundbreaking publications.
                                        </li>
                                        <li>
                                        Oversaw budgetary and onboarding processes for 20+ lab personnel, streamlining the integration of undergraduates, postdoctoral fellows, and international researchers.
                                        </li>
                                    </ul>
                            </div>

                            <div className="experience-item">
                                <div className="job-title">
                                    <p className="org">MIT Media Lab,</p>
                                    <p className="job">Program Manager, Center for Future Banking,</p>
                                    <p className="job">(2008 - 2010)</p>
                                </div>
                                <div className="job-bullets">
                                    <ul>
                                        <li>
                                            Development of a mobile app to help users establish and sustain habits through the support of their community.
                                        </li>
                                        <li>
                                            Directed planning and execution of 5-10 sponsor engagement events monthly, fostering high-impact collaborations between academic researchers and corporate executives.
                                        </li>
                                        <li>
                                            Recruited and led a team of administrative staff, ensuring seamless execution of sponsor visits and operational logistics.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experience-item">
                                <div className="job-title">
                                    <p className="org">MIT Media Lab,</p>
                                    <p className="job">Administrative Assistant, Cognitive Machines Group,</p>
                                    <p className="job">(22007 - 2010)</p>
                                </div>
                                <div className="job-bullets">
                                    <ul>
                                        <li>
                                        Delivered financial oversight for an $800K annual research group budget, maintaining compliance with grant requirements and ensuring financial health.
                                        </li>
                                        <li>
                                        Built and led a team of 12+ transcribers for a complex multi-year data tracking project, delivering high-quality results under strict timelines.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    <p className="text">Education</p>
                        <div className="school">
                            <div className="school-item">
                                <div className="school-title">
                                    <p className="school-name">Parsity.io,</p>
                                    <p className="school-details">software engineering program,</p>
                                    <p className="school-details">(2024 - present)</p>
                                </div>
                            </div>
                            <div className="school-item">
                                <div className="school-title">
                                    <p className="school-name">Smith College,</p>
                                    <p className="school-details">Major (anthropology); Minor (internationl relations),</p>
                                    <p className="school-details">(2024 - present)</p>
                                </div>
                            </div>
                        </div>
                        <p className="text">Technical Skills</p>
                            <div className="technical">
                                <p className="skills"><b>Technical Skills:</b> JavaScript  |  TypeScript  |  React.js  |  Next.js  |  React Native  |  Node.js  |  Express.js  |  MongoDB  |  Mongoose  |  RESTful APIs  |  JWT Authentication  |  Swagger  |  Git  |  Postman  |  Mocha  |  Tailwind CSS  |  Bootstrap  |  Netlify  |  Vercel  |  Heroku</p>
                            </div>

                        <p className="text">Downloadable PDF</p>
                        <div className="box-pdf">
                            <iframe className="pdf" src="/images/resume.pdf" type="application/pdf" width="100%" height="600px" />
                        </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Resume;
