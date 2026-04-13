import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-empire-fog border-t border-empire-pearl/5">
      <div className="px-6 md:px-[8vw] py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/3b01b601b_logo-imperia.png"
                alt="АН Империя"
                className="h-14 w-14 object-contain opacity-80"
              />
              <div>
                <h3 className="font-heading text-empire-pearl font-extralight tracking-empire text-lg">
                  АН «ИМПЕРИЯ»
                </h3>
                <p className="font-body text-empire-pearl/30 text-[10px] tracking-micro">Наталии Санталовой</p>
              </div>
            </div>
            <p className="font-body text-empire-pearl/30 text-xs tracking-wide-body leading-relaxed max-w-xs">
              Коттеджный посёлок Горизонт. Крымский проезд, Новокуйбышевск. Архитектура, достойная вашего имени.
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-2">
              КОНТАКТЫ
            </p>
            <a
              href="tel:+79874322510"
              className="flex items-center gap-3 text-empire-pearl/50 hover:text-empire-gold transition-colors font-body text-sm tracking-wide-body"
            >
              <Phone className="w-4 h-4" strokeWidth={1.2} />
              +7 (987) 432-25-10
            </a>
            <a
              href="mailto:scorpion514@mail.ru"
              className="flex items-center gap-3 text-empire-pearl/50 hover:text-empire-gold transition-colors font-body text-sm tracking-wide-body"
            >
              <Mail className="w-4 h-4" strokeWidth={1.2} />
              scorpion514@mail.ru
            </a>
            <div className="flex items-center gap-3 text-empire-pearl/50 font-body text-sm tracking-wide-body">
              <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.2} />
              <span>Крымский проезд, Новокуйбышевск, Самарская обл.</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="font-heading text-empire-gold text-[10px] tracking-empire mb-2">
              НАВИГАЦИЯ
            </p>
            {["Инфраструктура", "Коллекции", "Расположение", "Партнёрам"].map((l) => (
              <a
                key={l}
                href={`#${l === "Инфраструктура" ? "infrastructure" : l === "Коллекции" ? "collections" : l === "Расположение" ? "location" : "referral"}`}
                className="text-empire-pearl/40 hover:text-empire-gold transition-colors font-body text-sm tracking-wide-body"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-empire-pearl/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-empire-pearl/20 text-[10px] font-body tracking-micro">
            © 2026 EMPIRE. Все права защищены.
          </p>
          <p className="text-empire-pearl/20 text-[10px] font-body tracking-micro">
            Не является публичной офертой
          </p>
        </div>
      </div>
    </footer>
  );
}