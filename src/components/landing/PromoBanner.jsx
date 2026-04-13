import { motion } from "framer-motion";
import { Gift, Star, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function PromoBanner() {
  return (
    <section className="bg-empire-graphite px-6 md:px-[8vw] py-8">
      <ScrollReveal>
        <motion.div
          className="relative overflow-hidden border border-empire-gold/40 p-6 md:p-10"
          style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(26,26,26,0) 60%)" }}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
            <Star className="w-full h-full text-empire-gold" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 relative z-10">
            {/* Icon + promo — row on mobile */}
            <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 border border-empire-gold/40 flex items-center justify-center">
                <Gift className="w-5 h-5 md:w-6 md:h-6 text-empire-gold" strokeWidth={1.2} />
              </div>
              {/* Promocode — inline on mobile */}
              <div className="md:hidden">
                <p className="font-body text-empire-pearl/30 text-[9px] tracking-micro mb-1 uppercase">Промокод</p>
                <div className="border border-empire-gold bg-empire-gold/5 px-4 py-2">
                  <p className="font-heading text-empire-gold font-light tracking-empire text-xl">
                    @GORIZONT
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <p className="font-heading text-empire-gold text-[10px] tracking-empire">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</p>
                <div className="h-[0.5px] flex-1 bg-empire-gold/20 hidden sm:block" />
              </div>
              <h3 className="font-heading text-empire-pearl font-extralight tracking-empire text-lg md:text-2xl mb-2">
                СОПРОВОЖДЕНИЕ СДЕЛКИ — БЕСПЛАТНО
              </h3>
              <p className="font-body text-empire-pearl/50 text-xs md:text-sm tracking-wide-body leading-relaxed max-w-xl">
                Укажите промокод при обращении и получите полное юридическое сопровождение сделки купли-продажи от АН «Империя» совершенно бесплатно.
              </p>
            </div>

            {/* Promocode — desktop only */}
            <div className="hidden md:block flex-shrink-0 text-center">
              <p className="font-body text-empire-pearl/30 text-[10px] tracking-micro mb-2 uppercase">Ваш промокод</p>
              <div className="border border-empire-gold bg-empire-gold/5 px-6 py-4">
                <p className="font-heading text-empire-gold font-light tracking-empire text-3xl">
                  @GORIZONT
                </p>
              </div>
              <p className="font-body text-empire-pearl/30 text-[10px] tracking-micro mt-2">
                Сообщите менеджеру
              </p>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-6 pt-4 border-t border-empire-pearl/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-body text-empire-pearl/25 text-xs tracking-micro">
              АН «Империя» Наталии Санталовой · Новокуйбышевск · +7 (987) 432-25-10
            </p>
            <a
              href="#hero-form"
              className="flex items-center gap-2 text-empire-gold font-heading text-xs tracking-empire hover:gap-3 transition-all"
            >
              ОСТАВИТЬ ЗАЯВКУ <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}