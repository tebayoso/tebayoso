import React from 'react';
import { philosophies, recognitions } from '../data/portfolio';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Philosophy: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: philosophyRef, visibleItems: philosophyVisible } =
    useStaggeredAnimation(philosophies.length, 100);
  const { containerRef: recognitionRef, visibleItems: recognitionVisible } =
    useStaggeredAnimation(recognitions.length, 80);

  return (
    <section id="philosophy" className="section philosophy">
      <div className="section-content">
        {/* Header */}
        <div
          ref={headerRef}
          className="philosophy-header"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <h2 className="section-title">Engineering Philosophy</h2>
          <p className="section-subtitle">
            Principles that guide my approach to building software and solving
            problems.
          </p>
        </div>

        {/* Philosophy cards */}
        <div className="philosophy-grid" ref={philosophyRef}>
          {philosophies.map((philosophy, index) => (
            <div
              key={philosophy.title}
              className="philosophy-card"
              style={{
                opacity: philosophyVisible[index] ? 1 : 0,
                transform: philosophyVisible[index]
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                transition: 'all 0.6s ease-out',
              }}
            >
              <div className="philosophy-icon">{philosophy.icon}</div>
              <h3 className="philosophy-title">{philosophy.title}</h3>
              <p className="philosophy-text">{philosophy.description}</p>
            </div>
          ))}
        </div>

        {/* Recognition section */}
        <div style={{ marginTop: '6rem' }}>
          <div
            className="recognition-header"
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              Recognition & Achievements
            </h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Milestones along the journey
            </p>
          </div>

          <div className="recognition-grid" ref={recognitionRef}>
            {recognitions.map((recognition, index) => (
              <div
                key={recognition.title}
                className="recognition-card"
                style={{
                  opacity: recognitionVisible[index] ? 1 : 0,
                  transform: recognitionVisible[index]
                    ? 'translateX(0)'
                    : 'translateX(-20px)',
                  transition: 'all 0.5s ease-out',
                }}
              >
                <div className="recognition-icon">{recognition.icon}</div>
                <div className="recognition-content">
                  <h4>{recognition.title}</h4>
                  <p>{recognition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
