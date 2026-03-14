import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const skills = [
  { name: "Android SDK", level: 95 },
  { name: "Kotlin", level: 93 },
  { name: "Jetpack Compose", level: 88 },
  { name: "Java", level: 90 },
  { name: "MVVM / Clean Architecture", level: 85 },
  { name: "Room / SQLite", level: 82 },
  { name: "Retrofit / REST APIs", level: 90 },
  { name: "Git / CI-CD", level: 80 },
];

const Skills = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary text-center mb-16"
        >
          {t("Skills & Technologies", "기술 스택")}
        </motion.h2>

        <div className="max-w-3xl mx-auto grid gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
