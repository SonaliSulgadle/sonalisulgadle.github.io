import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "FinTrack",
    desc: {
      en: "Personal finance tracker with budget management, expense categorization, and data visualization dashboards.",
      ko: "예산 관리, 지출 분류, 데이터 시각화 대시보드를 갖춘 개인 재무 관리 앱",
    },
    tech: ["Kotlin", "Jetpack Compose", "Room", "MPAndroidChart"],
    github: "https://github.com/sonalisulgadle",
  },
  {
    name: "FitMate",
    desc: {
      en: "Workout tracking app with custom routines, progress charts, and Google Fit integration.",
      ko: "맞춤 루틴, 진행 차트, Google Fit 연동 기능을 갖춘 운동 기록 앱",
    },
    tech: ["Kotlin", "MVVM", "Hilt", "Google Fit API"],
    github: "https://github.com/sonalisulgadle",
  },
  {
    name: "QuickNote",
    desc: {
      en: "Lightweight note-taking app with offline sync, markdown support, and tag-based organization.",
      ko: "오프라인 동기화, 마크다운 지원, 태그 기반 정리 기능을 갖춘 경량 메모 앱",
    },
    tech: ["Kotlin", "Room", "WorkManager", "Material 3"],
    github: "https://github.com/sonalisulgadle",
  },
  {
    name: "WeatherNow",
    desc: {
      en: "Real-time weather app with location-based forecasts, animated backgrounds, and widget support.",
      ko: "위치 기반 예보, 애니메이션 배경, 위젯 지원을 갖춘 실시간 날씨 앱",
    },
    tech: ["Java", "Retrofit", "OpenWeather API", "Lottie"],
    github: "https://github.com/sonalisulgadle",
  },
];

const Projects = () => {
  const { lang, t } = useLang();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary text-center mb-16"
        >
          {t("Projects", "프로젝트")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-primary">{p.name}</h3>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {lang === "en" ? p.desc.en : p.desc.ko}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-sky-light text-accent font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
