import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Check, Briefcase, GraduationCap, Code2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface ProjectData {
  name: string;
  domain: { en: string; ko: string };
  description: { en: string; ko: string };
  tech: string[];
}

type EntryKind = "independent" | "education" | "work";

interface TimelineEntry {
  kind: EntryKind;
  current?: boolean;
  title: { en: string; ko: string };
  subtitle: { en: string; ko: string };
  location?: { en: string; ko: string };
  rangeLabel: string;
  period: string;
  narrative: { en: string; ko: string };
  highlights: { en: string[]; ko: string[] };
  stack?: string[];
  projects?: ProjectData[];
}

const entries: TimelineEntry[] = [
  {
    kind: "independent",
    current: true,
    rangeLabel: "2025 – Present",
    period: "Aug 2025 – Present",
    title: {
      en: "Independent Development & Community Projects",
      ko: "독립 개발 및 커뮤니티 프로젝트",
    },
    subtitle: { en: "Self-Directed", ko: "자기주도 활동" },
    narrative: {
      en: "Building independent software projects to deepen hands-on expertise in modern Android development while expanding into AI-powered applications and full-stack web development.",
      ko: "최신 Android 개발 역량을 심화하는 동시에 AI 기반 애플리케이션과 풀스택 웹 개발로 영역을 확장하기 위해 독립적인 소프트웨어 프로젝트를 진행하고 있습니다.",
    },
    highlights: {
      en: [
        "Building and maintaining Android projects using Kotlin, Jetpack Compose, Coroutines/Flow, Clean Architecture, and MVI.",
        "Designed and built Puri, an AI-powered Android application integrating Gemini AI, CameraX, Room, Hilt, and modern Android architecture.",
        "Puri is currently in Google Play Closed Testing.",
        "Built Puri Address Converter, a full-stack web application using Next.js, TypeScript, Tailwind CSS, Gemini AI, and Vercel.",
        "Continued involvement in technical and women-in-tech communities.",
      ],
      ko: [
        "Kotlin, Jetpack Compose, Coroutines/Flow, Clean Architecture, MVI를 활용한 Android 프로젝트 개발 및 유지보수",
        "Gemini AI, CameraX, Room, Hilt와 최신 Android 아키텍처를 결합한 AI 기반 앱 Puri 설계 및 개발",
        "Puri는 현재 Google Play 비공개 테스트 중입니다.",
        "Next.js, TypeScript, Tailwind CSS, Gemini AI, Vercel 기반 풀스택 웹앱 Puri Address Converter 개발",
        "기술 커뮤니티 및 여성 개발자 커뮤니티 활동 지속",
      ],
    },
    stack: [
      "Kotlin", "Jetpack Compose", "MVI", "Clean Architecture", "Gemini AI",
      "CameraX", "Room", "Hilt", "Next.js", "TypeScript", "Tailwind CSS",
    ],
  },
  {
    kind: "education",
    rangeLabel: "2024 – 2025",
    period: "Jun 2024 – Aug 2025",
    title: { en: "Seoul National University", ko: "서울대학교" },
    subtitle: { en: "Korean Language Education Center", ko: "언어교육원 한국어교육센터" },
    location: { en: "Seoul, South Korea", ko: "대한민국 서울" },
    narrative: {
      en: "Completed Korean language Levels 1–5 at Seoul National University's Korean Language Education Center.",
      ko: "서울대학교 언어교육원에서 한국어 1급부터 5급까지 과정을 수료했습니다.",
    },
    highlights: {
      en: [
        "Completed Levels 1–5",
        "TOPIK Level 5",
        "Received Excellence Certificates across all completed levels for achieving 90%+ scores",
      ],
      ko: [
        "한국어 1급 – 5급 수료",
        "TOPIK 5급 취득",
        "전 급수에서 90% 이상 성적으로 우수상 수상",
      ],
    },
  },
  {
    kind: "work",
    rangeLabel: "2017 – 2024",
    period: "Oct 2017 – May 2024 · 6 yrs 8 mos",
    title: { en: "Globant Pvt. Ltd.", ko: "Globant Pvt. Ltd." },
    subtitle: { en: "Android Developer → Technical Lead", ko: "Android 개발자 → 기술 리드" },
    location: { en: "Pune, India", ko: "인도, 푸네" },
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
    kind: "work",
    rangeLabel: "2016 – 2017",
    period: "Aug 2016 – Oct 2017 · 1 yr 3 mos",
    title: { en: "Webonise Lab Pvt. Ltd.", ko: "Webonise Lab Pvt. Ltd." },
    subtitle: { en: "Android Developer", ko: "Android 개발자" },
    location: { en: "Pune, India", ko: "인도, 푸네" },
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

const iconFor = (kind: EntryKind) =>
  kind === "education" ? GraduationCap : kind === "independent" ? Code2 : Briefcase;

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const { lang } = useLang();
  return (
    <div className="rounded-xl border border-border bg-background p-4 space-y-2 transition-all duration-200 hover:border-accent/50 hover:-translate-y-0.5">
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
            className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const kindStyles: Record<EntryKind, { dot: string; border: string; badge: string; text: string; label: { en: string; ko: string } }> = {
  work: {
    dot: "bg-terracotta",
    border: "border-l-terracotta",
    badge: "border-terracotta/40 bg-terracotta/10 text-terracotta",
    text: "text-terracotta",
    label: { en: "Work", ko: "경력" },
  },
  education: {
    dot: "bg-clay",
    border: "border-l-clay",
    badge: "border-clay/40 bg-clay/10 text-clay",
    text: "text-clay",
    label: { en: "Education", ko: "학력" },
  },
  independent: {
    dot: "bg-sage",
    border: "border-l-sage",
    badge: "border-sage/40 bg-sage/10 text-sage",
    text: "text-sage",
    label: { en: "Independent", ko: "독립 활동" },
  },
};

const Experience = () => {
  const { lang, t } = useLang();

  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <SectionHeader
          title={t("Experience & Journey", "경력 및 여정")}
          subtitle={t(
            "A timeline of my professional experience, learning journey, and independent development.",
            "저의 경력, 학습 과정 및 독립적인 개발 여정을 담은 타임라인입니다."
          )}
          className="mb-14"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Strong vertical timeline line */}
          <div className="absolute left-[9px] md:left-[130px] top-3 bottom-3 w-[3px] rounded-full bg-accent/70" />

          <div className="space-y-10 md:space-y-12">
            {entries.map((entry, i) => {
              const Icon = iconFor(entry.kind);
              const ks = kindStyles[entry.kind];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="relative pl-8 md:pl-0 group"
                >
                  <div className="md:grid md:grid-cols-[120px_1fr] md:gap-x-10">
                    {/* Date column — floated left of the line */}
                    <div className="md:text-right md:pt-1.5">
                      <span className="block text-sm font-bold tracking-wide text-accent">
                        {entry.rangeLabel}
                      </span>
                      <span className="block text-[11px] text-muted-foreground mt-0.5">
                        {entry.period}
                      </span>
                    </div>

                    {/* Node */}
                    <span className="absolute left-0 md:left-[120px] top-2 flex h-[20px] w-[20px] items-center justify-center">
                      <span className={`relative h-[14px] w-[14px] rounded-full ring-4 ring-surface transition-transform duration-200 group-hover:scale-110 ${ks.dot}`} />
                    </span>

                    {/* Content */}
                    <div
                      className={`mt-3 md:mt-0 rounded-2xl border border-border border-l-4 ${ks.border} bg-surface p-5 md:p-6 shadow-sm space-y-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm`}
                    >
                      {/* Header */}
                      <div className="space-y-1.5">
                        <div className="flex items-start gap-2.5">
                          <Icon size={16} className={`shrink-0 mt-1 ${ks.text}`} />
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">
                              {lang === "en" ? entry.title.en : entry.title.ko}
                            </h3>
                            <span
                              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${ks.badge}`}
                            >
                              {lang === "en" ? ks.label.en : ks.label.ko}
                            </span>
                            {entry.current && (
                              <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                                {t("Current", "현재")}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs pl-[26px]">
                          <span className="text-sm font-semibold text-accent">
                            {lang === "en" ? entry.subtitle.en : entry.subtitle.ko}
                          </span>
                          {entry.location && (
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <MapPin size={11} />
                              {lang === "en" ? entry.location.en : entry.location.ko}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Narrative */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {lang === "en" ? entry.narrative.en : entry.narrative.ko}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {(lang === "en" ? entry.highlights.en : entry.highlights.ko).map((h, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/85">
                            <Check size={14} className="text-accent shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      {entry.stack && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {entry.stack.map((s) => (
                            <span
                              key={s}
                              className="inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Projects */}
                      {entry.projects && (
                        <div className="pt-2 border-t border-border/60">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            {t("Key Projects", "주요 프로젝트")}
                          </h4>
                          <div className="grid gap-3 md:grid-cols-2">
                            {entry.projects.map((proj, pi) => (
                              <ProjectCard key={pi} project={proj} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
