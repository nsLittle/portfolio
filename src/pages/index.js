import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="pro-section">
                    {/* <div className="pro-link-row">
                        <a href="https://www.linkedin.com/in/mutsumihata/" target="_blank">
                            <img className="pro-link" src="/images/linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://github.com/nsLittle" target="_blank">
                            <img className="pro-link" src="/images/github.png" alt="github" />
                        </a>
                    </div> */}

                    <p className="pro-text">Software Developer</p>
                </div>


                <div className="box-home">
                    <h1 className="title-home">Mutsumi Hata</h1>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Home;
