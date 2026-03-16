import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Smartphone, Code, Layout, Coffee, Layers, Database,
  Shield, Wifi, Cloud, GitBranch, Settings,
  Users, Cpu, Blocks, Globe, Wrench, Handshake,
  FileCode, Palette, Zap, Box, TestTube, Cog,
  Server, BookOpen, GitMerge, Rocket, Package,
  MonitorSmartphone, PenTool, MessageSquare, Eye
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  nameKo: string;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  titleKo: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Android",
    titleKo: "Android",
    skills: [
      { name: "Kotlin (Primary)", nameKo: "Kotlin (주력)", icon: Code },
      { name: "Java", nameKo: "Java", icon: Coffee },
      { name: "Jetpack Compose", nameKo: "Jetpack Compose", icon: Layout },
      { name: "XML", nameKo: "XML", icon: FileCode },
      { name: "Android SDK", nameKo: "Android SDK", icon: Smartphone },
      { name: "Material Design", nameKo: "Material Design", icon: Palette },
      { name: "Coroutines", nameKo: "Coroutines", icon: Zap },
      { name: "Flow", nameKo: "Flow", icon: Wrench },
      { name: "MVVM", nameKo: "MVVM", icon: Layers },
      { name: "MVI", nameKo: "MVI", icon: Blocks },
    ],
  },
  {
    title: "Architecture & Engineering",
    titleKo: "아키텍처 & 엔지니어링",
    skills: [
      { name: "Clean Architecture", nameKo: "클린 아키텍처", icon: Box },
      { name: "Multi-module Architecture", nameKo: "멀티모듈 아키텍처", icon: Blocks },
      { name: "DI (Hilt, Dagger, Koin)", nameKo: "DI (Hilt, Dagger, Koin)", icon: Cpu },
      { name: "Performance Optimization", nameKo: "성능 최적화", icon: Zap },
      { name: "SOLID", nameKo: "SOLID", icon: Shield },
      { name: "Design Patterns", nameKo: "디자인 패턴", icon: Cog },
      { name: "Unit Testing (JUnit)", nameKo: "유닛 테스트 (JUnit)", icon: TestTube },
    ],
  },
  {
    title: "Data & Networking",
    titleKo: "데이터 & 네트워킹",
    skills: [
      { name: "Room", nameKo: "Room", icon: Database },
      { name: "DataStore", nameKo: "DataStore", icon: Database },
      { name: "Retrofit", nameKo: "Retrofit", icon: Wifi },
      { name: "OkHttp", nameKo: "OkHttp", icon: Wifi },
      { name: "Paging", nameKo: "Paging", icon: BookOpen },
      { name: "WebView", nameKo: "WebView", icon: Globe },
      { name: "Firebase", nameKo: "Firebase", icon: Cloud },
      { name: "Google Maps SDK", nameKo: "Google Maps SDK", icon: Globe },
    ],
  },
  {
    title: "Version Control",
    titleKo: "버전 관리",
    skills: [
      { name: "GitHub", nameKo: "GitHub", icon: GitBranch },
      { name: "GitLab", nameKo: "GitLab", icon: GitMerge },
      { name: "Bitbucket", nameKo: "Bitbucket", icon: GitBranch },
    ],
  },
  {
    title: "CI/CD & DevOps",
    titleKo: "CI/CD & DevOps",
    skills: [
      { name: "Jenkins", nameKo: "Jenkins", icon: Settings },
      { name: "Bitrise", nameKo: "Bitrise", icon: Rocket },
      { name: "Firebase App Distribution", nameKo: "Firebase App Distribution", icon: Cloud },
      { name: "SonarQube", nameKo: "SonarQube", icon: Shield },
      { name: "Artifactory", nameKo: "Artifactory", icon: Package },
    ],
  },
  {
    title: "Cross-platform",
    titleKo: "크로스플랫폼",
    skills: [
      { name: "Flutter", nameKo: "Flutter", icon: MonitorSmartphone },
      { name: "Dart", nameKo: "Dart", icon: PenTool },
    ],
  },
  {
    title: "Collaboration",
    titleKo: "협업",
    skills: [
      { name: "Agile / Scrum", nameKo: "애자일 / 스크럼", icon: Users },
      { name: "Code Review", nameKo: "코드 리뷰", icon: Eye },
      { name: "Cross-functional Collaboration", nameKo: "크로스펑셔널 협업", icon: MessageSquare },
      { name: "Mentoring", nameKo: "멘토링", icon: Handshake },
    ],
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

        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                {t(cat.title, cat.titleKo)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.02 }}
                      className="flex flex-col items-center gap-2.5 rounded-xl border border-border bg-card p-4 text-center shadow-sm hover:shadow-md hover:border-accent transition-all"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground leading-tight">
                        {t(skill.name, skill.nameKo)}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
