import React, { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { DynamicIcon } from './Icons';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      {/* Animated gradient orbs */}
      <div className="hero-background">
        <div className="hero-gradient-orb orb-1" />
        <div className="hero-gradient-orb orb-2" />
        <div className="hero-gradient-orb orb-3" />
      </div>

      <div className="hero-content">
        {/* Status badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for opportunities
        </div>

        {/* Main title */}
        <h1 className="hero-title">
          <span className="hero-title-gradient">{personalInfo.name}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">{personalInfo.subtitle}</p>

        {/* Animated tagline */}
        <p className="hero-tagline">
          <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {'> '}
          </span>
          {typedText}
          <span className="hero-tagline-cursor" />
        </p>

        {/* CTA buttons */}
        <div className="hero-cta">
          <a
            href={socialLinks.find((l) => l.name === 'GitHub')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-primary"
          >
            <DynamicIcon name="github" size={20} />
            View GitHub
          </a>
          <a
            href={socialLinks.find((l) => l.name === 'LinkedIn')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-secondary"
          >
            <DynamicIcon name="linkedin" size={20} />
            Connect
          </a>
        </div>

        {/* Quick stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '12+', label: 'Years' },
            { value: '4.8M+', label: 'Lines' },
            { value: '8.5K+', label: 'Commits' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: '0.8s',
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  background:
                    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" onClick={scrollToJourney}>
        <span className="hero-scroll-text">Scroll to explore</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
