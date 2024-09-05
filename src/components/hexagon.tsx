'use client'
import React, { useEffect, useRef } from 'react';

const Hexagon = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const timer = setTimeout(() => {
      if (container) {
        container.style.display = 'none';
      }
    }, 3000); // Adjust the duration to match your animation duration

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Add the no-scroll class to the body
    document.body.classList.add('no-scroll');

    const timer = setTimeout(() => {
      // Remove the no-scroll class after 6 seconds
      document.body.classList.remove('no-scroll');
    }, 5500); // 6000ms = 6 seconds

    return () => {
      clearTimeout(timer);
      // Ensure the no-scroll class is removed if the component unmounts before 6 seconds
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div ref={containerRef} className="containerson absolute top-0">
      <svg className="heptagon" viewBox="0 0 100 100">
        <polygon points="50,1 93,25 93,75 50,99 7,75 7,25" />
        <text x="50" y="50" dominantBaseline="middle" textAnchor="middle">A</text>
      </svg>
    </div>
  );
};

export default Hexagon;