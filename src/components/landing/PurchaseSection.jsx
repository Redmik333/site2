import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";
import { Calculator, CreditCard, RefreshCw, ChevronRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const PURCHASE_METHODS = [
  {
    id: "mortgage",
    icon: CreditCard,
    title: "Ипотека",
    subtitle: "от 6% годовых",
    desc: "Разнообразные программы кредитования. Семейная ипотека, господдержка, военная ипотека. Полное сопровождение сделки от заявки до ключей.",
    highlight: "6%",
    highlightLabel: "семейная ипотека",
    tags: ["Семейная ипотека", "Господдержка", "Военная"],
  },
  {
    id: "installment",
    icon: Calculator,
    title: "Рассрочка",
    subtitle: "Без переплат",
    desc: "Индивидуальные условия оплаты без банков и лишних процентов. Гибкий график платежей под ваш бюджет напрямую от застройщика.",
    highlight: "0%",
    highlightLabel: "переплата",
    tags: ["Без банка", "Гибкий график", "От застройщика"],
  },
  {
    id: "tradein",
    icon: RefreshCw,
    title: "Trade-in",
    subtitle: "Зачёт имеющегося жилья",
    desc: "Продайте имеющуюся квартиру или дом и купите новый дом в Empire. Выгодная оценка, быстрая сделка, минимум хлопот.",
    highlight: "1",
    highlightLabel: "сделка вместо двух",
    tags: ["Быстрая оценка", "Зачёт жилья", "Без очередей"],
  },
];

export default function PurchaseSection() {
  const [activeMethod, setActiveMethod] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", agree1: true, agree2: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Заявка принята! Менеджер свяжется с вами в ближайшее время.");
    setForm({ name: "", phone: "", email: "", agree1: true, agree2: false });
    setLoading(false);
  };

  return (
    <section id="purchase" className="bg-empire-fog py-24 md:py-36 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-empire-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="px-6 md:px-[8vw] relative z-10">
        <ScrollReveal>
          <p className="font-heading text-empire-gold text-xs tracking-empire mb-4 font-light">
            ПОКУПКА
          </p>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-4">
            СПОСОБЫ ПОКУПКИ
          </h2>
          <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-lg leading-relaxed mb-12">
            Собрали в одном месте наши лучшие сервисы и инструменты покупки. Выбирайте условия, которые удобны именно вам.
          </p>
        </ScrollReveal>

        <GoldLine />

        {/* Methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12 mb-14">
          {PURCHASE_METHODS.map((method, i) => (
            <ScrollReveal key={method.id} delay={i * 0.12}>
              <motion.div
                className={`relative border p-8 cursor-pointer transition-all duration-500 group ${
                  activeMethod === method.id
                    ? "border-empire-gold/50 bg-empire-graphite"
                    : "border-empire-pearl/10 hover:border-empire-gold/30"
                }`}
                onClick={() => setActiveMethod(activeMethod === method.id ? null : method.id)}
              >
                {/* Icon + rate */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-empire-gold/20 group-hover:border-empire-gold/50 transition-colors">
                    <method.icon className="w-5 h-5 text-empire-gold" strokeWidth={1.2} />
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-empire-gold font-extralight text-2xl leading-none">
                      {method.highlight}
                    </div>
                    <div className="font-heading text-empire-pearl/30 text-[9px] tracking-empire mt-1">
                      {method.highlightLabel.toUpperCase()}
                    </div>
                  </div>
                </div>

                <h3 className="font-heading text-empire-pearl font-extralight tracking-empire text-xl mb-1">
                  {method.title.toUpperCase()}
                </h3>
                <p className="font-heading text-empire-gold text-xs tracking-empire mb-4">
                  {method.subtitle}
                </p>
                <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body leading-relaxed mb-6">
                  {method.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {method.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-heading tracking-empire text-empire-pearl/40 border border-empire-pearl/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-empire-gold font-heading text-xs tracking-empire group/btn">
                  <span>РАССЧИТАТЬ</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Active indicator */}
                {activeMethod === method.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-empire-gold"
                  />
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact form + info */}
        <ScrollReveal>
          <div className="border border-empire-pearl/10 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

              {/* Left: Form */}
              <div>
                <p className="font-heading text-empire-gold text-xs tracking-empire mb-2">
                  ПОЯВИЛИСЬ ВОПРОСЫ?
                </p>
                <h3 className="font-heading text-empire-pearl font-extralight tracking-empire text-2xl mb-2">
                  ОСТАВЬТЕ ЗАЯВКУ
                </h3>
                <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body mb-8 leading-relaxed">
                  Наши менеджеры свяжутся с вами и подберут оптимальный способ покупки.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    placeholder="Имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-0 border-b border-empire-pearl/20 rounded-none text-empire-pearl placeholder:text-empire-pearl/25 font-body text-sm focus-visible:ring-0 focus-visible:border-empire-gold/60 transition-colors px-0"
                  />
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-transparent border-0 border-b border-empire-pearl/20 rounded-none text-empire-pearl placeholder:text-empire-pearl/25 font-body text-sm focus-visible:ring-0 focus-visible:border-empire-gold/60 transition-colors px-0"
                  />
                  <Input
                    placeholder="E-mail"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-0 border-b border-empire-pearl/20 rounded-none text-empire-pearl placeholder:text-empire-pearl/25 font-body text-sm focus-visible:ring-0 focus-visible:border-empire-gold/60 transition-colors px-0"
                  />

                  {/* Checkboxes */}
                  <div className="space-y-3 pt-2">
                    {[
                      { key: "agree1", text: "Я согласен с условиями обработки персональных данных и политикой конфиденциальности" },
                      { key: "agree2", text: "Я согласен получать рассылку рекламных и информационно-справочных материалов" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-start gap-3 cursor-pointer group/check">
                        <div
                          onClick={() => setForm({ ...form, [item.key]: !form[item.key] })}
                          className={`flex-shrink-0 w-4 h-4 border mt-0.5 flex items-center justify-center transition-colors ${
                            form[item.key] ? "border-empire-gold bg-empire-gold/10" : "border-empire-pearl/20"
                          }`}
                        >
                          {form[item.key] && <CheckCircle2 className="w-3 h-3 text-empire-gold" />}
                        </div>
                        <span className="font-body text-empire-pearl/30 text-[11px] leading-relaxed">{item.text}</span>
                      </label>
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full border border-empire-gold/40 hover:bg-empire-gold hover:text-empire-graphite text-empire-gold py-4 font-heading text-xs tracking-empire transition-all duration-300 mt-2"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin mx-auto" />
                    ) : (
                      "СВЯЖИТЕСЬ СО МНОЙ"
                    )}
                  </button>
                </form>
              </div>

              {/* Right: Contact info */}
              <div className="flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-4">
                      КОНТАКТЫ
                    </p>
                    <div className="space-y-4">
                      <a
                        href="tel:+79874322510"
                        className="flex items-center gap-4 group/link"
                      >
                        <div className="w-10 h-10 border border-empire-pearl/10 group-hover/link:border-empire-gold/40 flex items-center justify-center transition-colors">
                          <Phone className="w-4 h-4 text-empire-gold" strokeWidth={1.2} />
                        </div>
                        <div>
                          <p className="font-heading text-empire-pearl font-light text-lg tracking-wide">
                            +7 (987) 432-25-10
                          </p>
                          <p className="font-body text-empire-pearl/30 text-xs tracking-micro">
                            Ежедневно с 9:00 до 21:00
                          </p>
                        </div>
                      </a>

                      <a
                        href="mailto:scorpion514@mail.ru"
                        className="flex items-center gap-4 group/link"
                      >
                        <div className="w-10 h-10 border border-empire-pearl/10 group-hover/link:border-empire-gold/40 flex items-center justify-center transition-colors">
                          <Mail className="w-4 h-4 text-empire-gold" strokeWidth={1.2} />
                        </div>
                        <div>
                          <p className="font-body text-empire-pearl/70 text-sm tracking-wide-body">
                            scorpion514@mail.ru
                          </p>
                          <p className="font-body text-empire-pearl/30 text-xs tracking-micro">
                            Ответим в течение часа
                          </p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 border border-empire-pearl/10 flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-empire-gold" strokeWidth={1.2} />
                        </div>
                        <div>
                          <p className="font-body text-empire-pearl/70 text-sm tracking-wide-body">
                            Крымский проезд
                          </p>
                          <p className="font-body text-empire-pearl/30 text-xs tracking-micro">
                            Новокуйбышевск, Самарская область
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick links */}
                  <div>
                    <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-4">
                      РАЗДЕЛЫ
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                      {["Коллекции домов", "Интерьеры", "Ипотека 6%", "Горизонт", "Инфраструктура", "Партнёрам"].map((l) => (
                        <p key={l} className="font-body text-empire-pearl/30 text-sm tracking-wide-body hover:text-empire-gold cursor-pointer transition-colors">
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}