import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ko";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (en: string, ko: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "ko" : "en"));
  const t = (en: string, ko: string) => (lang === "en" ? en : ko);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
};
