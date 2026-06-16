import React from 'react';

export default function GoalCard({ title, desc, priority }) {
  const color = priority === 'High' ? 'bg-red-600' : priority === 'Medium' ? 'bg-yellow-600' : 'bg-gray-600';
  return (
    <div className="sketch-card p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-sketch text-lg" style={{ color: 'var(--sketch-primary)' }}>{title}</div>
          <div className="font-mono text-sm mt-2 text-(--sketch-text-dim)">{desc}</div>
        </div>
        <div className={`px-3 py-1 rounded-full font-mono text-xs ${color}`} style={{ color: 'white' }}>{priority}</div>
      </div>
    </div>
  );
}
