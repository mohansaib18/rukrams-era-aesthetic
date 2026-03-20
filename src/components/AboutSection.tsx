import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Tv, Music, Cake, Heart, Sparkles, Users } from "lucide-react";

const features = [
  { icon: Tv, title: "150\" 4K Screen", desc: "Crystal clear visuals on a massive private screen" },
  { icon: Music, title: "Dolby Surround", desc: "Immersive 7.1 channel surround sound experience" },
  { icon: Cake, title: "Birthday Setups", desc: "Custom decorations, cakes & balloon arrangements" },
  { icon: Heart, title: "Couple Specials", desc: "Romantic ambience with roses, candles & fairy lights" },
  { icon: Sparkles, title: "Custom Themes", desc: "Personalized themes for any celebration" },
  { icon: Users, title: "Group Parties", desc: "Accommodate up to 20 guests comfortably" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-divider max-w-xs mx-auto mb-24" />
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(4px)" }}
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
            An Experience Beyond<br />
            <span className="gold-gradient-text">Ordinary Cinema</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card-surface rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms",
                filter: isVisible ? "blur(0)" : "blur(4px)",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
