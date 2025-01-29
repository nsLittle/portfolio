import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="box">
                    <h1>Projects</h1>
        
                    <p className="text">Power of Prompt Engineering</p>
                    <p className="text-sub">Designed a custom ChatGPT API integration to process user input, delivering tailored, context-specific reframed outputs in real time.</p>
            
                        <a className="link" href="https://reframer-473c134b8246.herokuapp.com/" target="_blank">
                            <img className="thumbprint" src="/images/thumbprint-reframer.png" alt="Reframer Thumbprint" />
                        </a>

                        <a className="link" href='https://negativity-reframer-5d42696baa3b.herokuapp.com/' target='_blank'>
                            <img className="thumbprint" src='/images/thumbprint-negativity.png' alt ='Negativity Thumbprint' />
                        </a>
              
                        <a className="link" href='https://limitless-reframer-7e82e380af02.herokuapp.com/' target='_blank'>
                            <img className="thumbprint" src='/images/thumbprint-limitless.png' alt ='Limitless Thumbprint' />
                        </a>

                        <p className="text">Contact Management System</p>
                        <p className="text-sub">Built a React and Next.js application that enables users to add, edit, delete, and sort contacts, providing an intuitive and efficient contact management system.</p>

                        <a className="link" href="https://dream-contact-list.netlify.app/" target="_blank">
                            <img className="thumbprint" src="/images/thumbprint-contact-one.png" alt="Contact List Thumbprint" />
                        </a>
                        <a className="link" href="https://dream-contact-list.netlify.app/" target="_blank">
                            <img className="thumbprint" src="/images/thumbprint-contact-two.png" alt="Contact List Thumbprint" />
                        </a>
                </div>
            </div> 

            <Footer />
        </>
    );
};

export default Projects;
