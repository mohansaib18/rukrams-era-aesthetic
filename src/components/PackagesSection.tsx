import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Crown } from "lucide-react";

const packages = [
  {
    name: "Classic",
    price: "₹1,499",
    duration: "2 Hours",
    features: ["150\" 4K Screen", "Dolby Surround Sound", "AC Private Room", "Up to 6 Guests", "Complimentary Snacks"],
    popular: false,
  },
  {
    name: "Celebration",
    price: "₹2,999",
    duration: "3 Hours",
    features: ["Everything in Classic", "Birthday Decoration", "Custom Cake (1 kg)", "Photography Session", "Up to 12 Guests", "Welcome Drinks"],
    popular: true,
  },
  {
    name: "Grand Premiere",
    price: "₹4,999",
    duration: "4 Hours",
    features: ["Everything in Celebration", "Premium Decorations", "Designer Cake (2 kg)", "Professional Photoshoot", "Up to 20 Guests", "Full Snack Platter", "Fog Entry Effect"],
    popular: false,
  },
];

export default function PackagesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="packages" className="py-24 md:py-32 bg-charcoal-light relative">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(4px)" }}
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">Packages</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Choose Your <span className="gold-gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 transition-all duration-700 ${
                pkg.popular
                  ? "card-surface border-primary/40 gold-glow scale-[1.02]"
                  : "card-surface"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms",
                filter: isVisible ? "blur(0)" : "blur(4px)",
              }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
                  <Crown className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">{pkg.name}</h3>
                <p className="text-muted-foreground font-body text-sm">{pkg.duration}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-display font-bold gold-gradient-text">{pkg.price}</span>
                <span className="text-muted-foreground font-body text-sm ml-1">/ session</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 font-body text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-full font-body font-medium text-sm transition-all duration-200 hover:scale-[0.97] active:scale-95 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground"
                    : "border border-gold text-foreground hover:bg-primary/10"
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
