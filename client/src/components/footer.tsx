import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const services = [
    "Social Media Management",
    "Content Creation",
    "Business Strategy",
    "Graphics Design",
  ];

  const company = ["About Us", "Careers", "Case Studies", "Blog"];

  const support = ["Contact Us", "FAQ", "Privacy Policy", "Terms of Service"];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Github, href: "#", label: "GitHub" },
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
  };

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-poppins text-white">Innovator Nexus</h3>
            <p className="text-gray-300">
              Transforming businesses through innovative digital solutions and strategic expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {company.map((item, index) => (
                <li key={index}>
                  {item === "Careers" ? (
                    <Link href="/careers" className="hover:text-white transition-colors duration-300">
                      {item}
                    </Link>
                  ) : (
                    <button className="hover:text-white transition-colors duration-300 text-left">
                      {item}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-gray-300">
              {support.map((item, index) => (
                <li key={index}>
                  {item === "Contact Us" ? (
                    <Link href="/contact" className="hover:text-white transition-colors duration-300">
                      {item}
                    </Link>
                  ) : (
                    <button className="hover:text-white transition-colors duration-300 text-left">
                      {item}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Innovator Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
