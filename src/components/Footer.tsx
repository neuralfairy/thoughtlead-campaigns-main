import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">
                ThoughtLeadership<span className="text-brand-red">Partners</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Advanced iEMA (Email Marketing Automation) platform helping B2B companies 
              automate personalized campaigns and boost conversions.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Austin, TX 78701</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(512) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@thoughtleadershippartners.com</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#integrations" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#api" className="text-muted-foreground hover:text-brand-red transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#case-studies" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#whitepapers" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#templates" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Email Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-brand-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#support" className="text-muted-foreground hover:text-brand-red transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-brand-red transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-brand-red transition-colors">
                Terms of Service
              </a>
              <a href="#gdpr" className="hover:text-brand-red transition-colors">
                GDPR Compliance
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a
                href="https://salescentri.com?utm_source=ThoughtLeadershipPartners.com&utm_medium=footer&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-brand-red transition-colors"
              >
                <span>Powered by Sales Intelligence Platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            © 2024 Thoughtleadershippartners Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;