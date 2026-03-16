import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  projects: ProjectData[];
}

const roles: RoleData[] = [
  {
    company: "Globant Pvt. Ltd.",
    role: { en: "Android Developer → Technical Lead", ko: "Android 개발자 → 기술 리드" },
    location: { en: "Pune, India", ko: "인도, 푸네" },
    period: "Oct 2017 – May 2024 (6 yrs 8 mos)",
    narrative: {
      en: "Over nearly 7 years at Globant, I grew from Android Developer to Technical Lead, working across some of the most demanding domains in mobile — fintech, digital banking, aviation, and sports entertainment. I led architecture decisions, mentored junior developers, and shipped products used across multiple countries. My focus was always on building things the right way — scalable, maintainable, and built to last.",
      ko: "약 7년간 Globant에서 Android 개발자로 시작해 기술 리드로 성장하며, 핀테크, 디지털 뱅킹, 항공, 스포츠 엔터테인먼트 등 다양한 도메인의 대규모 Android 앱 개발을 이끌었습니다. 아키텍처 설계, 주니어 개발자 멘토링, 다국가 서비스 출시까지 Android 개발 전 과정을 경험하며, 확장성과 유지보수성을 중심으로 한 개발 문화를 만들어 왔습니다.",
    },
    highlights: {
      en: [
        "Redesigned to multi-module architecture, reducing build time ~30%",
        "Ran Jetpack Compose KT sessions & mentored 5+ juniors",
        "Built Seed Project to standardize team dev & cut setup time",
      ],
      ko: [
        "멀티 모듈 아키텍처 재설계로 빌드 시간 약 30% 단축",
        "Jetpack Compose KT 세션 운영 및 주니어 5명 이상 멘토링",
        "Seed 프로젝트 구축으로 팀 개발 표준화 및 초기 셋업 시간 단축",
      ],
    },
    projects: [
      {
        name: "Wizink SuperApp",
        domain: { en: "Mobile Banking · Fintech | Spain & Portugal", ko: "모바일 뱅킹 · 핀테크 | 스페인 & 포르투갈" },
        description: {
          en: "Core mobile banking app serving customers across Spain and Portugal. Led architecture migration to MVVM + Clean multi-module structure, developed key banking features including transfers, card management, and biometric authentication, and established coding standards across a globally distributed team.",
          ko: "스페인과 포르투갈 고객을 위한 핵심 모바일 뱅킹 앱. MVVM + Clean 멀티모듈 구조로 아키텍처 마이그레이션을 주도하고, 송금·카드 관리·생체 인증 등 핵심 기능을 개발하며 글로벌 분산 팀의 코딩 표준을 수립했습니다.",
        },
        tech: ["Kotlin", "MVVM", "Clean Architecture", "Multi-module", "Jetpack Compose", "Coroutines", "Flow", "Room", "Retrofit"],
      },
      {
        name: "OpenBank & ModelBank – Santander Group",
        domain: { en: "Digital Banking | Multi-country", ko: "디지털 뱅킹 | 다국가" },
        description: {
          en: "Contributed to the digital banking core platform serving customers across multiple countries and languages. Designed reusable MVVM architecture templates to improve scalability and maintainability, and built a Google Maps SDK-based POC for location-based features.",
          ko: "다국가·다국어 디지털 뱅킹 핵심 플랫폼 개발에 기여했습니다. 확장성과 유지보수성을 높이는 재사용 가능한 MVVM 아키텍처 템플릿을 설계하고, 위치 기반 기능을 위한 Google Maps SDK POC를 구축했습니다.",
        },
        tech: ["Kotlin", "MVVM", "Multi-module", "Google Maps SDK", "Retrofit"],
      },
      {
        name: "Maker – LA Clippers (LaLigaTech)",
        domain: { en: "Sports & Entertainment", ko: "스포츠 & 엔터테인먼트" },
        description: {
          en: "Built the official Android app for LA Clippers in collaboration with LaLigaTech. Integrated AEM SDK for server-driven dynamic UI rendering, introduced custom Jetpack Compose components, and established accessibility standards and UI automation testing.",
          ko: "LaLigaTech와 협업하여 LA Clippers 공식 Android 앱을 개발했습니다. 서버 기반 동적 UI 렌더링을 위한 AEM SDK 통합, 커스텀 Jetpack Compose 컴포넌트 도입, 접근성 표준 및 UI 자동화 테스트를 구축했습니다.",
        },
        tech: ["Kotlin", "Jetpack Compose", "AEM SDK", "XML", "Coroutines"],
      },
      {
        name: "Globalia – AirEuropa",
        domain: { en: "Aviation | Spain", ko: "항공 | 스페인" },
        description: {
          en: "Developed the official Android app for one of Spain's top 3 airlines. Improved real-time flight tracking UX, implemented animations and motion design, and introduced FCM push notifications to improve user engagement.",
          ko: "스페인 3대 항공사 중 하나의 공식 Android 앱을 개발했습니다. 실시간 항공편 추적 UX 개선, 애니메이션 및 모션 디자인 구현, FCM 푸시 알림 도입으로 사용자 참여도를 향상시켰습니다.",
        },
        tech: ["Kotlin", "FCM", "Animations", "Retrofit"],
      },
    ],
  },
  {
    company: "Webonise Lab Pvt. Ltd.",
    role: { en: "Android Developer", ko: "Android 개발자" },
    location: { en: "Pune, India", ko: "인도, 푸네" },
    period: "Aug 2016 – Oct 2017 (1 yr 3 mos)",
    narrative: {
      en: "My first professional role as an Android developer, where I built and maintained modular Android applications independently. Gained end-to-end development experience from requirements and design through to production, working in an Agile environment.",
      ko: "안드로이드 개발자로서의 첫 번째 직장으로, 모듈화된 구조 기반의 Android 앱을 독립적으로 개발하고 유지보수했습니다. 요구사항 분석부터 배포까지 전 과정을 경험하며 기초를 다진 시간이었습니다.",
    },
    highlights: {
      en: [
        "End-to-end feature development & maintenance",
        "Optimized SQLite for faster response & better UX",
        "Agile requirements analysis & design participation",
      ],
      ko: [
        "엔드투엔드 기능 개발 및 유지보수 담당",
        "SQLite 최적화로 응답 속도 및 UX 개선",
        "애자일 환경에서 요구사항 분석 및 설계 참여",
      ],
    },
    projects: [
      {
        name: "Gymshim",
        domain: { en: "Fitness & Gym Management", ko: "피트니스 & 체육관 관리" },
        description: {
          en: "Fitness and gym management platform with member tracking, attendance, and operations automation. Optimized SQLite database structure to improve data performance and overall app responsiveness.",
          ko: "회원 추적, 출석 관리, 운영 자동화를 갖춘 피트니스 및 체육관 관리 플랫폼. SQLite 데이터베이스 구조를 최적화하여 데이터 성능과 전반적인 앱 응답성을 개선했습니다.",
        },
        tech: ["Java", "Android", "SQLite", "Modular Design"],
      },
    ],
  },
];

