import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error message when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success banner after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);

      /* 
        ========================================================================
        HOW TO INTEGRATE BACKEND SERVICES LATER:
        
        OPTION A: Formspree (Easiest, no packages required)
        1. Create a form at https://formspree.io
        2. Set up the action attribute or submit handler fetch URL:
           
           fetch('https://formspree.io/f/YOUR_FORM_ID', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(formData)
           })
        
        OPTION B: EmailJS
        1. Install the SDK: npm install @emailjs/browser
        2. Initialize and send email:
           
           import emailjs from '@emailjs/browser';
           
           emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
             .then((result) => {
                 console.log('Success:', result.text);
             }, (error) => {
                 console.log('Failed:', error.text);
             });
        ========================================================================
      */
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title title-glow">Get In Touch</h2>
      <p className="section-subtitle">
        Let's build something together! Send me a message or reach out through my contacts below.
      </p>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info glass-card">
          <h3>Contact Details</h3>
          <p className="contact-intro-text">
            Feel free to connect for internships, learning collaborations, or general tech discussions.
          </p>

          <div className="info-list-container">
            <div className="contact-detail-item">
              <div className="contact-detail-icon text-cyan">
                <FaEnvelope />
              </div>
              <div className="contact-detail-content">
                <span>Email Me</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon text-blue">
                <FaPhone />
              </div>
              <div className="contact-detail-content">
                <span>Call Me</span>
                <a href={`tel:${personalInfo.mobile}`}>{personalInfo.mobile}</a>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <h4>Find me on</h4>
            <div className="social-links-row">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-box github-icon-box"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`social-icon-box linkedin-icon-box ${personalInfo.linkedin === '#' ? 'placeholder-link' : ''}`}
                title="LinkedIn"
                onClick={personalInfo.linkedin === '#' ? (e) => e.preventDefault() : undefined}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container glass-card">
          <h3>Send Message</h3>
          
          {submitSuccess && (
            <div className="success-banner">
              <span>✓ Message sent successfully! (Connect Formspree/EmailJS in code to enable real delivery)</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
                placeholder="Krish"
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
                placeholder="example@gmail.com"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'input-error' : ''}
                placeholder="Hi Krish, I would like to talk about..."
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className="btn-primary form-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="submit-loader"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
