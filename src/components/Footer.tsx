import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gold">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-display text-xl font-bold gold-gradient-text">
          RukRams Era
        </a>
        <p className="text-muted-foreground font-body text-sm flex items-center gap-1.5">
          Made with <Heart className="w-3.5 h-3.5 fill-primary text-primary" /> in Vijayawada
        </p>
        <p className="text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()} RukRams Era. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
