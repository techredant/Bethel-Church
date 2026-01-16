import { Heart, BookOpen, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Love & Compassion",
    description: "We are called to love God and love our neighbors, extending grace and compassion to all.",
  },
  {
    icon: BookOpen,
    title: "Biblical Foundation",
    description: "Our teachings are rooted in the timeless truths of Scripture, guiding us in faith and life.",
  },
  {
    icon: Users,
    title: "Community & Fellowship",
    description: "We believe in the power of authentic relationships and walking together in faith.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    description: "We are committed to helping every believer discover their purpose and grow in Christ.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 mb-6">
            A Church Rooted in Faith & Love
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For over 25 years, Bethel Deliverance Church has been a beacon of hope in our community. We believe in the transformative power of God's love and are committed to making disciples who impact the world.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-secondary rounded-2xl p-8 sm:p-12 text-center mb-16 shadow-elevated">
          <blockquote className="font-serif text-2xl sm:text-3xl text-cream italic leading-relaxed">
            "To proclaim the Gospel of Jesus Christ, nurture believers to spiritual maturity, and demonstrate God's love through service to our community and the world."
          </blockquote>
          <p className="text-gold font-medium mt-6">— Our Mission</p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <value.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-secondary mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
