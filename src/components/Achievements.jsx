import React from 'react';
import { FaCheckCircle, FaStar, FaAward } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Achievements.css';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="section achievements-section">
      <h2 className="section-title title-glow">Achievements</h2>
      <p className="section-subtitle">
        Milestones and programming targets accomplished during my engineering studies.
      </p>

      <div className="achievements-container">
        <div className="glass-card achievements-card">
          <div className="achievements-header">
            <div className="achievements-badge-icon">
              <FaAward className="rotate-normal" />
            </div>
            <div className="achievements-title-text">
              <h3>Milestones Reached</h3>
              <p>Foundations built in AI, Data Science & Programming</p>
            </div>
          </div>

          <div className="achievements-list">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-item-row">
                <div className="achievement-icon-wrapper">
                  <FaCheckCircle className="check-icon" />
                </div>
                <div className="achievement-content-text">
                  <span>{achievement}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="achievements-footer-note">
            <FaStar className="star-iconPulse" />
            <span>Ready to participate in future hackathons, competitions, and technical internships.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
