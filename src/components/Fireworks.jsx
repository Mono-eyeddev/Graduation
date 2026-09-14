
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Fireworks({ onComplete }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    const startTime = performance.now();
    let lastBurst = 0;

    const particles = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const createBurst = () => {
      const x = Math.random() * window.innerWidth;
      const y =
        Math.random() * window.innerHeight * 0.55 +
        window.innerHeight * 0.08;

      const count = 65;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = 1.5 + Math.random() * 3.5;

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.012 + Math.random() * 0.012,
          size: 1 + Math.random() * 1.8,
        });
      }
    };

    const animate = (time) => {
      const elapsed = time - startTime;

      ctx.fillStyle = "rgba(15, 15, 15, 0.18)";
      ctx.fillRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      if (elapsed - lastBurst > 550 && elapsed < 5000) {
        createBurst();
        lastBurst = elapsed;
      }

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vy += 0.025;
        particle.vx *= 0.992;
        particle.vy *= 0.992;
        particle.life -= particle.decay;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(212, 175, 55, ${particle.life})`;

        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(212, 175, 55, 0.8)";

        ctx.fill();
      });

      ctx.shadowBlur = 0;

      if (elapsed < 5000) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrame);

        setTimeout(() => {
          onComplete();
        }, 1200);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[9998]
        overflow-hidden
        bg-charcoal-deep
      "
      initial={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 1.06,
        filter: "blur(12px)",
        y: -15,
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          h-full
          w-full
        "
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 1.05],
          }}
          transition={{
            duration: 4.5,
            times: [0, 0.15, 0.75, 1],
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-gold-light">
            The celebration begins
          </p>

          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-6xl">
            Welcome.
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}
