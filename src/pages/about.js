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
                <div className="box">
                    <h1>About</h1>
                    <p className="text">I am a software developer passionate about creating human-centered solutions by leveraging technology to make our lives simpler, more efficient, and more fulfilling.</p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
