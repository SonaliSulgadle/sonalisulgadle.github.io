import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/70 mb-2 text-lg"
        >
          {t("Open to opportunities", "새로운 기회를 찾고 있습니다")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-primary-foreground/50 mb-10 text-sm"
        >
          {t(
            "I'd love to hear from innovative teams in Seoul's tech community.",
            "서울의 혁신적인 기술 커뮤니티에서 함께할 팀을 찾고 있습니다."
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6 mb-10"
        >
          <a
            href="https://github.com/sonalisulgadle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sonalisulgadle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sonali@example.com"
            className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
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
