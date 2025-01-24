import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="box">
                    <h1>Mutsumi Hata</h1>
                    <p className="home-text">Software Developer</p>

                    <div className="icon-section">
                        <a href="https://www.linkedin.com/in/mutsumihata/" target="_blank">
                            <img className="icon" src="/images/linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://github.com/nsLittle" target="_blank">
                            <img className="icon" src="/images/github.png" alt="github" />
                        </a>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
