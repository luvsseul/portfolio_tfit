import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
    {
        period: '2024 - Present',
        company: 'SLZ (에스엘즈)',
        role: '경영전략팀 팀장 (Head of Business Strategy Team)',
        duties: [
            '홈페이지 유지보수, 웹디자인, 코드작성, 배포 (HTML, CSS, JavaScript,React 활용)',
            '인쇄물(배너,포스터,리플렛,명함) 제작',
            '전시 물품 제작 및 전시회 참여, 촬영 및 스케치영상 제작',
            '홍보 영상, 제품튜토리얼 영상, 업무매뉴얼 교육영상 등 제작',
            '발표자료 및 IR 자료 제작',
            'SNS 관리 (국영문 콘텐츠 제작)',
            '보도자료 작성 및 언론사 컨택'
        ]
    },
    {
        period: '2014 - 2023',
        company: 'M design company (엠디자인컴퍼니)',
        role: 'Web Designer & Brand Manager',
        duties: [
            '자사몰 관리 및 운영(cafe24, 고도몰)',
            '웹디자인, 상품상세페이지, 이벤트페이지, 배너 제작',
            '상품 디자인, 제작 및 CS 업무',
            '오픈마켓 입점 및 SNS 관리, 마케팅'
        ]
    },
    {
        period: '2019 - 2022',
        company: 'Studio Bonbon (스튜디오봉봉)',
        role: 'Web Designer',
        duties: [
            '사진촬영, 제품, 영상촬영 대행 및 보정',
            '브랜드 관련 인쇄물 제작',
            '상세페이지 및 프로모션 이미지 디자인'
        ]
    },
    {
        period: '2013 - 2014',
        company: 'KB Pacific (케이비퍼시픽) / Shinhan Life (신한생명)',
        role: '화장품 브랜드 마케팅, 콘텐츠운영 / 고객창구 수신, 심사',
        duties: [
            'KB Pacific: 화장품 브랜드 마케팅 및 콘텐츠운영',
            '신한생명: 고객창구 수신업무, 심사업무'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header">
                    <h3>EXPERIENCE</h3>
                </div>
                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="timeline-date">{exp.period}</div>
                            <div className="timeline-content">
                                <h4>{exp.company}</h4>
                                <p className="role">{exp.role}</p>
                                <ul className="job-desc">
                                    {exp.duties.map((duty, i) => (
                                        <li key={i}>{duty}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
