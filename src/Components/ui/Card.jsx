import React from 'react';

export default function Card({ imageSrc, category, title, summary, className = '', featured = false }) {
  return (
    <div className={`sketch-card overflow-hidden text-left ${className}`}>
      {/* Image area: covers full top width, no outer margin */}
      <div className="w-full h-60 bg-gray-200/60 flex-shrink-0">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        ) : (
          // Placeholder empty block that occupies space for future image
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      {/* Content separated from image by padding */}
      <div className="p-6 pt-4">
        <div className="text-sm font-mono opacity-90">{category}</div>
        <h3 className={`font-sketch ${featured ? 'text-2xl' : 'text-lg'} mt-2`}>{title}</h3>
        <p className={`font-mono ${featured ? 'text-sm' : 'text-xs'} mt-3 text-[var(--sketch-text-dim)] truncate`}>
          {summary}
        </p>
      </div>
    </div>
  );
}
