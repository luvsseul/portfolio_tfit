import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div
                    className="section-layout"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="profile-image">
                        <img
                            src="/imgs/Profile.png"
                            alt="Han Seulgi Profile"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="image-placeholder" style={{ display: 'none' }}>Profile Image</div>
                    </div>
                    <div className="about-content">
                        <h3>ABOUT ME</h3>
                        <p className="bio">
                            안녕하세요 저는 웹디자이너 한슬기입니다.
                        </p>
                        <p className="description">
                            현재 까지 약 10년간 웹 디자인 분야에서 실무 경험을 쌓았습니다.<br />
                            디자인의 완성도와 효율적인 웹 환경 구축을 위해 웹 개발 지식도 함께 습득하고 활용하고 있습니다.<br />
                            새로운 디자인 트렌드와 기술을 응용하고, 이를 통해 사용자의 불편함을 개선하며 완성도 높은 결과물을 만들어내는 과정에서 끊임없는 동기부여를 얻고 있습니다.<br />
                            웹디자이너로서 시각적 만족과 기능적 효율성을 동시에 높이는 데 기여하겠습니다.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
