"use client";

import { useState } from "react";

/**
 * Dead-simple hero video background.
 *
 * No dynamic imports, no intersection observers, no prefers-reduced-motion,
 * no visibility tracking, no fade-in choreography. Just a plain <video>
 * element that the browser plays via HTML autoplay attributes.
 *
 * The only JS: hide the video on error so the gradient fallback shows.
 */

interface HeroVideoProps {
  src: string;
  poster: string;
}

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      onError={() => setHasError(true)}
    />
  );
}
