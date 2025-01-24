import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="box">
                    <h1>Projects</h1>
                    <p className="text">Prompt to Reframe</p>
            
                        <a className="link" href="https://reframer-473c134b8246.herokuapp.com/" target="_blank">
                            <img className="thumbprint" src="/images/thumbprint-reframer.png" alt="Reframer Thumbprint" />
                        </a>

                        <a className="link" href='https://negativity-reframer-5d42696baa3b.herokuapp.com/' target='_blank'>
                            <img className="thumbprint" src='/images/thumbprint-negativity.png' alt ='Negativity Thumbprint' />
                        </a>
              
                </div>
            </div> 

            <Footer />
        </>
    );
};

export default Projects;
