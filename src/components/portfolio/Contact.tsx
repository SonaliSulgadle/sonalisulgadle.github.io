import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { t } = useLang();

  const links = [
    {
      href: "mailto:sonali.sulgadle@gmail.com",
      icon: Mail,
      label: "Email",
      aria: "Email",
    },
    {
      href: "https://www.linkedin.com/in/sonali-sulgadle-01b04a118",
      icon: Linkedin,
      label: "LinkedIn",
      aria: "LinkedIn",
    },
    {
      href: "https://github.com/SonaliSulgadle",
      icon: Github,
      label: "GitHub",
      aria: "GitHub",
    },
  ];

  return (
    <footer id="contact" className="relative py-24 bg-surface overflow-hidden">
      {/* subtle warm texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, hsl(var(--terracotta) / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2.5 mb-4"
        >
          <span className="h-[3px] w-6 rounded-full bg-accent" aria-hidden="true" />
          <span className="h-2 w-2 rounded-sm bg-accent" aria-hidden="true" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight"
        >
          {t("Let's Connect", "연락주세요")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <MapPin size={18} className="text-accent" />
          <span className="text-muted-foreground text-base">
            {t("India · South Korea · Global · Remote", "인도 · 한국 · 글로벌 · 원격")}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-4 max-w-xl mx-auto text-base leading-relaxed"
        >
          {t(
            "I'm open to Android and mobile engineering opportunities across India, South Korea, global teams, and remote roles. Feel free to reach out!",
            "인도, 한국, 글로벌 팀 및 원격 근무 환경의 안드로이드 및 모바일 엔지니어링 기회에 열려 있습니다. 편하게 연락해 주세요!"
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="text-sm font-medium text-foreground mb-10 max-w-xl mx-auto"
        >
          {t(
            "Open to opportunities in India, South Korea, global teams, and remote roles.",
            "인도, 한국, 글로벌 팀 및 원격 근무 기회에 열려 있습니다."
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {links.map(({ href, icon: Icon, label, aria }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={aria}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-accent-foreground shadow-warm transition-all duration-200 hover:bg-terracotta-hover hover:-translate-y-0.5"
            >
              <Icon size={18} />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>

        <p className="text-xs text-muted-foreground">
          © 2026 Sonali Sulgadle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
