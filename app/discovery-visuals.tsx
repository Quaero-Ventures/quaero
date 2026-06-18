"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const heroPoints = [
  [12, 18],
  [20, 64],
  [31, 34],
  [44, 72],
  [52, 24],
  [63, 58],
  [74, 38],
  [82, 70],
  [90, 28],
];

const noisePoints = Array.from({ length: 180 }, (_, index) => {
  const x = (index * 37) % 100;
  const y = (index * 61 + 13) % 100;
  const signal = index % 17 === 0 || (x > 38 && x < 70 && y > 32 && y < 68);

  return { index, x, y, signal };
});

export function HeroDiscoveryMap() {
  return (
    <div className="relative min-h-[420px] overflow-hidden border border-[#E5E7EB] bg-[#FAFAF8]">
      <div className="coordinate-paper absolute inset-0 opacity-70" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        role="img"
        aria-label="Animated field of observations forming a discovered path"
      >
        <motion.path
          d="M12 18 C24 30 26 58 44 72 S68 62 82 70"
          fill="none"
          stroke="#0A0A0A"
          strokeLinecap="round"
          strokeWidth="0.35"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.45 }}
          transition={{
            duration: 5.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        {heroPoints.map(([cx, cy], index) => (
          <motion.g
            key={`${cx}-${cy}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, index === 5 ? 0.95 : 0.55, 0.25] }}
            transition={{
              duration: 5.5,
              delay: index * 0.32,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <circle cx={cx} cy={cy} r={index === 5 ? 1.35 : 0.75} fill="#0A0A0A" />
            {index === 5 ? (
              <circle cx={cx} cy={cy} r="6.5" fill="none" stroke="#0A0A0A" strokeWidth="0.25" />
            ) : null}
          </motion.g>
        ))}
        <motion.path
          d="M66 20 A24 24 0 1 0 54 79"
          fill="none"
          stroke="#0A0A0A"
          strokeLinecap="round"
          strokeWidth="0.28"
          initial={{ opacity: 0.12, rotate: 0 }}
          animate={{ opacity: [0.12, 0.32, 0.12], rotate: 8 }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
        />
      </svg>
      <div className="absolute bottom-5 left-5 flex items-center gap-3 border-l border-[#0A0A0A] pl-4 text-[11px] uppercase text-[#6B7280]">
        <span>Observation field</span>
        <span>03 clusters</span>
      </div>
    </div>
  );
}

export function SignalNoiseField() {
  const { scrollYProgress } = useScroll();
  const noiseOpacity = useTransform(scrollYProgress, [0.38, 0.58], [0.5, 0.08]);
  const signalOpacity = useTransform(scrollYProgress, [0.42, 0.62], [0.25, 0.95]);
  const pathLength = useTransform(scrollYProgress, [0.44, 0.68], [0, 1]);

  return (
    <div className="relative min-h-[560px] overflow-hidden border-y border-[#E5E7EB] bg-[#FAFAF8]">
      <div className="coordinate-paper absolute inset-0" />
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        role="img"
        aria-label="Noise fading while a hidden signal pattern emerges"
      >
        <motion.g style={{ opacity: noiseOpacity }}>
          {noisePoints.map((point) => (
            <circle
              key={point.index}
              cx={point.x}
              cy={point.y}
              r={point.signal ? 0.45 : 0.27}
              fill="#0A0A0A"
            />
          ))}
        </motion.g>
        <motion.g style={{ opacity: signalOpacity }}>
          <motion.path
            d="M30 56 C38 36 54 28 68 42 S78 68 58 73 S28 70 30 56"
            fill="none"
            stroke="#0A0A0A"
            strokeLinecap="round"
            strokeWidth="0.35"
            style={{ pathLength }}
          />
          {[32, 42, 54, 66, 74, 60, 44].map((cx, index) => {
            const cy = [55, 42, 34, 43, 59, 72, 69][index];
            return (
              <g key={cx}>
                <circle cx={cx} cy={cy} r="1.05" fill="#0A0A0A" />
                <circle cx={cx} cy={cy} r="5.2" fill="none" stroke="#0A0A0A" strokeWidth="0.16" />
              </g>
            );
          })}
        </motion.g>
      </motion.svg>
      <div className="absolute left-6 top-6 text-[11px] uppercase text-[#6B7280]">
        Signal / noise study
      </div>
      <div className="absolute bottom-8 right-6 max-w-xs border-l border-[#0A0A0A] pl-5 text-sm leading-6 text-[#6B7280]">
        As the field is examined, weaker traces recede and the pattern worth testing becomes legible.
      </div>
    </div>
  );
}
