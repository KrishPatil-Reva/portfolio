import React from 'react';
import { SiC } from 'react-icons/si';
import { DiPython, DiVisualstudio, DiGit, DiGithubBadge } from 'react-icons/di';
import { 
  FaBrain, 
  FaDatabase, 
  FaRobot, 
  FaCodeBranch, 
  FaTerminal, 
  FaChartBar,
  FaBookOpen,
  FaChevronRight
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const { skills } = portfolioData;

  // Function to match dynamic icon components
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'SiC':
        return <SiC className="skill-tech-icon" style={{ color: '#A8B9CC' }} />;
      case 'DiPython':
        return <DiPython className="skill-tech-icon" style={{ color: '#3776AB' }} />;
      case 'DiVisualstudio':
        return <DiVisualstudio className="skill-tech-icon" style={{ color: '#007ACC' }} />;
      case 'DiGit':
        return <DiGit className="skill-tech-icon" style={{ color: '#F05032' }} />;
      case 'DiGithubBadge':
        return <DiGithubBadge className="skill-tech-icon" style={{ color: '#F0F6FC' }} />;
      default:
        return null;
    }
  };

  // Map interests to appropriate icons
  const getInterestIcon = (interest) => {
    const term = interest.toLowerCase();
    if (term.includes('artificial intelligence')) return <FaBrain className="interest-icon text-cyan" />;
    if (term.includes('data science')) return <FaDatabase className="interest-icon text-blue" />;
    if (term.includes('machine learning')) return <FaRobot className="interest-icon text-purple" />;
    if (term.includes('software development')) return <FaCodeBranch className="interest-icon text-blue" />;
    if (term.includes('programming')) return <FaTerminal className="interest-icon text-cyan" />;
    if (term.includes('data analysis')) return <FaChartBar className="interest-icon text-purple" />;
    return <FaChevronRight className="interest-icon text-muted" />;
  };

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title title-glow">Skills & Interests</h2>
      <p className="section-subtitle">
        A breakdown of the programming languages, development tools, and computer science fields I work with.
      </p>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="glass-card skill-group-card">
          <h3 className="group-title text-cyan">Programming</h3>
          <div className="skills-list flex-row">
            {skills.programming.map((skill, idx) => (
              <div key={idx} className="tech-badge-item">
                {renderIcon(skill.icon)}
                <span className="tech-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="glass-card skill-group-card">
          <h3 className="group-title text-blue">Development Tools</h3>
          <div className="skills-list flex-row">
            {skills.tools.map((tool, idx) => (
              <div key={idx} className="tech-badge-item">
                {renderIcon(tool.icon)}
                <span className="tech-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="glass-card skill-group-card span-2-desktop">
          <h3 className="group-title text-purple">Areas of Interest</h3>
          <div className="interests-grid">
            {skills.interests.map((interest, idx) => (
              <div key={idx} className="interest-item">
                {getInterestIcon(interest)}
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="glass-card skill-group-card span-2-desktop learning-card">
          <div className="learning-header">
            <FaBookOpen className="learning-icon" />
            <h3 className="group-title">Currently Learning & Expanding</h3>
          </div>
          <div className="learning-grid">
            {skills.learning.map((item, idx) => (
              <div key={idx} className="learning-item">
                <span className="learning-dot"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
