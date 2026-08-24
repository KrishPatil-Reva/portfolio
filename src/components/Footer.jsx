import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const { personalInfo } = portfolioData;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          <span>&copy; {new Date().getFullYear()} Krish. All Rights Reserved.</span>
        </div>
        
        <div className="footer-socials">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`footer-social-link ${personalInfo.linkedin === '#' ? 'placeholder-link' : ''}`}
            title="LinkedIn"
            onClick={personalInfo.linkedin === '#' ? (e) => e.preventDefault() : undefined}
          >
            <FaLinkedin />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="footer-social-link"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
