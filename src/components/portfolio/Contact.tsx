import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { t } = useLang();

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
            "I'm currently based in Seoul and open to new Android engineering opportunities. Feel free to reach out!",
            "현재 서울에 거주 중이며 안드로이드 엔지니어 포지션에 관심이 있습니다. 편하게 연락해 주세요!"
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
        >
          <a
            href="mailto:sonali.sulgadle@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sonali-sulgadle-01b04a118"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/SonaliSulgadle"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
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
            target="_blank"
            rel="noopener noreferrer"
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