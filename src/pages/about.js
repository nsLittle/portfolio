import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Header />

            <div className="container">
            <div className="image-section">
                    <img src="/images/selfie.png" alt="Selfie" />
                </div>
                <div className="text-section">
                    <h1>About</h1>
                    <p className="text-about">I am a software developer passionate about creating human-centered solutions that leverage technology to make our lives simpler, more efficient, and healthier. I build applications that empower individuals and teams to grow, connect, and thrive.</p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
