import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiArrowRight, FiMail } from 'react-icons/fi';
import './Hero.css';

const nameToType = "Ratnesh Singh Vishen";

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;
    
    if (currentText.length < nameToType.length) {
      const timeout = setTimeout(() => {
        setCurrentText(nameToType.slice(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentText, isTyping]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-greeting">Hi, I'm</h1>
        <h2 className="hero-name">
          {currentText}
          <span className="cursor">|</span>
        </h2>
        <h3 className="hero-title">
          Full Stack Developer <span className="dev-divider">|</span> Problem Solver
        </h3>
        <p className="hero-desc">
          I specialize in building exceptional digital experiences. I am passionate about crafting robust, scalable applications and finding elegant solutions to complex problems.
        </p>
        
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
      
      {/* Decorative Blobs */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
    </section>
  );
};

export default Hero;
