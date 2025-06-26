import { MessageCircle, Edit, BarChart3, Palette, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ServicesSection() {
  const { isVisible: titleVisible, elementRef: titleRef } =
    useScrollAnimation();
  const { isVisible: servicesVisible, elementRef: servicesRef } =
    useScrollAnimation();
  const { isVisible: imagesVisible, elementRef: imagesRef } =
    useScrollAnimation();
  const services = [
    {
      icon: MessageCircle,
      title: "Social Media Management",
      description:
        "Strategic social media planning, content scheduling, community management, and performance analytics across all platforms.",
      color: "primary",
    },
    {
      icon: Edit,
      title: "Content Creation",
      description:
        "Engaging blog posts, video content, infographics, and multimedia assets that resonate with your target audience.",
      color: "secondary",
    },
    {
      icon: BarChart3,
      title: "Business Strategy",
      description:
        "Data-driven strategic planning, market analysis, competitive research, and growth optimization frameworks.",
      color: "accent",
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description:
        "Brand identity design, marketing materials, digital assets, and visual communications that make lasting impressions.",
      color: "primary",
    },
    {
      icon: Globe,
      title: "Web Design",
      description:
        "Modern, responsive website design and development that delivers exceptional user experiences and drives conversions.",
      color: "secondary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10 group-hover:bg-primary/20",
          text: "text-primary",
          link: "text-primary hover:text-primary/80",
        };
      case "secondary":
        return {
          bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
          text: "text-blue-600",
          link: "text-blue-600 hover:text-blue-600/80",
        };
      case "accent":
        return {
          bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
          text: "text-purple-600",
          link: "text-purple-600 hover:text-purple-600/80",
        };
      default:
        return {
          bg: "bg-primary/10 group-hover:bg-primary/20",
          text: "text-primary",
          link: "text-primary hover:text-primary/80",
        };
    }
  };

  return (
    <section id="services" className="py-13 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[white]">
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and
            drive meaningful results
          </p>
        </div>

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
                  className={`w-20 h-20 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-10 h-10 ${colorClasses.text}`} />
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className={`${colorClasses.link} font-semibold transition-colors duration-300 inline-flex items-center`}
                >
                  Learn More
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
