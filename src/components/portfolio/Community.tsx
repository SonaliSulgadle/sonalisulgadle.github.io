import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";

interface CommunityItem {
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  icon: typeof Users;
}

const items: CommunityItem[] = [
  {
    title: { en: "Seoul Tech Circle", ko: "Seoul Tech Circle" },
    icon: Users,
    description: {
      en: "Founded and host Seoul Tech Circle, a recurring meetup for tech professionals and job seekers in Seoul focused on networking, resume feedback, peer learning, and navigating Korea's tech industry together.",
      ko: "서울에서 활동하는 기술 전문가 및 구직자들을 위한 정기 모임인 Seoul Tech Circle을 운영하며, 네트워킹, 이력서 피드백, 정보 공유, 한국 IT 업계 탐색을 함께 지원합니다.",
    },
  },
  {
    title: { en: "The Tech Table", ko: "The Tech Table" },
    icon: Sparkles,
    description: {
      en: "Participating in The Tech Table, a women-in-tech community focused on connection, mentorship, knowledge sharing, and supporting women navigating careers in technology.",
      ko: "The Tech Table은 여성 기술인들의 네트워킹, 멘토링, 지식 공유, 그리고 커리어 성장을 지원하는 여성 기술 커뮤니티입니다.",
    },
  },
];

const Community = () => {
  const { lang, t } = useLang();

  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary text-center mb-16"
        >
          {t("Community & Leadership", "커뮤니티 및 리더십")}
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-accent/60 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-foreground">
                      {lang === "en" ? item.title.en : item.title.ko}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang === "en" ? item.description.en : item.description.ko}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
