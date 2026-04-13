import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", promocode: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Пожалуйста, укажите имя и телефон");
      return;
    }
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setForm({ name: "", phone: "", promocode: "" });
    setLoading(false);
  };

  return (
    <motion.form
      id="hero-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel p-6 md:p-10 w-full md:max-w-sm space-y-5"
    >
      <div>
        <p className="font-heading text-empire-pearl font-extralight tracking-empire text-xs mb-1">
          ЗАПИСЬ НА ПРОСМОТР
        </p>
        <div className="w-12 h-[0.5px] bg-empire-gold/60" />
      </div>

      <div className="space-y-4">
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
            placeholder="Промокод"
            value={form.promocode}
            onChange={(e) => setForm({ ...form, promocode: e.target.value })}
            className="bg-transparent border-0 border-b-2 border-empire-gold/40 rounded-none text-empire-gold placeholder:text-empire-pearl/30 font-body text-sm tracking-wide-body focus-visible:ring-0 focus-visible:border-empire-gold transition-colors px-0"
          />
          <span className="absolute right-0 bottom-2 text-empire-gold/40 text-[10px] font-heading tracking-empire">
            VIP
          </span>
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-empire-gold/90 hover:bg-empire-gold text-empire-graphite font-heading tracking-empire text-xs py-6 rounded-none transition-all duration-300"
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-empire-graphite/30 border-t-empire-graphite rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-3.5 h-3.5 mr-2" />
            ОТПРАВИТЬ ЗАЯВКУ
          </>
        )}
      </Button>

      <p className="text-empire-pearl/30 text-[10px] font-body tracking-micro text-center leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </motion.form>
  );
}