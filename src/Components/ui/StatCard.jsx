import React from 'react';

export default function StatCard({ value, label }) {
  return (
    <div className="sketch-card p-6 text-center">
      <div className="font-sketch text-4xl" style={{ color: 'var(--sketch-primary)' }}>{value}</div>
      <div className="font-mono text-sm mt-2 text-[var(--sketch-text-dim)]">{label}</div>
    </div>
  );
}
