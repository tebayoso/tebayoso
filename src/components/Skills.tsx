import React, { useEffect, useRef, useState } from 'react';
import { skillCategories } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categoryIcons: Record<string, string> = {
  Languages: '💬',
  Backend: '⚙️',
  Frontend: '🎨',
  Infrastructure: '☁️',
  'AI & Blockchain': '🤖',
};

const Skills: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [animatedCategories, setAnimatedCategories] = useState<Set<number>>(
    new Set()
  );
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categoryRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimatedCategories((prev) => new Set([...prev, index]));
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="skills" className="section skills">
      <div className="section-content">
        {/* Header */}
        <div
          ref={headerRef}
          className="skills-header"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A decade of full-stack development across multiple domains,
            from enterprise systems to blockchain and AI.
          </p>
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => {
            const isAnimated = animatedCategories.has(catIndex);

            return (
              <div
                key={category.title}
                ref={(el) => {
                  categoryRefs.current[catIndex] = el;
                }}
                className="skill-category"
                style={{
                  opacity: isAnimated ? 1 : 0,
                  transform: isAnimated ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease-out ${catIndex * 0.1}s`,
                }}
              >
                <div className="skill-category-icon">
                  <span style={{ fontSize: '2.5rem' }}>
                    {categoryIcons[category.title] || '📦'}
                  </span>
                </div>
                <h3 className="skill-category-title">{category.title}</h3>

                {/* Skill bars */}
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-with-level">
                    <div className="skill-level-header">
                      <span className="skill-level-name">{skill.name}</span>
                      <span className="skill-level-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-level-bar">
                      <div
                        className={`skill-level-fill ${isAnimated ? 'animate' : ''}`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${0.3 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Additional skills list */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Also experienced with
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {[
              'Git',
              'Docker Compose',
              'Kubernetes',
              'Ansible',
              'Sidekiq',
              'RSpec',
              'Jest',
              'Playwright',
              'Turbo/Stimulus',
              'D3.js',
              'Web3.js',
              'Ethers.js',
              'DynamoDB',
              'Kinesis',
              'Lambda',
              'S3',
              'Vercel',
              'Cloudflare Workers',
              'Supabase',
              'Plaid',
              'Stripe',
            ].map((skill) => (
              <span
                key={skill}
                className="skill-item"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <span className="skill-item-dot" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
