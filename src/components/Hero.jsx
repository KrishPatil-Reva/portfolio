import React from 'react';
import { FaGithub, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left column: Bio & Actions */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="tech-tag">Portfolio</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-glow">{personalInfo.name}</span> <span className="hand-wave">👋</span>
          </h1>
          
          <h2 className="hero-subtitle">
            {personalInfo.title}
          </h2>
          
          <p className="hero-description">
            {personalInfo.tagline}
          </p>

          <div className="hero-actions">
            <button 
              onClick={() => handleScrollTo('projects')} 
              className="btn-primary"
            >
              <span>View My Projects</span>
              <FaArrowRight />
            </button>
            
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="btn-secondary"
            >
              <FaEnvelope />
              <span>Contact Me</span>
            </button>
            
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-cyan hero-github"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right column: Beautiful animated AI/Data Science SVG graphic */}
        <div className="hero-visual">
          <div className="visual-wrapper">
            <svg 
              viewBox="0 0 500 500" 
              className="tech-svg" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer glowing effects */}
              <circle cx="250" cy="250" r="160" stroke="url(#cyan-blue-grad)" strokeWidth="1" strokeDasharray="5 10" className="rotate-slow" />
              <circle cx="250" cy="250" r="210" stroke="url(#blue-purple-grad)" strokeWidth="0.5" strokeDasharray="10 15" className="rotate-reverse" />
              
              {/* Inner core grid network lines */}
              <path d="M 120 180 L 250 100 L 380 180 L 380 320 L 250 400 L 120 320 Z" stroke="rgba(79, 172, 254, 0.15)" strokeWidth="1.5" />
              <path d="M 250 100 L 250 400 M 120 180 L 380 320 M 120 320 L 380 180" stroke="rgba(79, 172, 254, 0.1)" strokeWidth="1" />
              
              {/* Connecting AI node points */}
              <g className="nodes">
                {/* Node 1: Top Core */}
                <circle cx="250" cy="100" r="8" fill="#4facfe" className="pulse-node-cyan" />
                <circle cx="250" cy="100" r="15" stroke="#4facfe" strokeWidth="1" className="ping-node" />
                
                {/* Node 2: Top Right */}
                <circle cx="380" cy="180" r="6" fill="#a855f7" className="pulse-node-purple" />
                
                {/* Node 3: Bottom Right */}
                <circle cx="380" cy="320" r="8" fill="#00f2fe" className="pulse-node-cyan" />
                <circle cx="380" cy="320" r="15" stroke="#00f2fe" strokeWidth="1" className="ping-node" style={{ animationDelay: '1.5s' }} />

                {/* Node 4: Bottom Core */}
                <circle cx="250" cy="400" r="6" fill="#4facfe" className="pulse-node-purple" />
                
                {/* Node 5: Bottom Left */}
                <circle cx="120" cy="320" r="8" fill="#a855f7" className="pulse-node-cyan" />
                <circle cx="120" cy="320" r="15" stroke="#a855f7" strokeWidth="1" className="ping-node" style={{ animationDelay: '3s' }} />

                {/* Node 6: Top Left */}
                <circle cx="120" cy="180" r="6" fill="#00f2fe" className="pulse-node-purple" />

                {/* Central AI Brain Hub */}
                <circle cx="250" cy="250" r="28" fill="url(#core-radial)" className="brain-core" />
                <circle cx="250" cy="250" r="40" stroke="url(#cyan-blue-grad)" strokeWidth="1.5" className="rotate-normal" strokeDasharray="30 20" />
                
                {/* Floating data bits */}
                <g className="data-bits">
                  <circle cx="180" cy="150" r="3" fill="#00f2fe" className="float-data-1" />
                  <circle cx="320" cy="150" r="3.5" fill="#a855f7" className="float-data-2" />
                  <circle cx="300" cy="330" r="2.5" fill="#4facfe" className="float-data-3" />
                  <circle cx="200" cy="340" r="3" fill="#00f2fe" className="float-data-4" />
                </g>
              </g>

              {/* Define gradients */}
              <defs>
                <linearGradient id="cyan-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#4facfe" />
                </linearGradient>
                <linearGradient id="blue-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4facfe" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <radialGradient id="core-radial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(0, 242, 254, 0.4)" />
                  <stop offset="60%" stopColor="rgba(79, 172, 254, 0.15)" />
                  <stop offset="100%" stopColor="rgba(8, 12, 20, 0)" />
                </radialGradient>
              </defs>
            </svg>
            <div className="glow-backdrop"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
