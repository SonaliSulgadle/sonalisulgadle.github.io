import { useLang } from "@/context/LanguageContext";
import { ProjectData } from "@/data/projects";

interface Props {
  project: ProjectData;
  className?: string;
  /** Compact card thumbnail vs. larger detail page header */
  size?: "card" | "header";
}

/**
 * Unified placeholder visual for all project cards / detail headers.
 * No raw screenshots — keeps the section visually consistent and high-signal.
 * Real screenshots live in the detail page "Visuals" section.
 */
const ProjectCover = ({ project, className = "", size = "card" }: Props) => {
  const { t, lang } = useLang();

  // Pick a deterministic gradient per project so each card feels distinct
  // but the system stays consistent.
  const variants = [
    "from-primary/15 via-primary/5 to-accent/15",
    "from-accent/15 via-background to-primary/15",
    "from-primary/10 via-accent/10 to-primary/15",
    "from-amber-500/10 via-background to-primary/15",
    "from-primary/15 via-primary/5 to-accent/10",
  ];
  const hash = project.slug
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const gradient = variants[hash % variants.length];

  const isEngine = project.coverPlaceholder === "engine";

  const name = lang === "en" ? project.name : project.nameKo;
  // Strip subtitle after em-dash for a cleaner overlay label
  const shortName = name.split("—")[0].trim();

  const tag =
    project.placeholderTag ??
    (isEngine ? "Core Engine" : project.inProgress ? "In Progress" : null);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: size === "header" ? "21 / 9" : "16 / 9" }}
    >
      {/* Soft directional gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Subtle grid / dot mesh for depth */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={
          isEngine
            ? {
                backgroundImage:
                  "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }
            : {
                backgroundImage:
                  "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }
        }
      />

      {/* Soft glow accent */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div className="flex items-end justify-between gap-3">
          <span
            className={`font-semibold text-primary leading-tight line-clamp-1 ${
              size === "header" ? "text-base md:text-lg" : "text-sm"
            }`}
          >
            {shortName}
          </span>
          {tag && (
            <span className="text-[10px] font-medium uppercase tracking-wider bg-background/85 backdrop-blur px-2 py-0.5 rounded-md border border-border whitespace-nowrap">
              {t(tag, tag)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCover;
