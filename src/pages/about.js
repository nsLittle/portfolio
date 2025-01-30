import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const texts = [
        "I'm a software developer passionate about creating human-centered solutions by leveraging technology to make our lives simpler, more efficient, and more fulfilling.",
        "Curiosity fuels the soul, and killed the cat.",
        "Master of priority juggling, nurturer of creativity, and finder of beauty in the mundane and chaotic—at life and at work.",
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

    // const scrollRef = useRef(null);

    // useEffect(() => {
    //     const container = scrollRef.current;
    //     const cloneIcons = () => {
    //         if (container) {
    //             const icons = container.children;
    //             const clone = Array.from(icons).map((icon) => icon.cloneNode(true));
    //             clone.forEach((node) => container.appendChild(node));
    //         }
    //     };

    //     cloneIcons();
    // }, []);

    return (
        <>
            <Header />

            <div className="container">
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
                                marginTop: "85px",
                                marginLeft: "35px",
                            }}
                        >
                            {text}
                        </p>

                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
