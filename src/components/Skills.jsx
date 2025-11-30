import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillsData = {
    coding: [
        { name: 'HTML', level: 98 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 50 },
        { name: 'jQuery', level: 50 }
    ],
    design: [
        { name: 'Photoshop', level: 95 },
        { name: 'Illustrator', level: 90 },
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Premiere Pro', level: 75 },
        { name: 'After Effects', level: 70 }
    ]
};

const SkillBar = ({ name, level, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="skill-item" ref={ref}>
            <div className="skill-header">
                <span className="skill-name">{name}</span>
                <span className="skill-percentage">{level}%</span>
            </div>
            <div className="skill-bar">
                <motion.div
                    className="fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h3>SKILLS</h3>
                </div>
                <div className="skills-wrapper">
                    <motion.div
                        className="skill-category"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4>Coding Skills</h4>
                        <div className="skill-grid">
                            {skillsData.coding.map((skill, index) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="skill-category"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4>Design Tools</h4>
                        <div className="skill-grid">
                            {skillsData.design.map((skill, index) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    delay={index * 0.1 + 0.3}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
