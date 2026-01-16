import { Clock, MapPin, Music, Baby, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    day: "Sunday",
    name: "Morning Worship",
    times: ["9:00 AM", "11:00 AM"],
    description: "Join us for uplifting worship and an inspiring message from God's Word.",
    icon: Music,
    featured: true,
  },
  {
    day: "Wednesday",
    name: "Midweek Bible Study",
    times: ["7:00 PM"],
    description: "Dive deeper into Scripture and grow in your understanding of God's truth.",
    icon: BookOpen,
  },
  {
    day: "Sunday",
    name: "Youth Ministry",
    times: ["10:00 AM"],
    description: "A vibrant community for teens to connect, grow, and serve together.",
    icon: Users,
  },
  {
    day: "Sunday",
    name: "Children's Church",
    times: ["9:00 AM", "11:00 AM"],
    description: "Age-appropriate worship and Bible teaching for children ages 3-12.",
    icon: Baby,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-cream-dark relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Worship With Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 mb-6">
            Service Times & Ministries
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer multiple opportunities throughout the week to worship, learn, and connect with our church family.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-elevated ${
                service.featured
                  ? "bg-secondary text-cream border-secondary"
                  : "bg-card border-border hover:border-gold/30"
              }`}
            >
              {service.featured && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-gold text-secondary rounded-full">
                  Main Service
                </span>
              )}
              
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                service.featured ? "bg-gold/20" : "bg-gold/10"
              }`}>
                <service.icon className={`h-6 w-6 ${service.featured ? "text-gold-light" : "text-gold"}`} />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm font-medium ${service.featured ? "text-gold-light" : "text-gold"}`}>
                  {service.day}
                </span>
              </div>

              <h3 className={`font-serif text-2xl font-semibold mb-2 ${
                service.featured ? "text-cream" : "text-secondary"
              }`}>
                {service.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <Clock className={`h-4 w-4 ${service.featured ? "text-gold-light" : "text-gold"}`} />
                <span className={service.featured ? "text-cream/80" : "text-muted-foreground"}>
                  {service.times.join(" & ")}
                </span>
              </div>

              <p className={`text-sm leading-relaxed ${
                service.featured ? "text-cream/70" : "text-muted-foreground"
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Location Card */}
        <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold text-secondary">Our Location</h4>
              <p className="text-muted-foreground">123 Faith Avenue, Grace City, GC 12345</p>
            </div>
          </div>
          <Button variant="goldOutline" size="lg">
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
