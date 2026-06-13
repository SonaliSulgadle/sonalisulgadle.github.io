import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import profilePhoto from "@/assets/sonali-profile.jpg.asset.json";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Gradient background — soft blue tint, top-left to bottom-right */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #e8eeff 100%)' }} />

      {/* Radial glow / spotlight behind name */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0.04) 60%, transparent 100%)' }} />

      {/* Developer-themed background texture — offset to top-right */}
      <div className="absolute top-[12%] right-[4%] pointer-events-none select-none overflow-hidden hidden lg:block">
        <pre className="text-primary/[0.07] text-[14px] leading-relaxed font-mono whitespace-pre tracking-wide blur-[0.4px]">
{`class AndroidDeveloper {
    val experience = "~8 years"
    val architecture = "Clean + MVVM"
    
    fun build(): Application {
        return scalable()
            .tested()
            .shipped()
    }
}`}
        </pre>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-10 max-w-5xl mx-auto">
          {/* Text content */}
          <div className="flex-1 text-center">
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
              className="text-4xl md:text-6xl font-bold text-primary mb-5 tracking-tight"
            >
              Sonali Sulgadle
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 mb-3 leading-relaxed"
            >
              {t(
                "Android Developer with around 8 years of experience building scalable mobile applications",
                "확장 가능한 모바일 애플리케이션을 개발해 온 약 8년 경력의 안드로이드 개발자"
              )}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm text-muted-foreground/60 mb-8 tracking-wide"
            >
              {t(
                "Built products across fintech, mobile banking, aviation, and sports entertainment",
                "핀테크, 모바일 뱅킹, 항공, 스포츠 엔터테인먼트 분야의 대규모 서비스 개발 경험"
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <ArrowDown size={18} />
                {t("View Projects", "프로젝트 보기")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-border text-muted-foreground font-medium hover:bg-muted hover:text-foreground hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={18} />
                {t("Contact Me", "연락하기")}
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
