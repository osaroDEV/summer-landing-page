import React from "react";

export function RainbowArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      {/* Gold Inner Arch */}
      <path
        d="M 50,240 A 450,190 0 0,1 950,240"
        stroke="#f0a830"
        strokeWidth="32"
        strokeLinecap="round"
      />
      {/* Red Middle Arch */}
      <path
        d="M 25,240 A 475,215 0 0,1 975,240"
        stroke="#b31e24"
        strokeWidth="32"
        strokeLinecap="round"
      />
      {/* Teal Outer Arch */}
      <path
        d="M 0,240 A 500,240 0 0,1 1000,240"
        stroke="#134e5a"
        strokeWidth="32"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} animate-draw-arrow`}
    >
      {/* Hand-drawn curved line */}
      <path
        d="M 15,65 Q 130,55 270,18"
        stroke="#f0a830"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength="100"
        className="arrow-shaft"
      />
      {/* Arrow head */}
      <path
        d="M 245,26 L 274,16 L 263,42"
        stroke="#f0a830"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="100"
        className="arrow-head"
      />
    </svg>
  );
}

export function SunDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} animate-bounce-subtle`}
    >
      {/* Sun spikes (irregular star) */}
      <path
        d="M 50,12 L 57,28 L 70,22 L 64,34 L 79,37 L 66,46 L 73,59 L 59,58 L 57,74 L 50,65 L 43,74 L 41,58 L 27,59 L 34,46 L 21,37 L 36,34 L 30,22 L 43,28 Z"
        stroke="#b31e24"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="#f0a830"
      />
      {/* Eyes */}
      <circle cx="44" cy="42" r="2.5" fill="#134e5a" />
      <circle cx="56" cy="42" r="2.5" fill="#134e5a" />
      {/* Smile */}
      <path
        d="M 45,49 Q 50,54 55,49"
        stroke="#134e5a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left leg */}
      <path
        d="M 42,65 L 42,88 M 42,88 L 36,88"
        stroke="#b31e24"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Right leg */}
      <path
        d="M 58,65 L 58,88 M 58,88 L 64,88"
        stroke="#b31e24"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloudDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} animate-float`}
    >
      {/* Cloud outline */}
      <path
        d="M 25,45 C 22,33 34,25 43,28 C 48,16 64,16 70,26 C 81,20 90,28 88,40 C 94,48 85,58 75,56 L 30,56 C 21,56 16,48 25,45 Z"
        stroke="#134e5a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(19, 78, 90, 0.05)"
      />
      {/* Hand-drawn mini rain arcs or details */}
      <path
        d="M 38,38 C 40,36 43,36 45,38"
        stroke="#134e5a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 62,34 C 64,32 67,32 69,34"
        stroke="#134e5a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeartsDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} animate-pulse-subtle`}
    >
      {/* Larger Heart */}
      <path
        d="M 45,35 C 33,18 20,30 45,60 C 70,30 57,18 45,35 Z"
        stroke="#b31e24"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(179, 30, 36, 0.05)"
        transform="rotate(-15 45 40)"
      />
      {/* Smaller Heart */}
      <path
        d="M 22,25 C 15,13 5,22 22,42 C 39,22 29,13 22,25 Z"
        stroke="#b31e24"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(179, 30, 36, 0.08)"
        transform="rotate(10 22 28)"
      />
    </svg>
  );
}

export function ButterflyDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} animate-float`}
      style={{ animationDelay: "1.5s" }}
    >
      {/* Left wings */}
      <path
        d="M 50,40 C 30,15 15,35 48,46 C 15,55 30,75 49,60"
        stroke="#134e5a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#b31e24"
      />
      {/* Right wings */}
      <path
        d="M 50,40 C 70,15 85,35 52,46 C 85,55 70,75 51,60"
        stroke="#134e5a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#b31e24"
      />
      {/* Body */}
      <path
        d="M 50,34 L 50,68"
        stroke="#134e5a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Antennae */}
      <path
        d="M 50,34 Q 44,22 38,24"
        stroke="#134e5a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 50,34 Q 56,22 62,24"
        stroke="#134e5a"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

