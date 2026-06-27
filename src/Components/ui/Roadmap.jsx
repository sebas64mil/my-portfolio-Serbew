import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { roadmaps } from '../../data/roadmapData';
import Button from './Button';

// Roadmap with animated connecting lines and completion state per node
export default function Roadmap({ initial = 'Inventory' }) {
  const [selected, setSelected] = useState(initial);
  const [mapState, setMapState] = useState(() => {
    const m = roadmaps.find((r) => r.id === initial) || roadmaps[0];
    return JSON.parse(JSON.stringify(m));
  });

  const [activeNode, setActiveNode] = useState(null);
  const [lines, setLines] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const containerRef = useRef(null);
  const nodeRefs = useRef({});

  // When selected roadmap changes, clone the data so we can mutate completion locally
  useEffect(() => {
    const m = roadmaps.find((r) => r.id === selected) || roadmaps[0];
    setMapState(JSON.parse(JSON.stringify(m)));
    setActiveNode(null);
  }, [selected]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const compactLayout = viewportWidth < 1024;
  const itemsPerRow = viewportWidth < 480 ? 1 : 2;
  const desktopItemsPerRow = 4;

  const compactRows = useMemo(() => {
    if (!compactLayout) return [];
    const rows = [];
    for (let i = 0; i < mapState.nodes.length; i += itemsPerRow) {
      rows.push(mapState.nodes.slice(i, i + itemsPerRow));
    }
    return rows;
  }, [compactLayout, itemsPerRow, mapState.nodes]);

  const desktopRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < mapState.nodes.length; i += desktopItemsPerRow) {
      rows.push(mapState.nodes.slice(i, i + desktopItemsPerRow));
    }
    return rows;
  }, [desktopItemsPerRow, mapState.nodes]);

  const calcLines = useCallback(() => {
    const cont = containerRef.current;
    if (!cont || !mapState) return;
    const rect = cont.getBoundingClientRect();
    const newLines = [];

    for (let i = 0; i < mapState.nodes.length - 1; i++) {
      const aEl = nodeRefs.current[i];
      const bEl = nodeRefs.current[i + 1];
      if (!aEl || !bEl) continue;
      const ar = aEl.getBoundingClientRect();
      const br = bEl.getBoundingClientRect();
      const ax = ar.left + ar.width / 2 - rect.left;
      const ay = ar.top + ar.height / 2 - rect.top;
      const bx = br.left + br.width / 2 - rect.left;
      const by = br.top + br.height / 2 - rect.top;
      const length = Math.hypot(bx - ax, by - ay);
      const progress = mapState.nodes[i].completed ? 1 : 0; // progress depends on source node
      newLines.push({ 
        x1: ax, 
        y1: ay, 
        x2: bx, 
        y2: by, 
        id: `line-${i}-${i+1}`, 
        length, 
        progress 
      });
    }

    setLines(newLines);
    // trigger animation tick
    setAnimate(false);
    setTimeout(() => setAnimate(true), 40);
  }, [mapState]);

  useEffect(() => {
    const t = setTimeout(calcLines, 80);
    window.addEventListener('resize', calcLines);
    window.addEventListener('scroll', calcLines, true);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', calcLines);
      window.removeEventListener('scroll', calcLines, true);
    };
  }, [calcLines, mapState]);

  useEffect(() => {
    // recalc after nodes render
    const t = setTimeout(calcLines, 120);
    return () => clearTimeout(t);
  }, [mapState, calcLines]);

  const openNode = (index) => setActiveNode(index);

  const toggleComplete = (index) => {
    setMapState((prev) => {
      const next = {
        ...prev,
        nodes: prev.nodes.map((n, idx) => (idx === index ? { ...n, completed: !n.completed } : n)),
      };
      return next;
    });
    // recalc lines after update
    setTimeout(calcLines, 120);
  };

  return (
    <div className="w-full">
      {/* Map selector buttons (use project's Button component) */}
<div className="mb-3 overflow-x-auto scrollbar-thin">
  <div className="flex gap-3 min-w-max pb-2">
    {roadmaps.map((r) => (
      <Button
        key={r.id}
        variant={selected === r.id ? 'fancy-primary' : 'fancy-secondary'}
        size="sm"
        onClick={() => setSelected(r.id)}
      >
        {r.title}
      </Button>
    ))}
  </div>
</div>

      {/* Title, tag & description */}
      <div className="mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-sketch text-xl text-glow" style={{ color: 'var(--sketch-primary)' }}>{mapState.title}</h3>
          {mapState.tag && (
            <span
              className="font-mono text-[11px] uppercase tracking-[0.2em] px-3 py-1 rounded-full"
              style={{
                border: '1px solid var(--sketch-border-solid)',
                color: 'var(--sketch-primary)',
                background: 'rgba(0, 240, 255, 0.08)',
              }}
            >
              {mapState.tag}
            </span>
          )}
        </div>
        <p className="font-mono text-sm text-(--sketch-text-dim) mt-2">{mapState.description}</p>
      </div>

      <div ref={containerRef} className="relative w-full">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          {lines.map((l) => (
            <g key={l.id}>
              {/* background dashed line */}
              <line
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="var(--sketch-border-solid)"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity={0.6}
              />

              {/* animated progress line on top */}
              <line
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="var(--sketch-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={l.length}
                strokeDashoffset={animate ? l.length * (1 - l.progress) : l.length}
                style={{ transition: 'stroke-dashoffset 900ms ease' }}
                opacity={0.95}
              />
            </g>
          ))}
        </svg>

        <div className="hidden lg:flex flex-col gap-6 py-8">
          {desktopRows.map((row, rowIndex) => {
            const reversed = rowIndex % 2 === 1;
            return (
              <div
                key={`drow-${rowIndex}`}
                className={`flex gap-6 ${reversed ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {row.map((node, nodeIdx) => {
                  const completed = !!node.completed;
                  const originalIdx = rowIndex * desktopItemsPerRow + nodeIdx;
                  return (
                    <div
                      key={`${node.id}-${originalIdx}`}
                      ref={(el) => (nodeRefs.current[originalIdx] = el)}
                      onClick={() => openNode(originalIdx)}
                      className={`sketch-card flex-1 p-4 text-center cursor-pointer transition-transform relative ${activeNode === originalIdx ? 'scale-105' : ''}`}
                      style={{
                        minWidth: '180px',
                        borderColor: completed ? 'var(--sketch-primary)' : undefined,
                        boxShadow: completed ? '0 0 12px rgba(0,240,255,0.06)' : undefined,
                      }}
                    >
                      {completed && (
                        <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 12, color: 'var(--sketch-primary)' }}>✓</span>
                      )}

                      <div className="font-mono text-xs opacity-80">{mapState.title}</div>
                      <div className="font-sketch text-lg mt-1">{node.label}</div>
                    </div>
                  );
                })}
                {/* Fill empty slots to maintain consistent column widths */}
                {row.length < desktopItemsPerRow && Array.from({ length: desktopItemsPerRow - row.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="flex-1" style={{ minWidth: '180px' }} aria-hidden="true" />
                ))}
              </div>
            );
          })}
        </div>

        <div className="lg:hidden flex flex-col gap-6 py-8">
          {compactRows.map((row, rowIndex) => {
            const reversed = rowIndex % 2 === 1;
            return (
              <div
                key={`row-${rowIndex}`}
                className={`flex w-full gap-4 ${reversed ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {row.map((node, nodeIdx) => {
                  const completed = !!node.completed;
                  const originalIdx = rowIndex * itemsPerRow + nodeIdx;
                  return (
                    <div
                      key={`${node.id}-${originalIdx}`}
                      ref={(el) => (nodeRefs.current[originalIdx] = el)}
                      onClick={() => openNode(originalIdx)}
                      className={`sketch-card flex-1 min-w-0 p-3 text-center cursor-pointer transition-transform relative ${activeNode === originalIdx ? 'scale-[1.02]' : ''}`}
                      style={{
                        borderColor: completed ? 'var(--sketch-primary)' : undefined,
                        boxShadow: completed ? '0 0 12px rgba(0,240,255,0.06)' : undefined,
                      }}
                    >
                      {completed && (
                        <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 12, color: 'var(--sketch-primary)' }}>✓</span>
                      )}

                      <div className="font-mono text-[10px] opacity-80 truncate">{mapState.title}</div>
                      <div className="font-sketch text-base mt-1 leading-tight">{node.label}</div>
                    </div>
                  );
                })}
                {row.length === 1 && <div className="flex-1" aria-hidden="true" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Details / controls */}
      {activeNode !== null && (
        <div className="mt-4 sketch-card p-4 flex items-start justify-between">
          {(() => {
            const n = mapState.nodes[activeNode];
            if (!n) return null;
            return (
              <div className="flex-1 min-w-0">
                <h4 className="font-sketch text-lg" style={{ color: 'var(--sketch-primary)' }}>{n.label}</h4>
                <p className="font-mono text-sm mt-2 text-(--sketch-text-dim)">{n.desc}</p>

                <div className="mt-4">
                  {n.media?.url ? (
                    <div className="rounded-lg overflow-hidden border border-(--sketch-border-solid) bg-black/20">
                      {n.media.type === 'video' ? (
                        <video
                          className="w-full max-w-full block"
                          controls
                          src={n.media.url}
                          poster={n.media.poster}
                        />
                      ) : (
                        <img
                          className="w-full max-w-full block object-cover"
                          src={n.media.url}
                          alt={n.media.alt || n.label}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="rounded-lg border border-dashed border-(--sketch-border-solid) min-h-[180px] flex items-center justify-center text-center px-4 bg-black/10">
                      <p className="font-mono text-sm text-(--sketch-text-dim)">
                        Espacio para agregar una imagen o video de este nodo.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
