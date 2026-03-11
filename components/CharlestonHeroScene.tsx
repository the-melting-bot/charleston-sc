"use client";

/**
 * Charleston / Lowcountry Hero Illustration
 *
 * Animated SVG scene featuring:
 * - Gentle water with ripple animation
 * - Marsh grass / spartina swaying in the breeze
 * - Live oak tree silhouette
 * - Church steeple skyline (generic, not a specific landmark)
 * - Watercolor-style moon/sun glow
 * - Birds (pelicans) gliding across the sky
 * - Palmetto tree outline
 *
 * All CSS-animated, <15 KB total, degrades to static illustration.
 */

export default function CharlestonHeroScene() {
  return (
    <div className="relative h-full w-full select-none" aria-hidden="true">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* Water gradient */}
          <linearGradient id="water-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(186,230,253,0.3)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0.15)" />
          </linearGradient>

          {/* Sky glow */}
          <radialGradient id="sky-glow" cx="70%" cy="20%" r="40%">
            <stop offset="0%" stopColor="rgba(254,243,199,0.4)" />
            <stop offset="100%" stopColor="rgba(254,243,199,0)" />
          </radialGradient>

          {/* Moon/sun glow */}
          <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="50%" stopColor="rgba(254,243,199,0.2)" />
            <stop offset="100%" stopColor="rgba(254,243,199,0)" />
          </radialGradient>

          {/* Tree foliage gradient */}
          <radialGradient id="foliage" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="rgba(94,234,212,0.35)" />
            <stop offset="100%" stopColor="rgba(13,148,136,0.22)" />
          </radialGradient>
        </defs>

        {/* ─── Sky glow ─── */}
        <rect width="600" height="500" fill="url(#sky-glow)" />

        {/* ─── Celestial body (low sun / moon) ─── */}
        <circle cx="420" cy="100" r="60" fill="url(#moon-glow)" className="animate-celestial-pulse" />
        <circle cx="420" cy="100" r="18" fill="rgba(255,255,255,0.45)" className="animate-celestial-pulse" />

        {/* ─── Birds (pelicans) ─── */}
        <g className="animate-bird-1">
          <path d="M0 0 Q6 -8 12 0 Q18 -6 24 2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        <g className="animate-bird-2">
          <path d="M0 0 Q5 -6 10 0 Q15 -5 20 1.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
        <g className="animate-bird-3">
          <path d="M0 0 Q4 -5 8 0 Q12 -4 16 1" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>

        {/* ─── Distant skyline (generic church steeple + buildings) ─── */}
        <g opacity="0.18">
          {/* Building cluster left */}
          <rect x="60" y="280" width="30" height="60" fill="white" />
          <rect x="95" y="295" width="25" height="45" fill="white" />
          <rect x="125" y="285" width="20" height="55" fill="white" />

          {/* Church steeple (generic) */}
          <rect x="200" y="260" width="28" height="80" fill="white" />
          <polygon points="200,260 214,220 228,260" fill="white" />
          <rect x="211" y="222" width="6" height="15" fill="white" />

          {/* Building cluster right */}
          <rect x="280" y="290" width="35" height="50" fill="white" />
          <rect x="320" y="300" width="22" height="40" fill="white" />
          <rect x="347" y="288" width="28" height="52" fill="white" />
        </g>

        {/* ─── Palmetto tree (left side) ─── */}
        <g className="animate-palm-sway" style={{ transformOrigin: "120px 340px" }}>
          {/* Trunk */}
          <path
            d="M120 340 Q118 300 122 260 Q124 240 120 220"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          {/* Fronds */}
          <path d="M120 220 Q90 190 60 200" stroke="rgba(94,234,212,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M120 220 Q85 210 55 230" stroke="rgba(94,234,212,0.28)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M120 220 Q100 185 80 180" stroke="rgba(94,234,212,0.4)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M120 220 Q140 185 165 178" stroke="rgba(94,234,212,0.4)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M120 220 Q155 195 175 205" stroke="rgba(94,234,212,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M120 220 Q150 210 170 230" stroke="rgba(94,234,212,0.28)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M120 220 Q120 180 120 165" stroke="rgba(94,234,212,0.35)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* ─── Live oak tree (right side) ─── */}
        <g className="animate-tree-sway" style={{ transformOrigin: "480px 340px" }}>
          {/* Trunk */}
          <path
            d="M480 340 Q478 310 482 280 Q484 265 480 250"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Branches */}
          <path d="M480 270 Q450 250 430 260" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M482 260 Q510 240 530 248" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Foliage canopy */}
          <ellipse cx="480" cy="235" rx="65" ry="40" fill="url(#foliage)" />
          <ellipse cx="450" cy="245" rx="40" ry="28" fill="rgba(94,234,212,0.18)" />
          <ellipse cx="515" cy="240" rx="35" ry="25" fill="rgba(94,234,212,0.15)" />
          {/* Spanish moss */}
          <path d="M445 255 Q443 275 446 285" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />
          <path d="M460 258 Q458 280 461 292" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />
          <path d="M505 252 Q503 272 506 284" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none" />
          <path d="M520 250 Q518 268 521 278" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />
        </g>

        {/* ─── Waterline ─── */}
        <path
          d="M0 340 Q150 330 300 340 Q450 350 600 335"
          stroke="rgba(186,230,253,0.3)"
          strokeWidth="1"
          fill="none"
        />

        {/* ─── Water ─── */}
        <path
          d="M0 340 Q150 330 300 340 Q450 350 600 335 L600 500 L0 500 Z"
          fill="url(#water-grad)"
        />

        {/* Water ripples */}
        <g className="animate-ripple-1">
          <path d="M50 370 Q100 365 150 372 Q200 378 250 370" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
        </g>
        <g className="animate-ripple-2">
          <path d="M200 395 Q280 388 360 396 Q420 402 500 392" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none" />
        </g>
        <g className="animate-ripple-3">
          <path d="M80 420 Q160 415 240 422 Q320 428 400 418" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="none" />
        </g>
        <g className="animate-ripple-4">
          <path d="M300 445 Q380 440 460 447 Q520 452 580 444" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" fill="none" />
        </g>

        {/* ─── Marsh grass (spartina) - left cluster ─── */}
        <g className="animate-marsh-sway-1" style={{ transformOrigin: "30px 340px" }}>
          <path d="M20 340 Q18 310 25 280" stroke="rgba(94,234,212,0.45)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M30 340 Q32 305 28 275" stroke="rgba(94,234,212,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M38 340 Q40 315 35 290" stroke="rgba(94,234,212,0.32)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M15 340 Q10 318 18 295" stroke="rgba(94,234,212,0.28)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M45 340 Q48 320 42 298" stroke="rgba(94,234,212,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* ─── Marsh grass - right cluster ─── */}
        <g className="animate-marsh-sway-2" style={{ transformOrigin: "560px 340px" }}>
          <path d="M550 340 Q548 308 555 278" stroke="rgba(94,234,212,0.4)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M560 340 Q563 312 558 282" stroke="rgba(94,234,212,0.45)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M570 340 Q572 318 567 292" stroke="rgba(94,234,212,0.32)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M575 340 Q578 322 573 300" stroke="rgba(94,234,212,0.28)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M542 340 Q538 315 545 288" stroke="rgba(94,234,212,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* ─── Marsh grass - center-right cluster ─── */}
        <g className="animate-marsh-sway-3" style={{ transformOrigin: "380px 340px" }}>
          <path d="M370 340 Q368 315 375 290" stroke="rgba(94,234,212,0.2)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M380 340 Q383 318 378 295" stroke="rgba(94,234,212,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M390 340 Q392 322 387 300" stroke="rgba(94,234,212,0.18)" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        </g>

        {/* ─── Dock / pier (subtle) ─── */}
        <g opacity="0.22">
          <rect x="250" y="332" width="80" height="4" rx="1" fill="white" />
          {/* Pilings */}
          <rect x="260" y="332" width="3" height="18" fill="white" />
          <rect x="285" y="332" width="3" height="22" fill="white" />
          <rect x="310" y="332" width="3" height="18" fill="white" />
          <rect x="325" y="332" width="3" height="15" fill="white" />
        </g>

        {/* ─── Fireflies / sparkles ─── */}
        <circle cx="200" cy="150" r="1.5" fill="rgba(254,243,199,0.5)" className="animate-sparkle-1" />
        <circle cx="350" cy="180" r="1" fill="rgba(254,243,199,0.4)" className="animate-sparkle-2" />
        <circle cx="500" cy="130" r="1.2" fill="rgba(254,243,199,0.35)" className="animate-sparkle-3" />
        <circle cx="150" cy="200" r="1" fill="rgba(254,243,199,0.3)" className="animate-sparkle-1" />
        <circle cx="450" cy="170" r="1.3" fill="rgba(254,243,199,0.4)" className="animate-sparkle-2" />
      </svg>

      {/* ─── CSS animations ─── */}
      <style jsx>{`
        /* Bird flight paths */
        .animate-bird-1 {
          animation: bird-fly-1 18s linear infinite;
        }
        .animate-bird-2 {
          animation: bird-fly-2 22s linear infinite;
          animation-delay: -8s;
        }
        .animate-bird-3 {
          animation: bird-fly-3 25s linear infinite;
          animation-delay: -14s;
        }

        @keyframes bird-fly-1 {
          0% { transform: translate(-30px, 80px); }
          100% { transform: translate(650px, 60px); }
        }
        @keyframes bird-fly-2 {
          0% { transform: translate(-40px, 120px); }
          100% { transform: translate(660px, 90px); }
        }
        @keyframes bird-fly-3 {
          0% { transform: translate(-20px, 140px); }
          100% { transform: translate(640px, 110px); }
        }

        /* Tree / palm sway */
        .animate-tree-sway {
          animation: gentle-sway 8s ease-in-out infinite;
        }
        .animate-palm-sway {
          animation: palm-sway 6s ease-in-out infinite;
          animation-delay: -2s;
        }

        @keyframes gentle-sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(0.8deg); }
        }
        @keyframes palm-sway {
          0%, 100% { transform: rotate(0deg); }
          33% { transform: rotate(1.2deg); }
          66% { transform: rotate(-0.5deg); }
        }

        /* Marsh grass sway */
        .animate-marsh-sway-1 {
          animation: marsh-sway 5s ease-in-out infinite;
        }
        .animate-marsh-sway-2 {
          animation: marsh-sway 5.5s ease-in-out infinite;
          animation-delay: -1.5s;
        }
        .animate-marsh-sway-3 {
          animation: marsh-sway 4.5s ease-in-out infinite;
          animation-delay: -3s;
        }

        @keyframes marsh-sway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1.5deg); }
          75% { transform: rotate(-1deg); }
        }

        /* Water ripples */
        .animate-ripple-1 {
          animation: ripple-drift 10s ease-in-out infinite;
        }
        .animate-ripple-2 {
          animation: ripple-drift 12s ease-in-out infinite;
          animation-delay: -3s;
        }
        .animate-ripple-3 {
          animation: ripple-drift 9s ease-in-out infinite;
          animation-delay: -6s;
        }
        .animate-ripple-4 {
          animation: ripple-drift 11s ease-in-out infinite;
          animation-delay: -8s;
        }

        @keyframes ripple-drift {
          0%, 100% { transform: translateX(0); opacity: 0.6; }
          50% { transform: translateX(20px); opacity: 1; }
        }

        /* Celestial pulse */
        .animate-celestial-pulse {
          animation: celestial-pulse 6s ease-in-out infinite;
        }

        @keyframes celestial-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        /* Sparkles / fireflies */
        .animate-sparkle-1 {
          animation: sparkle 4s ease-in-out infinite;
        }
        .animate-sparkle-2 {
          animation: sparkle 5s ease-in-out infinite;
          animation-delay: -2s;
        }
        .animate-sparkle-3 {
          animation: sparkle 3.5s ease-in-out infinite;
          animation-delay: -1s;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-bird-1,
          .animate-bird-2,
          .animate-bird-3,
          .animate-tree-sway,
          .animate-palm-sway,
          .animate-marsh-sway-1,
          .animate-marsh-sway-2,
          .animate-marsh-sway-3,
          .animate-ripple-1,
          .animate-ripple-2,
          .animate-ripple-3,
          .animate-ripple-4,
          .animate-celestial-pulse,
          .animate-sparkle-1,
          .animate-sparkle-2,
          .animate-sparkle-3 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
