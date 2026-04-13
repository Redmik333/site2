import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";
import { Construction, CalendarDays, Home, Layers } from "lucide-react";

const MILESTONES = [
  { label: "Проектирование", pct: 100, done: true },
  { label: "Фундамент", pct: 100, done: true },
  { label: "Стены и перекрытия", pct: 40, done: false },
  { label: "Кровля", pct: 0, done: false },
  { label: "Чистовая отделка", pct: 0, done: false },
  { label: "Благоустройство", pct: 0, done: false },
];

export default function HorizonSection() {
  return (
    <section id="horizon" className="bg-empire-fog py-24 md:py-36 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 font-heading text-empire-pearl/[0.03] text-[16vw] font-extralight tracking-empire select-none pointer-events-none">
        ГОРИЗОНТ
      </div>

      <div className="px-6 md:px-[8vw] relative z-10">
        <ScrollReveal>
          <p className="font-heading text-empire-gold text-xs tracking-empire mb-4 font-light">
            НОВЫЙ ПРОЕКТ
          </p>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-4">
            ПОСЁЛОК ГОРИЗОНТ
          </h2>
          <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-lg leading-relaxed mb-12">
            Следующий проект от Empire. Новый стандарт загородной жизни в 15 минутах от центра города. Старт продаж — лето 2025.
          </p>
        </ScrollReveal>

        <GoldLine />

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          {[
            { icon: Home, val: "48", unit: "домовладений", label: "В проекте" },
            { icon: CalendarDays, val: "IV кв.", unit: "2025", label: "Сдача" },
            { icon: Construction, val: "12", unit: "%", label: "Готовность" },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="flex items-start gap-5 border border-empire-pearl/10 p-6 hover:border-empire-gold/30 transition-colors duration-500">
                <s.icon className="w-5 h-5 text-empire-gold mt-1" strokeWidth={1.2} />
                <div>
                  <p className="font-heading text-empire-pearl/40 text-[10px] tracking-empire mb-1">
                    {s.label.toUpperCase()}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-empire-pearl font-extralight text-3xl tracking-empire">
                      {s.val}
                    </span>
                    <span className="font-heading text-empire-gold text-sm tracking-empire">{s.unit}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Construction progress */}
        <ScrollReveal>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <p className="font-heading text-empire-pearl text-xs tracking-empire">
                ЭТАП СТРОИТЕЛЬСТВА
              </p>
              <div className="flex items-baseline gap-1">
                <motion.span
                  className="font-heading text-empire-gold text-3xl font-extralight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  12
                </motion.span>
                <span className="font-heading text-empire-gold/60 text-sm">%</span>
              </div>
            </div>

            {/* Main progress bar */}
            <div className="w-full h-[2px] bg-empire-pearl/10 rounded-full overflow-hidden mb-8">
              <motion.div
                className="h-full bg-empire-gold rounded-full relative"
                initial={{ width: 0 }}
                whileInView={{ width: "12%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-empire-gold rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
              </motion.div>
            </div>

            {/* Milestone breakdown */}
            <div className="space-y-4">
              {MILESTONES.map((m, i) => (
                <div key={m.label} className="flex items-center gap-4">
                  <div className="w-28 flex-shrink-0">
                    <p className={`font-body text-[11px] tracking-wide-body ${m.done ? "text-empire-gold/80" : "text-empire-pearl/30"}`}>
                      {m.label}
                    </p>
                  </div>
                  <div className="flex-1 h-[1px] bg-empire-pearl/10 overflow-hidden rounded-full">
                    <motion.div
                      className={`h-full rounded-full ${m.done ? "bg-empire-gold" : "bg-empire-gold/40"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * i + 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className={`text-[10px] font-heading tracking-empire w-8 text-right ${m.pct > 0 ? "text-empire-gold" : "text-empire-pearl/20"}`}>
                    {m.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}