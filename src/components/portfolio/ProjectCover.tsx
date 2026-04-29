import { Cpu, ImageOff } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { ProjectData } from "@/data/projects";

interface Props {
  project: ProjectData;
  className?: string;
}

const ProjectCover = ({ project, className = "" }: Props) => {
  const { t } = useLang();

  if (project.cover) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-muted ${className}`}
        style={{ aspectRatio: "16 / 10" }}
      >
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.coverLabel && (
          <span className="absolute bottom-3 left-3 text-[10px] font-medium uppercase tracking-wider bg-background/85 backdrop-blur px-2 py-1 rounded-md border border-border">
            {t(project.coverLabel.en, project.coverLabel.ko)}
          </span>
        )}
      </div>
    );
  }

  if (project.coverPlaceholder === "engine") {
    return (
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{ aspectRatio: "16 / 10" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3 text-primary">
            <Cpu size={28} strokeWidth={1.5} />
            <code className="text-sm font-mono opacity-80">
              CameraX → YUV → Executors → UI
            </code>
          </div>
        </div>
        <span className="absolute bottom-3 left-3 text-[10px] font-medium uppercase tracking-wider bg-background/85 backdrop-blur px-2 py-1 rounded-md border border-border">
          {t(
            project.coverLabel?.en ?? "Core Engine / No UI",
            project.coverLabel?.ko ?? "코어 엔진 / UI 없음"
          )}
        </span>
      </div>
    );
  }

  // comingSoon placeholder
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: "16 / 10" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-background to-primary/10" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <ImageOff size={24} strokeWidth={1.5} />
        <span className="text-xs font-medium">
          {t("Visuals coming soon", "비주얼 준비 중")}
        </span>
      </div>
    </div>
  );
};

export default ProjectCover;
