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
            Hello! I'm a motivated BE–CSE student with a strong foundation in
            <span className="highlight"> Data Structures & Algorithms</span>, web development, and building scalable applications.
          </p>
          <p>
            I enjoy tackling complex problems and rapidly learning new technologies. Whether it's crafting
            responsive user interfaces on the frontend or designing robust serverless architectures on the backend,
            I strive to write clean, efficient, and maintainable code.
          </p>
          <p>
            As a highly adaptable team player, I thrive in collaborative environments and am constantly looking for
            opportunities to improve my skills and contribute to impactful projects.
          </p>
        </div>

        <div className="about-image-wrapper" ref={imageRef}>
          <div className="about-image glass">
            {/* Using a stylized colored block for now */}
            <div className="image-placeholder">
              RV
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
