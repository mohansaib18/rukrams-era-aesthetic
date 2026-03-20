import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya & Karthik",
    event: "Anniversary Celebration",
    text: "We celebrated our 3rd anniversary here and it was absolutely magical. The rose petal setup and candle-lit ambience made it unforgettable. Highly recommend the Celebration package!",
    rating: 5,
  },
  {
    name: "Sravani M.",
    event: "Birthday Party",
    text: "Threw a surprise birthday bash for my best friend — the decorations were stunning, the sound quality was incredible, and the team went above and beyond. Worth every penny!",
    rating: 5,
  },
  {
    name: "Ravi Teja & Friends",
    event: "Grand Premiere Package",
    text: "The fog entry effect was the highlight! We had a group of 18 and everyone was blown away by the setup. The cake and snack platter were delicious too. Already planning our next visit.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="reviews" className="py-24 md:py-32 bg-charcoal-light">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(4px)" }}
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            What Our <span className="gold-gradient-text">Guests Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`card-surface rounded-2xl p-8 relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms",
                filter: isVisible ? "blur(0)" : "blur(4px)",
              }}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-secondary-foreground font-body text-sm leading-relaxed mb-6">"{r.text}"</p>

              <div>
                <p className="font-display text-lg font-semibold text-foreground">{r.name}</p>
                <p className="text-muted-foreground font-body text-xs">{r.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
