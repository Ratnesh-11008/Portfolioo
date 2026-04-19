import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-text glass-card">
          <p>
            Hello! I'm a BE–CSE student with a strong foundation in <span className="highlight">Data Structures & Algorithms</span>, and hands-on experience in building full-stack web applications.
          </p>
          <p>
            I specialize in developing <span className="highlight">scalable and user-centric applications</span> using modern technologies across frontend and backend. Through projects like AI Trip Planner and Smart-Hire, I’ve worked on real-world problems involving AI integration, REST APIs, authentication systems, and cloud deployment.
          </p>
          <p>
            I’m a quick learner with a strong problem-solving mindset, comfortable in collaborative environments, and always eager to explore new technologies. I actively seek opportunities to contribute to <span className="highlight">impactful, real-world projects</span> while continuously growing as a developer.
          </p>
          <div className="about-chips">
            <span className="chip">Full Stack Development</span>
            <span className="chip">DSA</span>
            <span className="chip">AI Integration</span>
            <span className="chip">Scalable Systems</span>
            <span className="chip">Problem Solving</span>
          </div>
        </div>

        <div className="about-image-wrapper" ref={imageRef}>
          <div className="about-image glass">
            <div className="image-placeholder">
              <span className="profile-initials">RV</span>
              <span className="profile-role">Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
