import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GoldLine from "./GoldLine";
import L from "leaflet";

const goldIcon = new L.DivIcon({
  html: `<div style="width:20px;height:20px;background:#D4AF37;border-radius:50%;box-shadow:0 0 24px rgba(212,175,55,0.8),0 0 8px rgba(212,175,55,1);border:2px solid #1A1A1A;"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  className: "",
});

const makeIcon = (emoji, size = 22) => new L.DivIcon({
  html: `<div style="font-size:${size}px;line-height:1;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.7));">${emoji}</div>`,
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  className: "",
});

const churchIcon = makeIcon("⛪", 22);
const shopIcon = makeIcon("🛍️", 22);
const busIcon = makeIcon("🚌", 22);
const storeIcon = makeIcon("🏪", 22);
const iceIcon = makeIcon("⛸️", 22);
const schoolIcon = makeIcon("🏫", 22);
const kidsIcon = makeIcon("🧒", 22);
const fuelIcon = makeIcon("⛽", 22);
const superIcon = makeIcon("🛒", 22);
const poolIcon = makeIcon("🏊", 22);
const pharmacyIcon = makeIcon("💊", 22);
const wineIcon = makeIcon("🍷", 22);
const mcIcon = makeIcon("🍔", 22);
const mfcIcon = makeIcon("🏛️", 22);
const cosIcon = makeIcon("💄", 22);
const ozIcon = makeIcon("📦", 22);
const cafeIcon = makeIcon("☕", 22);

const GORIZONT_POS = [53.086798, 49.992490];
const CENTER = [53.088500, 49.987000];

const NEARBY = [
  { pos: [53.087181, 49.991376], label: "Храм Николая Чудотворца", icon: churchIcon },
  { pos: [53.087385, 49.991323], label: "Остановка", icon: busIcon },
  { pos: [53.092570, 49.979100], label: "ТЦ Миндаль", icon: shopIcon },
  { pos: [53.088070, 49.990967], label: "Магазин Победа & Союзный", icon: storeIcon },
  { pos: [53.086469, 49.975247], label: "Ледовый дворец Роснефть Арена", icon: iceIcon },
  { pos: [53.093283, 49.989485], label: "Гимназия", icon: schoolIcon },
  { pos: [53.090704, 49.992458], label: "Детский сад Ладушки", icon: kidsIcon },
  { pos: [53.087378, 49.996706], label: "АЗС Татнефть", icon: fuelIcon },
  { pos: [53.088946, 49.978768], label: "Чижик", icon: superIcon },
  { pos: [53.091591, 49.989566], label: "Водолей (бассейны)", icon: poolIcon },
  { pos: [53.090271, 49.989161], label: "Здравсити", icon: pharmacyIcon },
  { pos: [53.089833, 49.990446], label: "Магнит", icon: superIcon },
  { pos: [53.089071, 49.992449], label: "Красное & Белое / ПВЗ OZON", icon: wineIcon },
  { pos: [53.086540, 49.981723], label: "Детский сад Кораблик", icon: kidsIcon },
  { pos: [53.089119, 49.975139], label: "МФЦ", icon: mfcIcon },
  { pos: [53.093013, 49.978121], label: "Вкусно — и точка", icon: mcIcon },
  { pos: [53.087037, 49.987850], label: "Пятёрочка", icon: superIcon },
  { pos: [53.090958, 49.987014], label: "Магнит Косметик", icon: cosIcon },
  { pos: [53.088692, 49.975893], label: "19 школа", icon: schoolIcon },
  { pos: [53.092326, 49.983107], label: "Чижик & Карамель", icon: cafeIcon },
];

export default function LocationMap() {
  return (
    <section id="location" className="bg-empire-graphite py-24 md:py-36">
      <div className="px-6 md:px-[8vw] mb-16">
        <ScrollReveal>
          <p className="font-heading text-empire-gold text-xs tracking-empire mb-4 font-light">
            РАСПОЛОЖЕНИЕ
          </p>
          <h2 className="font-heading text-empire-pearl font-extralight tracking-empire text-3xl md:text-5xl mb-4">
            ПОС. ГОРИЗОНТ
          </h2>
          <p className="font-body text-empire-pearl/40 text-sm tracking-wide-body max-w-lg leading-relaxed">
            Крымский проезд, Новокуйбышевск, Самарская область. Закрытая территория с удобным доступом к городской инфраструктуре.
          </p>
        </ScrollReveal>
        <div className="mt-8">
          <GoldLine />
        </div>
      </div>

      <ScrollReveal>
        <div className="px-6 md:px-[4vw]">
          {/* Styled map wrapper */}
          <div className="border border-empire-gold/20 overflow-hidden">
            {/* Map header bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-empire-fog border-b border-empire-gold/15">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-empire-gold" strokeWidth={1.5} />
                <span className="font-heading text-empire-pearl text-xs tracking-empire">ПОС. ГОРИЗОНТ · НОВОКУЙБЫШЕВСК</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-empire-gold animate-pulse" />
                <span className="font-body text-empire-pearl/40 text-[10px] tracking-micro">Крымский проезд</span>
              </div>
            </div>

            <div className="relative w-full h-[480px] md:h-[580px]">
              <MapContainer
                center={CENTER}
                zoom={14}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                attributionControl={false}
                className="z-0"
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

                {/* Main marker */}
                <Marker position={GORIZONT_POS} icon={goldIcon}>
                  <Popup>
                    <div className="text-center p-1">
                      <p className="font-semibold text-sm">ПОС. ГОРИЗОНТ</p>
                      <p className="text-xs text-gray-500 mt-1">АН «Империя» · Крымский проезд</p>
                    </div>
                  </Popup>
                </Marker>

                {/* Area circle */}
                <Circle
                  center={GORIZONT_POS}
                  radius={200}
                  pathOptions={{
                    color: "#D4AF37",
                    fillColor: "#D4AF37",
                    fillOpacity: 0.07,
                    weight: 1,
                    dashArray: "6 4",
                  }}
                />

                {/* POIs */}
                {NEARBY.map((poi) => (
                  <Marker key={poi.label} position={poi.pos} icon={poi.icon}>
                    <Popup>
                      <p className="text-xs font-medium">{poi.label}</p>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 z-[1000] glass-panel p-5 max-w-[260px]">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-empire-gold flex-shrink-0" strokeWidth={1.5} />
                  <p className="font-heading text-empire-pearl text-[10px] tracking-empire">ПОС. ГОРИЗОНТ</p>
                </div>
                <p className="font-body text-empire-pearl/50 text-[11px] leading-relaxed mb-3">
                  Крымский проезд, Новокуйбышевск, Самарская область
                </p>
                <div className="space-y-1.5">
                  {[
                    { emoji: "⛪", txt: "Храм — 2 мин." },
                    { emoji: "🛍️", txt: "ТЦ Миндаль — 5 мин." },
                    { emoji: "🏫", txt: "Гимназия — 7 мин." },
                    { emoji: "🧒", txt: "Д/с Ладушки — 4 мин." },
                  ].map((i) => (
                    <div key={i.txt} className="flex items-center gap-2">
                      <span className="text-xs">{i.emoji}</span>
                      <span className="font-body text-empire-pearl/40 text-[10px] tracking-micro">{i.txt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}