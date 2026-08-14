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
                      With around 8 years of experience across fintech, mobile banking, sports, and aviation, I've focused not just on building apps that work, but on building systems that last and collaborating with teams to deliver meaningful products.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      My experience spans production Android applications, scalable architecture, performance optimization, modern UI development, and increasingly full-stack web development.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      I'm open to opportunities across India, South Korea, global teams, and remote environments where I can contribute meaningfully, keep learning, and grow alongside great people.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-foreground leading-relaxed text-lg">
                      아키텍처, 성능, 사용자 경험의 균형을 중요하게 생각하는 Senior Android Engineer입니다.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      핀테크, 모바일 뱅킹, 스포츠, 항공 분야에서 약 8년간 경험을 쌓으며 단순히 동작하는 앱을 만드는 것을 넘어, 지속 가능한 시스템과 의미 있는 제품을 만드는 데 집중해왔습니다.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      프로덕션 Android 애플리케이션, 확장 가능한 아키텍처, 성능 최적화, 최신 UI 개발을 경험했으며 최근에는 풀스택 웹 개발까지 영역을 확장하고 있습니다.
                    </p>
                    <p className="text-foreground leading-relaxed text-lg mt-4">
                      인도, 한국, 글로벌 및 원격 환경에서 의미 있는 업무에 기여하고 지속적으로 성장할 수 있는 새로운 기회를 찾고 있습니다.
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
