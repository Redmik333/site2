import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";
import { Calculator } from "lucide-react";

const HOME_PRICE = 7500000; // базовая стоимость дома

const PROGRAMS = [
  { id: "family", label: "Семейная ипотека", rate: 6, color: "text-empire-gold", border: "border-empire-gold/50", bg: "bg-empire-gold/10" },
  { id: "standard", label: "Стандартная ипотека", rate: 18, color: "text-empire-pearl/60", border: "border-empire-pearl/20", bg: "bg-empire-pearl/5" },
];

function calcMonthly(principal, ratePercent, years) {
  const r = ratePercent / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function fmt(n) {
  return Math.round(n).toLocaleString("ru-RU");
}

export default function MortgageCalculator() {
  const [downPct, setDownPct] = useState(20);
  const [years, setYears] = useState(20);

  const downAmount = Math.round((HOME_PRICE * downPct) / 100);
  const principal = HOME_PRICE - downAmount;

  const results = useMemo(() =>
    PROGRAMS.map((p) => ({
      ...p,
      monthly: calcMonthly(principal, p.rate, years),
      total: calcMonthly(principal, p.rate, years) * years * 12,
      overpay: calcMonthly(principal, p.rate, years) * years * 12 - principal,
    })),
    [principal, years]
  );

  return (
    <section id="calculator" className="bg-empire-fog py-24 md:py-36 relative overflow-hidden">
      <div className="px-6 md:px-[8vw] relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-5 h-5 text-empire-gold" strokeWidth={1.2} />
            <p className="font-heading text-empire-gold text-xs tracking-empire font-light">ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР</p>
          </div>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-4">
            РАССЧИТАЙТЕ ПЛАТЁЖ
          </h2>
          <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-lg leading-relaxed mb-12">
            Стоимость дома от {fmt(HOME_PRICE)} ₽. Настройте параметры — и сравните условия по двум программам кредитования.
          </p>
        </ScrollReveal>

        <GoldLine />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Sliders */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-10">

              {/* Down payment */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <p className="font-heading text-empire-pearl/60 text-[10px] tracking-empire">ПЕРВОНАЧАЛЬНЫЙ ВЗНОС</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-empire-gold font-extralight text-3xl leading-none">{fmt(downAmount)}</span>
                    <span className="font-heading text-empire-gold text-sm">₽</span>
                    <span className="font-body text-empire-pearl/30 text-xs ml-1">({downPct}%)</span>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="range" min={20} max={80} step={5}
                    value={downPct}
                    onChange={(e) => setDownPct(Number(e.target.value))}
                    className="w-full h-[2px] appearance-none bg-empire-pearl/10 rounded-full outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-empire-gold [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    style={{ background: `linear-gradient(to right, #D4AF37 ${((downPct - 20) / 60) * 100}%, rgba(245,245,245,0.1) ${((downPct - 20) / 60) * 100}%)` }}
                  />
                  <div className="flex justify-between mt-2">
                    <span className="font-body text-empire-pearl/20 text-[10px]">20%</span>
                    <span className="font-body text-empire-pearl/20 text-[10px]">80%</span>
                  </div>
                </div>
              </div>

              {/* Term */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <p className="font-heading text-empire-pearl/60 text-[10px] tracking-empire">СРОК КРЕДИТА</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-empire-gold font-extralight text-3xl leading-none">{years}</span>
                    <span className="font-heading text-empire-gold text-sm">лет</span>
                  </div>
                </div>
                <input
                  type="range" min={5} max={30} step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-[2px] appearance-none bg-empire-pearl/10 rounded-full outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-empire-gold [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                  style={{ background: `linear-gradient(to right, #D4AF37 ${((years - 5) / 25) * 100}%, rgba(245,245,245,0.1) ${((years - 5) / 25) * 100}%)` }}
                />
                <div className="flex justify-between mt-2">
                  <span className="font-body text-empire-pearl/20 text-[10px]">5 лет</span>
                  <span className="font-body text-empire-pearl/20 text-[10px]">30 лет</span>
                </div>
              </div>

              {/* Summary */}
              <div className="border border-empire-pearl/10 p-6 space-y-3">
                <p className="font-heading text-empire-pearl/40 text-[10px] tracking-empire mb-4">ПАРАМЕТРЫ КРЕДИТА</p>
                {[
                  { label: "Стоимость дома", val: `${fmt(HOME_PRICE)} ₽` },
                  { label: "Первоначальный взнос", val: `${fmt(downAmount)} ₽ (${downPct}%)` },
                  { label: "Сумма кредита", val: `${fmt(principal)} ₽` },
                  { label: "Срок", val: `${years} лет` },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="font-body text-empire-pearl/40 text-xs tracking-wide-body">{row.label}</span>
                    <span className="font-heading text-empire-pearl text-xs tracking-empire">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-5">
              {results.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className={`border ${p.border} p-7 ${p.bg} relative overflow-hidden`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="font-heading text-empire-pearl/40 text-[10px] tracking-empire mb-1">{p.label.toUpperCase()}</p>
                      <div className="flex items-baseline gap-1">
                        <span className={`font-heading font-extralight text-4xl ${p.color}`}>{p.rate}</span>
                        <span className={`font-heading text-xl ${p.color}`}>%</span>
                        <span className="font-body text-empire-pearl/30 text-xs ml-1">годовых</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="font-heading text-empire-pearl/30 text-[10px] tracking-empire mb-1">ЕЖЕМЕСЯЧНЫЙ ПЛАТЁЖ</p>
                      <div className="flex items-baseline gap-1">
                        <span className={`font-heading font-extralight text-4xl md:text-5xl ${p.color}`}>{fmt(p.monthly)}</span>
                        <span className={`font-heading text-lg ${p.color}`}>₽</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-empire-pearl/10">
                      <div>
                        <p className="font-heading text-empire-pearl/30 text-[10px] tracking-empire mb-1">ПЕРЕПЛАТА</p>
                        <p className="font-heading text-empire-pearl/60 text-sm">{fmt(p.overpay)} ₽</p>
                      </div>
                      <div>
                        <p className="font-heading text-empire-pearl/30 text-[10px] tracking-empire mb-1">ИТОГО</p>
                        <p className="font-heading text-empire-pearl/60 text-sm">{fmt(p.total)} ₽</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <p className="font-body text-empire-pearl/20 text-[10px] tracking-micro leading-relaxed">
                * Расчёт ориентировочный. Точные условия уточняйте у менеджера. Семейная ипотека — при наличии детей, рождённых с 01.01.2018.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}