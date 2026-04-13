import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";

const WHITE_IMG = "https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/405c154fa_81.png";
const GRAPHITE_IMG = "https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/58a7cb6ea_8.png";

const collections = [
  {
    id: "white",
    name: "WHITE CLASSIC",
    subtitle: "Элегантная классика",
    image: WHITE_IMG,
    specs: [
      { label: "Площадь", value: "от 120 м²" },
      { label: "Участок", value: "от 6 соток" },
      { label: "Материал", value: "Газоблок, штукатурка" },
      { label: "Кровля", value: "Металлочерепица" },
    ],
    description: "Светлые фасады, чистые линии, панорамное остекление. Для тех, кто ценит лаконичность и свет.",
    theme: "light",
  },
  {
    id: "graphite",
    name: "GRAPHITE MODERN",
    subtitle: "Современная мощь",
    image: GRAPHITE_IMG,
    specs: [
      { label: "Площадь", value: "от 140 м²" },
      { label: "Участок", value: "от 7 соток" },
      { label: "Материал", value: "Клинкерный кирпич" },
      { label: "Кровля", value: "Фальцевая кровля" },
    ],
    description: "Тёмный кирпич, выверенные пропорции, тёплый свет изнутри. Характер и индивидуальность.",
    theme: "dark",
  },
];

function CollectionCard({ collection, hovered, onHover, onLeave }) {
  const isLight = collection.theme === "light";
  const dimmed = hovered && hovered !== collection.id;

  return (
    <motion.div
      className="relative overflow-hidden group cursor-pointer flex-1 min-h-[420px] md:min-h-[700px]"
      onMouseEnter={() => onHover(collection.id)}
      onMouseLeave={onLeave}
      animate={{ opacity: dimmed ? 0.4 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <img
        src={collection.image}
        alt={collection.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-gradient-to-t from-white/90 via-white/40 to-transparent"
            : "bg-gradient-to-t from-empire-graphite/95 via-empire-graphite/50 to-transparent"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
        <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-3 font-light">
          КОЛЛЕКЦИЯ
        </p>
        <h3
          className={`font-heading font-extralight tracking-empire text-3xl md:text-4xl mb-3 ${
            isLight ? "text-empire-graphite" : "text-empire-pearl"
          }`}
        >
          {collection.name}
        </h3>
        <p
          className={`font-body text-sm tracking-wide-body mb-8 max-w-sm leading-relaxed ${
            isLight ? "text-empire-graphite/60" : "text-empire-pearl/50"
          }`}
        >
          {collection.description}
        </p>

        {/* Specs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8"
        >
          {collection.specs.map((spec) => (
            <div key={spec.label}>
              <p className="text-empire-gold text-[10px] font-heading tracking-empire mb-1">
                {spec.label.toUpperCase()}
              </p>
              <p
                className={`font-body text-sm tracking-wide-body ${
                  isLight ? "text-empire-graphite" : "text-empire-pearl/80"
                }`}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <button
          className={`flex items-center gap-3 border py-3 px-6 w-fit group/btn transition-all duration-300 ${
            isLight
              ? "border-empire-graphite/20 hover:border-empire-gold text-empire-graphite"
              : "border-empire-pearl/20 hover:border-empire-gold text-empire-pearl"
          }`}
        >
          <span className="font-heading text-xs tracking-empire">СМОТРЕТЬ ПЛАН</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function HouseCollections() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="collections" className="bg-empire-fog">
      <div className="px-6 md:px-[8vw] py-24 md:py-36">
        <ScrollReveal>
          <p className="font-heading text-empire-gold text-xs tracking-empire mb-4 font-light">
            КОЛЛЕКЦИИ ДОМОВ
          </p>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-16">
            ВЫБЕРИТЕ СВОЙ СТИЛЬ
          </h2>
        </ScrollReveal>

        <GoldLine />
      </div>

      <div className="flex flex-col md:flex-row">
        {collections.map((c) => (
          <CollectionCard
            key={c.id}
            collection={c}
            hovered={hovered}
            onHover={setHovered}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>
    </section>
  );
}