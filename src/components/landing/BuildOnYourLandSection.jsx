import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";
import { MapPin, FileText, Landmark, CheckCircle2, ArrowRight } from "lucide-react";

const FEATURES = [
  {
    icon: FileText,
    title: "По вашему проекту",
    desc: "Строим по готовому проекту или разрабатываем индивидуальный — под ваши пожелания и участок.",
  },
  {
    icon: MapPin,
    title: "На вашем земельном участке",
    desc: "Неважно, где расположен участок — работаем по всей Самарской области.",
  },
  {
    icon: Landmark,
    title: "Эскроу-счёт и банк-кредитор",
    desc: "Строительство с использованием эскроу-счёта при поддержке любого банка-кредитора — ваши деньги под защитой.",
  },
];

const STEPS = [
  "Оставьте заявку — обсудим проект и участок",
  "Подготовка проекта и смета под ключ",
  "Открытие эскроу-счёта в банке-партнёре",
  "Строительство под контролем АН «Империя»",
  "Сдача объекта и оформление документов",
];

export default function BuildOnYourLandSection() {
  return (
    <section id="build" className="bg-empire-fog py-24 md:py-36 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-empire-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="px-6 md:px-[8vw] relative z-10">
        <ScrollReveal>
          <p className="font-heading text-empire-gold text-xs tracking-empire mb-4 font-light">
            СТРОИТЕЛЬСТВО
          </p>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-4">
            СТРОИМ НА ВАШЕМ УЧАСТКЕ
          </h2>
          <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-xl leading-relaxed mb-12">
            АН «Империя» строит не только в посёлке Горизонт. Мы готовы возвести дом вашей мечты по вашему проекту, на вашем земельном участке — с полным юридическим сопровождением и защитой средств через эскроу-счёт.
          </p>
        </ScrollReveal>

        <GoldLine />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.12}>
              <div className="border border-empire-pearl/10 p-8 hover:border-empire-gold/30 transition-colors duration-500 group">
                <div className="w-12 h-12 flex items-center justify-center border border-empire-gold/20 group-hover:border-empire-gold/50 mb-6 transition-colors">
                  <f.icon className="w-5 h-5 text-empire-gold" strokeWidth={1.2} />
                </div>
                <h3 className="font-heading text-empire-pearl font-extralight tracking-empire text-lg mb-3">
                  {f.title.toUpperCase()}
                </h3>
                <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Steps + CTA */}
        <ScrollReveal>
          <div className="border border-empire-pearl/10 p-6 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex-1">
              <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-6">КАК ЭТО РАБОТАЕТ</p>
              <div className="space-y-4">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 border border-empire-gold/40 flex items-center justify-center mt-0.5">
                      <span className="font-heading text-empire-gold text-[10px]">{i + 1}</span>
                    </div>
                    <p className="font-body text-empire-pearl/60 text-sm tracking-wide-body leading-relaxed">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col justify-between gap-8 md:w-64">
              <div>
                <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-3">ГАРАНТИИ</p>
                <div className="space-y-3">
                  {[
                    "Эскроу-счёт — ваши деньги под защитой",
                    "Любой банк-кредитор на ваш выбор",
                    "Фиксированная смета без скрытых платежей",
                    "Полное юридическое сопровождение",
                  ].map((g) => (
                    <div key={g} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-empire-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="font-body text-empire-pearl/50 text-xs tracking-micro leading-relaxed">{g}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#hero-form"
                className="flex items-center justify-center gap-3 border border-empire-gold/40 hover:bg-empire-gold hover:text-empire-graphite text-empire-gold py-4 px-6 font-heading text-xs tracking-empire transition-all duration-300 group"
              >
                ОБСУДИТЬ ПРОЕКТ
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}