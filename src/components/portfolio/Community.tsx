import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface CommunityItem {
  title: { en: string; ko: string };
  meta: { en: string; ko: string };
  description: { en: string; ko: string };
  icon: typeof Users;
}

const items: CommunityItem[] = [
  {
    title: { en: "Seoul Tech Circle", ko: "Seoul Tech Circle" },
    meta: {
      en: "Seoul, South Korea · Community Meetup",
      ko: "Seoul, South Korea · 기술 커뮤니티",
    },
    icon: Users,
    description: {
      en: "Founded and hosted Seoul Tech Circle, a recurring meetup for tech professionals and job seekers in Seoul focused on networking, resume feedback, peer learning, engineering discussions, and navigating Korea's tech industry together.",
      ko: "서울의 기술 전문가와 구직자를 위한 정기 모임인 Seoul Tech Circle을 설립하고 운영했습니다. 네트워킹, 이력서 피드백, 동료 학습, 엔지니어링 토론 및 한국 IT 업계에 대한 정보 공유를 중심으로 커뮤니티를 운영했습니다.",
    },
  },
  {
    title: { en: "The Tech Table", ko: "The Tech Table" },
    meta: {
      en: "Seoul, South Korea · Women in Tech Community",
      ko: "Seoul, South Korea · 여성 기술 커뮤니티",
    },
    icon: Sparkles,
    description: {
      en: "Member of The Tech Table, a women-in-tech community focused on connection, mentorship, knowledge sharing, and supporting women navigating careers in technology.",
      ko: "여성 기술 인재들의 네트워킹, 멘토링, 지식 공유 및 커리어 성장을 지원하는 The Tech Table의 멤버로 활동하고 있습니다.",
    },
  },
];

const Community = () => {
  const { lang, t } = useLang();

  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeader
          title={t("Community & Leadership", "커뮤니티 및 리더십")}
          className="mb-14"
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-border border-l-4 border-l-accent bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-foreground leading-tight">
                      {lang === "en" ? item.title.en : item.title.ko}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {lang === "en" ? item.meta.en : item.meta.ko}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">
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
