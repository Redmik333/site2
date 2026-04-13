import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";
import { Heart, Calculator, CheckCircle2 } from "lucide-react";

const CONDITIONS = [
  { label: "Первоначальный взнос", value: "от 20%" },
  { label: "Срок кредита", value: "до 30 лет" },
  { label: "Возраст заёмщика", value: "21–65 лет" },
  { label: "Кто подходит", value: "Семьи с детьми до 18 лет", note: "Один ребёнок до 7 лет, двое и более детей, ребёнок-инвалид до 18 лет" },
];

const PERKS = [
  "Дети рождённые с 01.01.2018 или позже",
  "Новостройки и дома от застройщика",
  "Льготная ставка фиксируется на весь срок",
  "Возможность использовать материнский капитал",
];

export default function MortgageSection() {
  return (
    <section id="mortgage" className="bg-empire-graphite py-24 md:py-36 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-empire-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="px-6 md:px-[8vw] relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-empire-gold" strokeWidth={1.2} />
            <p className="font-heading text-empire-gold text-xs tracking-empire font-light">
              ГОСУДАРСТВЕННАЯ ПРОГРАММА
            </p>
          </div>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-4">
            СЕМЕЙНАЯ ИПОТЕКА
          </h2>
          <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-lg leading-relaxed mb-12">
            Приобретите дом своей мечты с максимально выгодными условиями кредитования для семей с детьми.
          </p>
        </ScrollReveal>

        <GoldLine />

        {/* Hero rate display */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 mb-12 flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-16">

            {/* Big 6% */}
            <div className="relative flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full bg-empire-gold/10 blur-2xl scale-150" />
                <div className="relative flex flex-col items-center justify-center w-48 h-48 border border-empire-gold/30 rounded-full">
                  <div className="absolute inset-2 rounded-full border border-empire-gold/10" />
                  <div className="flex items-start">
                    <span className="font-heading text-empire-gold font-extralight text-8xl leading-none mt-2">
                      6
                    </span>
                    <span className="font-heading text-empire-gold text-4xl font-extralight mt-4">
                      %
                    </span>
                  </div>
                  <p className="font-heading text-empire-gold/60 text-[9px] tracking-empire mt-1">
                    ГОДОВЫХ
                  </p>
                </div>
              </motion.div>
            </div>

            <div>
              <p className="font-heading text-empire-pearl font-extralight tracking-empire text-2xl md:text-3xl mb-4">
                СЕМЕЙНАЯ ИПОТЕКА
              </p>
              <p className="font-body text-empire-pearl/50 text-sm tracking-wide-body leading-relaxed max-w-md mb-6">
                Специальная программа с фиксированной ставкой 6% для семей с детьми. Ставка действует на весь срок кредита без изменений.
              </p>

              {/* Perks */}
              <div className="space-y-3">
                {PERKS.map((perk, i) => (
                  <motion.div
                    key={perk}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-empire-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="font-body text-empire-pearl/60 text-sm tracking-wide-body">{perk}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Conditions grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {CONDITIONS.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                className="border border-empire-pearl/10 p-6 hover:border-empire-gold/30 transition-colors duration-500"
              >
                <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-3">{c.label.toUpperCase()}</p>
                <p className="font-heading text-empire-pearl font-extralight text-lg tracking-empire">{c.value}</p>
                {c.note && (
                  <p className="font-body text-empire-pearl/30 text-[10px] tracking-micro mt-2 leading-relaxed">({c.note})</p>
                )}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="flex items-center gap-3 border border-empire-gold/40 hover:bg-empire-gold hover:text-empire-graphite text-empire-gold py-4 px-8 font-heading text-xs tracking-empire transition-all duration-300">
              <Calculator className="w-4 h-4" strokeWidth={1.5} />
              РАССЧИТАТЬ ИПОТЕКУ
            </button>
            <p className="font-body text-empire-pearl/30 text-xs tracking-micro">
              Бесплатная консультация с ипотечным специалистом
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}