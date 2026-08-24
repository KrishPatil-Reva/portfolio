import React from 'react';
import { FaAward, FaCalendarAlt, FaTags, FaExternalLinkAlt, FaImage } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Certificates.css';

export default function Certificates() {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="section certificates-section">
      <h2 className="section-title title-glow">Certifications</h2>
      <p className="section-subtitle">
        Credentials, courses, and technical achievements. Placeholders are shown below for future additions.
      </p>

      <div className="certificates-grid grid-2">
        {certificates.map((cert) => (
          <div key={cert.id} className="glass-card certificate-card">
            {/* Image display or visual placeholder */}
            <div className="certificate-media">
              {cert.imageUrl ? (
                <img 
                  src={cert.imageUrl} 
                  alt={cert.name} 
                  className="certificate-img"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              
              <div className="certificate-placeholder-media" style={{ display: cert.imageUrl ? 'none' : 'flex' }}>
                <div className="placeholder-icon-wrap">
                  <FaAward className="pulse-award" />
                </div>
                <span>Credential Image Placeholder</span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="certificate-details">
              <div className="certificate-meta">
                <span className="issuer-badge">{cert.issuer}</span>
                <div className="cert-date">
                  <FaCalendarAlt className="meta-icon" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 className="certificate-name">{cert.name}</h3>

              <div className="certificate-skills">
                <FaTags className="skills-icon" />
                <div className="skills-badges">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn-certificate ${cert.credentialUrl === '#' ? 'disabled-cert-btn' : ''}`}
                onClick={cert.credentialUrl === '#' ? (e) => e.preventDefault() : undefined}
              >
                <span>View Certificate</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
