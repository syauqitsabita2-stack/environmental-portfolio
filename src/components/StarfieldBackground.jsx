import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle cosmic dust reaction
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Star generation
    const starCount = Math.min(Math.floor((width * height) / 4500), 280);
    const starColors = ['#ffffff', '#bfdbfe', '#93c5fd', '#60a5fa', '#c4b5fd', '#38bdf8'];
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      alpha: Math.random() * 0.8 + 0.2,
      baseAlpha: Math.random() * 0.7 + 0.2,
      twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    // Shooting stars / Meteors
    const meteors = [];
    const createMeteor = () => {
      const startX = Math.random() * width + 200;
      const startY = Math.random() * (height * 0.5);
      const length = Math.random() * 90 + 70;
      const speed = Math.random() * 7 + 8;
      const angle = (Math.PI / 180) * (Math.random() * 15 + 130); // ~135 degrees (top-right to bottom-left)
      meteors.push({
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length,
        opacity: 1,
        fadeSpeed: Math.random() * 0.015 + 0.012,
        color: '#60a5fa'
      });
    };

    let meteorTimer = 0;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw & update stars
      stars.forEach((star) => {
        // Twinkle
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Slight drift
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Mouse displacement
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let renderX = star.x;
        let renderY = star.y;
        if (dist < 120) {
          const force = (120 - dist) / 120;
          renderX += (dx / dist) * force * 15;
          renderY += (dy / dist) * force * 15;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
        ctx.shadowBlur = star.size > 1.2 ? 8 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.restore();
      });

      // Spawn meteors periodically
      meteorTimer++;
      if (meteorTimer > 180 && Math.random() < 0.03) {
        createMeteor();
        meteorTimer = 0;
      }

      // Draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.dx;
        m.y += m.dy;
        m.opacity -= m.fadeSpeed;

        if (m.opacity <= 0 || m.x < -100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - (m.dx / Math.hypot(m.dx, m.dy)) * m.length;
        const tailY = m.y - (m.dy / Math.hypot(m.dx, m.dy)) * m.length;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
        grad.addColorStop(0.3, `rgba(96, 165, 250, ${m.opacity * 0.8})`);
        grad.addColorStop(1, `rgba(44, 103, 237, 0)`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#2c67ed';
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Space Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Cosmic Nebula Glow Overlays */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2c67ed]/30 via-[#3b82f6]/20 to-transparent blur-[140px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -35, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#1d4ed8]/25 via-[#6366f1]/15 to-transparent blur-[150px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-[#2c67ed]/20 via-[#0284c7]/15 to-transparent blur-[130px] pointer-events-none"
      />
    </div>
  );
}
