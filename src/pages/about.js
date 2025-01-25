import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const texts = [
        "I am a software developer passionate about creating human-centered solutions by leveraging technology to make our lives simpler, more efficient, and more fulfilling.",
        "Curiosity fuels the soul, and killed the cat.",
        "Master of priority juggling, nurturer of creativity, and finder of beauty in the mundane and chaotic—at life and at work.",
        "Cats have nine lives, and I have five cats.  The math is in my favor.",
        "Life’s greatest joys often come from small, thoughtful moments. Technology should be simple in utility and amplify one's joy.",
        "Whimsy? It’s a daily necessity. Period."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [texts.length]);

    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        const cloneIcons = () => {
            if (container) {
                const icons = container.children;
                const clone = Array.from(icons).map((icon) => icon.cloneNode(true));
                clone.forEach((node) => container.appendChild(node));
            }
        };

        cloneIcons();
    }, []);

    return (
        <>
            <Header />

            <div className="container">
                <div className="image-section">
                    <img src="/images/selfie.png" alt="Selfie" />
                </div>
                <div className="box">
                    <h1>About</h1>
                    {texts.map((text, index) => (
                        <p
                            key={index}
                            className={`dynamic-text ${index === activeIndex ? "visible" : "hidden"}`}
                        >
                            {text}
                        </p>
                    ))}
                </div>

                <div className="icon-section scrolling" ref={scrollRef}>
                    <img className="icon-gray" src="/images/react.png" alt="react" />
                    <img className="icon-gray" src="/images/nextjs.png" alt="nextjs" />
                    <img className="icon-gray" src="/images/node.png" alt="nodejs" />
                    <img className="icon-gray" src="/images/mongo.png" alt="mongodb" />
                    <img className="icon-gray" src="/images/expo.png" alt="Expo" />
                    <img className="icon-gray" src="/images/js.png" alt="javascript" />
                    <img className="icon-gray" src="/images/html.png" alt="html" />
                    <img className="icon-gray" src="/images/css.png" alt="html" />
                    <img className="icon-gray" src="/images/github-octo.png" alt="github-octo" />
                    <img className="icon-gray" src="/images/netlify.png" alt="netlify" />
                    <img className="icon-gray" src="/images/heroku.png" alt="heroku" />
                    <img className="icon-gray" src="/images/wordpress.png" alt="wordpress" />
                    </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
