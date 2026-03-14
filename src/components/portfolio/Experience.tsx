import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "TechCorp Solutions",
    role: { en: "Senior Android Developer", ko: "시니어 안드로이드 개발자" },
    period: "2021 – Present",
    achievements: {
      en: [
        "Led migration from Java to Kotlin, reducing codebase by 30%",
        "Implemented Jetpack Compose UI, improving development speed by 40%",
        "Mentored a team of 4 junior developers",
      ],
      ko: [
        "Java에서 Kotlin으로의 마이그레이션을 주도하여 코드베이스 30% 감소",
        "Jetpack Compose UI 도입으로 개발 속도 40% 향상",
        "주니어 개발자 4명 멘토링",
      ],
    },
  },
  {
    company: "MobileFirst Inc.",
    role: { en: "Android Developer", ko: "안드로이드 개발자" },
    period: "2018 – 2021",
    achievements: {
      en: [
        "Built and maintained 3 production apps with 1M+ combined downloads",
        "Designed offline-first architecture using Room and WorkManager",
        "Integrated RESTful APIs and implemented caching strategies",
      ],
      ko: [
        "총 100만 이상 다운로드를 기록한 프로덕션 앱 3개 개발 및 유지보수",
        "Room과 WorkManager를 활용한 오프라인 우선 아키텍처 설계",
        "RESTful API 통합 및 캐싱 전략 구현",
      ],
    },
  },
  {
    company: "StartApp Studio",
    role: { en: "Junior Android Developer", ko: "주니어 안드로이드 개발자" },
    period: "2016 – 2018",
    achievements: {
      en: [
        "Developed UI components following Material Design guidelines",
        "Wrote unit and integration tests achieving 80% code coverage",
        "Collaborated with designers using Figma and Zeplin",
      ],
      ko: [
        "Material Design 가이드라인에 따른 UI 컴포넌트 개발",
        "단위 및 통합 테스트 작성으로 80% 코드 커버리지 달성",
        "Figma와 Zeplin을 활용하여 디자이너와 협업",
      ],
    },
  },
];

const Experience = () => {
  const { lang, t } = useLang();

  return (
    <section id="experience" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary text-center mb-16"
        >
          {t("Work Experience", "경력 사항")}
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-accent border-4 border-background hidden md:block" />

                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-accent" />
                      <h3 className="font-semibold text-primary">{exp.company}</h3>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-accent mb-3">
                    {lang === "en" ? exp.role.en : exp.role.ko}
                  </p>
                  <ul className="space-y-1.5">
                    {(lang === "en" ? exp.achievements.en : exp.achievements.ko).map((a, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
