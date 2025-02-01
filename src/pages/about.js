import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const texts = [
        "I'm a software developer passionate about creating human-centered solutions by leveraging technology to make our lives simpler, more efficient, and more fulfilling.",
        "Master of priority juggling, nurturer of creativity, and finder of beauty in the mundane and chaotic—at life and at work.",
        "Curiosity fuels the soul, and killed the cat.",
        "Cats have nine lives, and I have five cats.  The math is in my favor.",
        "Life’s greatest joys often come from small, thoughtful moments. Technology should be simple in utility and amplify one's joy.",
        "Whimsy? It’s a daily necessity. Period."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <>
            <Header />

            <div className="container">
                <div className="about-box">
                    <div className="image-section">
                        <img src="/images/selfie.png" alt="Selfie" />
                    </div>
                    <div className="box">
                        <h2>About</h2>
                        {texts.map((text, index) => (
                            <p
                                key={index}
                                className={`dynamic-text ${index === activeIndex ? "visible" : "hidden"}`}
                                style={{
                                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
                                    filter: "grayscale(100%)",
                                    color: "red",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    marginTop: "15%",
                                    maxWidth: "100%",
                                    marginLeft: "auto",
                                    marginRight: "20%",
                                    
                                }}
                            >
                                {text}
                            </p>

                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
