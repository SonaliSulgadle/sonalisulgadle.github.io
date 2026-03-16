import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  name: string;
  nameKo: string;
  desc: {
    en: string;
    ko: string;
  };
  highlights: string[];
  highlightsKo: string[];
  tech: string[];
  github: string;
  inProgress?: boolean;
}

const projects: Project[] = [
  {
    name: "CameraFilterEngine",
    nameKo: "CameraFilterEngine",
    desc: {
      en: "CameraX-based real-time image processing engine demonstrating performance optimization, Android image pipeline, and concurrency design.",
      ko: "CameraX 기반 실시간 이미지 처리 엔진으로 성능 최적화, Android 이미지 파이프라인 및 동시성 설계를 시연합니다.",
    },
    highlights: [
      "Real-time frame pipeline using CameraX ImageAnalysis",
      "Direct YUV_420_888 buffer processing to minimize overhead",
      "Multi-threaded frame processing using Executors",
      "Separated frame capture, processing, and UI rendering",
    ],
    highlightsKo: [
      "CameraX ImageAnalysis를 사용한 실시간 프레임 파이프라인",
      "오버헤드 최소화를 위한 직접 YUV_420_888 버퍼 처리",
      "Executors를 활용한 멀티스레드 프레임 처리",
      "UI 차단 방지를 위한 프레임 캡처, 처리, UI 렌더링 분리",
    ],
    tech: ["CameraX", "ImageAnalysis", "YUV_420_888", "Executors", "Concurrency"],
    github: "https://github.com/SonaliSulgadle",
  },
  {
    name: "QuickNotes+",
    nameKo: "QuickNotes+",
    desc: {
      en: "Kotlin-based notes app focused on clean state management and structural design.",
      ko: "깔끔한 상태 관리와 구조적 설계에 중점을 둔 Kotlin 기반 메모 앱입니다.",
    },
    highlights: [
      "MVVM + Clean Architecture",
      "Kotlin-first implementation",
      "Focus on state management and scalable structure",
    ],
    highlightsKo: [
      "MVVM + Clean Architecture",
      "Kotlin 우선 구현",
      "상태 관리 및 확장 가능한 구조에 중점",
    ],
    tech: ["Kotlin", "MVVM", "Clean Architecture"],
    github: "https://github.com/SonaliSulgadle",
  },
  {
    name: "TaskManagerPro",
    nameKo: "TaskManagerPro",
    desc: {
      en: "Task management app built with Jetpack Compose and Firebase, showcasing modern Android architecture.",
      ko: "Jetpack Compose와 Firebase로 구축된 작업 관리 앱으로 최신 Android 아키텍처를 보여줍니다.",
    },
    highlights: [
      "Clean Architecture (UI / Domain / Data layers)",
      "Firebase Authentication + Firestore CRUD",
      "Coroutines + Flow for real-time data streams",
      "Task filtering, sorting, Undo functionality",
      "Dark/Light theme with state-driven UI",
    ],
    highlightsKo: [
      "Clean Architecture (UI / Domain / Data 레이어)",
      "Firebase 인증 + Firestore CRUD",
      "실시간 데이터 스트림용 Coroutines + Flow",
      "작업 필터링, 정렬, 실행 취소 기능",
      "상태 기반 UI의 다크/라이트 테마",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Coroutines", "Flow", "Clean Architecture"],
    github: "https://github.com/SonaliSulgadle",
  },
  {
    name: "ExpenseTracker",
    nameKo: "ExpenseTracker",
    desc: {
      en: "AI-powered personal financial expense tracker Android app currently in development.",
      ko: "현재 개발 중인 AI 기반 개인 재무 지출 추적 Android 앱입니다.",
    },
    highlights: [
      "Google Gemini 1.5 Flash for AI-based expense categorization",
      "Room database + Kotlin Flow for reactive UI updates",
      "Hilt dependency injection",
      "Clean Architecture: Domain / Data / UI layer separation",
    ],
    highlightsKo: [
      "AI 기반 지출 분류를 위한 Google Gemini 1.5 Flash",
      "반응형 UI 업데이트를 위한 Room 데이터베이스 + Kotlin Flow",
      "Hilt 의존성 주입",
      "Clean Architecture: Domain / Data / UI 레이어 분리",
    ],
    tech: ["Kotlin", "Gemini AI", "Room", "Hilt", "Flow", "Clean Architecture"],
    github: "https://github.com/SonaliSulgadle",
    inProgress: true,
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
          className="text-3xl font-bold text-primary text-center mb-4"
        >
          {t("Projects", "프로젝트")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          {t(
            "A collection of my Android development work showcasing architecture patterns, performance optimization, and modern UI design.",
            "아키텍처 패턴, 성능 최적화 및 최신 UI 디자인을 보여주는 Android 개발 작업 모음입니다."
          )}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-primary">
                        {lang === "en" ? p.name : p.nameKo}
                      </h3>
                      {p.inProgress && (
                        <Badge variant="secondary" className="text-xs">
                          🚧 {t("In Progress", "개발 중")}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {lang === "en" ? p.desc.en : p.desc.ko}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                      {t("Highlights", "주요 기능")}
                    </h4>
                    <ul className="space-y-1.5">
                      {(lang === "en" ? p.highlights : p.highlightsKo).map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                    >
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        <span>{t("View on GitHub", "GitHub에서 보기")}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;