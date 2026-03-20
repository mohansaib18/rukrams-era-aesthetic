import { useScrollReveal } from "@/hooks/useScrollReveal";
import birthdayImg from "@/assets/birthday-setup.jpg";
import coupleImg from "@/assets/couple-theater.jpg";
import partyImg from "@/assets/party-theater.jpg";
import heroImg from "@/assets/hero-theater.jpg";

const images = [
  { src: heroImg, alt: "Luxury theater setup with golden decorations", span: "md:col-span-2 md:row-span-2" },
  { src: birthdayImg, alt: "Birthday celebration setup with balloon arch", span: "" },
  { src: coupleImg, alt: "Romantic couple watching movie in private theater", span: "" },
  { src: partyImg, alt: "Group party celebration in theater", span: "md:col-span-2" },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(4px)" }}
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Moments That <span className="gold-gradient-text">Sparkle</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} rounded-2xl overflow-hidden group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: isVisible ? `${150 + i * 100}ms` : "0ms",
                filter: isVisible ? "blur(0)" : "blur(4px)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
