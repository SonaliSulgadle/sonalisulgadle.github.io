import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects, type ProjectCategory, type ProjectData } from "@/data/projects";

const Projects = () => {
  const { lang, t } = useLang();

  const handleDetailsClick = () => {
    window.scrollTo(0, 0);
  };

  const webProjects = projects.filter((p) => p.category === "web");
  const androidProjects = projects.filter((p) => p.category === "android");

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
          className={`group relative h-full flex flex-col overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
            isLive
              ? "border-accent/50 ring-1 ring-accent/20 hover:border-accent"
              : "border-border hover:border-primary/50"
          }`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-px -right-px h-16 w-16 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <CardContent className="p-5 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base font-semibold text-primary leading-snug line-clamp-1">
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
                  <Badge className="text-[10px] gap-1 px-1.5 py-0 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15">
                    <Star size={9} className="fill-primary" />
                    {t("Featured", "추천")}
                  </Badge>
                )}
                {p.inProgress && (
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 py-0 border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                  >
                    {t("In Progress", "개발 중")}
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-2">
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
                className="h-9 px-2 text-xs text-muted-foreground hover:text-primary group/link"
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

  const renderGroup = (
    title: string,
    titleKo: string,
    items: ProjectData[],
    category: ProjectCategory
  ) => (
    <div className="mb-14 last:mb-0">
      <div className="max-w-6xl mx-auto mb-6 flex items-baseline gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
          {t(title, titleKo)}
        </h3>
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">
          {items.length} {t("project" + (items.length === 1 ? "" : "s"), "프로젝트")}
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {items.map((p, i) => renderCard(p, i))}
      </div>
    </div>
  );

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
          className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto"
        >
          {t(
            "A selection of work spanning full-stack web and Android — focused on architecture, performance, and AI integration.",
            "풀스택 웹과 Android에 걸친 작업 모음으로, 아키텍처·성능·AI 통합에 중점을 둡니다."
          )}
        </motion.p>

        {webProjects.length > 0 && renderGroup("Web", "웹", webProjects, "web")}
        {androidProjects.length > 0 && renderGroup("Android", "안드로이드", androidProjects, "android")}
      </div>
    </section>
  );
};

export default Projects;
