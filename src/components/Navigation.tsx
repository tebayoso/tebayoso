import React from 'react';
import { useActiveSection } from '../hooks/useScrollAnimation';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
          data-label={section.label}
          onClick={() => scrollToSection(section.id)}
          aria-label={`Navigate to ${section.label}`}
        />
      ))}
    </nav>
  );
};

export default Navigation;
