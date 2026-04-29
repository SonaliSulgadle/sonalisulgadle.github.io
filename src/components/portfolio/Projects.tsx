import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import ProjectCover from "./ProjectCover";

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
            "A selection of Android work showcasing architecture, performance, and AI integration.",
            "아키텍처, 성능, AI 통합을 보여주는 Android 작업 모음입니다."
          )}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="group h-full flex flex-col overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/40">
                <ProjectCover project={p} />

                <CardContent className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-semibold text-primary leading-snug line-clamp-1">
                      {lang === "en" ? p.name.split("—")[0].trim() : p.nameKo.split("—")[0].trim()}
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

                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                    {lang === "en" ? p.tagline.en : p.tagline.ko}
                  </p>

                  <ul className="space-y-1 mb-3">
                    {(lang === "en" ? p.highlights.en : p.highlights.ko)
                      .slice(0, 3)
                      .map((h, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-muted-foreground/90 flex items-start gap-2 leading-snug"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          <span className="line-clamp-2">{h}</span>
                        </li>
                      ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[10px] font-medium px-1.5 py-0">
                        {tech}
                      </Badge>
                    ))}
                    {p.tech.length > 4 && (
                      <Badge variant="outline" className="text-[10px] font-medium px-1.5 py-0">
                        +{p.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-auto pt-3 border-t border-border flex items-center gap-2">
                    <Button asChild size="sm" className="flex-1 h-8 text-xs group/btn">
                      <Link to={`/projects/${p.slug}`} className="flex items-center justify-center gap-1.5">
                        <span>{t("View Details", "자세히 보기")}</span>
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover/btn:translate-x-0.5"
                        />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
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
