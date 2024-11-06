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

interface Dimensions {
  width: number;
  height: number;
}

const COLORS = [
  "#FFFFFF", // pure white
  "#B3E0FF", // soft light blue
  "#FFD7E6", // soft light pink
  "#E6D0FF", // soft light purple
] as const;

const STAR_COUNT = 200;
const SPAWN_AREA_RATIO = 0.15;
const BASE_STAR_SIZE = { min: 1, max: 3 };
const BASE_STAR_SPEED = { min: 0.2, max: 0.8 };

class StarFactory {
  static createStar(x: number, y: number, dimensions: Dimensions): Star {
    return {
      x,
      y,
      size: this.randomBetween(BASE_STAR_SIZE.min, BASE_STAR_SIZE.max),
      speed: this.randomBetween(BASE_STAR_SPEED.min, BASE_STAR_SPEED.max),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: Math.atan2(y - dimensions.height / 2, x - dimensions.width / 2),
    };
  }

  static createCenterStar(dimensions: Dimensions): Star {
    const spawnAreaWidth = dimensions.width * SPAWN_AREA_RATIO;
    const spawnAreaHeight = dimensions.height * SPAWN_AREA_RATIO;

    const x =
      dimensions.width / 2 +
      this.randomBetween(-spawnAreaWidth / 2, spawnAreaWidth / 2);
    const y =
      dimensions.height / 2 +
      this.randomBetween(-spawnAreaHeight / 2, spawnAreaHeight / 2);

    return this.createStar(x, y, dimensions);
  }

  static createRandomStar(dimensions: Dimensions): Star {
    return this.createStar(
      Math.random() * dimensions.width,
      Math.random() * dimensions.height,
      dimensions,
    );
  }

  private static randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}

class StarFieldRenderer {
  static draw(
    ctx: CanvasRenderingContext2D,
    stars: Star[],
    dimensions: Dimensions,
  ) {
    this.drawBackground(ctx, dimensions);
    this.drawStars(ctx, stars);
  }

  private static drawBackground(
    ctx: CanvasRenderingContext2D,
    dimensions: Dimensions,
  ) {
    const gradient = ctx.createRadialGradient(
      dimensions.width / 2,
      dimensions.height / 2,
      0,
      dimensions.width / 2,
      dimensions.height / 2,
      Math.max(dimensions.width, dimensions.height) / 2,
    );
    gradient.addColorStop(0, "#1a0033");
    gradient.addColorStop(1, "#000000");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);
  }

  private static drawStars(ctx: CanvasRenderingContext2D, stars: Star[]) {
    stars.forEach((star) => {
      ctx.beginPath();
      ctx.fillStyle = star.color;
      ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  const initStars = (dimensions: Dimensions) => {
    starsRef.current = Array.from({ length: STAR_COUNT }, () =>
      StarFactory.createRandomStar(dimensions),
    );
  };

  const updateStars = (dimensions: Dimensions) => {
    starsRef.current.forEach((star) => {
      // Move star outward based on its angle
      star.x += Math.cos(star.angle) * (star.speed * (star.size / 2));
      star.y += Math.sin(star.angle) * (star.speed * (star.size / 2));

      // Check if star is off screen and reset if necessary
      if (isOffScreen(star, dimensions)) {
        const newStar = StarFactory.createCenterStar(dimensions);
        Object.assign(star, newStar);
      }
    });
  };

  const isOffScreen = (star: Star, dimensions: Dimensions): boolean => {
    const margin = 10;
    return (
      star.x < -margin ||
      star.x > dimensions.width + margin ||
      star.y < -margin ||
      star.y > dimensions.height + margin
    );
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      const dimensions = { width: canvas.width, height: canvas.height };
      updateStars(dimensions);
      StarFieldRenderer.draw(ctx, starsRef.current, dimensions);
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    if (canvasRef.current) {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      canvasRef.current.width = dimensions.width;
      canvasRef.current.height = dimensions.height;
      initStars(dimensions);
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
