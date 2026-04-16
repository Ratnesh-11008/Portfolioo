import { useEffect, useRef, useState } from 'react';
import { SiC, SiCplusplus, SiJavascript, SiMysql, SiGooglecolab } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'SQL', icon: <SiMysql /> }
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <FaReact /> }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Google Colab', icon: <SiGooglecolab /> }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> }
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2 className="section-title">My Skills</h2>
      
      <div className={`skills-container ${isVisible ? 'animate-in' : ''}`}>
        {skillCategories.map((category, idx) => (
          <div className="skill-card glass" key={idx} style={{ '--animation-order': idx }}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div className="skill-tag" key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
