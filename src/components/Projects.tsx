import React from 'react';
import { projects } from '../data/portfolio';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { GitCommitIcon, ExternalLinkIcon } from './Icons';

const Projects: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(
    projects.length,
    100
  );

  return (
    <section id="projects" className="section projects">
      <div className="section-content">
        {/* Header */}
        <div
          ref={headerRef}
          className="projects-header"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of projects showcasing my journey from blockchain
            analytics to AI-powered development tools.
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-grid" ref={containerRef}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                opacity: visibleItems[index] ? 1 : 0,
                transform: visibleItems[index]
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                transition: `all 0.6s ease-out`,
              }}
            >
              {/* Visual header */}
              <div className="project-visual">
                <div className="project-visual-pattern" />
                <div className="project-visual-icon">{project.icon}</div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                  <span
                    className={`project-status ${project.status}`}
                  >
                    {project.status === 'active'
                      ? 'Active'
                      : project.status === 'maintained'
                        ? 'Maintained'
                        : 'Archived'}
                  </span>
                </h3>

                <p className="project-description">{project.description}</p>

                {/* Tech stack */}
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '1rem 0',
                  }}
                >
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: 'var(--color-primary)',
                          flexShrink: 0,
                        }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="project-stats">
                  {project.commits && (
                    <div className="project-stat">
                      <GitCommitIcon
                        size={16}
                        className="project-stat-icon"
                      />
                      {project.commits.toLocaleString()} commits
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-stat"
                      style={{
                        textDecoration: 'none',
                        color: 'var(--color-primary-light)',
                      }}
                    >
                      <ExternalLinkIcon size={16} />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More on GitHub */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
          }}
        >
          <a
            href="https://github.com/tebayoso"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            View all projects on GitHub
            <ExternalLinkIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
