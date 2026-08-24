import React from 'react';
import { FaGraduationCap, FaCode, FaBook, FaUser } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './About.css';

export default function About() {
  const { about } = portfolioData;

  // Map icons for quick info
  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case 'degree':
        return <FaGraduationCap className="info-icon text-cyan" />;
      case 'specialization':
        return <FaCode className="info-icon text-blue" />;
      case 'current status':
        return <FaUser className="info-icon text-purple" />;
      case 'interests':
        return <FaBook className="info-icon text-cyan" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="section about-section">
      <h2 className="section-title title-glow">About Me</h2>
      <p className="section-subtitle">
        A closer look into my background, academic path, and professional goals.
      </p>

      <div className="about-grid">
        {/* Bio Details */}
        <div className="about-bio glass-card">
          <h3>My Story</h3>
          <p>{about.bio}</p>
          <div className="about-strengths">
            <div className="strength-item">
              <span className="strength-dot dot-cyan"></span>
              <span>Theoretical understanding of machine learning algorithms</span>
            </div>
            <div className="strength-item">
              <span className="strength-dot dot-blue"></span>
              <span>Hands-on practice in C and Python programming languages</span>
            </div>
            <div className="strength-item">
              <span className="strength-dot dot-purple"></span>
              <span>Continuous development using Git and VS Code ecosystems</span>
            </div>
          </div>
        </div>

        {/* Quick Profile Card */}
        <div className="about-profile">
          <div className="glass-card profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <span>K</span>
              </div>
              <div className="profile-title">
                <h4>Krish</h4>
                <p>AI & Data Science Student</p>
              </div>
            </div>
            
            <div className="profile-details">
              {about.quickInfo.map((info, idx) => (
                <div key={idx} className="info-item">
                  <div className="info-left">
                    {getIcon(info.label)}
                    <span className="info-label">{info.label}</span>
                  </div>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>

            <div className="profile-footer">
              <span className="tech-badge">Future-Focused</span>
              <span className="tech-badge">Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
