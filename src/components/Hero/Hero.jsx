import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiArrowRight, FiMail } from 'react-icons/fi';
import './Hero.css';

const subtitleToType = "Crafting Modern Web Applications";

const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;
    
    if (currentSubtitle.length < subtitleToType.length) {
      const timeout = setTimeout(() => {
        setCurrentSubtitle(subtitleToType.slice(0, currentSubtitle.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentSubtitle, isTyping]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-greeting">Hi, I'm</h1>
          <h2 className="hero-name">
            Ratnesh Singh Vishen
          </h2>
          <h3 className="hero-title gradient-text">
            {currentSubtitle}
            <span className="cursor">|</span>
          </h3>
          <div className="hero-desc-container">
            <p className="hero-desc">
              I specialize in building exceptional digital experiences. I am passionate about crafting robust, scalable applications and finding elegant solutions to complex problems.
            </p>
            <p className="hero-desc">
              I enjoy working across both frontend and backend technologies, building responsive user experiences and reliable backend systems. I am always eager to learn, improve, and contribute to projects that create real-world impact.
            </p>
          </div>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <FiMail />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Ratnesh-11008" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/ratneshsingh0903/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>
        </div>
      </div>
      
      {/* Decorative Blobs */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
    </section>
  );
};

export default Hero;
