import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Ratnesh-11008" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/ratneshsingh0903/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
        <p className="copyright">
          © {year} Ratnesh Singh Vishen. Developed with React & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
