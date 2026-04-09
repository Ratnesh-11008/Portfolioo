import { useEffect, useRef, useState } from 'react';
import './Education.css';

const educationData = [
  {
    institution: 'Chandigarh University',
    degree: 'Bachelor of Engineering in Computer Science',
    score: 'CGPA: 8.05',
    date: 'Expected Graduation'
  },
  {
    institution: 'High School',
    degree: '12th Grade (Senior Secondary)',
    score: 'Completed',
    date: ''
  },
  {
    institution: 'High School',
    degree: '10th Grade (Secondary)',
    score: 'Completed',
    date: ''
  }
];

const Education = () => {
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
    <section id="education" className="education" ref={sectionRef}>
      <h2 className="section-title">Education</h2>
      
      <div className={`edu-grid ${isVisible ? 'animate-in' : ''}`}>
        {educationData.map((edu, index) => (
          <div className="edu-card glass" key={index} style={{ '--animation-order': index }}>
            <div className="edu-header">
              <h3 className="edu-degree">{edu.degree}</h3>
              <span className="edu-date">{edu.date}</span>
            </div>
            <h4 className="edu-inst">{edu.institution}</h4>
            <p className="edu-score">{edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
