import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    date: { day: "19", month: "Jan" },
    title: "New Year Prayer & Fasting Week",
    time: "6:00 AM - 8:00 AM Daily",
    description: "Start the year with focused prayer and spiritual renewal.",
    category: "Prayer",
  },
  {
    date: { day: "26", month: "Jan" },
    title: "Community Outreach Day",
    time: "9:00 AM - 2:00 PM",
    description: "Serve our neighbors through food distribution and fellowship.",
    category: "Outreach",
  },
  {
    date: { day: "02", month: "Feb" },
    title: "Youth Conference 2026",
    time: "10:00 AM - 4:00 PM",
    description: "An empowering day of worship, teaching, and connection for young people.",
    category: "Youth",
  },
  {
    date: { day: "14", month: "Feb" },
    title: "Marriage Enrichment Dinner",
    time: "6:30 PM - 9:00 PM",
    description: "A special evening to celebrate and strengthen marriages.",
    category: "Family",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">What's Happening</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3">
              Upcoming Events
            </h2>
          </div>
          <Button variant="goldOutline" className="gap-2">
            View All Events <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Events List */}
        <div className="grid gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row gap-6 p-6 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-soft"
            >
              {/* Date Badge */}
              <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-secondary flex flex-col items-center justify-center text-cream">
                <span className="text-2xl font-serif font-bold">{event.date.day}</span>
                <span className="text-sm uppercase tracking-wider text-cream/70">{event.date.month}</span>
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-gold/10 text-gold rounded-full">
                    {event.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.time}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-secondary mb-1 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-center">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-gold transition-colors">
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
