import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { siteData } from '../../data/siteData';
import Button from './Button';

/**
 * Navbar supports optional per-page overrides:
 * <Navbar localLinks={...} pageLinks={...} basePath="/projects" />
 */
export default function Navbar({ localLinks, pageLinks, basePath }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
      setMenuOpen(false);
    }
    // otherwise let the link behave normally (navigation handled by Button/Link)
  };

  return (
    <>
      <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-all duration-300">
        <div
          className={`relative flex items-center justify-between px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? 'border-solid border-(--sketch-primary) bg-[#0a0a0cf8] shadow-[0_0_15px_rgba(0,240,255,0.15)]'
              : 'border-dashed border-(--sketch-border-solid) bg-[#0a0a0cd8] backdrop-blur-md'
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

          {/* Desktop / tablet navigation */}
          <div className="hidden md:flex items-center gap-2">
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

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-3 inline-flex md:hidden items-center justify-center w-10 h-10 rounded-md transition-colors"
            style={{
              border: '1px solid var(--sketch-border-solid)',
              color: 'var(--sketch-primary)',
              background: menuOpen ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
            }}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile drawer + overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 cursor-default"
          style={{ background: 'rgba(0, 0, 0, 0.55)' }}
        />

        <div
          className={`absolute right-0 top-0 h-screen w-[min(85vw,320px)] sketch-card border-dashed border-(--sketch-border-solid) rounded-sm overflow-hidden bg-[#0a0a0df5] shadow-[0_0_20px_rgba(0,240,255,0.12)] p-4 transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ zIndex: 60, backdropFilter: 'blur(8px)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sketch text-lg" style={{ color: 'var(--sketch-primary)' }}>
                Menú
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md"
                style={{
                  border: '1px solid var(--sketch-border-solid)',
                  color: 'var(--sketch-primary)',
                }}
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1 pt-2">
              {local.map((link) => {
                const href = link.href || '#';
                const isActive = location.pathname === (basePath || '/') && location.hash === href;
                return (
                  <Button
                    key={href}
                    href={href.startsWith('#') ? href : `/${href}`}
                    onClick={(e) => handleLocalClick(e, href)}
                    variant="fancy-primary"
                    size="sm"
                    className={`w-full ${isActive ? 'active-nav-btn' : ''}`}
                  >
                    {link.label}
                  </Button>
                );
              })}

              <div className="my-1 h-px w-full" style={{ background: 'var(--sketch-border-solid)' }} />

              {pages.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Button
                    key={link.path}
                    to={link.path}
                    variant="fancy-secondary"
                    size="sm"
                    className={`w-full ${isActive ? 'active-nav-btn' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
