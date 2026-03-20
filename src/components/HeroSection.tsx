import { useEffect, useState } from "react";
import { Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-theater.jpg";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="RukRams Era Private Theater" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ filter: loaded ? "blur(0)" : "blur(4px)" }}
        >
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground font-body">Vijayawada's #1 Private Theatre</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-6">
            <span className="gold-gradient-text">RukRams</span>
            <br />
            <span className="text-foreground">Era</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-4 font-body font-light leading-relaxed">
            Your private cinematic escape for birthdays, anniversaries,
            proposals & celebrations that deserve the spotlight.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-10">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-body">Vijayawada, Andhra Pradesh</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#packages"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:scale-[0.97] active:scale-95 transition-transform duration-200 gold-glow"
            >
              Explore Packages
            </a>
            <a
              href="#gallery"
              className="border border-gold text-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:bg-primary/10 active:scale-95 transition-all duration-200"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
