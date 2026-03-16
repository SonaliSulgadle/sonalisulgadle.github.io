import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLang();

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sonali.sulgadle@gmail.com",
      href: "mailto:sonali.sulgadle@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sonali-sulgadle-01b04a118",
      href: "https://www.linkedin.com/in/sonali-sulgadle-01b04a118",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SonaliSulgadle",
      href: "https://github.com/SonaliSulgadle",
    },
  ];

  return (
    <footer id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
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
          <MapPin size={18} className="text-primary-foreground/70" />
          <span className="text-primary-foreground/70 text-lg">
            {t("Open to opportunities in Seoul", "서울에서 새로운 기회를 찾고 있습니다")}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-primary-foreground/60 mb-10 max-w-lg mx-auto text-base leading-relaxed"
        >
          {t(
            "I'm currently based in Seoul and open to new opportunities. Feel free to reach out!",
            "현재 서울에 거주 중이며 새로운 기회에 열려 있습니다. 편하게 연락해 주세요!"
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {contactLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="lg"
              asChild
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/50 w-full sm:w-auto"
            >
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 px-6"
              >
                <link.icon size={20} />
                <span className="font-medium">{link.label}</span>
              </a>
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex justify-center gap-6 mb-10"
        >
          <a
            href="https://github.com/SonaliSulgadle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sonali-sulgadle-01b04a118"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sonali.sulgadle@gmail.com"
            className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        <p className="text-xs text-primary-foreground/40">
          © 2026 Sonali Sulgadle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;