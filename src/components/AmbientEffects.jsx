'use client';
import { useEffect, useRef } from 'react';

export default function AmbientEffects() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cursorRef.current) return;
      const x = e.clientX - 200;
      const y = e.clientY - 200;
      cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
      <div className="ambient-orb orb-bg-1" />
      <div className="ambient-orb orb-bg-2" />
      <div
        ref={cursorRef}
        className="hidden md:block"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(185, 149, 185, 0.12) 0%, rgba(84, 100, 129, 0.05) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
}