import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="w-full max-w-6xl flex flex-col items-center gap-4">
        {/* Desktop layout */}
        <div className="hidden md:flex w-full items-center justify-center gap-6">
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

          <div className="flex items-center justify-center gap-6 flex-1">
            {/* Left Card: clickable to shift carousel */}
            <div 
              className="w-64 lg:w-72 opacity-60 scale-95 transition-all duration-300 cursor-pointer hover:opacity-90 hover:scale-[0.97]"
              onClick={() => setIndex(prev)}
            >
              <Card
                imageSrc={items[prev].coverImage}
                category={items[prev].category}
                title={items[prev].title}
                summary={items[prev].summary}
              />
            </div>

            {/* Active Card: clickable to enter project page */}
            <Link 
              to={`/projects/${items[index].id}`} 
              className="w-80 lg:w-96 transition-all duration-300 block hover:scale-[1.03] active:scale-[1.01]"
              style={{ zIndex: 20 }}
            >
              <Card
                imageSrc={items[index].coverImage}
                category={items[index].category}
                title={items[index].title}
                summary={items[index].summary}
                featured
              />
            </Link>

            {/* Right Card: clickable to shift carousel */}
            <div 
              className="w-64 lg:w-72 opacity-60 scale-95 transition-all duration-300 cursor-pointer hover:opacity-90 hover:scale-[0.97]"
              onClick={() => setIndex(next)}
            >
              <Card
                imageSrc={items[next].coverImage}
                category={items[next].category}
                title={items[next].title}
                summary={items[next].summary}
              />
            </div>
          </div>

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

        {/* Mobile layout */}
        <div className="md:hidden w-full flex flex-col items-center gap-4">
          <Link 
            to={`/projects/${items[index].id}`} 
            className="w-full max-w-[19rem] sm:max-w-[20rem] transition-all duration-300 block hover:scale-[1.02]"
          >
            <Card
              imageSrc={items[index].coverImage}
              category={items[index].category}
              title={items[index].title}
              summary={items[index].summary}
              featured
            />
          </Link>

          <div className="flex items-center gap-3">
            <Button
              variant="fancy-secondary"
              size="sm"
              onClick={() => go(-1)}
              aria-label="Prev"
            >
              ◀
            </Button>
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

      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              i === index
                ? 'bg-[var(--sketch-primary)] shadow-[0_0_6px_var(--sketch-primary)]'
                : 'bg-gray-500/40 hover:bg-gray-500/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}