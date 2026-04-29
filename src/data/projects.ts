import expense1 from "@/assets/projects/expense-1.png";
import expense3 from "@/assets/projects/expense-3.png";
import expense4 from "@/assets/projects/expense-4.png";
import expenseGif from "@/assets/projects/expense-gif.gif";
import notes1 from "@/assets/projects/notes-1.png";
import notes2 from "@/assets/projects/notes-2.png";
import notes3 from "@/assets/projects/notes-3.png";
import task1 from "@/assets/projects/task-1.png";
import task2 from "@/assets/projects/task-2.png";
import task3 from "@/assets/projects/task-3.png";

export interface ProjectData {
  slug: string;
  name: string;
  nameKo: string;
  tagline: { en: string; ko: string };
  desc: { en: string; ko: string };
  highlights: { en: string[]; ko: string[] };
  tech: string[];
  github: string;
  cover?: string;
  coverPlaceholder?: "engine" | "comingSoon";
  coverLabel?: { en: string; ko: string };
  /** Short tag shown on the placeholder thumbnail, e.g. "AI-powered", "Real-time" */
  placeholderTag?: string;
  gallery: string[];
  role: { en: string; ko: string };
  challenges: { en: string[]; ko: string[] };
  featured?: boolean;
  inProgress?: boolean;
}

