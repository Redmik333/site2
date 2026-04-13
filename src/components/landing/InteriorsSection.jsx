import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ROOMS = [
  {
    id: "hall",
    label: "Холл",
    sublabel: "Entrance Hall",
    image: "https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/2364d49f1_5.png",
    desc: "Просторный холл с мраморным напольным покрытием, высокими потолками и встроенной подсветкой.",
    area: "от 18 м²",
  },
  {
    id: "living1",
    label: "Гостиная",
    sublabel: "Living Room",
    image: "https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/13a10b63c_4.png",
    desc: "Светлая гостиная с панорамными окнами, натуральным паркетом и продуманным освещением.",
    area: "от 30 м²",
  },
  {
    id: "living2",
    label: "Зал",
    sublabel: "Lounge",
    image: "https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/a8e8de581_3.png",
    desc: "Уютный зал с тёплым освещением, деревянными акцентами и камерной атмосферой.",
    area: "от 22 м²",
  },
  {
    id: "living3",
    label: "Жилая комната",
    sublabel: "Room",
    image: "https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/4aa931093_1.png",
    desc: "Просторная жилая комната с большим окном, светлыми стенами и качественными отделочными материалами.",
    area: "от 20 м²",
  },
];

export default function InteriorsSection() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setActive((a) => (a - 1 + ROOMS.length) % ROOMS.length);
  const next = () => setActive((a) => (a + 1) % ROOMS.length);

  return (
    <section id="interiors" className="bg-empire-graphite py-24 md:py-36">
      <div className="px-6 md:px-[8vw] mb-16">
        <ScrollReveal>
          <p className="font-heading text-empire-gold text-xs tracking-empire mb-4 font-light">
            ИНТЕРЬЕРЫ
          </p>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-4">
            ПРОСТРАНСТВА ДОМА
          </h2>
          <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-lg leading-relaxed">
            Каждое помещение спроектировано с учётом принципов комфорта и эстетики. Чистовая отделка под ключ.
          </p>
        </ScrollReveal>
        <div className="mt-8">
          <GoldLine />
        </div>
      </div>

      {/* Main gallery */}
      <div className="px-6 md:px-[8vw]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">

          {/* Main image */}
          <div className="flex-1 relative overflow-hidden group cursor-pointer" onClick={() => setLightbox(active)}>
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={ROOMS[active].image}
                alt={ROOMS[active].label}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-[320px] md:h-[500px] object-cover"
              />
            </AnimatePresence>

            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-empire-graphite/90 to-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-1">
                    {ROOMS[active].sublabel.toUpperCase()}
                  </p>
                  <h3 className="font-heading text-empire-pearl font-extralight tracking-empire text-xl mb-2">
                    {ROOMS[active].label.toUpperCase()}
                  </h3>
                  <p className="font-body text-empire-pearl/50 text-xs tracking-wide-body leading-relaxed max-w-sm">
                    {ROOMS[active].desc}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-6 h-[0.5px] bg-empire-gold" />
                    <span className="text-empire-gold text-xs font-heading tracking-empire">{ROOMS[active].area}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Zoom hint */}
            <div className="absolute top-4 right-4 glass-panel-light px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-empire-pearl/70 text-[10px] font-heading tracking-empire">УВЕЛИЧИТЬ</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 w-full md:w-36">
            {ROOMS.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActive(i)}
                className={`relative flex-shrink-0 w-24 md:w-36 h-20 md:h-24 overflow-hidden transition-all duration-300 ${
                  i === active ? "ring-1 ring-empire-gold" : "opacity-50 hover:opacity-80"
                }`}
              >
                <img src={r.image} alt={r.label} className="w-full h-full object-cover" />
                {i === active && (
                  <div className="absolute inset-0 bg-empire-gold/10" />
                )}
                <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-empire-graphite/60">
                  <p className="text-empire-pearl/80 text-[9px] font-heading tracking-empire truncate">{r.label.toUpperCase()}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={prev}
            className="border border-empire-pearl/10 hover:border-empire-gold/40 text-empire-pearl/40 hover:text-empire-gold p-3 transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {ROOMS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-6 h-[2px] bg-empire-gold"
                    : "w-2 h-[2px] bg-empire-pearl/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="border border-empire-pearl/10 hover:border-empire-gold/40 text-empire-pearl/40 hover:text-empire-gold p-3 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-empire-graphite/95 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-empire-pearl/60 hover:text-empire-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={ROOMS[lightbox].image}
              alt={ROOMS[lightbox].label}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}