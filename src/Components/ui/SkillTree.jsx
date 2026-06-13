import React, { useRef, useState, useEffect, useCallback } from 'react';
import { siteData } from '../../data/siteData';

const CATEGORIES = Object.keys(siteData.skillTrees);

export default function SkillTree() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const nodeRefs = useRef({});
  const coreRef = useRef(null);
  const [lines, setLines] = useState([]);

  const tree = siteData.skillTrees[activeTab];

  const calcLines = useCallback(() => {
    if (!coreRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const coreRect = coreRef.current.getBoundingClientRect();
    const cx = coreRect.left + coreRect.width / 2 - containerRect.left;
    const cy = coreRect.top + coreRect.height / 2 - containerRect.top;

    const newLines = [];
    Object.values(nodeRefs.current).forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = r.left + r.width / 2 - containerRect.left;
      const ny = r.top + r.height / 2 - containerRect.top;
      newLines.push({ x1: cx, y1: cy, x2: nx, y2: ny });
    });
    setLines(newLines);
  }, [activeTab]);

  useEffect(() => {
    // Small delay to let DOM settle
    const timeout = setTimeout(calcLines, 100);
    window.addEventListener('resize', calcLines);
    // Listen to scroll in case the container moves relative to viewport
    window.addEventListener('scroll', calcLines, true);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', calcLines);
      window.removeEventListener('scroll', calcLines, true);
    };
  }, [calcLines]);

  // Recalculate when active tab changes after the new nodes render
  useEffect(() => {
    const t = setTimeout(calcLines, 120);
    return () => clearTimeout(t);
  }, [activeTab, calcLines]);

  const handleTabChange = (cat) => {
    nodeRefs.current = {};
    setActiveTab(cat);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabChange(cat)}
            className={`sketch-btn text-xs py-2 px-5 ${
              activeTab === cat ? 'active' : ''
            }`}
          >
            {siteData.skillTrees[cat].label}
          </button>
        ))}
      </div>

      {/* Tree Container */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ minHeight: '340px' }}
      >
        {/* SVG Lines */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {lines.map((line, i) => (
            <line
              key={`${activeTab}-${i}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="var(--sketch-border-solid)"
              strokeWidth="1"
              strokeDasharray="6 4"
              className="sketch-draw-line"
            />
          ))}
        </svg>

        {/* Core Node (Centro) */}
        <div className="flex justify-center mb-10">
          <div
            ref={coreRef}
            className="sketch-card px-6 py-3 text-center relative z-10"
            style={{ boxShadow: 'var(--sketch-glow)' }}
          >
            <span
              className="font-sketch text-lg text-glow"
              style={{ color: 'var(--sketch-primary)' }}
            >
              {tree.core}
            </span>
          </div>
        </div>

        {/* Skill Nodes */}
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          {tree.skills.map((skill, i) => (
            <div
              key={`${activeTab}-${skill.name}`}
              ref={(el) => (nodeRefs.current[i] = el)}
              className="sketch-card px-4 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-default"
              style={{
                animationDelay: `${i * 80}ms`,
              }}
            >
              <span className="text-lg">{skill.icon}</span>
              <span
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: 'var(--sketch-text)' }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
