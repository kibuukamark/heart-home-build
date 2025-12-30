import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-cta py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            Stay Connected With Our Mission
          </h3>
          <p className="text-accent-foreground/90 mb-6 max-w-xl mx-auto">
            Subscribe to receive updates about our children and the impact of your support.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-card/20 border-card/30 text-accent-foreground placeholder:text-accent-foreground/60 flex-1"
            />
            <Button variant="secondary" className="bg-card text-foreground hover:bg-card/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Column */}
            <div className="lg:col-span-1">
              <img src={logo} alt="LISA Logo" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                LISA Supporting and Sustaining Lives is dedicated to providing care, love, and
                opportunities to orphaned children in Uganda.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Our Programs", "Gallery", "Get Involved", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Our Programs</h4>
              <ul className="space-y-2">
                {["Baby Care Home", "Education Support", "Healthcare", "Community Outreach"].map(
                  (program) => (
                    <li key={program}>
                      <Link
                        to="/programs"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {program}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">Kampala, Uganda</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="mailto:info@lisauganda.org"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    info@lisauganda.org
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="tel:+256700000000"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    +256 700 000 000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} LISA Supporting and Sustaining Lives. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> for the children of
            Uganda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
