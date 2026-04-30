import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

const Projects = () => {
  const { lang, t } = useLang();

  const handleDetailsClick = () => {
    window.scrollTo(0, 0);
  };

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
            "A selection of Android work showcasing architecture, performance, and AI integration.",
            "아키텍처, 성능, AI 통합을 보여주는 Android 작업 모음입니다."
          )}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {projects.map((p, i) => {
            const displayName =
              lang === "en" ? p.name.split("—")[0].trim() : p.nameKo.split("—")[0].trim();

            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="group relative h-full flex flex-col overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/50">
                  {/* Subtle accent corner for visual interest */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-px -right-px h-16 w-16 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <CardContent className="p-5 flex flex-col flex-1">
                    {/* Header: name + badges */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-semibold text-primary leading-snug line-clamp-1">
                        {displayName}
                      </h3>
                      <div className="flex items-center gap-1.5 shrink-0">
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

                    {/* Short description (1–2 lines) */}
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {lang === "en" ? p.tagline.en : p.tagline.ko}
                    </p>

                    {/* Tech stack — all relevant tags */}
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

                    {/* Actions: GitHub primary, View Details secondary */}
                    <div className="mt-auto pt-3 border-t border-border flex items-center gap-2">
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
