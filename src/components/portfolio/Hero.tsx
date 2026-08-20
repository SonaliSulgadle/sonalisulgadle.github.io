import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const profilePhoto = `${import.meta.env.BASE_URL}sonali-profile.jpg`;

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Very subtle warm cream → terracotta gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Soft terracotta glow */}
      <div
        className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[320px] rounded-full blur-[110px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--terracotta) / 0.10) 0%, hsl(var(--terracotta) / 0.04) 60%, transparent 100%)",
        }}
      />

      {/* Developer-themed background texture */}
      <div className="absolute top-[12%] right-[4%] pointer-events-none select-none overflow-hidden hidden lg:block">
        <pre className="text-accent/[0.07] text-[14px] leading-relaxed font-mono whitespace-pre tracking-wide blur-[0.4px]">
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 max-w-5xl mx-auto">
          {/* Profile photo — left on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-3 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative w-[130px] h-[130px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden ring-4 ring-accent/30 shadow-warm border-2 border-accent/40">
              <img
                src={profilePhoto}
                alt="Sonali Sulgadle — Senior Android Engineer"
                className="w-full h-full object-cover"
                style={{ objectPosition: "60% 30%" }}
              />
            </div>
          </motion.div>

          {/* Text content — right on desktop */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold text-foreground mb-3 tracking-tight"
            >
              Sonali Sulgadle
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-lg md:text-xl font-medium text-accent mb-3"
            >
              {t("Senior Android Engineer", "시니어 안드로이드 엔지니어")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6"
            >
              Kotlin · Jetpack Compose · Clean Architecture
            </motion.p>

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
              className="text-sm text-muted-foreground/80 mb-4 tracking-wide"
            >
              {t(
                "Built products across fintech, mobile banking, aviation, and sports entertainment",
                "핀테크, 모바일 뱅킹, 항공, 스포츠 엔터테인먼트 분야의 대규모 서비스 개발 경험"
              )}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-xs text-muted-foreground mb-8 tracking-wide"
            >
              {t(
                "Open to new opportunities · India · South Korea · Global · Remote",
                "새로운 기회에 열려 있습니다 · 인도 · 한국 · 글로벌 · 원격"
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-medium shadow-warm hover:bg-terracotta-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <ArrowDown size={18} />
                {t("View Projects", "프로젝트 보기")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border-2 border-accent text-accent font-medium hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 transition-all duration-200"
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
