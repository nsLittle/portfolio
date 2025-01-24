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
