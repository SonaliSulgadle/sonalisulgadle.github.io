import { useLang } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const { lang, t } = useLang();

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            {t("About Me", "소개")}
          </h2>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {lang === "en" ? (
                  <>
                    <p className="text-foreground leading-relaxed text-lg">
                      I'm a Senior Android Engineer who cares deeply about the balance between architecture, performance, and user experience.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      Over 8 years across fintech, mobile banking, sports, and aviation, I've focused not just on building apps that work — but on building systems that last and teams that grow together.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      I'm currently based in Seoul and looking for a team where I can do meaningful work and keep growing alongside great people.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      I've been living in Seoul for two years and plan to stay — it's where I want to grow my career.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-foreground leading-relaxed text-lg">
                      저는 아키텍처, 성능, 사용자 경험의 균형을 고민하는 시니어 안드로이드 엔지니어입니다.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      지난 8년간 핀테크, 모바일 뱅킹, 스포츠, 항공 등 다양한 도메인에서 대규모 Android 앱을 개발하며, 단순히 동작하는 코드가 아닌 오래 유지되고 팀이 함께 성장할 수 있는 구조를 만드는 것을 중요하게 여겨 왔습니다.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      현재 서울에 거주 중이며, 좋은 제품을 함께 만들고 함께 성장할 수 있는 팀을 찾고 있습니다.
                    </p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
