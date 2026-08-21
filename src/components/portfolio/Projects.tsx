import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects, type ProjectCategory, type ProjectData } from "@/data/projects";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  const { lang, t } = useLang();

  const handleDetailsClick = () => {
    window.scrollTo(0, 0);
  };

  const featured = projects.find((p) => p.slug === "puri");
  const webProjects = projects.filter((p) => p.category === "web");
  const androidProjects = projects.filter(
    (p) => p.category === "android" && p.slug !== "puri"
  );

  const renderCard = (p: ProjectData, i: number) => {
    const displayName =
      lang === "en" ? p.name.split("—")[0].trim() : p.nameKo.split("—")[0].trim();
    const isLive = !!p.isLive && !!p.liveUrl;

    return (
      <motion.div
        key={p.slug}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
      >
        <Card
          className={`group relative h-full flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-200 hover:shadow-warm hover:-translate-y-1 ${
            isLive ? "border-accent/50 ring-1 ring-accent/20" : "border-border"
          }`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100"
          />

          <CardContent className="p-5 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base font-bold text-foreground leading-snug line-clamp-1">
                {displayName}
              </h3>
              <div className="flex items-center gap-1.5 shrink-0">
                {isLive && (
                  <Badge className="text-[10px] gap-1 px-1.5 py-0 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/15">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    {t("Live", "라이브")}
                  </Badge>
                )}
                {p.featured && (
                  <Badge className="text-[10px] gap-1 px-1.5 py-0 bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15">
                    <Star size={9} className="fill-accent" />
                    {t("Featured", "추천")}
                  </Badge>
                )}
                {p.status && (
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 py-0 border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                  >
                    {lang === "en" ? p.status.en : p.status.ko}
                  </Badge>
                )}

              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-1 mb-5 leading-relaxed">
              {lang === "en" ? p.tagline.en : p.tagline.ko}
            </p>

            <div className="flex flex-wrap gap-1 mb-5">
              {p.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-[10px] font-medium px-1.5 py-0 border-border/70"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-auto pt-3 border-t border-border flex items-center gap-2">
              {isLive ? (
                <>
                  <Button asChild size="sm" className="flex-1 h-9 text-xs gap-1.5">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink size={14} />
                      {t("Live Demo", "라이브 데모")}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="h-9 px-2.5 text-xs gap-1.5"
                  >
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github size={14} />
                    </a>
                  </Button>
                </>
              ) : (
                <Button asChild size="sm" className="flex-1 h-9 text-xs gap-1.5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github size={14} />
                    {t("View on GitHub", "GitHub에서 보기")}
                  </a>
                </Button>
              )}
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="h-9 px-2 text-xs text-muted-foreground hover:text-accent group/link"
              >
                <Link
                  to={`/projects/${p.slug}`}
                  onClick={handleDetailsClick}
                  className="flex items-center gap-1"
                >
                  {t("Details", "자세히")}
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const renderFeatured = (p: ProjectData) => {
    const displayName =
      lang === "en" ? p.name.split("—")[0].trim() : p.nameKo.split("—")[0].trim();
    const highlights = (lang === "en" ? p.highlights.en : p.highlights.ko).slice(0, 3);

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-14"
      >
        <div className="rounded-2xl border border-border border-l-4 border-l-accent bg-surface p-6 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-warm">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight">
              {displayName}
            </h3>
            <Badge className="text-[10px] gap-1 px-2 py-0.5 bg-accent/10 text-accent border border-accent/30 hover:bg-accent/15">
              <Star size={9} className="fill-accent" />
              {t("Featured", "추천")}
            </Badge>
            {p.status && (
              <Badge
                variant="outline"
                className="text-[10px] px-2 py-0.5 border-clay/40 bg-clay/10 text-clay"
              >
                {lang === "en" ? p.status.en : p.status.ko}
              </Badge>
            )}
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
            {lang === "en" ? p.tagline.en : p.tagline.ko}
          </p>

          <ul className="mt-5 space-y-2 max-w-3xl">
            {highlights.map((h, hi) => (
              <li key={hi} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-[10px] font-medium px-2 py-0.5 border-border bg-card"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="sm" className="h-10 rounded-full px-6 text-xs gap-1.5">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github size={14} />
                {t("View on GitHub", "GitHub에서 보기")}
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-10 rounded-full px-6 text-xs gap-1.5 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link to={`/projects/${p.slug}`} onClick={handleDetailsClick} className="flex items-center">
                {t("Details", "자세히")}
                <ArrowUpRight size={13} />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };


  const renderGroup = (
    title: string,
    titleKo: string,
    items: ProjectData[],
    category: ProjectCategory
  ) => (
    <div className="mb-14 last:mb-0">
      <div className="max-w-6xl mx-auto mb-6 flex items-baseline gap-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-accent">
          {t(title, titleKo)}
        </h3>
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">
          {items.length} {t("project" + (items.length === 1 ? "" : "s"), "프로젝트")}
        </span>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {items.map((p, i) => renderCard(p, i))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeader
          title={t("Projects", "프로젝트")}
          subtitle={t(
            "A selection of work spanning full-stack web and Android — focused on architecture, performance, and AI integration.",
            "풀스택 웹과 Android에 걸친 작업 모음으로, 아키텍처·성능·AI 통합에 중점을 둡니다."
          )}
          className="mb-14"
        />

        {featured && renderFeatured(featured)}

        {webProjects.length > 0 && renderGroup("Web", "웹", webProjects, "web")}
        {androidProjects.length > 0 && renderGroup("Android", "안드로이드", androidProjects, "android")}
      </div>
    </section>
  );
};

export default Projects;
