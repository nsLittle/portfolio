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
                                        <li>
                                            Development of a mobile app to help users establish and sustain habits through the support of their community.
                                        </li>
                                        <li>
                                            Development of a community web hub.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experience-item">
                                <div className="job-title">
                                    <p className="org">Parsity, </p>
                                    <p className="job">Student Software Engineer,</p>
                                    <p className="job">(2024 - present)</p>
                                </div>

                                <div className="job-bullets"></div>
                                    <ul>
                                        <li>
                                            Built applications using the MERN stack, implementing dynamic filtering, pagination, and user authentication.
                                        </li>
                                    </ul>
                            </div>

                            <div className="experience-item">
                                <div className="job-title">
                                    <p className="org">AirBnB, </p>
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
                                    <p className="org">Boston Children’s Hospital, Boston, </p>
                                    <p className="job"> Lab Administrator,</p>
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
                        </div>

                    <p className="text">Education</p>

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
