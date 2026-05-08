import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  titleKo: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Languages",
    titleKo: "언어",
    skills: ["Kotlin", "Java", "Dart"],
  },
  {
    title: "Android",
    titleKo: "Android",
    skills: ["Jetpack Compose", "XML Views", "Android SDK", "CameraX", "Material 3", "WebView", "Google Maps SDK"],
  },
  {
    title: "Architecture",
    titleKo: "아키텍처",
    skills: ["MVVM", "MVI", "Clean Architecture", "Multi-module", "SOLID", "Design Patterns"],
  },
  {
    title: "Concurrency & Networking",
    titleKo: "동시성 & 네트워킹",
    skills: ["Coroutines", "Flow", "Retrofit", "OkHttp", "Paging"],
  },
  {
    title: "Data & Storage",
    titleKo: "데이터 & 저장소",
    skills: ["Room", "DataStore", "Firebase"],
  },
  {
    title: "Dependency Injection & Testing",
    titleKo: "DI & 테스트",
    skills: ["Hilt", "Dagger", "Koin", "JUnit", "Mockito"],
  },
  {
    title: "Tools",
    titleKo: "도구",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Bitrise", "Jenkins", "Firebase App Distribution", "SonarQube", "Artifactory"],
  },
  {
    title: "Cross-platform",
    titleKo: "크로스플랫폼",
    skills: ["Flutter"],
  },
];

const Skills = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary text-center mb-4"
        >
          {t("Skills & Tech Stack", "기술 스택")}
        </motion.h2>
        <p className="text-center text-sm text-muted-foreground mb-12">
          {t(
            "Tools and technologies I work with day-to-day.",
            "일상적으로 사용하는 도구와 기술입니다.",
          )}
        </p>

        <div className="max-w-4xl mx-auto space-y-7">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-6 md:items-baseline border-b border-border/60 pb-6 last:border-0"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {t(cat.title, cat.titleKo)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/90"
                  >
                    {skill}
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

export default Skills;
