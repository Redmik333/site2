import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";

const STATS = [
  { value: "10", unit: "мин", label: "до центра города", sub: "Новокуйбышевск" },
  { value: "6", unit: "соток", label: "каждый участок", sub: "Собственная земля" },
  { value: "2", unit: "типа", label: "фасадов на выбор", sub: "Белый / Графитовый" },
  { value: "20", unit: "домов", label: "в посёлке", sub: "Закрытая территория" },
];

export default function ProjectStats() {
  return (
    <section className="bg-empire-fog py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-gold/20 to-transparent" />
      </div>

      <div className="px-6 md:px-[8vw]">
        <ScrollReveal>
          <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-10 font-light text-center">
            ПРОЕКТ В ЦИФРАХ
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-empire-pearl/8">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <motion.div
                className="flex flex-col items-center text-center px-6 py-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-heading text-empire-pearl font-extralight text-5xl md:text-6xl tracking-tight leading-none group-hover:text-empire-gold transition-colors duration-500">
                    {s.value}
                  </span>
                  <span className="font-heading text-empire-gold text-lg md:text-xl font-extralight">
                    {s.unit}
                  </span>
                </div>
                <p className="font-body text-empire-pearl/60 text-xs tracking-wide-body mb-1">{s.label}</p>
                <p className="font-body text-empire-pearl/25 text-[10px] tracking-micro">{s.sub}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}