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
      phase: number;
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
      p.y = -30 - Math.random() * 100;
      p.size = 4 + Math.random() * 10;
      p.speedY = 0.8 + Math.random() * 1.8;
      p.speedX = -0.5 + Math.random() * 1.0;
      p.rotation = Math.random() * Math.PI * 2;
      p.rotSpeed = (Math.random() - 0.5) * 0.03;
      p.opacity = 0.5 + Math.random() * 0.5;
      p.sway = Math.random() * 2.5;
      p.swaySpeed = 0.008 + Math.random() * 0.018;
      p.swayOffset = Math.random() * Math.PI * 2;
      p.life = 0;
      p.phase = Math.random() * Math.PI * 2;

      if (type === "leaf") {
        p.color = [
          "#5A9E5A", "#3D7A3D", "#6B8F4A", "#8B6914",
          "#C4A23C", "#8CBA8C", "#D4A574", "#B8860B",
          "#CD853F", "#228B22", "#D2691E", "#556B2F"
        ][Math.floor(Math.random() * 12)];
        p.size = 10 + Math.random() * 14;
        p.speedY = 1.2 + Math.random() * 2.2;
        p.rotSpeed = (Math.random() - 0.5) * 0.05;
      } else if (type === "petal") {
        p.color = [
          "#FFB7C5", "#FFC0CB", "#FF69B4", "#FFE4E1",
          "#FFF0F5", "#F8C8DC", "#F4C2C2", "#FFB6C1"
        ][Math.floor(Math.random() * 8)];
        p.size = 5 + Math.random() * 8;
        p.speedY *= 0.6;
        p.speedX *= 1.4;
        p.rotSpeed = (Math.random() - 0.5) * 0.02;
      } else {
        p.color = ["#D4B04C", "#F0E2BC", "#FFFFFF", "#FFD700"][Math.floor(Math.random() * 4)];
        p.size = 2 + Math.random() * 4;
        p.speedY *= 0.25;
        p.speedX *= 0.4;
        p.opacity = 0.3 + Math.random() * 0.7;
      }
      return p;
    }

    function update(p: any) {
      p.life++;
      p.phase += 0.02;
      p.x += p.speedX + Math.sin(p.life * p.swaySpeed + p.swayOffset) * p.sway * 0.3;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      if (p.type === "sparkle") {
        p.opacity = 0.3 + Math.sin(p.life * 0.05) * 0.5;
      }
      if (p.y > H + 50 || p.x < -60 || p.x > W + 60) {
        p.y = -30 - Math.random() * 100;
        p.x = Math.random() * W;
        p.life = 0;
        p.phase = Math.random() * Math.PI * 2;
      }
    }

    function drawLeaf(ctx: CanvasRenderingContext2D, p: any) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      const s = p.size;
      // Draw a maple-like leaf shape
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.8);
      ctx.quadraticCurveTo(s * 0.3, -s * 0.5, s * 0.6, -s * 0.3);
      ctx.quadraticCurveTo(s * 0.4, -s * 0.1, s * 0.8, 0);
      ctx.quadraticCurveTo(s * 0.4, s * 0.1, s * 0.5, s * 0.4);
      ctx.quadraticCurveTo(s * 0.2, s * 0.3, 0, s * 0.9);
      ctx.quadraticCurveTo(-s * 0.2, s * 0.3, -s * 0.5, s * 0.4);
      ctx.quadraticCurveTo(-s * 0.4, s * 0.1, -s * 0.8, 0);
      ctx.quadraticCurveTo(-s * 0.4, -s * 0.1, -s * 0.6, -s * 0.3);
      ctx.quadraticCurveTo(-s * 0.3, -s * 0.5, 0, -s * 0.8);
      ctx.closePath();
      ctx.fill();

      // Leaf vein
      ctx.strokeStyle = "rgba(0,0,0,0.15)";
      ctx.lineWidth = s * 0.06;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.7);
      ctx.lineTo(0, s * 0.7);
      ctx.stroke();

      ctx.restore();
    }

    function drawPetal(ctx: CanvasRenderingContext2D, p: any) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      const s = p.size;
      // Draw a 5-petal cherry blossom
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.ellipse(0, -s * 0.4, s * 0.25, s * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      // Center
      ctx.fillStyle = "#FFE4B5";
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.15, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    function drawSparkle(ctx: CanvasRenderingContext2D, p: any) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      const s = p.size * 0.4;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2 + p.life * 0.02;
        ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s);
        ctx.lineTo(Math.cos(a + Math.PI / 4) * s * 0.3, Math.sin(a + Math.PI / 4) * s * 0.3);
      }
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();
    }

    function draw(p: any) {
      if (p.type === "leaf") {
        drawLeaf(ctx!, p);
      } else if (p.type === "petal") {
        drawPetal(ctx!, p);
      } else {
        drawSparkle(ctx!, p);
      }
    }

    const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 18000));
    for (let i = 0; i < count; i++) {
      const type = i < count * 0.35 ? "leaf" : i < count * 0.7 ? "petal" : "sparkle";
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
