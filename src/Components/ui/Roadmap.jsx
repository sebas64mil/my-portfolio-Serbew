import React, { useState, useRef, useEffect, useCallback } from 'react';
import { roadmaps } from '../../data/roadmapData';
import Button from './Button';

// Roadmap with animated connecting lines and completion state per node
export default function Roadmap({ initial = 'crash' }) {
  const [selected, setSelected] = useState(initial);
  const [mapState, setMapState] = useState(() => {
    const m = roadmaps.find((r) => r.id === initial) || roadmaps[0];
    return JSON.parse(JSON.stringify(m));
  });

  const [activeNode, setActiveNode] = useState(null);
  const [lines, setLines] = useState([]);
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);
  const nodeRefs = useRef({});

  // When selected roadmap changes, clone the data so we can mutate completion locally
  useEffect(() => {
    const m = roadmaps.find((r) => r.id === selected) || roadmaps[0];
    setMapState(JSON.parse(JSON.stringify(m)));
    setActiveNode(null);
  }, [selected]);

  const calcLines = useCallback(() => {
    const cont = containerRef.current;
    if (!cont || !mapState) return;
    const rect = cont.getBoundingClientRect();
    const newLines = [];

    for (let i = 0; i < mapState.nodes.length - 1; i++) {
      const aEl = nodeRefs.current[mapState.nodes[i].id];
      const bEl = nodeRefs.current[mapState.nodes[i + 1].id];
      if (!aEl || !bEl) continue;
      const ar = aEl.getBoundingClientRect();
      const br = bEl.getBoundingClientRect();
      const ax = ar.left + ar.width / 2 - rect.left;
      const ay = ar.top + ar.height / 2 - rect.top;
      const bx = br.left + br.width / 2 - rect.left;
      const by = br.top + br.height / 2 - rect.top;
      const length = Math.hypot(bx - ax, by - ay);
      const progress = mapState.nodes[i].completed ? 1 : 0; // progress depends on source node
      newLines.push({ x1: ax, y1: ay, x2: bx, y2: by, id: `${mapState.nodes[i].id}-${mapState.nodes[i + 1].id}`, length, progress });
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

  const openNode = (id) => setActiveNode(id);

  const toggleComplete = (id) => {
    setMapState((prev) => {
      const next = {
        ...prev,
        nodes: prev.nodes.map((n) => (n.id === id ? { ...n, completed: !n.completed } : n)),
      };
      return next;
    });
    // recalc lines after update
    setTimeout(calcLines, 120);
  };

  return (
    <div className="w-full">
      {/* Map selector buttons (use project's Button component) */}
      <div className="flex items-center gap-3 mb-3">
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

      {/* Title & description */}
      <div className="mb-4">
        <h3 className="font-sketch text-xl text-glow" style={{ color: 'var(--sketch-primary)' }}>{mapState.title}</h3>
        <p className="font-mono text-sm text-[var(--sketch-text-dim)]">{mapState.description}</p>
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

        <div className="flex items-center justify-center gap-6 py-8">
          {mapState.nodes.map((node, idx) => {
            const completed = !!node.completed;
            return (
              <div
                key={node.id}
                ref={(el) => (nodeRefs.current[node.id] = el)}
                onClick={() => openNode(node.id)}
                className={`sketch-card p-4 text-center cursor-pointer transition-transform relative ${activeNode === node.id ? 'scale-105' : ''}`}
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
        </div>
      </div>

      {/* Details / controls */}
      {activeNode && (
        <div className="mt-4 sketch-card p-4 flex items-start justify-between">
          {(() => {
            const n = mapState.nodes.find((x) => x.id === activeNode);
            if (!n) return null;
            return (
              <div>
                <h4 className="font-sketch text-lg" style={{ color: 'var(--sketch-primary)' }}>{n.label}</h4>
                <p className="font-mono text-sm mt-2 text-[var(--sketch-text-dim)]">{n.desc}</p>
              </div>
            );
          })()}

          <div className="ml-4 flex flex-col gap-2">
            <Button
              variant="fancy-primary"
              size="sm"
              onClick={() => toggleComplete(activeNode)}
            >
              Marcar completado
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
