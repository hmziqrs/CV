"use client";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  angle: number; // Added angle property
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  const createStar = (width: number, height: number): Star => {
    const colors = [
      "#FFFFFF", // white
      "#E6E6FF", // light blue
      "#FFE6E6", // light red
      "#F2E6FF", // light purple
    ];

    // Calculate spawn area (10% of canvas size)
    const spawnAreaWidth = width * 0.1;
    const spawnAreaHeight = height * 0.1;

    // Random position within spawn area
    const x = width / 2 + (Math.random() * spawnAreaWidth - spawnAreaWidth / 2);
    const y =
      height / 2 + (Math.random() * spawnAreaHeight - spawnAreaHeight / 2);

    return {
      x,
      y,
      size: Math.random() * 2 + 1, // 1 to 3 pixels
      speed: Math.random() * 2 + 1, // base speed
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.atan2(y - height / 2, x - width / 2), // Angle based on position relative to center
    };
  };

  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push(createStar(width, height));
    }
    starsRef.current = stars;
  };

  const updateStars = (width: number, height: number) => {
    starsRef.current.forEach((star) => {
      // Move star outward based on its angle
      star.x += Math.cos(star.angle) * (star.speed * (star.size / 2));
      star.y += Math.sin(star.angle) * (star.speed * (star.size / 2));

      // Check if star is off screen
      const maxDist = Math.max(width, height);
      if (
        star.x < -10 ||
        star.x > width + 10 ||
        star.y < -10 ||
        star.y > height + 10
      ) {
        // Reset star to a random position in the spawn area
        const spawnAreaWidth = width * 0.1;
        const spawnAreaHeight = height * 0.1;
        star.x =
          width / 2 + (Math.random() * spawnAreaWidth - spawnAreaWidth / 2);
        star.y =
          height / 2 + (Math.random() * spawnAreaHeight - spawnAreaHeight / 2);
        star.angle = Math.atan2(star.y - height / 2, star.x - width / 2);
      }
    });
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    // Create gradient background
    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      Math.max(width, height) / 2,
    );
    gradient.addColorStop(0, "#1a0033"); // Dark purple
    gradient.addColorStop(1, "#000000"); // Black

    // Fill background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw stars
    starsRef.current.forEach((star) => {
      ctx.beginPath();
      ctx.fillStyle = star.color;
      ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      const width = canvas.width;
      const height = canvas.height;

      updateStars(width, height);
      draw(ctx, width, height);
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      initStars(canvasRef.current.width, canvasRef.current.height);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};
