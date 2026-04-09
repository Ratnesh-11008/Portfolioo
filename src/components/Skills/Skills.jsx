import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['C', 'C++', 'Java', 'SQL']
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'Google Colab']
  },
  {
    title: 'Database',
    skills: ['MySQL']
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
                  {skill}
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
