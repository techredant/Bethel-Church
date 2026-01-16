import { Church, Facebook, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Church className="h-8 w-8 text-gold" />
              <span className="font-serif text-xl font-bold">Bethel Deliverance Church</span>
            </a>
            <p className="text-cream/70 text-sm leading-relaxed max-w-md mb-6">
              A community of believers committed to sharing the love of Jesus Christ and making a difference in our world through faith, hope, and love.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Events", "Ministries", "Give Online"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Service Times</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <span className="text-gold">Sunday Worship</span>
                <br />9:00 AM & 11:00 AM
              </li>
              <li>
                <span className="text-gold">Wednesday Bible Study</span>
                <br />7:00 PM
              </li>
              <li>
                <span className="text-gold">Youth Service</span>
                <br />Friday 6:30 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/60">
          <p>© 2026 Bethel Deliverance Church. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-gold" /> for His glory
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