export const projects: ProjectData[] = [
  {
    slug: "puri",
    name: "Puri (풀이) — Daily Life Solver for Foreigners in Korea",
    nameKo: "Puri (풀이) — 한국 거주 외국인을 위한 생활 해결사",
    tagline: {
      en: "AI-powered daily life solver for foreigners living in South Korea.",
      ko: "한국 거주 외국인을 위한 AI 기반 생활 해결사.",
    },
    desc: {
      en: "A production-ready Android app that helps foreigners in South Korea navigate daily life confusion — from trash sorting and appliance instructions to transport and medical clinics — using AI-powered photo and text analysis with structured, step-by-step guidance. Currently in active development targeting Google Play Store release.",
      ko: "쓰레기 분리수거, 가전제품 사용법, 교통, 병원 등 한국 거주 외국인이 일상에서 겪는 혼란을 AI 기반 사진 및 텍스트 분석과 단계별 가이드로 해결해주는 프로덕션 수준의 Android 앱입니다. 현재 Google Play Store 출시를 목표로 활발히 개발 중입니다.",
    },
    highlights: {
      en: [
        "Jetpack Compose UI with MVI architecture and Clean Architecture layering",
        "Gemini 2.5 Flash Lite via Retrofit with exponential backoff and structured prompts",
        "AI extracts and translates Korean text from captured images using CameraX",
        "Pre-bundled offline guides for 12 essential daily life situations",
      ],
      ko: [
        "MVI 아키텍처와 Clean Architecture 계층화가 적용된 Jetpack Compose UI",
        "지수 백오프 및 구조화된 프롬프트가 적용된 Retrofit 기반 Gemini 2.5 Flash Lite",
        "CameraX로 촬영한 이미지에서 한국어 텍스트를 AI가 추출 및 번역",
        "12가지 필수 일상 상황을 위한 오프라인 가이드 사전 번들링",
      ],
    },
    tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "CameraX", "Retrofit", "Room", "Hilt", "MVI", "Clean Architecture"],
    github: "https://github.com/SonaliSulgadle/puri-android",
    coverPlaceholder: "comingSoon",
    coverLabel: { en: "Visuals coming soon", ko: "비주얼 준비 중" },
    placeholderTag: "AI-powered",
    gallery: [],
    role: {
      en: "Sole Android engineer — owning architecture, AI integration, UX design, and Play Store release preparation.",
      ko: "단독 Android 엔지니어로서 아키텍처, AI 통합, UX 설계, Play Store 출시 준비 전반을 담당.",
    },
    challenges: {
      en: [
        "Designed structured Gemini prompts and a strict JSON parser/serializer to keep AI output reliable across 12 daily life domains.",
        "Built an exponential backoff + offline fallback layer so the app remains useful without network or under quota limits.",
        "Adopted MVI to keep camera capture, AI streaming responses, and Room caching in a single predictable state flow.",
      ],
      ko: [
        "12개 생활 영역에서 AI 출력 신뢰성을 유지하기 위해 구조화된 Gemini 프롬프트와 엄격한 JSON 파서/시리얼라이저를 설계.",
        "네트워크가 없거나 쿼터 제한 시에도 앱이 동작하도록 지수 백오프 + 오프라인 폴백 계층 구현.",
        "카메라 캡처, AI 스트리밍 응답, Room 캐싱을 단일 예측 가능한 상태 흐름으로 유지하기 위해 MVI 채택.",
      ],
    },
    featured: true,
    inProgress: true,
  },
  {
    slug: "expense-tracker",
    name: "ExpenseTracker",
    nameKo: "ExpenseTracker",
    tagline: {
      en: "AI-categorized expense tracking with a premium dark UI.",
      ko: "AI 자동 분류 기반 프리미엄 다크 UI 지출 관리 앱.",
    },
    desc: {
      en: "An Android expense tracking app that automatically categorizes expenses using Google Gemini AI. Built with production-quality Clean Architecture, modern Jetpack libraries, and a premium dark Amber/Gold UI theme.",
      ko: "Google Gemini AI를 사용하여 지출을 자동 분류하는 Android 지출 추적 앱입니다. 프로덕션 품질의 Clean Architecture, 최신 Jetpack 라이브러리, 프리미엄 다크 Amber/Gold UI 테마로 구축되었습니다.",
    },
    highlights: {
      en: [
        "Jetpack Compose UI with custom Canvas charts",
        "Two-layer AI: Gemini 2.5 Flash Lite for classification, local rules for offline fallback",
        "Clean Architecture with Domain / Data / UI layer separation and Hilt DI",
        "Room + Kotlin Flow for reactive UI; full unit test coverage across UseCases & ViewModels",
      ],
      ko: [
        "커스텀 Canvas 차트가 포함된 Jetpack Compose UI",
        "2계층 AI: 분류용 Gemini 2.5 Flash Lite, 오프라인 폴백용 로컬 규칙",
        "Domain / Data / UI 레이어 분리 및 Hilt DI 적용 Clean Architecture",
        "반응형 UI를 위한 Room + Kotlin Flow, UseCases와 ViewModels 전반 단위 테스트 커버리지",
      ],
    },
    tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "Retrofit", "Room", "Hilt", "Flow", "Clean Architecture"],
    github: "https://github.com/SonaliSulgadle/expense-tracker-android",
    cover: expense1,
    placeholderTag: "AI-powered",
    gallery: [expense1, expense3, expense4, expenseGif],
    role: {
      en: "Sole Android engineer — designed the architecture, AI classification pipeline, custom Compose charts, and full test suite.",
      ko: "단독 Android 엔지니어로서 아키텍처, AI 분류 파이프라인, 커스텀 Compose 차트, 전체 테스트 스위트 설계.",
    },
    challenges: {
      en: [
        "Built a two-layer classification system so expenses are categorized instantly offline and refined by Gemini when online.",
        "Implemented custom Canvas-based bar charts in Compose to avoid heavy charting libraries and keep startup fast.",
        "Used Kotlin Flow end-to-end so chart, list, and totals stay perfectly in sync with Room as the single source of truth.",
      ],
      ko: [
        "오프라인에서는 즉시 분류하고 온라인에서는 Gemini가 정교화하는 2계층 분류 시스템 구축.",
        "차트 라이브러리 의존성을 피하고 빠른 시작 시간을 유지하기 위해 Compose에서 Canvas 기반 막대 차트 직접 구현.",
        "Room을 단일 진실 공급원으로 두고 Kotlin Flow를 종단 간 사용해 차트·목록·합계가 완벽히 동기화되도록 설계.",
      ],
    },
    featured: true,
  },
  {
    slug: "camera-filter-engine",
    name: "CameraFilterEngine",
    nameKo: "CameraFilterEngine",
    tagline: {
      en: "Real-time CameraX image processing engine.",
      ko: "실시간 CameraX 이미지 처리 엔진.",
    },
    desc: {
      en: "CameraX-based real-time image processing engine demonstrating performance optimization, Android image pipeline, and concurrency design.",
      ko: "CameraX 기반 실시간 이미지 처리 엔진으로 성능 최적화, Android 이미지 파이프라인 및 동시성 설계를 시연합니다.",
    },
    highlights: {
      en: [
        "Real-time frame pipeline using CameraX ImageAnalysis",
        "Direct YUV_420_888 buffer processing to minimize overhead",
        "Multi-threaded frame processing using Executors",
        "Separated frame capture, processing, and UI rendering",
      ],
      ko: [
        "CameraX ImageAnalysis를 사용한 실시간 프레임 파이프라인",
        "오버헤드 최소화를 위한 직접 YUV_420_888 버퍼 처리",
        "Executors를 활용한 멀티스레드 프레임 처리",
        "프레임 캡처, 처리, UI 렌더링 분리",
      ],
    },
    tech: ["CameraX", "ImageAnalysis", "YUV_420_888", "Executors", "Concurrency"],
    github: "https://github.com/SonaliSulgadle/camera-filter-engine",
    coverPlaceholder: "engine",
    coverLabel: { en: "Core Engine / No UI", ko: "코어 엔진 / UI 없음" },
    gallery: [],
    role: {
      en: "Engine author — focused on the image pipeline, threading model, and zero-copy buffer handling.",
      ko: "엔진 작성자로서 이미지 파이프라인, 스레딩 모델, 제로 복사 버퍼 처리에 집중.",
    },
    challenges: {
      en: [
        "Processed YUV_420_888 buffers directly to avoid Bitmap allocations on every frame and keep the analyzer below frame budget.",
        "Separated capture, processing, and UI threads via Executors to prevent jank on the camera preview.",
        "Designed the engine as a reusable module so any host UI (Compose or Views) can plug in.",
      ],
      ko: [
        "프레임마다 Bitmap 할당을 피하고 분석기를 프레임 예산 내로 유지하기 위해 YUV_420_888 버퍼를 직접 처리.",
        "카메라 프리뷰의 jank를 방지하기 위해 Executors로 캡처·처리·UI 스레드를 분리.",
        "Compose든 View든 어떤 호스트 UI에서도 재사용 가능한 모듈로 엔진 설계.",
      ],
    },
  },
  {
    slug: "task-manager-pro",
    name: "TaskManagerPro",
    nameKo: "TaskManagerPro",
    tagline: {
      en: "Modern task manager built with Compose and Firebase.",
      ko: "Compose와 Firebase로 구축된 최신 작업 관리 앱.",
    },
    desc: {
      en: "Task management app built with Jetpack Compose and Firebase, showcasing modern Android architecture.",
      ko: "Jetpack Compose와 Firebase로 구축된 작업 관리 앱으로 최신 Android 아키텍처를 보여줍니다.",
    },
    highlights: {
      en: [
        "Clean Architecture with UI / Domain / Data layers",
        "Firebase Authentication + Firestore CRUD",
        "Coroutines + Flow for real-time data streams",
        "Task filtering, sorting, and Undo with Snackbar",
      ],
      ko: [
        "UI / Domain / Data 레이어로 구성된 Clean Architecture",
        "Firebase 인증 + Firestore CRUD",
        "실시간 데이터 스트림용 Coroutines + Flow",
        "작업 필터링, 정렬, Snackbar 기반 실행 취소",
      ],
    },
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Coroutines", "Flow", "Clean Architecture"],
    github: "https://github.com/SonaliSulgadle/task-manager-pro",
    cover: task2,
    gallery: [task1, task2, task3],
    role: {
      en: "Sole Android engineer — auth flow, Firestore data layer, and Compose UI.",
      ko: "단독 Android 엔지니어로서 인증 흐름, Firestore 데이터 레이어, Compose UI 담당.",
    },
    challenges: {
      en: [
        "Modeled Firestore CRUD as suspending repository functions exposed as Flows for a fully reactive UI.",
        "Implemented an Undo flow that re-inserts deleted tasks within a Snackbar timeout window.",
        "Kept auth, data, and presentation cleanly separated so swapping Firebase out later is low-risk.",
      ],
      ko: [
        "Firestore CRUD를 suspend 리포지토리 함수로 모델링하고 Flow로 노출해 완전 반응형 UI 구현.",
        "Snackbar 타임아웃 내에 삭제된 작업을 재삽입하는 Undo 흐름 구현.",
        "Firebase 교체 위험을 줄이기 위해 인증·데이터·프레젠테이션을 명확히 분리.",
      ],
    },
  },
  {
    slug: "quick-notes-plus",
    name: "QuickNotes+",
    nameKo: "QuickNotes+",
    tagline: {
      en: "Kotlin notes app focused on clean state management.",
      ko: "깔끔한 상태 관리에 중점을 둔 Kotlin 메모 앱.",
    },
    desc: {
      en: "Kotlin-based notes app focused on clean state management and structural design.",
      ko: "깔끔한 상태 관리와 구조적 설계에 중점을 둔 Kotlin 기반 메모 앱입니다.",
    },
    highlights: {
      en: [
        "MVVM + Clean Architecture",
        "Kotlin-first implementation",
        "Predictable state management for list, empty, and edit screens",
        "Scalable structure ready to extend with persistence or sync",
      ],
      ko: [
        "MVVM + Clean Architecture",
        "Kotlin 우선 구현",
        "목록·빈 상태·편집 화면을 위한 예측 가능한 상태 관리",
        "지속성 또는 동기화 확장이 가능한 확장형 구조",
      ],
    },
    tech: ["Kotlin", "MVVM", "Clean Architecture"],
    github: "https://github.com/SonaliSulgadle/quick-notes-plus",
    cover: notes1,
    gallery: [notes1, notes2, notes3],
    role: {
      en: "Sole Android engineer — designed the architecture and screen states.",
      ko: "단독 Android 엔지니어로서 아키텍처와 화면 상태 설계.",
    },
    challenges: {
      en: [
        "Modeled list / empty / edit as explicit UI states to keep the ViewModel simple and testable.",
        "Kept the architecture intentionally lean so it can serve as a clear MVVM reference.",
      ],
      ko: [
        "ViewModel을 단순하고 테스트하기 쉽게 유지하기 위해 목록/빈 상태/편집을 명시적 UI 상태로 모델링.",
        "명확한 MVVM 참조 역할을 할 수 있도록 의도적으로 아키텍처를 단순하게 유지.",
      ],
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
