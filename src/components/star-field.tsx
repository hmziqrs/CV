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
  "#FFE9C7", // warm white
  "#8AB4F8", // bright blue
] as const;

const STAR_COUNT = 200;
const SPAWN_AREA_RATIO = 0.15;
const BASE_STAR_SIZE = { min: 0.8, max: 3 };
const BASE_STAR_SPEED = { min: 0.5, max: 0.8 };

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
    time: number,
  ) {
    this.drawBackground(ctx, dimensions, time);
    this.drawStars(ctx, stars);
  }

  private static drawBackground(
    ctx: CanvasRenderingContext2D,
    dimensions: Dimensions,
    time: number,
  ) {
    // Clear the canvas
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    // Draw animated nebula effects
    this.drawNebula(ctx, dimensions, time);

    // Add space dust
    this.addSpaceDust(ctx, dimensions, time);

    // Add subtle glow effect
    this.addGlow(ctx, dimensions);
  }

  private static drawNebula(
    ctx: CanvasRenderingContext2D,
    dimensions: Dimensions,
    time: number,
  ) {
    const nebulaColors = [
      "rgba(63, 0, 95, 0.5)", // Deep purple
      "rgba(0, 20, 40, 0.5)", // Deep blue
      "rgba(25, 0, 50, 0.5)", // Medium purple
    ];

    const movementRange = Math.min(dimensions.width, dimensions.height) * 0.2;
    const nebulaSize = Math.min(dimensions.width, dimensions.height) * 1.2;

    // Create multiple animated nebula clouds
    for (let i = 0; i < 3; i++) {
      const x =
        dimensions.width / 2 + Math.cos(time * 0.0005 + i) * movementRange;
      const y =
        dimensions.height / 2 + Math.sin(time * 0.0004 + i) * movementRange;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, nebulaSize);

      gradient.addColorStop(0, nebulaColors[i]);
      gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
    }
  }

  private static addSpaceDust(
    ctx: CanvasRenderingContext2D,
    dimensions: Dimensions,
    time: number,
  ) {
    const imageData = ctx.getImageData(
      0,
      0,
      dimensions.width,
      dimensions.height,
    );
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % dimensions.width;
      const y = Math.floor(i / 4 / dimensions.width);

      // Create animated noise pattern
      const noise =
        Math.sin(x * 0.01 + time * 0.0001) *
        Math.cos(y * 0.01 + time * 0.0001) *
        3;

      data[i] = Math.min(data[i] + noise, 255); // R
      data[i + 1] = Math.min(data[i + 1] + noise, 255); // G
      data[i + 2] = Math.min(data[i + 2] + noise, 255); // B
    }

    ctx.putImageData(imageData, 0, 0);
  }

  private static addGlow(
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

    gradient.addColorStop(0, "rgba(25, 0, 50, 0.2)");
    gradient.addColorStop(0.5, "rgba(10, 0, 20, 0.1)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);
  }

  private static addSpaceNoise(
    ctx: CanvasRenderingContext2D,
    dimensions: Dimensions,
  ) {
    const imageData = ctx.getImageData(
      0,
      0,
      dimensions.width,
      dimensions.height,
    );
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 5;
      data[i] = Math.min(data[i] + noise, 255); // R
      data[i + 1] = Math.min(data[i + 1] + noise, 255); // G
      data[i + 2] = Math.min(data[i + 2] + noise, 255); // B
    }

    ctx.putImageData(imageData, 0, 0);
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
  // Add refs for tracking scroll
  const lastScrollY = useRef(0);
  const speedMultiplier = useRef(1); // 1 is the default speed (100%)
  const scrollTimeout = useRef<NodeJS.Timeout>();

  // Add scroll handler
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY.current;

    // Set speed based on scroll direction
    if (scrollDelta > 0) {
      // Scrolling down - increase speed by 20%
      speedMultiplier.current = 5;
    } else if (scrollDelta < 0) {
      // Scrolling up - decrease speed by 20%
      speedMultiplier.current = 0.8;
    }

    // Update last scroll position
    lastScrollY.current = currentScrollY;

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Reset speed to normal after 50ms of no scrolling
    scrollTimeout.current = setTimeout(() => {
      speedMultiplier.current = 1;
    }, 50);
  };

  const initStars = (dimensions: Dimensions) => {
    starsRef.current = Array.from({ length: STAR_COUNT }, () =>
      StarFactory.createRandomStar(dimensions),
    );
  };

  const updateStars = (dimensions: Dimensions) => {
    starsRef.current.forEach((star) => {
      // Apply speedMultiplier to the movement
      star.x +=
        Math.cos(star.angle) *
        (star.speed * (star.size / 2) * speedMultiplier.current);
      star.y +=
        Math.sin(star.angle) *
        (star.speed * (star.size / 2) * speedMultiplier.current);

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
      StarFieldRenderer.draw(
        ctx,
        starsRef.current,
        dimensions,
        performance.now(),
      );
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
    lastScrollY.current = window.scrollY; // Initialize lastScrollY
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
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
        zIndex: -1,
      }}
    />
  );
};
