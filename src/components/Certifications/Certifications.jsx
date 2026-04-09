import { useEffect, useRef, useState } from 'react';
import './Certifications.css';
import { FiAward } from 'react-icons/fi';

const certData = [
  { name: 'AWS Solutions Architect Associate (2025)' },
  { name: 'Infosys Springboard Full Stack Developer' },
  { name: 'NPTEL Cloud Computing' }
];

const Certifications = () => {
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
    <section id="certifications" className="certifications" ref={sectionRef}>
      <h2 className="section-title">Certifications</h2>
      
      <div className={`cert-grid ${isVisible ? 'animate-in' : ''}`}>
        {certData.map((cert, index) => (
          <div className="cert-card glass" key={index} style={{ '--animation-order': index }}>
            <FiAward className="cert-icon" />
            <h3 className="cert-name">{cert.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
