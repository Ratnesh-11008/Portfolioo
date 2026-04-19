import { useEffect, useRef, useState } from 'react';
import {
  SiC, SiCplusplus, SiJavascript, SiMysql, SiPostgresql, SiMongodb,
  SiSpringboot, SiFastapi, SiExpress, SiTailwindcss, SiRender, SiPython, SiOpencv, SiVercel
} from 'react-icons/si';
import {
  FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaAws,
  FaServer, FaKey, FaCloud, FaRobot, FaBrain, FaCamera
} from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'REST API', icon: <FaServer /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> }
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> }
    ]
  },
  {
    title: 'Deployment & Cloud',
    skills: [
      { name: 'Render', icon: <SiRender /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Cloud Basics', icon: <FaCloud /> }
    ]
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Machine Learning', icon: <FaBrain /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'Facial Recognition', icon: <FaCamera /> },
      { name: 'AI Recommendation Systems', icon: <FaRobot /> }
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
      <h2 className="section-title">Technical Skills</h2>

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
