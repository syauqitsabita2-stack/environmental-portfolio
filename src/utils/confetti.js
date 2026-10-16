import confetti from 'canvas-confetti';

export const triggerCosmicConfetti = () => {
  // Cosmic blue and cyan palette
  const colors = ['#2c67ed', '#38bdf8', '#60a5fa', '#93c5fd', '#ffffff', '#818cf8'];

  // Left burst
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  // Right burst
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  // Center star burst
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    });
  }, 250);
};
