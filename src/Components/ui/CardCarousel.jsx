import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';

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
            <Card
              category={items[prev].category}
              title={items[prev].title}
              summary={items[prev].summary}
            />
          </div>

          {/* Current */}
          <div
            className="w-80 md:w-96 transition-all duration-300"
            style={{ zIndex: 20 }}
          >
            <Card
              category={items[index].category}
              title={items[index].title}
              summary={items[index].summary}
              featured
            />
          </div>

          {/* Next */}
          <div className="w-64 md:w-72 opacity-80 scale-95 transition-all duration-300">
            <Card
              category={items[next].category}
              title={items[next].title}
              summary={items[next].summary}
            />
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