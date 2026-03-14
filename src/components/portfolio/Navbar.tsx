import { useLang } from "@/context/LanguageContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { en: "About", ko: "소개", href: "#about" },
  { en: "Skills", ko: "기술", href: "#skills" },
  { en: "Experience", ko: "경력", href: "#experience" },
  { en: "Projects", ko: "프로젝트", href: "#projects" },
  { en: "Contact", ko: "연락처", href: "#contact" },
];

const Navbar = () => {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold text-primary tracking-tight">
          Sonali<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t(item.en, item.ko)}
            </a>
          ))}
          <button
            onClick={toggle}
            className="ml-2 px-3 py-1.5 text-xs font-semibold rounded-md bg-primary text-primary-foreground hover:bg-navy-light transition-colors"
          >
            {lang === "en" ? "한국어" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="px-2.5 py-1 text-xs font-semibold rounded-md bg-primary text-primary-foreground"
          >
            {lang === "en" ? "한국어" : "EN"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-primary">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {t(item.en, item.ko)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
