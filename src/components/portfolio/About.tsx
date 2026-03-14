import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          {/* Photo placeholder */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-secondary flex items-center justify-center shrink-0 border border-border">
            <User size={64} className="text-muted-foreground" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              {t("About Me", "소개")}
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              {t(
                "I'm a passionate Android developer with over 8 years of experience crafting high-performance mobile applications. I specialize in Kotlin, Jetpack Compose, and modern Android architecture patterns. My work focuses on building apps that scale gracefully and deliver exceptional user experiences.",
                "저는 8년 이상의 경력을 가진 열정적인 안드로이드 개발자입니다. Kotlin, Jetpack Compose, 그리고 최신 안드로이드 아키텍처 패턴을 전문으로 다루고 있습니다. 확장성 있는 앱 개발과 뛰어난 사용자 경험 구현에 집중하고 있습니다."
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Currently seeking new opportunities with innovative teams in Seoul's tech ecosystem. I thrive in collaborative environments and enjoy tackling complex technical challenges.",
                "현재 서울의 혁신적인 기술 생태계에서 새로운 기회를 찾고 있습니다. 협업 환경에서 복잡한 기술적 과제를 해결하는 것을 즐기며, 팀과 함께 성장하는 것을 중요하게 생각합니다."
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
