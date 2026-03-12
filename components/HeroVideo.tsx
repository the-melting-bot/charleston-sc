"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Hero video background with progressive loading.
 *
 * Loads poster immediately, then starts video playback.
 * Respects prefers-reduced-motion: shows poster only.
 * Falls back to gradient if video errors.
 */

interface HeroVideoProps {
  src: string;
  poster: string;
}

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const [hasError, setHasError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (hasError) return null;

  if (prefersReducedMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={poster}
        alt=""
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onError={() => setHasError(true)}
    />
  );
}
