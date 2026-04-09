import { useEffect, useRef, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const projectData = [
  {
    title: 'Image Resizing Tool',
    description: 'Developed a high-performance serverless image processing tool. Features include client-side cropping, layout optimization, and secure storage utilizing MinIO with Pre-signed URLs.',
    tech: ['React', 'Serverless', 'MinIO', 'JavaScript'],
    github: 'https://github.com/Ratnesh-11008'
  },
  {
    title: 'Hospital Management System',
    description: 'A comprehensive system to streamline hospital operations. Includes complete patient & doctor record management, seamless appointment tracking, billing automation, and role-based secure dashboards.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/Ratnesh-11008'
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'An automated attendance logging solution utilizing real-time face detection. Built with a focus on high accuracy optimization to replace manual roll calls effortlessly.',
    tech: ['Python', 'OpenCV', 'Machine Learning', 'SQL'],
    github: 'https://github.com/Ratnesh-11008'
  }
];

const Projects = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2 className="section-title">Featured Projects</h2>
      
      <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
        {projectData.map((project, index) => (
          <div className="project-card glass" key={index} style={{ '--animation-order': index }}>
            <div className="project-content">
              <div className="project-top">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link" aria-label="GitHub Link">
                  <FiGithub />
                </a>
              </div>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-bottom">
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
