import { useLang } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  nameKo: string;
  details: string[];
  detailsKo: string[];
}

interface Role {
  company: string;
  role: { en: string; ko: string };
  location: { en: string; ko: string };
  period: string;
  summary: { en: string; ko: string };
  achievements: { en: string[]; ko: string[] };
  projects: Project[];
  tech: string[];
}

const roles: Role[] = [
  {
    company: "Globant Pvt. Ltd.",
    role: {
      en: "Android Developer → Technical Lead",
      ko: "Android 개발자 → 기술 리드",
    },
    location: { en: "Pune, India", ko: "인도, 푸네" },
    period: "Oct 2017 – May 2024 (6 yrs 8 mos)",
    summary: {
      en: "Led design and development of large-scale Android applications across fintech, aviation, and sports entertainment. Drove architecture improvements, performance optimization, and code quality initiatives delivering consistent business value.",
      ko: "시니어 안드로이드 개발자 및 기술 리드로서 핀테크, 항공, 스포츠 엔터테인먼트 등 다양한 산업군의 대규모 Android 앱 설계 및 개발을 주도했습니다.",
    },
    achievements: {
      en: [
        "Redesigned legacy app to MVVM + Clean multi-module architecture, reducing build time by ~30% and improving app stability",
        "Built Kotlin + Jetpack Compose Seed Project, standardizing team development and reducing new project setup time",
        "Optimized async architecture with Coroutines & Flow, improving data stability and UI responsiveness",
        "Established Firebase Crashlytics & Analytics monitoring system from pre-launch stage, ensuring stable releases",
        "Led Kotlin-first migration, improving code consistency and maintainability",
        "Served as Technical Lead on multiple projects, collaborating with 10+ engineers and establishing code review standards",
        "Mentored 5+ junior developers through Jetpack Compose KT sessions and career guidance, shortening team onboarding time",
      ],
      ko: [
        "레거시 앱을 MVVM + Clean 멀티모듈 아키텍처로 재설계하여 빌드 시간 약 30% 단축 및 앱 안정성 향상",
        "Kotlin + Jetpack Compose Seed Project를 구축하여 팀 개발을 표준화하고 신규 프로젝트 셋업 시간 단축",
        "Coroutines & Flow를 활용한 비동기 아키텍처 최적화로 데이터 안정성 및 UI 응답성 향상",
        "사전 출시 단계부터 Firebase Crashlytics & Analytics 모니터링 시스템을 구축하여 안정적인 릴리스 보장",
        "Kotlin-first 마이그레이션을 주도하여 코드 일관성 및 유지보수성 향상",
        "다수의 프로젝트에서 기술 리드로서 10명 이상의 엔지니어와 협업하며 코드 리뷰 기준 수립",
        "Jetpack Compose KT 세션 및 커리어 가이드를 통해 5명 이상의 주니어 개발자를 멘토링하여 팀 온보딩 시간 단축",
      ],
    },
    projects: [
      {
        name: "Maker LA Clippers – LaLigaTech (Sports & Entertainment)",
        nameKo: "Maker LA Clippers – LaLigaTech (스포츠 & 엔터테인먼트)",
        details: [
          "Integrated AEM SDK for dynamic server-driven UI rendering",
          "Built accessibility standards compliance and UI automation tests",
          "Introduced custom Compose components and hybrid development approach for performance optimization",
        ],
        detailsKo: [
          "동적 서버 기반 UI 렌더링을 위한 AEM SDK 통합",
          "접근성 표준 준수 및 UI 자동화 테스트 구축",
          "성능 최적화를 위한 커스텀 Compose 컴포넌트 및 하이브리드 개발 방식 도입",
        ],
      },
      {
        name: "Wizink SuperApp – Spain/Portugal (Mobile Banking / Fintech)",
        nameKo: "Wizink SuperApp – 스페인/포르투갈 (모바일 뱅킹 / 핀테크)",
        details: [
          "Introduced MVVM + Clean Architecture reducing build time ~30%, accelerating feature delivery ~25%",
          "Developed core mobile banking features: transfers, card management, biometric authentication",
          "Established coding standards and technical leadership across globally distributed teams",
        ],
        detailsKo: [
          "MVVM + Clean Architecture 도입으로 빌드 시간 약 30% 단축, 기능 전달 속도 약 25% 가속",
          "송금, 카드 관리, 생체 인증 등 핵심 모바일 뱅킹 기능 개발",
          "글로벌 분산 팀에서 코딩 표준 수립 및 기술 리더십 발휘",
        ],
      },
      {
        name: "OpenBank & ModelBank – Santander Group (Digital Banking)",
        nameKo: "OpenBank & ModelBank – Santander Group (디지털 뱅킹)",
        details: [
          "Developed core features for multi-country, multi-language digital banking platform",
          "Designed MVVM architecture templates improving reusability, scalability, and maintainability",
          "Built Google Maps SDK-based POC for location-based features",
        ],
        detailsKo: [
          "다국가, 다국어 디지털 뱅킹 플랫폼의 핵심 기능 개발",
          "재사용성, 확장성, 유지보수성을 향상시키는 MVVM 아키텍처 템플릿 설계",
          "위치 기반 기능을 위한 Google Maps SDK 기반 POC 구축",
        ],
      },
      {
        name: "Globalia – AirEuropa (Airline App)",
        nameKo: "Globalia – AirEuropa (항공사 앱)",
        details: [
          "Developed official app for one of Spain's top 3 airlines",
          "Improved real-time flight tracking and booking UX",
          "Implemented animations and motion design",
          "Introduced FCM push notifications, improving user engagement",
        ],
        detailsKo: [
          "스페인 3대 항공사 중 하나의 공식 앱 개발",
          "실시간 항공편 추적 및 예약 UX 개선",
          "애니메이션 및 모션 디자인 구현",
          "FCM 푸시 알림 도입으로 사용자 참여도 향상",
        ],
      },
    ],
    tech: [
      "Kotlin", "MVVM + Clean Architecture", "Multi-module",
      "Jetpack Compose", "XML", "AEM SDK", "Room",
      "Coroutines", "Flow", "Crashlytics", "Data Binding",
    ],
  },
  {
    company: "Webonise Lab Pvt. Ltd.",
    role: {
      en: "Android Developer",
      ko: "Android 개발자",
    },
    location: { en: "Pune, India", ko: "인도, 푸네" },
    period: "Aug 2016 – Oct 2017 (1 yr 3 mos)",
    summary: {
      en: "Independently developed modular Android applications, contributing to stability and user experience improvements from initial build through production.",
      ko: "Android 엔지니어로서 모듈화된 구조 기반의 Android 앱을 독립적으로 개발하며, 안정성과 사용자 경험 개선에 기여했습니다.",
    },
    achievements: {
      en: [
        "Handled end-to-end Android app feature development and maintenance",
        "Optimized SQLite structure, improving app response speed and user experience",
        "Participated in requirements analysis and design within Agile environment",
      ],
      ko: [
        "Android 앱 기능의 엔드투엔드 개발 및 유지보수 담당",
        "SQLite 구조 최적화로 앱 응답 속도 및 사용자 경험 개선",
        "애자일 환경에서 요구사항 분석 및 설계 참여",
      ],
    },
    projects: [
      {
        name: "Gymshim – Fitness & Gym Management Platform",
        nameKo: "Gymshim – 피트니스 & 체육관 관리 플랫폼",
        details: [
          "Developed core features: member management, attendance tracking, operations automation",
          "Reduced manual workload for gym operators through automation",
          "Improved data processing performance and UX via SQLite optimization",
        ],
        detailsKo: [
          "핵심 기능 개발: 회원 관리, 출석 추적, 운영 자동화",
          "자동화를 통해 체육관 운영자의 수작업 부담 감소",
          "SQLite 최적화를 통한 데이터 처리 성능 및 UX 개선",
        ],
      },
    ],
    tech: ["Java", "Android", "SQLite", "Modular Design"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [open, setOpen] = useState(false);
  const { lang, t } = useLang();
  const details = lang === "en" ? project.details : project.detailsKo;

  return (
    <div className="rounded-lg border border-border bg-muted/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted transition-colors"
      >
        <span className="text-sm font-medium text-foreground">
          {t(project.name, project.nameKo)}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground shrink-0 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="px-4 pb-3 space-y-1.5">
              {details.map((d, j) => (
                <li key={j} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-accent mt-0.5 shrink-0">•</span>
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
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
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-14">
            {roles.map((role, i) => (
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

                <div className="bg-card rounded-xl p-6 border border-border shadow-sm space-y-4">
                  {/* Header */}
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-accent shrink-0" />
                        <h3 className="font-semibold text-primary">{role.company}</h3>
                      </div>
                      <span className="text-xs text-muted-foreground">{role.period}</span>
                    </div>
                    <p className="text-sm font-medium text-accent">
                      {lang === "en" ? role.role.en : role.role.ko}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin size={12} />
                      {lang === "en" ? role.location.en : role.location.ko}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lang === "en" ? role.summary.en : role.summary.ko}
                  </p>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {t("Key Achievements", "주요 성과")}
                    </h4>
                    <ul className="space-y-1.5">
                      {(lang === "en" ? role.achievements.en : role.achievements.ko).map((a, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-accent mt-0.5 shrink-0">•</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {t("Projects", "프로젝트")}
                    </h4>
                    <div className="space-y-2">
                      {role.projects.map((proj, pi) => (
                        <ProjectCard key={pi} project={proj} index={pi} />
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                    {role.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
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
