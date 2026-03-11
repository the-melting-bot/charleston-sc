"use client";

import { useRef, useEffect, useState } from "react";

/**
 * Full-bleed looping hero video background.
 *
 * - Autoplay, muted, loop, playsInline (required for iOS autoplay)
 * - Shows a poster image immediately while video loads
 * - Fades in gracefully once the video can play
 * - Falls back to the poster/gradient if autoplay fails or video errors
 * - Respects prefers-reduced-motion: pauses the video
 */

interface HeroVideoProps {
  /** Path to the mp4 video file (in public/) */
  src: string;
  /** Path to the poster/fallback image */
  poster: string;
}

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* Respect prefers-reduced-motion */
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      video.pause();
      return;
    }

    /* Attempt autoplay — some browsers block it even when muted */
    const tryPlay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        /* Autoplay blocked — keep showing poster via fallback */
        setIsPlaying(false);
      }
    };

    /* Wait for enough data before trying to play */
    if (video.readyState >= 3) {
      tryPlay();
    } else {
      video.addEventListener("canplay", () => tryPlay(), { once: true });
    }

    /* Pause/play on visibility change to save resources */
    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (!motionQuery.matches) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ─── Video element ─── */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* ─── Static fallback (always rendered behind video) ─── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden="true"
      />
    </div>
  );
}
