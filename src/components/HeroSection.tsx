import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play, Clock, CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import heroChurch from "@/assets/hero-church.jpg";
import heroWorship from "@/assets/hero-worship.jpg";
import heroChoir from "@/assets/hero-choir.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

const slides = [
  {
    image: heroChurch,
    title: "Welcome to",
    highlight: "Bethel Deliverance",
    subtitle: "Church",
    description: "A place of hope, healing, and spiritual transformation.",
  },
  {
    image: heroWorship,
    title: "Experience",
    highlight: "Divine Worship",
    subtitle: "",
    description: "Join us as we lift our hearts and voices in praise.",
  },
  {
    image: heroChoir,
    title: "Celebrate with",
    highlight: "Joyful Praise",
    subtitle: "",
    description: "Our choir leads us into the presence of God every Sunday.",
  },
  {
    image: heroCommunity,
    title: "Be Part of Our",
    highlight: "Church Family",
    subtitle: "",
    description: "Find your community and grow in faith together with us.",
  },
];

const HeroSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          )}
        >
          <img
            src={slide.image}
            alt={slide.highlight}
            className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
            style={{
              transform: index === currentSlide ? "scale(1)" : "scale(1.05)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/60 to-secondary/80" />
          <div className="absolute inset-0 bg-gradient-light opacity-50" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-secondary/30 backdrop-blur-sm border border-gold/20 text-cream hover:bg-gold/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-secondary/30 backdrop-blur-sm border border-gold/20 text-cream hover:bg-gold/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold-light mb-8 animate-fade-up">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Sunday Service: 9:00 AM & 11:00 AM</span>
          </div>

          {/* Main Heading - Animated */}
          <div className="overflow-hidden">
            <h1
              key={currentSlide}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-up"
            >
              {slides[currentSlide].title}{" "}
              <span className="text-gradient-gold">{slides[currentSlide].highlight}</span>{" "}
              {slides[currentSlide].subtitle}
            </h1>
          </div>

          {/* Subtitle - Animated */}
          <div className="overflow-hidden">
            <p
              key={`desc-${currentSlide}`}
              className="text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto mb-10 animate-fade-up font-sans"
              style={{ animationDelay: "0.1s" }}
            >
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <Button variant="gold" size="xl" className="gap-3">
                  <CalendarIcon className="h-5 w-5" />
                  Join Us Sunday
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-cream border-gold/30" align="center">
                <div className="p-4 border-b border-gold/20">
                  <h3 className="font-serif text-lg font-semibold text-secondary">Pick a Sunday to Visit</h3>
                  <p className="text-sm text-secondary/70">Services at 9:00 AM & 11:00 AM</p>
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    setDate(newDate);
                    setCalendarOpen(false);
                  }}
                  disabled={(date) => date.getDay() !== 0 || date < new Date()}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            <Button variant="heroLight" size="xl" className="gap-3">
              <Play className="h-5 w-5" />
              Watch Sermon
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentSlide
                    ? "w-8 h-2 bg-gold"
                    : "w-2 h-2 bg-cream/40 hover:bg-cream/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
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