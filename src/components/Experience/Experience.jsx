import { useEffect, useRef } from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'Industrial Summer Training',
    company: 'Chandigarh University',
    date: 'Summer',
    description: 'Intensive training program with a strong focus on Data Structures and Algorithms (DSA), developing mini-projects, and enhancing problem-solving capabilities.'
  }
];

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience & Training</h2>
      
      <div className="timeline" ref={timelineRef}>
        {experienceData.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content glass">
              <h3 className="timeline-title">
                {job.title} <span className="company">@ {job.company}</span>
              </h3>
              <p className="timeline-date">{job.date}</p>
              <p className="timeline-desc">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
