import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-sky-light/40" />

      {/* Radial glow behind name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* Developer-themed background texture */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <pre className="text-primary/[0.03] text-[14px] leading-relaxed font-mono whitespace-pre tracking-wide">
{`class AndroidDeveloper {
    val experience = "8 years"
    val architecture = "Clean + MVVM"
    
    fun build(): Application {
        return scalable()
            .tested()
            .shipped()
    }
}`}
        </pre>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium mb-4 text-xs tracking-[0.25em] uppercase"
        >
          {t("Hello, I'm", "안녕하세요,")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-primary mb-5 tracking-tight"
        >
          Sonali Sulgadle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 leading-relaxed"
        >
          {t(
            "Android Developer with around 8 years of experience building scalable mobile applications",
            "확장 가능한 모바일 애플리케이션을 개발해 온 약 8년 경력의 안드로이드 개발자"
          )}
        </motion.p>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm text-muted-foreground/60 mb-10 tracking-wide"
        >
          {t(
            "Built products across fintech, mobility, aviation, and fitness",
            "핀테크, 모빌리티, 항공, 피트니스 분야에서 제품을 구축"
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <ArrowDown size={18} />
            {t("View Projects", "프로젝트 보기")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border text-muted-foreground font-medium hover:bg-muted hover:text-foreground hover:-translate-y-0.5 transition-all duration-200"
          >
            <Mail size={18} />
            {t("Contact Me", "연락하기")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
