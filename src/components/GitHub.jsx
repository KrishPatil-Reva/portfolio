import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './GitHub.css';

export default function GitHub() {
  const { githubSection } = portfolioData;
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch up to 6 of Krish's latest updated repositories
        const response = await fetch(
          `https://api.github.com/users/KrishPatil-Reva/repos?sort=updated&per_page=6`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepos(data);
        setError(false);
      } catch (err) {
        console.warn('GitHub API failed, falling back to static project cards:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Static fallback repos if GitHub API fails/rate-limits
  const fallbackRepos = [
    {
      name: "C-Programming-Practice",
      description: "Collection of C programming exercises and problem-solving assignments covering arrays, pointers, and structures.",
      language: "C",
      stargazers_count: 0,
      forks_count: 0,
      html_url: githubSection.url
    },
    {
      name: "Python-Fundamentals",
      description: "Python practices covering functions, loops, lists, and basic data processing models.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      html_url: githubSection.url
    },
    {
      name: "Solar-Energy-Tracking",
      description: "Engineering design layout files and code for the automated solar tracker mechanism.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      html_url: githubSection.url
    }
  ];

  const repoList = error || repos.length === 0 ? fallbackRepos : repos;

  // Function to map language colors
  const getLanguageColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case 'c': return '#555555';
      case 'python': return '#3572A5';
      case 'javascript': return '#f1e05a';
      case 'html': return '#e34c26';
      case 'css': return '#563d7c';
      default: return '#8b5cf6';
    }
  };

  return (
    <section id="github-section" className="section github-container-sec">
      <h2 className="section-title title-glow">{githubSection.title}</h2>
      <p className="section-subtitle">
        {githubSection.description}
      </p>

      {/* Dynamic Repo Grid */}
      <div className="repos-grid">
        {loading ? (
          <div className="loading-state">
            <div className="loader"></div>
            <span>Fetching public repositories...</span>
          </div>
        ) : (
          repoList.map((repo, idx) => (
            <div key={idx} className="glass-card repo-card">
              <div className="repo-card-header">
                <FaGithub className="repo-icon" />
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="repo-title-link"
                >
                  <h3>{repo.name}</h3>
                  <FaExternalLinkAlt className="repo-ext-icon" />
                </a>
              </div>

              <p className="repo-description">
                {repo.description || "No description provided. Click to view this repository on GitHub."}
              </p>

              <div className="repo-stats">
                <div className="repo-lang">
                  <span 
                    className="lang-dot" 
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  ></span>
                  <span>{repo.language || "Markdown"}</span>
                </div>
                
                <div className="repo-icons-stats">
                  <div className="stat-icon-item" title="Stars">
                    <FaStar className="stat-icon star" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="stat-icon-item" title="Forks">
                    <FaCodeBranch className="stat-icon branch" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="github-cta">
        <a 
          href={githubSection.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary github-big-btn"
        >
          <FaGithub />
          <span>{githubSection.buttonText}</span>
        </a>
      </div>
    </section>
  );
}
