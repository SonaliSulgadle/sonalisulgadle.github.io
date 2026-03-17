import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium mb-4 text-sm tracking-widest uppercase"
        >
          {t("Hello, I'm", "안녕하세요,")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight"
        >
          Sonali Sulgadle
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t(
            "Android Developer with around 8 years of experience building scalable mobile applications",
            "확장 가능한 모바일 애플리케이션을 개발해 온 약 8년 경력의 안드로이드 개발자"
          )}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-navy-light transition-colors"
          >
            <ArrowDown size={18} />
            {t("View Projects", "프로젝트 보기")}
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <FileDown size={18} />
            {t("Download Resume", "이력서 다운로드")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
