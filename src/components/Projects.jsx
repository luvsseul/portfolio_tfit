import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const developmentProjects = [
    {
        title: 'Shopping Mall',
        description: 'HTML, CSS, JavaScript, React, Firebase, GoogleAuth, Cloudinary',
        details: '리액트를 이용해 쇼핑몰기능을 구현했습니다. GoogleAuth를 이용해 관리자로 인증된 계정은 상품을 등록할수있고, 기본적인 구글 계정 회원가입과, 로그인한 고객에게 장바구니를 제공합니다.',
        link: 'https://tranquil-tartufo-62c5db.netlify.app/',
        image: '/imgs/projects/project4.png'
    },
    {
        title: 'Youtube Project',
        description: 'HTML, CSS, JavaScript, React, Youtube API',
        details: '리액트로 유튜브 사이트를 구현했습니다. Youtube API로 검색시 유튜브의 실시간 데이터베이스로 검색결과를 나타냅니다. 해당 동영상을 클릭하면 상세페이지에 동영상 정보와 계정 정보가 나타납니다.',
        link: 'https://eclectic-griffin-59d023.netlify.app/',
        image: '/imgs/projects/project5.png'
    },
    {
        title: 'Starbucks Clone Coding',
        description: 'Clone Coding with Html, CSS, JavaScript',
        details: 'Starbucks 홈페이지를 클론코딩한 사이트로 JavaScript로 다양한 효과를 구현했습니다.',
        link: 'https://luvsseul.github.io/JS-starbucks/',
        image: '/imgs/projects/project2.png'
    },
    {
        title: 'Catching Bugs Game',
        description: 'Click only carrots! game with HTML, CSS, JavaScript',
        details: '제한시간 안에 벌레를 피해 당근만 클릭해 수거하는 게임을 구현했습니다.',
        link: 'https://luvsseul.github.io/JS-catchingBugs/',
        image: '/imgs/projects/project3.png'
    }
];

const designProjects = [
    {
        title: '영상제작',
        description: 'Premiere Pro, After Effects, Photoshop',
        details: '프리미어프로, 애프터이펙트, 포토샵을 활용한 영상 제작 프로젝트입니다.',
        link: '/portfolio.pdf',
        image: '/imgs/projects/project1.png'
    },
    {
        title: '상세페이지 제작',
        description: 'Photoshop, Illustrator',
        details: '포토샵과 일러스트레이터를 활용한 상세페이지 디자인입니다.',
        link: '/portfolio.pdf',
        image: '/imgs/projects/design1.png'
    },
    {
        title: '전시물품제작',
        description: 'Photoshop, Illustrator',
        details: '전시회 및 행사용 물품 디자인 프로젝트입니다.',
        link: '/portfolio.pdf',
        image: '/imgs/projects/design2.png'
    },
    {
        title: '인쇄물, 포스터, 카드 제작',
        description: 'Photoshop, Illustrator',
        details: '다양한 인쇄 매체, 포스터, 카드 디자인 작업물입니다.',
        link: '/portfolio.pdf',
        image: '/imgs/projects/design3.png'
    }
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('design');

    const currentProjects = activeTab === 'design' ? designProjects : developmentProjects;

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h3>PROJECTS</h3>
                    <p>My recent works</p>
                </div>

                <div className="project-tabs">
                    <button
                        className={`tab-button ${activeTab === 'design' ? 'active' : ''}`}
                        onClick={() => setActiveTab('design')}
                    >
                        Design
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'development' ? 'active' : ''}`}
                        onClick={() => setActiveTab('development')}
                    >
                        Development
                    </button>
                </div>

                {activeTab === 'design' && (
                    <div className="pdf-download-section">
                        <a href="/portfolio.pdf" target="_blank" rel="noopener noreferrer" className="pdf-download-btn">
                            View Design Portfolio PDF
                        </a>
                    </div>
                )}

                <div className="project-grid">
                    {currentProjects.map((project, index) => (
                        <motion.div
                            key={`${activeTab}-${index}`}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="image-placeholder" style={{ display: 'none' }}>Project Image</div>
                            </div>
                            <div className="project-info">
                                <h4>{project.title}</h4>
                                <p className="project-tech">{project.description}</p>
                                <p className="project-desc">{project.details}</p>
                                {activeTab === 'development' && (
                                    <div className="project-links">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            View Site
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
