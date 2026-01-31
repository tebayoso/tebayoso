import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-quote">
          "<span>Building fast, failing faster</span>" — the only way to learn
          what really works.
        </p>
        <p className="footer-info">
          Made with <span className="footer-heart">❤️</span> and lots of{' '}
          <span style={{ color: 'var(--color-accent)' }}>☕</span> · © {currentYear}{' '}
          Jorge de los Santos
        </p>
        <p
          style={{
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            color: 'var(--color-text-dim)',
          }}
        >
          Built with React, TypeScript, and pure CSS animations · No external
          assets
        </p>
      </div>
    </footer>
  );
};

export default Footer;
