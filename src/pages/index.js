import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="professional-section">
                    <a href="https://www.linkedin.com/in/mutsumihata/" target="_blank">
                        <img className="professional" src="/images/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/nsLittle" target="_blank">
                        <img className="professional" src="/images/github.png" alt="github" />
                    </a>
                </div>


                <div className="box-home">
                    <h1 className="title-home">Mutsumi Hata</h1>
                    <p className="text-home">Software Developer</p>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Home;
