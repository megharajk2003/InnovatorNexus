import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  MessageCircle,
  Edit,
  BarChart3,
  Palette,
  Globe,
  Camera,
  Mail,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Services() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { isVisible: heroVisible, elementRef: heroRef } = useScrollAnimation();
  const { isVisible: servicesVisible, elementRef: servicesRef } =
    useScrollAnimation({
      threshold: 0.08,
      rootMargin: "15% 0px -10% 0px",

      // or just omit it since false is default
    });
  const { isVisible: newsletterVisible, elementRef: newsletterRef } =
    useScrollAnimation();

  const services = [
    {
      icon: MessageCircle,
      title: "Social Media Management",
      description:
        "Comprehensive social media strategy, content planning, community management, and performance analytics across all major platforms.",
      features: [
        "Content Strategy",
        "Community Management",
        "Analytics & Reporting",
        "Paid Advertising",
      ],
      color: "primary",
    },
    {
      icon: Edit,
      title: "Content Creation",
      description:
        "Engaging, high-quality content including blog posts, video content, infographics, and multimedia assets that resonate with your audience.",
      features: [
        "Blog Writing",
        "Video Production",
        "Infographic Design",
        "Copywriting",
      ],
      color: "secondary",
    },
    {
      icon: BarChart3,
      title: "Business Strategy",
      description:
        "Data-driven strategic planning, market analysis, competitive research, and growth optimization frameworks for sustainable success.",
      features: [
        "Market Analysis",
        "Competitive Research",
        "Growth Planning",
        "ROI Optimization",
      ],
      color: "accent",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Professional brand identity design, marketing materials, digital assets, and visual communications that make lasting impressions.",
      features: [
        "Brand Identity",
        "Marketing Materials",
        "Digital Assets",
        "Print Design",
      ],
      color: "primary",
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description:
        "Modern, responsive website design and development that delivers exceptional user experiences and drives conversions.",
      features: [
        "Responsive Design",
        "UX/UI Design",
        "E-commerce",
        "Performance Optimization",
      ],
      color: "secondary",
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description:
        "Professional photography and videography services for marketing campaigns, product showcases, and brand storytelling.",
      features: [
        "Product Photography",
        "Brand Videos",
        "Marketing Content",
        "Event Coverage",
      ],
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
        };
      case "secondary":
        return {
          bg: "bg-blue-500/10",
          text: "text-blue-600",
          border: "border-blue-500/20",
        };
      case "accent":
        return {
          bg: "bg-purple-500/10",
          text: "text-purple-600",
          border: "border-purple-500/20",
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
        };
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate newsletter subscription
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-15 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroRef}
            className={`text-center transition-all duration-1000 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand,
              engage your audience, and drive meaningful business results across
              all channels.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral ${
                    servicesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  <div
                    className={`w-20 h-20 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-10 h-10 ${colorClasses.text}`} />
                  </div>

                  <h3 className="text-2xl font-bold font-poppins mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle
                          className={`w-5 h-5 ${colorClasses.text}`}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${colorClasses.text} hover:${colorClasses.text}/80`}
                    variant="outline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={newsletterRef}
            className={`text-center transition-all duration-1000 ${
              newsletterVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest digital marketing
              insights, tips, and exclusive offers delivered to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button
                type="submit"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              >
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-white/70 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
