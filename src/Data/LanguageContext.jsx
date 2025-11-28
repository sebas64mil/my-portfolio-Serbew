import { createContext, useState, useContext } from "react";

// Creamos el contexto
const LanguageContext = createContext();

// Provider que envolverá toda la app
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es"); // 'es' o 'en'

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook para usar el contexto
export const useLanguage = () => useContext(LanguageContext);
