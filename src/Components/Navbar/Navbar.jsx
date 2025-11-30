import { useEffect, useState } from "react";
import Button from "../Buttons/Button.jsx";
import IconMenu from "../../assets/Icons/IconMenu.jsx";
import { useLanguage } from "../../Data/LanguageContext.jsx";
import { translations } from "../../Data/translations.js";

export default function Navbar({ scrollToSection }) {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // 🔥 Navbar desaparece al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (!isOpen) {
        if (current === 0) setIsVisible(true);
        else if (current > lastScrollY) setIsVisible(false);
        else setIsVisible(true);
        setLastScrollY(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[89px] px-4 bg-slate-950
        flex items-center justify-between z-50
        transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <h1 className="text-teal-300 text-5xl font-bold select-none">Serbew</h1>

        {/* DESKTOP */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-2">
            <li>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("top")}>
                {t.navbar.home}
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("about")}>
                {t.navbar.about}
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("projects")}>
                {t.navbar.projects}
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("habilities")}>
                {t.navbar.habilities}
              </Button>
            </li>
            <li>
              <Button variant="light" size="sm" onClick={() => scrollToSection("contact")}>
                {t.navbar.contact}
              </Button>
            </li>
            <li>
              <Button variant="dark" size="sm" onClick={toggleLanguage}>
                {language === "es" ? "Idioma: Español" : "Language: English"}
              </Button>
            </li>
          </ul>
        </nav>

        {/* TABLET */}
        <nav className="hidden md:flex lg:hidden w-full max-w-[calc(100%-2rem)] mx-auto">
          <ul className="flex items-center gap-2">
            <li><Button variant="ghost" size="sm" onClick={() => scrollToSection("top")}>{t.navbar.home}</Button></li>
            <li><Button variant="ghost" size="sm" onClick={() => scrollToSection("about")}>{t.navbar.about}</Button></li>
            <li><Button variant="ghost" size="sm" onClick={() => scrollToSection("projects")}>{t.navbar.projects}</Button></li>
            <li><Button variant="ghost" size="sm" onClick={() => scrollToSection("habilities")}>{t.navbar.habilities}</Button></li>
          </ul>
        </nav>

        {/* MOBILE BUTTON */}
        <Button
          variant="dark"
          className="md:hidden"
          size="sm"
          onClick={toggleMenu}
          icon={<IconMenu className="w-7 h-7 text-teal-300" />}
        />
      </header>

      {/* MOBILE MENU BACKDROP */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm md:hidden"
        ></div>
      )}

      {/* MOBILE MENU */}
      <nav
        className={`fixed top-0 right-0 w-64 h-full bg-slate-950 z-50 md:hidden
        p-6 flex flex-col gap-6 border-l border-teal-700/40
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Button variant="ghost" size="sm" onClick={() => { scrollToSection("top"); closeMenu(); }}>
          {t.navbar.home}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => { scrollToSection("about"); closeMenu(); }}>
          {t.navbar.about}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => { scrollToSection("projects"); closeMenu(); }}>
          {t.navbar.projects}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => { scrollToSection("habilities"); closeMenu(); }}>
          {t.navbar.habilities}
        </Button>
        <Button variant="light" size="sm" onClick={() => { scrollToSection("contact"); closeMenu(); }}>
          {t.navbar.contact}
        </Button>

        <Button variant="dark" size="sm" onClick={toggleLanguage}>
          {language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
        </Button>
      </nav>
    </>
  );
}
