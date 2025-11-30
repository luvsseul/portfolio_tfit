import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>THANK YOU</h3>
                    <div className="contact-info">
                        <p>CONTACT US</p>
                        <p>phone: 010.9511.1227</p>
                        <p>email: luvsseul@gmail.com</p>
                    </div>
                    <div className="footer-logo">
                        <img src="/imgs/logo.png" alt="tfit" className="logo-text footer-logo-img" />
                        <p className="tagline">THE INCLUSIVE BEAUTY</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
