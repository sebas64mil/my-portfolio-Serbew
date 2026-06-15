import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../../data/siteData';
import Button from './Button';

/**
 * Navbar supports optional per-page overrides:
 * <Navbar localLinks={...} pageLinks={...} basePath="/projects" />
 */
export default function Navbar({ localLinks, pageLinks, basePath }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const local = localLinks || siteData.navLocalLinks;
  const pages = pageLinks || siteData.navPageLinks;

  const handleLocalClick = (e, href) => {
    const targetBase = basePath || '/';
    if (location.pathname === targetBase && href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
    // otherwise let the link behave normally (navigation handled by Button/Link)
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-all duration-300">
      <div
        className={`flex items-center justify-between px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? 'border-solid border-[var(--sketch-primary)] bg-[#0a0a0cf8] shadow-[0_0_15px_rgba(0,240,255,0.15)]'
            : 'border-dashed border-[var(--sketch-border-solid)] bg-[#0a0a0cd8] backdrop-blur-md'
        }`}
        style={{
          borderWidth: '1.5px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => handleLocalClick(e, '#hero')}
          className="font-sketch text-lg md:text-xl tracking-widest neon-flicker select-none mr-2"
          style={{ color: 'var(--sketch-primary)' }}
        >
          {siteData.nickname}
        </Link>

        {/* spacer */}
        <div className="flex-1" />

        {/* Right cluster: first 3 local links, peek and page links */}
        <div className="flex items-center gap-2">
          {local.slice(0, 3).map((link) => {
            const href = link.href || '#';
            const isActive = location.pathname === (basePath || '/') && location.hash === href;
            return (
              <Button
                key={href}
                href={href.startsWith('#') ? href : `/${href}`}
                onClick={(e) => handleLocalClick(e, href)}
                variant="fancy-primary"
                size="sm"
                className={`${isActive ? 'active-nav-btn' : ''}`}
              >
                {link.label}
              </Button>
            );
          })}

          {local[3] && <div className="ml-1 opacity-60 select-none text-[12px] font-mono hidden md:block">…</div>}

          <div className="w-px h-5 mx-2" style={{ background: 'var(--sketch-border-solid)' }} />

          {pages.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Button
                key={link.path}
                to={link.path}
                variant="fancy-secondary"
                size="sm"
                className={isActive ? 'active-nav-btn' : ''}
              >
                {link.label}
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

