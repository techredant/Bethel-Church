import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Church interior with divine light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/60 to-secondary/80" />
        <div className="absolute inset-0 bg-gradient-light opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold-light mb-8 animate-fade-up">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Sunday Service: 9:00 AM & 11:00 AM</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Welcome to{" "}
            <span className="text-gradient-gold">Bethel Deliverance</span>{" "}
            Church
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto mb-10 animate-fade-up font-sans" style={{ animationDelay: "0.2s" }}>
            A place of hope, healing, and spiritual transformation. Come experience the love of God and find your purpose in our welcoming community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="xl">
              Plan Your Visit
            </Button>
            <Button variant="heroLight" size="xl" className="gap-3">
              <Play className="h-5 w-5" />
              Watch Sermon
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "25+", label: "Years of Ministry" },
              { value: "1,500+", label: "Church Family" },
              { value: "50+", label: "Community Programs" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-cream/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
