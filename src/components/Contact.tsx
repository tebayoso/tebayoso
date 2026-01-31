import React from 'react';
import { socialLinks, scheduleUrl, personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { DynamicIcon, CalendarIcon } from './Icons';
import type { IconName } from './Icons';

const Contact: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section contact">
      <div className="section-content">
        <div className="contact-content">
          {/* Header */}
          <div
            ref={headerRef}
            className="contact-header"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            <h2>
              Let's <span>Connect</span>
            </h2>
            <p>
              Open to consulting, collaborations, or just a chat about the
              latest in tech. Based in {personalInfo.location.split(' • ')[0]}.
            </p>
          </div>

          {/* Social links */}
          <div
            className="contact-links"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <DynamicIcon
                  name={link.icon as IconName}
                  size={24}
                  className="contact-link-icon"
                />
                {link.name}
              </a>
            ))}
          </div>

          {/* Email */}
          <div
            style={{
              marginTop: '2rem',
              opacity: headerVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.3s',
            }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                color: 'var(--color-primary-light)',
                textDecoration: 'none',
                fontSize: '1.125rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>📧</span>
              {personalInfo.email}
            </a>
          </div>

          {/* Schedule button */}
          <div
            className="contact-schedule"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.4s',
            }}
          >
            <a
              href={scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-schedule-btn"
            >
              <CalendarIcon size={24} />
              Schedule a Meeting
            </a>
          </div>

          {/* Languages */}
          <div
            style={{
              marginTop: '3rem',
              opacity: headerVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.5s',
            }}
          >
            <p
              style={{
                color: 'var(--color-text-dim)',
                fontSize: '0.875rem',
                marginBottom: '0.5rem',
              }}
            >
              Languages
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              {personalInfo.languages.map((lang) => (
                <span
                  key={lang}
                  style={{
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '100px',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
