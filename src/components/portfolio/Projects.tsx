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
              <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30">
                <ProjectCover project={p} />

                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-primary leading-snug">
                      {lang === "en" ? p.name : p.nameKo}
                    </h3>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      {p.featured && (
                        <Badge className="text-[10px] gap-1 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15">
                          <Star size={10} className="fill-primary" />
                          {t("Featured", "추천")}
                        </Badge>
                      )}
                      {p.inProgress && (
                        <Badge
                          variant="outline"
                          className="text-[10px] border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                        >
                          🚧 {t("In Progress", "개발 중")}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {lang === "en" ? p.tagline.en : p.tagline.ko}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {(lang === "en" ? p.highlights.en : p.highlights.ko)
                      .slice(0, 3)
                      .map((h, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                    {p.tech.length > 5 && (
                      <Badge variant="outline" className="text-xs font-medium">
                        +{p.tech.length - 5}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border flex items-center gap-2">
                    <Button asChild size="sm" className="flex-1 group/btn">
                      <Link to={`/projects/${p.slug}`} className="flex items-center justify-center gap-2">
                        <span>{t("View Details", "자세히 보기")}</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover/btn:translate-x-0.5"
                        />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="icon"
                      variant="outline"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
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
