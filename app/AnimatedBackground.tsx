import React from "react";

const WAVE_COUNT = 64; // More waves for density
const DOTS_PER_WAVE = 140; // More dots per wave
const WIDTH = 1000;
const HEIGHT = 300;
const DOT_MIN = 0.5;
const DOT_MAX = 1.2;
const COLORS = ["#bbb", "#ff0000"];

function getWaveY(waveIdx: number, dotIdx: number) {
  // More waviness on the left, gentler on the right
  const baseY = 40 + (waveIdx * (HEIGHT - 80)) / (WAVE_COUNT - 1);
  const xFrac = dotIdx / (DOTS_PER_WAVE - 1);
  // Amplitude is higher on the left, tapers to the right
  const amplitude = (12 - 7 * xFrac) + 2 * Math.sin((waveIdx / WAVE_COUNT) * Math.PI);
  const freq = 1.3 + 0.7 * (1 - xFrac) * Math.sin((waveIdx / WAVE_COUNT) * Math.PI * 1.5);
  const phase = (waveIdx / WAVE_COUNT) * Math.PI * 2;
  return (
    baseY +
    amplitude *
      Math.sin(
        xFrac * Math.PI * freq + phase
      )
  );
}

function getDotRadius(dotIdx: number) {
  // Subtle size variation
  return DOT_MIN + (DOT_MAX - DOT_MIN) * 0.5 * (1 + Math.sin((dotIdx / DOTS_PER_WAVE) * Math.PI));
}

function getDotColor(waveIdx: number, dotIdx: number) {
  // Alternate or randomize color for nuance
  return COLORS[(waveIdx + dotIdx) % COLORS.length];
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <defs>
          {/* Mask: fade out to the right (from 55% to 100%), darker on the left */}
          <linearGradient id="fade-right" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="10%" stopColor="white" stopOpacity="0.95" />
            <stop offset="30%" stopColor="white" stopOpacity="0.8" />
            <stop offset="55%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="mask-fade-right">
            <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="url(#fade-right)" />
          </mask>
        </defs>
        <g mask="url(#mask-fade-right)">
          {Array.from({ length: WAVE_COUNT }).map((_, waveIdx) => (
            <g
              key={waveIdx}
              style={{
                animation: `wave-move-${waveIdx} 14s linear infinite`,
                opacity: 0.22 + 0.14 * Math.sin((waveIdx / WAVE_COUNT) * Math.PI),
              }}
            >
              {Array.from({ length: DOTS_PER_WAVE }).map((_, dotIdx) => {
                const x = (dotIdx / (DOTS_PER_WAVE - 1)) * WIDTH;
                const y = getWaveY(waveIdx, dotIdx);
                const r = getDotRadius(dotIdx);
                const fill = getDotColor(waveIdx, dotIdx);
                return (
                  <circle
                    key={dotIdx}
                    cx={x}
                    cy={y}
                    r={r}
                    fill={fill}
                    opacity={0.32 + 0.18 * Math.sin((dotIdx / DOTS_PER_WAVE) * Math.PI)}
                  />
                );
              })}
            </g>
          ))}
        </g>
        <style>{`
          ${Array.from({ length: WAVE_COUNT })
            .map(
              (_, i) => `
              @keyframes wave-move-${i} {
                0% { transform: translateX(0); }
                100% { transform: translateX(-${30 + i * 2}px); }
              }
            `
            )
            .join("\n")}
          g {
            will-change: transform;
          }
        `}</style>
      </svg>
    </div>
  );
} 