import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { personalInfo } = portfolioData;

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'GitHub', id: 'github-section' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Highlight active section on scroll
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          <span>{personalInfo.name}</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href={personalInfo.resumeUrl}
            className="btn-download"
            download
            title="Download Resume"
          >
            <FaDownload />
            <span>Resume</span>
          </a>

          {/* Hamburger Icon */}
          <button className="mobile-icon" onClick={handleToggle} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'mobile-drawer-active' : ''}`}>
        <ul className="mobile-drawer-menu">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-drawer-item">
              <a
                href={`#${item.id}`}
                className={`mobile-drawer-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-drawer-item">
            <a
              href={personalInfo.resumeUrl}
              className="btn-download-mobile"
              download
              onClick={() => setIsOpen(false)}
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
