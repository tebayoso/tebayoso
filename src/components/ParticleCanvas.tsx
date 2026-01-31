import React from 'react';
import { useParticles } from '../hooks/useParticles';

const ParticleCanvas: React.FC = () => {
  const canvasRef = useParticles({
    particleCount: 60,
    colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981'],
    maxSpeed: 0.4,
    connectionDistance: 120,
    mouseInteraction: true,
  });

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default ParticleCanvas;
