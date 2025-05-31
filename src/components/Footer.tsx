import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">          {/* Brand */}
          <div>
            <h3 className="text-xl font-light tracking-wide mb-4">Rachel Thompson</h3>
            <p className="text-sm text-accent/80 leading-relaxed">
              Graphic Designer, Illustrator & Artist creating bespoke visual 
              solutions that help brands flourish.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light tracking-wide mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">              <li>
                <Link href="/" className="text-sm text-accent/80 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/portfolio" className="text-sm text-accent/80 hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-accent/80 hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-accent/80 hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-sm font-light tracking-wide mb-4 text-accent">Connect</h4>
            <div className="space-y-2">              <p className="text-sm text-accent/80">
                <a href="mailto:rachel@rachelthompsondesign.com" className="hover:text-foreground transition-colors">
                  rachel@rachelthompsondesign.com
                </a>
              </p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://instagram.com/rachel.design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent/60 hover:text-foreground transition-colors tracking-wide"
                >
                  Instagram
                </a>
                <a 
                  href="https://behance.net/rachel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent/60 hover:text-foreground transition-colors tracking-wide"
                >
                  Behance
                </a>
                <a 
                  href="https://linkedin.com/in/rachel-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent/60 hover:text-foreground transition-colors tracking-wide"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-xs text-accent/60 tracking-wide">
            © {new Date().getFullYear()} Rachel. All rights reserved. 
            <span className="block mt-1">
              No work may be used without permission or for the purpose of training AI.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
