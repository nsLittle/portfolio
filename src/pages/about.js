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


                <div className="icon-section">
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
