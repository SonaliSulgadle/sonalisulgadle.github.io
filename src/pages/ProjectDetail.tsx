import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/portfolio/Navbar";

import { getProjectBySlug } from "@/data/projects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <NotFound />;

  const name = lang === "en" ? project.name : project.nameKo;
  const tagline = lang === "en" ? project.tagline.en : project.tagline.ko;
  const desc = lang === "en" ? project.desc.en : project.desc.ko;
  const highlights = lang === "en" ? project.highlights.en : project.highlights.ko;
  const role = lang === "en" ? project.role.en : project.role.ko;
  const challenges = lang === "en" ? project.challenges.en : project.challenges.ko;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 pt-28 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
            <Link to="/#projects" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              {t("Back to Projects", "프로젝트로 돌아가기")}
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.isLive && project.liveUrl && (
              <Badge className="text-xs gap-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/15">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                {t("Live", "라이브")}
              </Badge>
            )}
            {project.featured && (
              <Badge className="text-xs gap-1 bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15">
                <Star size={12} className="fill-primary" />
                {t("Featured", "추천")}
              </Badge>
            )}
            {project.status && (
              <Badge
                variant="outline"
                className="text-xs border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400"
              >
                {lang === "en" ? project.status.en : project.status.ko}
              </Badge>
            )}

          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
            {name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {tagline}
            </p>
            {project.statusMeta && (
              <span className="text-xs text-muted-foreground px-2.5 py-1 rounded-full border border-border bg-muted/50">
                {lang === "en" ? project.statusMeta.en : project.statusMeta.ko}
              </span>
            )}
          </div>



          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3">
              {t("Overview", "개요")}
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              {desc.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3">
              {t("Key Highlights", "주요 기능")}
            </h2>
            <ul className="space-y-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3">
              {t("Tech Stack", "기술 스택")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3">
              {t("My Role", "담당 역할")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{role}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3">
              {t("Engineering Decisions & Challenges", "엔지니어링 결정 및 도전 과제")}
            </h2>
            <ul className="space-y-3">
              {challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {t("Visuals", "비주얼")}
            </h2>
            {project.gallery.length > 0 ? (
              project.category === "web" ? (
                <div className="space-y-4">
                  <figure className="rounded-xl overflow-hidden border border-border bg-muted shadow-sm">
                    <img
                      src={project.gallery[0]}
                      alt={`${project.name} demo`}
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </figure>
                  {project.gallery.length > 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.gallery.slice(1).map((src, i) => (
                        <figure
                          key={i}
                          className={`rounded-xl overflow-hidden border border-border bg-muted shadow-sm ${
                            i === 0 ? "sm:col-span-2" : "sm:col-span-1"
                          }`}
                        >
                          <img
                            src={src}
                            alt={`${project.name} screenshot ${i + 1}`}
                            loading="lazy"
                            className="w-full h-auto block"
                          />
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((src, i) => (
                    <div
                      key={i}
                      className="rounded-lg overflow-hidden border border-border bg-muted"
                      style={{ aspectRatio: "9 / 16" }}
                    >
                      <img
                        src={src}
                        alt={`${project.name} screenshot ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground bg-muted/30">
                {project.status
                  ? t(
                      "Visuals coming soon — app is currently in closed testing.",
                      "비주얼 준비 중 — 앱이 현재 비공개 테스트 중입니다."
                    )
                  : t(
                      "This project is a core engine module without a dedicated UI.",
                      "이 프로젝트는 전용 UI가 없는 코어 엔진 모듈입니다."
                    )}
              </div>

            )}
          </section>

          <section className="pt-6 border-t border-border flex flex-wrap gap-3">
            {project.isLive && project.liveUrl && (
              <Button asChild size="lg" className="gap-2">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  {t("Live Demo", "라이브 데모")}
                </a>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              variant={project.isLive && project.liveUrl ? "outline" : "default"}
              className="gap-2"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                {t("View on GitHub", "GitHub에서 보기")}
              </a>
            </Button>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetail;
