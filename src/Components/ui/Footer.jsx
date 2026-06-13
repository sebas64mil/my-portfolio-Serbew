import React from 'react';
import { siteData } from '../../data/siteData';

export default function Footer() {
  return (
    <footer
      className="w-full py-10 px-6"
      style={{
        borderTop: '1px dashed var(--sketch-border-solid)',
        background: 'rgba(10, 10, 12, 0.6)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Créditos */}
        <p
          className="font-mono text-xs uppercase tracking-widest"
          style={{ color: 'var(--sketch-text-dim)' }}
        >
          {siteData.footerText}
        </p>

        {/* Links Sociales */}
        <div className="flex items-center gap-3">
          {siteData.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-btn text-[10px] py-1.5 px-3"
              title={social.label}
            >
              <span className="mr-1">{social.icon}</span>
              {social.label}
            </a>
          ))}
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="sketch-line mt-8 max-w-6xl mx-auto" />
      <p
        className="text-center mt-4 font-mono text-[10px] uppercase tracking-widest"
        style={{ color: 'var(--sketch-text-dim)' }}
      >
        © {new Date().getFullYear()} — Todos los derechos reservados
      </p>
    </footer>
  );
}
