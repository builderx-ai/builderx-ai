"use client";

import React, { useEffect, useRef } from 'react';

const FlowingLinesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Wave configuration
    const waves: {
      y: number;
      length: number;
      amplitude: number;
      speed: number;
      offset: number;
      color: string;
    }[] = [];

    const waveCount = 15;
    const spacing = height / waveCount;

    for (let i = 0; i < waveCount + 5; i++) {
      waves.push({
        y: i * spacing,
        length: 0.005 + Math.random() * 0.005,
        amplitude: 50 + Math.random() * 50,
        speed: 0.02 + Math.random() * 0.02,
        offset: Math.random() * Math.PI * 2,
        color: `rgba(0, ${150 + Math.random() * 105}, ${200 + Math.random() * 55}, ${0.1 + Math.random() * 0.2})`
      });
    }

    let time = 0;

    const draw = () => {
      // Clear with a slight fade for trail effect (optional, but clearRect is cleaner for this style)
      ctx.clearRect(0, 0, width, height);
      
      // Draw dark background
      const bgGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
      bgGradient.addColorStop(0, '#0f172a'); // Slate 900
      bgGradient.addColorStop(1, '#020617'); // Slate 950
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      time += 0.005;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        for (let x = 0; x < width; x += 10) {
          // Combine sine waves for more organic flow
          const y = wave.y + 
            Math.sin(x * wave.length + time * wave.speed + wave.offset) * wave.amplitude +
            Math.sin(x * wave.length * 0.5 + time * wave.speed * 0.5) * (wave.amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // Add some floating particles
      const particleCount = 30;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      for(let i=0; i<particleCount; i++) {
          const px = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * width;
          const py = (Math.cos(time * 0.3 + i * 2) * 0.5 + 0.5) * height;
          ctx.beginPath();
          ctx.arc(px, py, Math.random() * 2, 0, Math.PI * 2);
          ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default FlowingLinesBackground;