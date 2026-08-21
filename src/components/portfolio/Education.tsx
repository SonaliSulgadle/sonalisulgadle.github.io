import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap, Award, Star, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./SectionHeader";

interface EduItem {
  school: string;
  degree: { en: string; ko: string };
  period: string;
  note?: { en: string; ko: string };
}

const education: EduItem[] = [
  {
    school: "Seoul National University — Language Education Institute",
    degree: {
      en: "Korean Language Program (Level 1–5) · TOPIK Level 5",
      ko: "한국어 교육 프로그램 (1–5급) · TOPIK 5급",
    },
    period: "2024 – 2025",
    note: {
      en: "Received Excellence Certificates across all levels for consistently achieving 90%+ scores",
      ko: "전 과정에서 90% 이상의 성적을 유지하여 우수상을 수상",
    },
  },
  {
    school: "Walchand Institute of Technology, Solapur University",
    degree: {
      en: "Bachelor of Technology, Information Technology",
      ko: "정보기술 공학사",
    },
    period: "2013 – 2016",
    note: {
      en: "Lateral entry in 2nd year after Diploma in Computer Engineering",
      ko: "컴퓨터공학 디플로마 후 2학년 편입",
    },
  },
  {
    school: "Shri Siddheshwar Women's Polytechnic, Solapur",
    degree: {
      en: "Diploma in Computer Science",
      ko: "컴퓨터 과학 디플로마",
    },
    period: "2010 – 2013",
  },
];

interface LangItem {
  label: { en: string; ko: string };
  level: { en: string; ko: string };
  highlight?: boolean;
}

const languages: LangItem[] = [
  {
    label: { en: "Korean", ko: "한국어" },
    level: { en: "Advanced — TOPIK Level 5 (196/300, July 2025)", ko: "상급 — TOPIK 5급 (196/300, 2025.07)" },
    highlight: true,
  },
  {
    label: { en: "English", ko: "영어" },
    level: { en: "Fluent", ko: "유창" },
  },
  {
    label: { en: "Hindi / Marathi / Kannada", ko: "힌디어 / 마라티어 / 칸나다어" },
    level: { en: "Native", ko: "원어민 수준" },
  },
];

const Education = () => {
  const { lang, t } = useLang();

  return (
    <section id="education" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <SectionHeader title={t("Education & Languages", "학력 & 언어")} className="mb-14" />

        <div className="max-w-4xl mx-auto space-y-14">
          {/* Education Timeline */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 border-b border-border pb-2">
              <GraduationCap className="inline-block mr-2 h-5 w-5 text-accent" />
              {t("Education", "학력")}
            </h3>

            <div className="relative md:ml-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative md:pl-8"
                  >
                    <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-accent border-2 border-background hidden md:block" />

                    <div className="rounded-2xl border border-border border-l-4 border-l-accent bg-card p-5 shadow-sm space-y-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-warm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="font-semibold text-foreground">{edu.school}</h4>
                        <span className="text-xs text-muted-foreground font-medium">{edu.period}</span>
                      </div>
                      <p className="text-sm text-accent font-medium">
                        {lang === "en" ? edu.degree.en : edu.degree.ko}
                      </p>
                      {edu.note && (
                        <p className="text-xs text-muted-foreground italic">
                          {lang === "en" ? edu.note.en : edu.note.ko}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 border-b border-border pb-2">
              <Globe className="inline-block mr-2 h-5 w-5 text-accent" />
              {t("Languages", "언어")}
            </h3>

            <div className="flex flex-wrap gap-4">
              {languages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`rounded-xl border p-4 shadow-sm flex items-center gap-3 ${
                    item.highlight
                      ? "border-accent bg-accent/10 ring-1 ring-accent/30"
                      : "border-border bg-card"
                  }`}
                >
                  {item.highlight && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
                      <Star className="h-4 w-4 text-accent fill-accent" />
                    </div>
                  )}
                  <div>
                    <p className={`text-sm font-semibold ${item.highlight ? "text-accent" : "text-foreground"}`}>
                      {lang === "en" ? item.label.en : item.label.ko}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {lang === "en" ? item.level.en : item.level.ko}
                    </p>
                  </div>
                  {item.highlight && (
                    <Badge variant="default" className="ml-auto text-xs bg-accent text-accent-foreground">
                      <Award className="h-3 w-3 mr-1" />
                      TOPIK 5
                    </Badge>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
