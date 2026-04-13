import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const HERO_IMG = "https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/874699229_omni-5debfde7-23cc-4dd6-90bb-9ace1d8f60c5.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden bg-empire-graphite">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Empire settlement aerial view at dusk"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Rich layered shadows for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-empire-graphite/95 via-empire-graphite/60 to-empire-graphite/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-empire-graphite via-empire-graphite/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-empire-graphite/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-[8vw] pt-24 pb-10 md:py-0 min-h-screen flex flex-col md:flex-row md:items-end md:justify-between md:h-screen gap-10 md:gap-8">

        {/* Left: Title */}
        <div className="flex-1 flex flex-col justify-end md:pb-24 mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/3b01b601b_logo-imperia.png"
                alt="АН Империя"
                className="h-12 w-12 md:h-16 md:w-16 object-contain opacity-90"
              />
              <div>
                <p className="font-heading text-empire-gold text-[10px] md:text-xs tracking-empire font-light">АН «ИМПЕРИЯ»</p>
                <p className="font-body text-empire-pearl/40 text-[9px] tracking-micro">Наталии Санталовой</p>
              </div>
            </div>
            <p className="font-heading text-empire-gold text-[10px] md:text-xs tracking-empire mb-3 font-light">
              КОТТЕДЖНЫЙ ПОСЁЛОК · ПОС. ГОРИЗОНТ
            </p>
            <h1 className="font-heading text-empire-pearl font-extralight tracking-empire text-[13vw] sm:text-[12vw] md:text-[11vw] leading-[0.95] select-none">
              ГОРИЗОНТ
            </h1>
            <div className="mt-5 flex items-start gap-4">
              <div className="w-10 h-[0.5px] bg-empire-gold/60 mt-2.5 flex-shrink-0" />
              <p className="font-body text-empire-pearl/50 text-xs md:text-sm tracking-wide-body leading-relaxed">
                Крымский проезд, Новокуйбышевск. Архитектура, достойная вашего внимания.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Contact form */}
        <div className="flex-shrink-0 pb-0 md:pb-24 w-full md:w-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}