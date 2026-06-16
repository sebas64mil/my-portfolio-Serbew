import React from 'react';

export default function EducationItem({ institution, program, date, desc, certificate }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-6 flex-shrink-0">
        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--sketch-primary)' }} />
        <div className="w-px h-full ml-2 bg-[rgba(0,240,255,0.08)]" />
      </div>
      <div className="flex-1 sketch-card p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-sketch text-base" style={{ color: 'var(--sketch-primary)' }}>{institution}</div>
            <div className="font-mono text-sm">{program}</div>
          </div>
          <div className="font-mono text-sm text-(--sketch-text-dim)">{date}</div>
        </div>
        <div className="font-mono text-sm mt-2 text-(--sketch-text-dim)">{desc}</div>
        {certificate && (
          <div className="mt-2">
            <a href={certificate} target="_blank" rel="noreferrer" className="font-mono text-xs text-(--sketch-primary) underline">Ver certificado</a>
          </div>
        )}
      </div>
    </div>
  );
}
