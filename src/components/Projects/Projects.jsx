import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projectData = [
  {
    title: 'AI Trip Planner',
    description: 'A full-stack AI-powered web application that generates personalized travel itineraries based on user inputs such as destination, number of days, budget, and interests. The platform dynamically creates day-wise plans using AI, ensuring location-specific recommendations for places within India. It provides a user-friendly interface with responsive design and integrates real-time backend processing to deliver optimized travel plans instantly.',
    techStack: ['React.js', 'Tailwind CSS', 'FastAPI (Python)', 'Render'],
    liveLink: 'https://ai-trip-frontend.onrender.com/',
    githubLink: 'https://github.com/Ratnesh-11008/AITripPlanner.git'
  },
  {
    title: 'Smart-Hire',
    description: 'Developed a full-stack job portal that enables candidates to apply for jobs and recruiters to post and manage listings. Implemented secure JWT-based authentication, resume uploads, and role-based access. Integrated REST APIs with a responsive UI, ensuring seamless interaction between frontend and backend. Deployed the application on cloud with PostgreSQL database for real-world scalability.',
    techStack: ['React', 'Spring Boot', 'PostgreSQL', 'JWT Auth', 'REST API', 'Full Stack'],
    liveLink: 'https://smarthire-frontend-6q59.onrender.com',
    githubLink: 'NA'
  },
  {
    title: 'InvestEase',
    description: 'InvestEase is a modern stock portfolio management and analysis web application that helps users track their investments, evaluate performance, and make informed financial decisions. It allows users to add and manage holdings, view real-time portfolio insights, analyze risk and returns, and generate future predictions—all through an intuitive, user-friendly dashboard with personalized accounts for secure data access.',
    techStack: ['React', 'JavaScript', 'CSS', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB'],
    liveLink: 'NA',
    githubLink: 'NA'
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
              <p className="project-description">{project.description}</p>
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
