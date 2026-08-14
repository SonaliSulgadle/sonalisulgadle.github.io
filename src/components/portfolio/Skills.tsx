import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Layers,
  Waves,
  Database,
  FlaskConical,
  Sparkles,
  Wrench,
  Shuffle,
  type LucideIcon,
} from "lucide-react";

type Emphasis = "core" | "strong" | "accent" | "neutral";

interface SkillCategory {
  title: string;
  titleKo: string;
  icon: LucideIcon;
  emphasis: Emphasis;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Languages",
    titleKo: "언어",
    icon: Code2,
    emphasis: "strong",
    skills: ["Kotlin", "Java", "Dart"],
  },
  {
    title: "Android",
    titleKo: "Android",
    icon: Smartphone,
    emphasis: "core",
    skills: [
      "Jetpack Compose",
      "XML Views",
      "Android SDK",
      "CameraX",
      "Material 3",
      "WebView",
      "Google Maps SDK",
    ],
  },
  {
    title: "Architecture",
    titleKo: "아키텍처",
    icon: Layers,
    emphasis: "strong",
    skills: ["MVVM", "MVI", "Clean Architecture", "Multi-module", "SOLID", "Design Patterns"],
  },
  {
    title: "Concurrency & Networking",
    titleKo: "동시성 및 네트워킹",
    icon: Waves,
    emphasis: "neutral",
    skills: ["Coroutines", "Flow", "Retrofit", "OkHttp", "Paging"],
  },
  {
    title: "Data & Storage",
    titleKo: "데이터 및 저장소",
    icon: Database,
    emphasis: "neutral",
    skills: ["Room", "DataStore", "Firebase"],
  },
  {
    title: "Dependency Injection & Testing",
    titleKo: "의존성 주입 및 테스트",
    icon: FlaskConical,
    emphasis: "neutral",
    skills: ["Hilt", "Dagger", "Koin", "JUnit", "Mockito", "MockK"],
  },
  {
    title: "AI & Developer Tools",
    titleKo: "AI 및 개발 도구",
    icon: Sparkles,
    emphasis: "accent",
    skills: ["Gemini AI", "Claude", "Claude Code", "GitHub Copilot"],
  },
  {
    title: "Tools & CI/CD",
    titleKo: "도구 및 CI/CD",
    icon: Wrench,
    emphasis: "neutral",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Bitrise",
      "Jenkins",
      "Firebase App Distribution",
      "SonarQube",
      "Artifactory",
    ],
  },
  {
    title: "Cross-platform",
    titleKo: "크로스 플랫폼",
    icon: Shuffle,
    emphasis: "neutral",
    skills: ["Flutter"],
  },
];

const blockStyles: Record<Emphasis, string> = {
  core: "border-primary/25 bg-primary/[0.035] hover:border-primary/40 md:p-6",
  strong: "border-border hover:border-primary/30",
  accent: "border-accent/25 bg-accent/[0.03] hover:border-accent/40",
  neutral: "border-border/70 hover:border-border",
};

const iconStyles: Record<Emphasis, string> = {
  core: "text-primary",
  strong: "text-foreground/70",
  accent: "text-accent",
  neutral: "text-muted-foreground",
};

const chipStyles: Record<Emphasis, string> = {
  core: "border-primary/20 bg-primary/[0.05] text-foreground hover:border-primary/35 hover:bg-primary/[0.09]",
  strong: "border-border bg-muted/50 text-foreground/90 hover:border-primary/25 hover:bg-muted",
  accent: "border-accent/20 bg-accent/[0.05] text-foreground/90 hover:border-accent/35 hover:bg-accent/[0.09]",
  neutral: "border-border/80 bg-muted/40 text-foreground/85 hover:border-border hover:bg-muted",
};

const Skills = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary text-center mb-3"
        >
          {t("Skills & Tech Stack", "기술 스택")}
        </motion.h2>
        <p className="text-center text-sm text-muted-foreground mb-14">
          {t(
            "Tools and technologies I work with day-to-day.",
            "일상적으로 사용하는 도구와 기술입니다.",
          )}
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(ci * 0.04, 0.3), duration: 0.35 }}
                className={`rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 ${blockStyles[cat.emphasis]}`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={`h-4 w-4 shrink-0 ${iconStyles[cat.emphasis]}`}
                    aria-hidden="true"
                  />
                  <h3
                    className={`font-semibold tracking-wide text-foreground ${
                      cat.emphasis === "core" ? "text-[0.95rem]" : "text-sm"
                    }`}
                  >
                    {t(cat.title, cat.titleKo)}
                  </h3>
                </div>

                <div className="mt-3 mb-4 h-px w-full bg-border/70" />

                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors duration-200 ${chipStyles[cat.emphasis]}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
