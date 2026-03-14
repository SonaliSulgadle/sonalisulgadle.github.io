import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Smartphone, Code, Layout, Coffee, Layers, Database,
  TestTube, Shield, Wifi, Cloud, GitBranch, Settings,
  Users, BookOpen, Cpu, Blocks, FlaskConical, Globe,
  Wrench, Handshake
} from "lucide-react";

const skillCategories = [
  {
    en: "Kotlin",
    ko: "Kotlin",
    icon: Code,
  },
  {
    en: "Java",
    ko: "Java",
    icon: Coffee,
  },
  {
    en: "Android SDK",
    ko: "Android SDK",
    icon: Smartphone,
  },
  {
    en: "Jetpack Compose",
    ko: "Jetpack Compose",
    icon: Layout,
  },
  {
    en: "MVVM / Clean Architecture",
    ko: "MVVM / 클린 아키텍처",
    icon: Layers,
  },
  {
    en: "Multi-module / MVI",
    ko: "멀티모듈 / MVI",
    icon: Blocks,
  },
  {
    en: "Hilt / Dagger / Koin",
    ko: "Hilt / Dagger / Koin",
    icon: Cpu,
  },
  {
    en: "Coroutines / Flow",
    ko: "Coroutines / Flow",
    icon: Wrench,
  },
  {
    en: "Room / DataStore",
    ko: "Room / DataStore",
    icon: Database,
  },
  {
    en: "Retrofit / OkHttp",
    ko: "Retrofit / OkHttp",
    icon: Wifi,
  },
  {
    en: "Firebase",
    ko: "Firebase",
    icon: Cloud,
  },
  {
    en: "Google Maps SDK",
    ko: "Google Maps SDK",
    icon: Globe,
  },
  {
    en: "JUnit / MockK / Espresso",
    ko: "JUnit / MockK / Espresso",
    icon: FlaskConical,
  },
  {
    en: "SonarQube / Crashlytics",
    ko: "SonarQube / Crashlytics",
    icon: Shield,
  },
  {
    en: "Git / CI-CD",
    ko: "Git / CI-CD",
    icon: GitBranch,
  },
  {
    en: "Jenkins / Bitrise",
    ko: "Jenkins / Bitrise",
    icon: Settings,
  },
  {
    en: "Agile / Scrum",
    ko: "애자일 / 스크럼",
    icon: Users,
  },
  {
    en: "Mentoring & Code Review",
    ko: "멘토링 & 코드 리뷰",
    icon: Handshake,
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
          className="text-3xl font-bold text-primary text-center mb-16"
        >
          {t("Skills & Technologies", "기술 스택")}
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCategories.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.en}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-sm hover:shadow-md hover:border-accent transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground leading-tight">
                  {t(skill.en, skill.ko)}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
