import React from 'react';

export default function GoalCard({ title, desc, priority }) {
  const color = priority === 'Alta' ? 'bg-red-600' : priority === 'Media' ? 'bg-yellow-600' : 'bg-gray-600';
  return (
    <div className="sketch-card p-4 lg:h-fit">
      <div className="flex flex-col lg:flex-row  lg:items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="font-sketch text-lg" style={{ color: 'var(--sketch-primary)' }}>{title}</div>
          <div className="font-mono text-sm mt-2 text-(--sketch-text-dim)">{desc}</div>
        </div>
        <div className={`px-3 py-1 rounded-full font-mono text-xs w-fit ${color}`} style={{ color: 'white' }}>{priority}</div>
      </div>
    </div>
  );
}
