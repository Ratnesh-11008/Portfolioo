import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projectData = [
  {
    title: 'AI Trip Planner',
    description: [
      'AI-powered full-stack travel itinerary generation',
      'Personalized plans based on user destination and budget',
      'Day-wise location-specific recommendations within India',
      'Responsive full-stack web interface with intuitive design',
      'Real-time backend processing and API integrations'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'FastAPI (Python)', 'Render'],
    liveLink: 'https://ai-trip-frontend.onrender.com/',
    githubLink: 'https://github.com/Ratnesh-11008/AITripPlanner.git'
  },
  {
    title: 'Smart-Hire',
    description: [
      'Full-stack job portal for candidates and recruiters',
      'Secure JWT-based authentication and role-based access',
      'Seamless resume upload and application management',
      'Integrated REST APIs with a responsive modern UI',
      'Deployed on cloud with PostgreSQL for scalability'
    ],
    techStack: ['React', 'Spring Boot', 'PostgreSQL', 'JWT Auth', 'REST API', 'Full Stack'],
    liveLink: 'https://smarthire-frontend-6q59.onrender.com',
    githubLink: ''
  },
  {
    title: 'InvestEase',
    description: [
      'Modern stock portfolio management and analysis web app',
      'Track investments and evaluate real-time performance',
      'Analyze risk and generate future financial predictions',
      'Personalized user accounts for secure data access',
      'Intuitive dashboard with interactive data charts'
    ],
    techStack: ['React', 'JavaScript', 'CSS', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB'],
    liveLink: 'https://krxna16-stock-portfolio-tool-app-bdjwdw.streamlit.app/',
    githubLink: 'https://github.com/Ratnesh-11008/InvestEase-main.git'
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
                <div className="project-links" style={{ display: 'flex', gap: '15px' }}>
                  {project.githubLink !== 'NA' ? (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link" aria-label="GitHub Link">
                      <FiGithub />
                    </a>
                  ) : (
                    <span className="github-link" title="GitHub Coming Soon" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                      <FiGithub />
                    </span>
                  )}
                  {project.liveLink !== 'NA' ? (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="github-link" aria-label="Live Demo">
                      <FiExternalLink />
                    </a>
                  ) : (
                    <span className="github-link" title="Live Demo Coming Soon" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                      <FiExternalLink />
                    </span>
                  )}
                </div>
              </div>
              <ul className="project-description-list">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="project-bottom">
              <ul className="project-tech-list">
                {project.techStack.map((tech, i) => (
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
