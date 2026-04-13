import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Акции", href: "#referral" },
  { label: "Инфраструктура", href: "#infrastructure" },
  { label: "Коллекции", href: "#collections" },
  { label: "Интерьеры", href: "#interiors" },
  { label: "Ипотека", href: "#mortgage" },
  { label: "Горизонт", href: "#horizon" },
  { label: "Строительство", href: "#build" },
  { label: "Покупка", href: "#purchase" },
  { label: "Расположение", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-empire-graphite/90 backdrop-blur-md border-b border-empire-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-[8vw] py-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src="https://media.base44.com/images/public/69d4f6465398ec8cf424e1bc/3b01b601b_logo-imperia.png"
            alt="АН Империя"
            className="h-12 w-12 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-heading text-empire-gold font-extralight tracking-empire text-xs leading-tight">АН «ИМПЕРИЯ»</p>
            <p className="font-body text-empire-pearl/40 text-[9px] tracking-micro">Наталии Санталовой</p>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-empire-pearl/70 hover:text-empire-gold text-sm font-body tracking-micro transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#hero-form"
            className="border border-empire-gold/40 text-empire-gold text-sm px-6 py-2 tracking-micro hover:bg-empire-gold hover:text-empire-graphite transition-all duration-300"
          >
            Связаться
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-empire-pearl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-empire-graphite/95 backdrop-blur-md border-t border-empire-gold/10 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-empire-pearl/70 hover:text-empire-gold text-base font-body tracking-micro transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#hero-form"
                onClick={() => setMenuOpen(false)}
                className="border border-empire-gold/40 text-empire-gold text-center text-sm px-6 py-3 tracking-micro"
              >
                Связаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}