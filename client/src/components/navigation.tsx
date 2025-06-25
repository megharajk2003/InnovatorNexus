import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-sm z-50 border-b border-neutral shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-poppins text-primary">
              Innovator Nexus
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith("#") ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-charcoal hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-charcoal hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-charcoal hover:text-primary bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMenuOpen ? (
                  <X className="h-6 w-6 transition-all duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transition-all duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 md:hidden bg-[#00000000]"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Slide-in Menu */}
          <div className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out border-r border-gray-200 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="p-4 border-b border-neutral bg-white">
              <Link href="/" className="text-xl font-bold font-poppins text-primary">
                Innovator Nexus
              </Link>
            </div>
            <div className="p-4 space-y-2 bg-white h-full">
              {navLinks.map((link) => (
                link.href.startsWith("#") ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full px-3 py-3 text-left text-charcoal hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-3 text-charcoal hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
