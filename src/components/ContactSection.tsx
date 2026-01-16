import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@betheldeliverance.org",
    href: "mailto:info@betheldeliverance.org",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Faith Avenue, Grace City, GC 12345",
    href: "#",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon-Fri: 9AM - 5PM",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-cream-dark relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 mb-6">
            We'd Love to Hear From You
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? Want to learn more about our church? Send us a message and we'll get back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-soft group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <p className="font-medium text-secondary">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background border-border focus:border-gold focus:ring-gold"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Subject
                </label>
                <Input
                  placeholder="How can we help?"
                  className="bg-background border-border focus:border-gold focus:ring-gold"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Your message..."
                  rows={4}
                  className="bg-background border-border focus:border-gold focus:ring-gold resize-none"
                />
              </div>

              <Button variant="gold" size="lg" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
