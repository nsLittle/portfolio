import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setFormData({
            fullName: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <Header />

            <div className='container'>
                <div className='box'>
                    <h1>Contact Me</h1>
                    <form onSubmit={handleSubmit} className='text'>
                            <div className='submission-form'>
                                <label htmlFor="fullName" className='field-title'>Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className='input'
                                    required
                                />
                            </div>

                            <div className='submission-form'>
                                <label htmlFor="email" lassName='field-title'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='input'
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='input'
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className='button'>
                                Submit
                            </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;