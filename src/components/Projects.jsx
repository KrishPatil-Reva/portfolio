import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title title-glow">Projects</h2>
      <p className="section-subtitle">
        A selection of academic coursework, engineering projects, and coding practice.
      </p>

      <div className="projects-grid grid-3">
        {projects.map((project) => (
          <div key={project.id} className="glass-card project-card">
            {/* Top Bar with Icon & Actions */}
            <div className="project-header">
              <div className="project-folder-icon">
                <FaFolderOpen />
              </div>
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`project-link-icon ${project.githubUrl === '#' ? 'placeholder-link' : ''}`}
                  title={project.githubUrl === '#' ? "GitHub link will be added later" : "View Source on GitHub"}
                  onClick={project.githubUrl === '#' ? (e) => e.preventDefault() : undefined}
                >
                  <FaGithub />
                </a>
                <a 
                  href={project.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`project-link-icon ${project.projectUrl === '#' ? 'placeholder-link' : ''}`}
                  title={project.projectUrl === '#' ? "Project demo link will be added later" : "View Live Project"}
                  onClick={project.projectUrl === '#' ? (e) => e.preventDefault() : undefined}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {/* Project Title and Details */}
            <div className="project-info">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
            </div>

            {/* Project Tags (Topics) */}
            <div className="project-tags">
              {project.topics.map((topic, idx) => (
                <span key={idx} className="project-tag">
                  {topic}
                </span>
              ))}
            </div>

            {/* Project CTA Buttons */}
            <div className="project-actions">
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn-action-view ${project.projectUrl === '#' ? 'disabled-btn' : ''}`}
                onClick={project.projectUrl === '#' ? (e) => e.preventDefault() : undefined}
              >
                <span>View Project</span>
                <FaExternalLinkAlt className="action-btn-icon" />
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn-action-git ${project.githubUrl === '#' ? 'disabled-btn' : ''}`}
                onClick={project.githubUrl === '#' ? (e) => e.preventDefault() : undefined}
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
