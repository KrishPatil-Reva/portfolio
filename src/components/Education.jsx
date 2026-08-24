import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <h2 className="section-title title-glow">Education</h2>
      <p className="section-subtitle">
        My formal academic journey and core areas of specialization.
      </p>

      <div className="education-timeline">
        {education.map((item, index) => (
          <div key={index} className="timeline-item">
            {/* Left timeline nodes */}
            <div className="timeline-node">
              <div className="node-circle">
                <FaGraduationCap />
              </div>
              <div className="node-line"></div>
            </div>

            {/* Timeline content glass-card */}
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <div>
                  <span className="status-badge">{item.status}</span>
                  <h3 className="degree-title">{item.degree}</h3>
                  <h4 className="field-title">{item.field}</h4>
                </div>
                
                <div className="timeline-meta">
                  <div className="meta-item">
                    <FaUniversity className="meta-icon" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>

              <div className="gpa-card">
                <FaAward className="gpa-icon" />
                <div className="gpa-info">
                  <span className="gpa-label">Cumulative GPA</span>
                  <span className="gpa-value">{item.gpa}</span>
                </div>
              </div>

              <div className="education-highlights">
                <h5>Key Objectives & Scope:</h5>
                <ul>
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
