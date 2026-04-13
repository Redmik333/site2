import { useState } from "react";
import { Users, ArrowRight, Gift } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ReferralSection() {
  const [form, setForm] = useState({ name: "", phone: "", code: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Заявка партнёра отправлена! Мы свяжемся с вами.");
    setForm({ name: "", phone: "", code: "" });
    setLoading(false);
  };

  return (
    <section id="referral" className="bg-empire-graphite relative overflow-hidden">
      <GoldLine />

      <div className="py-24 md:py-36 px-6 md:px-[8vw]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: copy */}
          <div className="flex-1">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-empire-gold" strokeWidth={1.2} />
                <p className="font-heading text-empire-gold text-xs tracking-empire font-light">
                  РЕФЕРАЛЬНАЯ ПРОГРАММА
                </p>
              </div>
              <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-6 leading-tight">
                СТАТЬ<br />ПАРТНЁРОМ
              </h2>
              <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-md leading-relaxed mb-8">
                Есть друзья или знакомые, которые мечтают о собственном доме? Поделитесь своим уникальным промокодом — и получите гарантированный бонус при выходе на сделку.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-4">
                {/* Бонус рекомендателю */}
                <div className="border border-empire-gold/20 p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-empire-gold/5 blur-2xl rounded-full pointer-events-none" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 border border-empire-gold/40 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-empire-gold" strokeWidth={1.2} />
                    </div>
                    <div>
                      <p className="font-heading text-empire-pearl/40 text-[10px] tracking-empire mb-1">ВАШ БОНУС · КТО РЕКОМЕНДУЕТ</p>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="font-heading text-empire-gold font-extralight text-4xl md:text-5xl leading-none">50 000</span>
                        <span className="font-heading text-empire-gold text-xl">₽</span>
                      </div>
                      <p className="font-body text-empire-pearl/40 text-xs tracking-wide-body leading-relaxed">
                        при успешном выходе на сделку по вашей рекомендации
                      </p>
                    </div>
                  </div>
                </div>

                {/* Скидка покупателю */}
                <div className="border border-empire-pearl/10 p-6 md:p-8 relative overflow-hidden hover:border-empire-gold/30 transition-colors duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-empire-pearl/2 blur-2xl rounded-full pointer-events-none" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 border border-empire-pearl/20 flex items-center justify-center">
                      <span className="font-heading text-empire-gold text-lg font-extralight">%</span>
                    </div>
                    <div>
                      <p className="font-heading text-empire-pearl/40 text-[10px] tracking-empire mb-1">СКИДКА ДРУГУ · КТО ПОКУПАЕТ</p>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="font-heading text-empire-gold font-extralight text-4xl md:text-5xl leading-none">1</span>
                        <span className="font-heading text-empire-gold text-xl">%</span>
                      </div>
                      <p className="font-body text-empire-pearl/40 text-xs tracking-wide-body leading-relaxed">
                        скидка на покупку дома по рекомендации действующего клиента
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-8 md:p-10">
                <p className="font-heading text-empire-pearl font-extralight tracking-empire text-xs mb-1">
                  АНКЕТА ПАРТНЁРА
                </p>
                <div className="w-10 h-[0.5px] bg-empire-gold/60 mb-7" />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-0 border-b border-empire-pearl/20 rounded-none text-empire-pearl placeholder:text-empire-pearl/30 font-body text-sm tracking-wide-body focus-visible:ring-0 focus-visible:border-empire-gold/60 transition-colors px-0"
                  />
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-transparent border-0 border-b border-empire-pearl/20 rounded-none text-empire-pearl placeholder:text-empire-pearl/30 font-body text-sm tracking-wide-body focus-visible:ring-0 focus-visible:border-empire-gold/60 transition-colors px-0"
                  />
                  <div className="relative">
                    <Input
                      placeholder="Ваш уникальный код (если есть)"
                      value={form.code}
                      onChange={(e) => setForm({ ...form, code: e.target.value })}
                      className="bg-transparent border-0 border-b-2 border-empire-gold/30 rounded-none text-empire-gold placeholder:text-empire-pearl/25 font-body text-sm tracking-wide-body focus-visible:ring-0 focus-visible:border-empire-gold transition-colors px-0"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 flex items-center justify-center gap-3 bg-empire-gold/90 hover:bg-empire-gold text-empire-graphite font-heading tracking-empire text-xs py-5 transition-all duration-300"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-empire-graphite/30 border-t-empire-graphite rounded-full animate-spin" />
                    ) : (
                      <>
                        СТАТЬ ПАРТНЁРОМ
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-empire-pearl/25 text-[10px] font-body tracking-micro text-center">
                    Подробности программы обсудит ваш менеджер
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <GoldLine />
    </section>
  );
}