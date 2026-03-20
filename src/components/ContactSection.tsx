import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(4px)" }}
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Book Your <span className="gold-gradient-text">Private Screening</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-lg mx-auto">
            Ready to create unforgettable memories? Reach out to us and we'll help you plan the perfect experience.
          </p>
        </div>

        <div
          className={`card-surface rounded-3xl p-8 md:p-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(4px)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <a href="tel:+919876543210" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Call / WhatsApp</p>
                  <p className="font-display text-lg text-foreground">+91 98765 43210</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Location</p>
                  <p className="font-display text-lg text-foreground">MG Road, Vijayawada</p>
                  <p className="font-body text-xs text-muted-foreground">Andhra Pradesh, 520010</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Timings</p>
                  <p className="font-display text-lg text-foreground">10 AM – 11 PM</p>
                  <p className="font-body text-xs text-muted-foreground">Open all 7 days</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20book%20a%20private%20theater%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[hsl(142,70%,35%)] text-foreground px-6 py-4 rounded-2xl font-body font-medium text-base hover:scale-[0.97] active:scale-95 transition-transform duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
              <a
                href="https://instagram.com/rukramsera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border border-gold text-foreground px-6 py-4 rounded-2xl font-body font-medium text-base hover:bg-primary/10 active:scale-95 transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