const HighlightCard = ({ text, index }: { text: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="rounded-lg bg-accent/10 border border-accent/20 px-4 py-3"
  >
    <p className="text-sm font-medium text-accent">{text}</p>
  </motion.div>
);

const ProjectCard = ({ project, index }: { project: ProjectData; index: number }) => {
  const { lang } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-xl border border-border bg-muted/50 p-5 space-y-3"
    >
      <div>
        <h5 className="font-semibold text-foreground">{project.name}</h5>
        <p className="text-xs font-medium text-accent mt-0.5">
          {lang === "en" ? project.domain.en : project.domain.ko}
        </p>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {lang === "en" ? project.description.en : project.description.ko}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tech.map((t) => (
          <Badge key={t} variant="secondary" className="text-xs">
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
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

          <div className="space-y-16">
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

                <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm space-y-6">
                  {/* Header */}
                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <Briefcase size={18} className="text-accent shrink-0" />
                        <h3 className="text-lg font-bold text-primary">{role.company}</h3>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {role.period}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-accent">
                      {lang === "en" ? role.role.en : role.role.ko}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin size={12} />
                      {lang === "en" ? role.location.en : role.location.ko}
                    </div>
                  </div>

                  {/* Narrative */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lang === "en" ? role.narrative.en : role.narrative.ko}
                  </p>

                  {/* Highlights */}
                  <div className="grid gap-2 sm:grid-cols-3">
                    {(lang === "en" ? role.highlights.en : role.highlights.ko).map((h, j) => (
                      <HighlightCard key={j} text={h} index={j} />
                    ))}
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      {t("Projects", "프로젝트")}
                    </h4>
                    <div className="grid gap-3 md:grid-cols-2">
                      {role.projects.map((proj, pi) => (
                        <ProjectCard key={pi} project={proj} index={pi} />
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
