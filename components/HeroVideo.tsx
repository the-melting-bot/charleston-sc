"use client";

import { useRef, useEffect, useState, useCallback } from "react";

/**
 * Full-bleed looping hero video background.
 *
 * Strategy for reliable autoplay:
 * 1. Render the <video> with autoPlay + muted + playsInline HTML attributes
 *    so the browser can start playback even before React hydrates.
 * 2. On mount, call video.play() as a safety net for browsers that
 *    ignore the HTML autoplay attribute.
 * 3. Listen for the "playing" event (not "canplay") to confirm the video
 *    is actually producing frames before fading it in.
 * 4. Handle errors gracefully — show poster/gradient fallback.
 */

interface HeroVideoProps {
  src: string;
  poster: string;
}

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  /* Attempt to start playback (safety net for hydration timing) */
  const attemptPlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      /* Ensure muted — required for autoplay in all browsers */
      video.muted = true;
      await video.play();
    } catch {
      /* Autoplay blocked or failed — poster/gradient fallback shows */
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* When the video actually starts producing frames, fade it in */
    const onPlaying = () => setVisible(true);
    video.addEventListener("playing", onPlaying);

    /* Handle load errors */
    const onError = () => setHasError(true);
    video.addEventListener("error", onError);

    /*
     * If the browser already started playing via the HTML autoPlay
     * attribute before React hydrated and attached the "playing"
     * listener, we missed the event. Check immediately.
     */
    if (!video.paused && video.readyState >= 2) {
      setVisible(true);
    }

    /*
     * Safety-net play() call. The HTML autoPlay attribute should handle
     * most cases, but some browsers (especially after hydration) need
     * a programmatic nudge.
     */
    attemptPlay();

    /* Pause when tab is hidden to save resources */
    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("error", onError);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [attemptPlay]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ─── Static poster / gradient fallback (always behind video) ─── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden="true"
      />

      {/* ─── Video element ─── */}
      {!hasError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          {/* Use <source> for better browser compatibility */}
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
