import React, { useState } from 'react';
import Button from './Button';

// Flex-based 3-item carousel: prev - current - next centered and responsive
export default function CardCarousel({ items = [], className = '' }) {
  const [index, setIndex] = useState(0);

  const n = items.length;
  if (n === 0) return null;

  const prev = (index - 1 + n) % n;
  const next = (index + 1) % n;

  function go(dir = 1) {
    setIndex((i) => (i + dir + n) % n);
  }

  return (
    <div
      className={`carousel-container w-full flex flex-col items-center ${className}`}
    >
      <div className="w-full max-w-6xl flex items-center justify-center gap-6">

        {/* Left Control */}
        <div className="shrink-0">
          <Button
            variant="fancy-secondary"
            size="sm"
            onClick={() => go(-1)}
            aria-label="Prev"
          >
            ◀
          </Button>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center gap-6 flex-1">

          {/* Previous */}
          <div className="w-64 md:w-72 opacity-80 scale-95 transition-all duration-300">
            <div className="sketch-card p-4 text-left">
              <div className="text-sm font-mono opacity-80">
                {items[prev].category}
              </div>

              <h4 className="font-sketch text-lg mt-2">
                {items[prev].title}
              </h4>

              <p className="font-mono text-xs mt-2 text-[var(--sketch-text-dim)] truncate">
                {items[prev].summary}
              </p>
            </div>
          </div>

          {/* Current */}
          <div
            className="w-80 md:w-96 transition-all duration-300"
            style={{ zIndex: 20 }}
          >
            <div
              className="sketch-card p-6 text-left"
              style={{ boxShadow: 'var(--sketch-glow)' }}
            >
              <div className="text-sm font-mono opacity-90">
                {items[index].category}
              </div>

              <h3 className="font-sketch text-2xl mt-2">
                {items[index].title}
              </h3>

              <p className="font-mono text-sm mt-3 text-[var(--sketch-text-dim)]">
                {items[index].summary}
              </p>
            </div>
          </div>

          {/* Next */}
          <div className="w-64 md:w-72 opacity-80 scale-95 transition-all duration-300">
            <div className="sketch-card p-4 text-left">
              <div className="text-sm font-mono opacity-80">
                {items[next].category}
              </div>

              <h4 className="font-sketch text-lg mt-2">
                {items[next].title}
              </h4>

              <p className="font-mono text-xs mt-2 text-[var(--sketch-text-dim)] truncate">
                {items[next].summary}
              </p>
            </div>
          </div>

        </div>

        {/* Right Control */}
        <div className="shrink-0">
          <Button
            variant="fancy-secondary"
            size="sm"
            onClick={() => go(1)}
            aria-label="Next"
          >
            ▶
          </Button>
        </div>

      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${i + 1}`}
            className={`w-2 h-2 rounded-full ${
              i === index
                ? 'bg-white'
                : 'bg-gray-500/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}