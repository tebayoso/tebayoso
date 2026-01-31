import React from 'react';
import { timelineEvents, stats } from '../data/portfolio';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Journey: React.FC = () => {
  const { containerRef, visibleItems } = useStaggeredAnimation(
    timelineEvents.length,
    150
  );
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();

  return (
    <section id="journey" className="section journey">
      <div className="section-content">
        <div className="journey-grid">
          {/* Intro column */}
          <div
            ref={introRef}
            className={`journey-intro ${introVisible ? 'visible' : ''}`}
            style={{
              opacity: introVisible ? 1 : 0,
              transform: introVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            <h2>
              From <span>Construction</span> to <span>Code</span>
            </h2>
            <p>
              In 2012, I made a life-changing decision to leave the construction
              industry and pursue my passion for software development. What
              started as curiosity became a decade-long journey of continuous
              learning, building, and leading.
            </p>
            <p>
              Today, I architect AI-powered systems, lead engineering teams, and
              help companies transform through technology. My path proves that
              with dedication and curiosity, anyone can reinvent themselves.
            </p>

            {/* Highlights grid */}
            <div className="journey-highlights">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="journey-highlight"
                  style={{
                    opacity: introVisible ? 1 : 0,
                    transform: introVisible
                      ? 'translateY(0)'
                      : 'translateY(20px)',
                    transition: `all 0.5s ease-out ${0.3 + index * 0.1}s`,
                  }}
                >
                  <div className="journey-highlight-value">{stat.value}</div>
                  <div className="journey-highlight-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline column */}
          <div className="timeline" ref={containerRef}>
            {timelineEvents.map((event, index) => (
              <div
                key={`${event.date}-${index}`}
                className={`timeline-item ${visibleItems[index] ? 'visible' : ''}`}
              >
                <div className="timeline-date">{event.date}</div>
                <h3 className="timeline-title">
                  <span className="timeline-emoji">{event.emoji}</span>
                  {event.title}
                </h3>
                {event.company && (
                  <div className="timeline-company">{event.company}</div>
                )}
                <p className="timeline-description">{event.description}</p>
                <div className="timeline-tags">
                  {event.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
