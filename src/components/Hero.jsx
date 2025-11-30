import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="hero-image-wrapper">
                        <img src="/imgs/hero-model.png" alt="Model" className="hero-main-image" />
                        <img src="/imgs/logo.png" alt="tfit" className="hero-title-overlay hero-logo-img" />
                    </div>
                    <div className="hero-text">
                        <h2>PORTFOLIO</h2>
                        <p className="subtitle">WEB DESIGNER | <span className="highlight">Han Seulgi</span></p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
