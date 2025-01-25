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
                            <div className="experience-unit">
                                <div className="job-title">
                                    <p className="org">HopeMakers Collective,</p>
                                    <p className="job">Member,</p>
                                    
                                    <p className="job">(2024 - present)</p>
                                </div>
                                <div className="job-bullets">
                                    <ul>
                                        <li>Development of a mobile app to help users establish and sustain habits through the support of their community</li>
                                        <li>Development of a community web hub</li>
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
                                            Built applications using the MERN stack, implementing dynamic filtering, pagination, and user authentication
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
