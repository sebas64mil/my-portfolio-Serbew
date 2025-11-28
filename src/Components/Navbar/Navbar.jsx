import { useEffect, useState } from "react";
import Button from "../Buttons/Button.jsx";
import IconMenu from "../../assets/Icons/IconMenu.jsx";
import { useLanguage } from "../../Data/LanguageContext.jsx"; // <-- import
import { translations } from "../../Data/translations.js";

export default function Navbar({ scrollToSection }) {
  // ✅ Aquí desestructuramos language y toggleLanguage
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language]; 

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🔥 Navbar desaparece al bajar y aparece al subir
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current === 0) setIsVisible(true);
      else if (current > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
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
      <nav className="hidden md:flex lg:hidden">
        <ul className="flex items-center gap-2">
          <li>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("top")}>Inicio</Button>
          </li>
          <li>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("about")}>Quién soy?</Button>
          </li>
          <li>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("projects")}>Proyectos</Button>
          </li>
          <li>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("habilities")}>Habilidades</Button>
          </li>
        </ul>
      </nav>

      {/* MOBILE */}
      <Button
        variant="dark"
        className="md:hidden"
        size="sm"
        icon={<IconMenu className="w-7 h-7 text-teal-300" />}
      />
    </header>
  );
}
