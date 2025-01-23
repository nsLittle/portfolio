import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="text-section">
                    <h1>Mutsumi Hata</h1>
                    <p className="text-about">Software Developer</p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
