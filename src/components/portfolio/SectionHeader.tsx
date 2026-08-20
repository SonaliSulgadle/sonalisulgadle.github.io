import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

const SectionHeader = ({ title, subtitle, align = "center", className = "" }: SectionHeaderProps) => {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`${centered ? "text-center" : "text-left"} ${className}`}
    >
      <div className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}>
        <span className="h-[3px] w-6 rounded-full bg-accent" aria-hidden="true" />
        <span className="h-2 w-2 rounded-sm bg-accent" aria-hidden="true" />
      </div>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm md:text-base text-muted-foreground leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
