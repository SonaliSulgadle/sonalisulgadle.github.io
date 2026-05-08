import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Calendar, Check } from "lucide-react";

interface ProjectData {
  name: string;
  domain: { en: string; ko: string };
  description: { en: string; ko: string };
  tech: string[];
}

interface RoleData {
  company: string;
  role: { en: string; ko: string };
  location: { en: string; ko: string };
  period: string;
  narrative: { en: string; ko: string };
  highlights: { en: string[]; ko: string[] };
  stack: string[];
  projects: ProjectData[];
}

const roles: RoleData[] = [
  {
    company: "Globant Pvt. Ltd.",
    role: { en: "Android Developer → Technical Lead", ko: "Android 개발자 → 기술 리드" },
    location: { en: "Pune, India", ko: "인도, 푸네" },
    period: "Oct 2017 – May 2024 · 6 yrs 8 mos",
    narrative: {
      en: "Grew from Android Developer to Technical Lead across fintech, digital banking, aviation, and sports — leading architecture decisions, mentoring engineers, and shipping products used across multiple countries.",
      ko: "Android 개발자에서 기술 리드로 성장하며 핀테크, 디지털 뱅킹, 항공, 스포츠 도메인에서 아키텍처 설계, 멘토링, 다국가 서비스 출시를 주도했습니다.",
    },
    highlights: {
      en: [
        "Led migration to multi-module architecture, cutting build time ~30%",
        "Mentored 5+ junior engineers and ran internal Jetpack Compose sessions",
        "Built a Seed Project to standardize team setup and accelerate onboarding",
        "Drove code quality through reviews, SonarQube, and shared coding standards",
      ],
      ko: [
        "멀티 모듈 아키텍처 마이그레이션을 주도하여 빌드 시간 약 30% 단축",
        "주니어 5명 이상 멘토링 및 사내 Jetpack Compose 세션 운영",
        "Seed 프로젝트 구축으로 팀 셋업 표준화 및 온보딩 가속화",
        "코드 리뷰, SonarQube, 공통 코딩 표준으로 코드 품질 향상 주도",
      ],
    },
    stack: [
      "Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Multi-module",
      "Coroutines", "Flow", "Retrofit", "Room", "Hilt", "Firebase",
    ],
    projects: [
      {
        name: "Wizink SuperApp",
        domain: { en: "Mobile Banking · Fintech | Spain & Portugal", ko: "모바일 뱅킹 · 핀테크 | 스페인 & 포르투갈" },
        description: {
          en: "Core mobile banking app for Spain and Portugal. Led MVVM + Clean multi-module migration and shipped transfers, card management, and biometric auth.",
          ko: "스페인·포르투갈 핵심 모바일 뱅킹 앱. MVVM + Clean 멀티모듈 마이그레이션을 주도하고 송금·카드 관리·생체 인증을 출시했습니다.",
        },
        tech: ["Kotlin", "MVVM", "Clean Architecture", "Multi-module", "Compose", "Coroutines", "Flow", "Room", "Retrofit"],
      },
      {
        name: "OpenBank & ModelBank — Santander Group",
        domain: { en: "Digital Banking | Multi-country", ko: "디지털 뱅킹 | 다국가" },
        description: {
          en: "Multi-country digital banking platform. Designed reusable MVVM architecture templates and built a Google Maps SDK POC for location features.",
          ko: "다국가 디지털 뱅킹 플랫폼. 재사용 가능한 MVVM 아키텍처 템플릿을 설계하고 위치 기능을 위한 Google Maps SDK POC를 구축했습니다.",
        },
        tech: ["Kotlin", "MVVM", "Multi-module", "Google Maps SDK", "Retrofit"],
      },
      {
        name: "Maker — LA Clippers (LaLigaTech)",
        domain: { en: "Sports & Entertainment", ko: "스포츠 & 엔터테인먼트" },
        description: {
          en: "Official LA Clippers Android app with LaLigaTech. Integrated AEM SDK for server-driven UI and built custom Compose components and accessibility standards.",
          ko: "LaLigaTech와 협업한 LA Clippers 공식 Android 앱. 서버 기반 UI를 위한 AEM SDK를 통합하고 커스텀 Compose 컴포넌트와 접근성 표준을 구축했습니다.",
        },
        tech: ["Kotlin", "Compose", "AEM SDK", "XML", "Coroutines"],
      },
      {
        name: "Globalia — AirEuropa",
        domain: { en: "Aviation | Spain", ko: "항공 | 스페인" },
        description: {
          en: "Official Android app for one of Spain's top 3 airlines. Improved real-time flight tracking UX and introduced FCM push notifications.",
          ko: "스페인 3대 항공사 공식 Android 앱. 실시간 항공편 추적 UX를 개선하고 FCM 푸시 알림을 도입했습니다.",
        },
        tech: ["Kotlin", "FCM", "Animations", "Retrofit"],
      },
    ],
  },
  {
    company: "Webonise Lab Pvt. Ltd.",
    role: { en: "Android Developer", ko: "Android 개발자" },
    location: { en: "Pune, India", ko: "인도, 푸네" },
    period: "Aug 2016 – Oct 2017 · 1 yr 3 mos",
    narrative: {
      en: "First professional role — built and maintained modular Android apps end-to-end in an Agile environment, from requirements through production.",
      ko: "첫 직장에서 모듈화된 Android 앱을 요구사항부터 배포까지 엔드투엔드로 개발·유지보수했습니다.",
    },
    highlights: {
      en: [
        "Owned end-to-end feature development and production maintenance",
        "Optimized SQLite schema for faster reads and smoother UX",
        "Participated in Agile requirements analysis and design",
      ],
      ko: [
        "엔드투엔드 기능 개발 및 운영 유지보수 담당",
        "SQLite 스키마 최적화로 응답 속도 및 UX 개선",
        "애자일 환경에서 요구사항 분석 및 설계 참여",
      ],
    },
    stack: ["Java", "Android", "SQLite", "Modular Design"],
    projects: [
      {
        name: "Gymshim",
        domain: { en: "Fitness & Gym Management", ko: "피트니스 & 체육관 관리" },
        description: {
          en: "Gym management platform with member tracking and operations automation. Optimized SQLite for better data performance and responsiveness.",
          ko: "회원 관리·운영 자동화 체육관 플랫폼. SQLite를 최적화하여 데이터 성능과 응답성을 개선했습니다.",
        },
        tech: ["Java", "Android", "SQLite", "Modular Design"],
      },
    ],
  },
];

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const { lang } = useLang();
  return (
    <div className="rounded-lg border border-border bg-background/60 p-4 space-y-2 hover:border-accent/50 transition-colors">
      <div>
        <h5 className="text-sm font-semibold text-foreground">{project.name}</h5>
        <p className="text-[11px] font-medium text-accent mt-0.5">
          {lang === "en" ? project.domain.en : project.domain.ko}
        </p>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {lang === "en" ? project.description.en : project.description.ko}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-md border border-border bg-card px-2 py-0.5 text-[10px] font-medium text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

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

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connector */}
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-10 md:pl-14 group"
              >
                {/* Dot */}
                <span className="absolute left-0 md:left-1 top-2 flex h-5 w-5 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-muted" />
                </span>

                <div className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition-all space-y-5">
                  {/* Header */}
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">
                        {lang === "en" ? role.role.en : role.role.ko}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                        <Calendar size={12} />
                        <span>{role.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="text-sm font-semibold text-accent">{role.company}</span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin size={11} />
                        {lang === "en" ? role.location.en : role.location.ko}
                      </span>
                    </div>
                  </div>

                  {/* Narrative */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lang === "en" ? role.narrative.en : role.narrative.ko}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {(lang === "en" ? role.highlights.en : role.highlights.ko).map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <Check size={14} className="text-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.stack.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Projects */}
                  <div className="pt-2 border-t border-border/60">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      {t("Key Projects", "주요 프로젝트")}
                    </h4>
                    <div className="grid gap-3 md:grid-cols-2">
                      {role.projects.map((proj, pi) => (
                        <ProjectCard key={pi} project={proj} />
                      ))}
                    </div>
                  </div>
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
