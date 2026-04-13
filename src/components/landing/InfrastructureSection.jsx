import { Church, Bus, ShoppingBag, TreePine, Shield, Droplets, Hammer, GraduationCap, Baby, Fuel, Flame } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";

const INFRA_ITEMS = [
  {
    icon: Church,
    title: "Храм Святителя Николая",
    desc: "Духовный центр в шаговой доступности от посёлка — 2 минуты пешком",
    accent: true,
  },
  {
    icon: Bus,
    title: "2 минуты до транспорта",
    desc: "Остановка у посёлка — удобное сообщение с городом и областным центром",
    accent: true,
  },
  {
    icon: ShoppingBag,
    title: "Коммерческая инфраструктура",
    desc: "ТЦ Миндаль, магазины, сервисы — в 2 минутах от дома",
    accent: true,
  },
  {
    icon: GraduationCap,
    title: "Гимназия",
    desc: "Общеобразовательная гимназия в шаговой доступности от посёлка",
    accent: true,
  },
  {
    icon: Baby,
    title: "Детский сад «Ладушки»",
    desc: "Дошкольное учреждение рядом — удобно для семей с маленькими детьми",
    accent: true,
  },
  {
    icon: Fuel,
    title: "АЗС Татнефть",
    desc: "Заправочная станция в 5 минутах — качественное топливо всегда рядом",
    accent: false,
  },
  {
    icon: Flame,
    title: "Ледовый дворец Роснефть Арена",
    desc: "Крупный спортивный объект города в ближайшей доступности",
    accent: false,
  },
  {
    icon: TreePine,
    title: "Зелёные зоны",
    desc: "Ландшафтный дизайн и прогулочные аллеи на территории посёлка",
    accent: false,
  },
  {
    icon: Shield,
    title: "Безопасность",
    desc: "Закрытая огороженная территория с видеонаблюдением",
    accent: false,
  },
  {
    icon: Droplets,
    title: "Коммуникации",
    desc: "Автономное водоснабжение и автономное отопление",
    accent: false,
  },
];

const PANORAMAS = [
  {
    src: "https://yandex.ru/map-widget/v1/?ll=49.981324%2C53.092581&panorama%5Bdirection%5D=170.922336%2C-3.333048&panorama%5Bfull%5D=true&panorama%5Bid%5D=1371877586_700455057_23_1695205350&panorama%5Bpoint%5D=49.978902%2C53.093103&panorama%5Bspan%5D=110.204106%2C60.000000&z=18.31",
    label: "Вид 1 — улица",
  },
  {
    src: "https://yandex.ru/map-widget/v1/?ll=49.981324%2C53.092581&panorama%5Bdirection%5D=209.679447%2C2.560621&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=49.975288%2C53.087055&panorama%5Bspan%5D=110.204106%2C60.000000&z=18.31",
    label: "Вид 2 — район",
  },
  {
    src: "https://yandex.ru/map-widget/v1/?ll=49.981324%2C53.092581&panorama%5Bdirection%5D=178.224314%2C-2.107292&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=49.978095%2C53.093332&panorama%5Bspan%5D=110.204106%2C60.000000&z=18.31",
    label: "Вид 3 — въезд",
  },
  {
    src: "https://yandex.ru/map-widget/v1/?ll=49.981324%2C53.092581&panorama%5Bdirection%5D=268.162345%2C-8.459938&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=49.990713%2C53.093172&panorama%5Bspan%5D=110.204106%2C60.000000&z=18.31",
    label: "Вид 4 — территория",
  },
  {
    src: "https://yandex.ru/map-widget/v1/?ll=49.981324%2C53.092581&panorama%5Bdirection%5D=350.944423%2C-2.286149&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=49.996592%2C53.086765&panorama%5Bspan%5D=110.204106%2C60.000000&z=18.31",
    label: "Вид 5 — окрестности",
  },
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="bg-empire-graphite py-24 md:py-36 relative">
      <div className="px-6 md:px-[8vw]">
        <ScrollReveal>
          <p className="font-heading text-empire-gold text-xs tracking-empire mb-4 font-light">
            ИНФРАСТРУКТУРА
          </p>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-4">
            РИТМ ЖИЗНИ
          </h2>
          <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-lg leading-relaxed mb-16">
            Всё необходимое — на расстоянии нескольких минут. Продуманная инфраструктура создаёт комфортную среду для жизни.
          </p>
        </ScrollReveal>

        <GoldLine />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
          {INFRA_ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.07}>
              <div className="group flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-empire-gold/20 group-hover:border-empire-gold/60 transition-colors duration-500">
                  <item.icon
                    className={`w-5 h-5 ${
                      item.accent ? "text-empire-gold" : "text-empire-pearl/40"
                    } group-hover:text-empire-gold transition-colors duration-500`}
                    strokeWidth={1.2}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-empire-pearl font-light tracking-empire text-sm mb-2">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Panorama section */}
        <ScrollReveal>
          <div className="mt-24">
            <p className="font-heading text-empire-gold text-xs tracking-empire mb-4 font-light">
              ПАНОРАМЫ РАЙОНА
            </p>
            <h3 className="font-heading text-empire-pearl font-extralight tracking-empire text-2xl md:text-3xl mb-4">
              ПОСМОТРИТЕ НА МЕСТО
            </h3>
            <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-lg leading-relaxed mb-8">
              Виртуальные панорамы улиц вокруг посёлка — убедитесь сами.
            </p>
            <GoldLine />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
              {PANORAMAS.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative border border-empire-gold/15 overflow-hidden group hover:border-empire-gold/40 transition-colors duration-500">
                    <div className="absolute top-0 left-0 right-0 z-10 px-4 py-2 bg-empire-graphite/80 backdrop-blur-sm border-b border-empire-gold/10 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-empire-gold" />
                      <span className="font-heading text-empire-pearl/60 text-[10px] tracking-empire">{p.label.toUpperCase()}</span>
                    </div>
                    <iframe
                      src={p.src}
                      width="100%"
                      height="280"
                      frameBorder="0"
                      allowFullScreen
                      className="block w-full"
                      style={{ display: "block" }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}