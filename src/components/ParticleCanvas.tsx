"use client";

import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let animFrame: number;
    const particles: {
      x: number; y: number; size: number; speedY: number; speedX: number;
      rotation: number; rotSpeed: number; opacity: number; sway: number;
      swaySpeed: number; swayOffset: number; life: number; color: string;
      type: string;
    }[] = [];

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    function debouncedResize() {
      cancelAnimationFrame(animFrame);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        animFrame = requestAnimationFrame(animate);
      }, 150);
    }
    window.addEventListener("resize", debouncedResize);
    resize();

    function createParticle(type: string) {
      const p: any = { type };
      p.x = Math.random() * W;
      p.y = -20 - Math.random() * 60;
      p.size = 4 + Math.random() * 10;
      p.speedY = 1 + Math.random() * 2;
      p.speedX = -0.6 + Math.random() * 1.2;
      p.rotation = Math.random() * Math.PI * 2;
      p.rotSpeed = (Math.random() - 0.5) * 0.04;
      p.opacity = 0.5 + Math.random() * 0.5;
      p.sway = Math.random() * 2;
      p.swaySpeed = 0.01 + Math.random() * 0.02;
      p.swayOffset = Math.random() * Math.PI * 2;
      p.life = 0;
      if (type === "leaf") {
        p.color = ["#5A9E5A", "#3D7A3D", "#6B8F4A", "#8B6914", "#C4A23C", "#8CBA8C"][Math.floor(Math.random() * 6)];
        p.size = 8 + Math.random() * 12;
      } else if (type === "petal") {
        p.color = ["#F0E2BC", "#F7E8D0", "#E8C8C8", "#FFE4E1", "#FFF0F5"][Math.floor(Math.random() * 5)];
        p.size = 4 + Math.random() * 7;
        p.speedY *= 0.7;
        p.speedX *= 1.3;
      } else {
        p.color = ["#D4B04C", "#F0E2BC", "#FFFFFF", "#FFD700"][Math.floor(Math.random() * 4)];
        p.size = 2 + Math.random() * 4;
        p.speedY *= 0.3;
        p.speedX *= 0.5;
        p.opacity = 0.3 + Math.random() * 0.7;
      }
      return p;
    }

    function update(p: any) {
      p.life++;
      p.x += p.speedX + Math.sin(p.life * p.swaySpeed + p.swayOffset) * p.sway * 0.3;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      if (p.type === "sparkle") {
        p.opacity = 0.3 + Math.sin(p.life * 0.05) * 0.5;
      }
      if (p.y > H + 40 || p.x < -40 || p.x > W + 40) {
        p.y = -20 - Math.random() * 60;
        p.x = Math.random() * W;
        p.life = 0;
      }
    }

    function draw(p: any) {
      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rotation);
      ctx!.globalAlpha = p.opacity;
      if (p.type === "leaf") {
        ctx!.fillStyle = p.color;
        ctx!.beginPath();
        ctx!.ellipse(0, 0, p.size * 0.5, p.size * 0.3, 0, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.beginPath();
        ctx!.moveTo(0, -p.size * 0.3);
        ctx!.lineTo(p.size * 0.6, 0);
        ctx!.lineTo(0, p.size * 0.3);
        ctx!.closePath();
        ctx!.fill();
      } else if (p.type === "petal") {
        ctx!.fillStyle = p.color;
        ctx!.beginPath();
        ctx!.ellipse(0, 0, p.size * 0.3, p.size * 0.5, 0, 0, Math.PI * 2);
        ctx!.fill();
      } else {
        ctx!.fillStyle = p.color;
        const s = p.size * 0.4;
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = p.color;
        ctx!.beginPath();
        for (let i = 0; i < 4; i++) {
          const a = i * Math.PI / 2 + p.life * 0.02;
          ctx!.lineTo(Math.cos(a) * s, Math.sin(a) * s);
          ctx!.lineTo(Math.cos(a + Math.PI / 4) * s * 0.3, Math.sin(a + Math.PI / 4) * s * 0.3);
        }
        ctx!.closePath();
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
      ctx!.restore();
    }

    const count = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 25000));
    for (let i = 0; i < count; i++) {
      const type = i < count * 0.4 ? "leaf" : i < count * 0.75 ? "petal" : "sparkle";
      const p = createParticle(type);
      p.y = Math.random() * H;
      particles.push(p);
    }

    function animate() {
      ctx!.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        update(particles[i]);
        draw(particles[i]);
      }
      animFrame = requestAnimationFrame(animate);
    }
    animFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas" aria-hidden="true" />;
}
