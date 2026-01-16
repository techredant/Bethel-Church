import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  Clock,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Images
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
  const [date, setDate] = useState<Date | undefined>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          )}
        >
          <img
            src={slide.image}
            alt={slide.highlight}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/60 to-secondary/80" />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 z-20 p-3 rounded-full bg-secondary/40 text-cream"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 z-20 p-3 rounded-full bg-secondary/40 text-cream"
      >
        <ChevronRight />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold mb-8">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Sunday Service: 9:00 AM & 11:00 AM</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-6">
            {slides[currentSlide].title}{" "}
            <span className="text-gradient-gold">
              {slides[currentSlide].highlight}
            </span>{" "}
            {slides[currentSlide].subtitle}
          </h1>

          {/* Description */}
          <p className="text-xl text-cream/80 mb-10 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>

          {/* 🔥 NEW IMAGE SECTION */}
          <div className="flex flex-col items-center gap-10 mb-12">
            {/* Three round images */}
            <div className="flex gap-6">
              {[heroChurch, heroWorship, heroChoir].map((img, i) => (
                <div
                  key={i}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-gold/40 shadow-xl"
                >
                  <img
                    src={img}
                    alt="Church"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Triangle image */}
            {/* <div className="w-72 sm:w-96 h-48 overflow-hidden">
              <img
                src={heroCommunity}
                alt="Community"
                className="w-full h-full object-cover  shadow-2xl"
              />
            </div> */}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <Button variant="gold" size="xl">
                  <CalendarIcon className="mr-2" />
                  Join Us Sunday
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    setCalendarOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>

            <Button variant="heroLight" size="xl">
              <Play className="mr-2" />
              Watch Sermon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
