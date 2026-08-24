import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './LinkedIn.css';

export default function LinkedIn() {
  const { linkedinSection } = portfolioData;

  return (
    <section className="section linkedin-section">
      <div className="glass-card linkedin-card">
        <div className="linkedin-glow-overlay"></div>
        <div className="linkedin-content">
          <div className="linkedin-brand-icon">
            <FaLinkedin />
          </div>
          
          <div className="linkedin-text">
            <h2>{linkedinSection.title}</h2>
            <p>{linkedinSection.description}</p>
          </div>

          <a 
            href={linkedinSection.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary linkedin-btn"
            title="LinkedIn link will be updated later"
            onClick={linkedinSection.url === '#' ? (e) => e.preventDefault() : undefined}
          >
            <FaLinkedin />
            <span>{linkedinSection.buttonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
