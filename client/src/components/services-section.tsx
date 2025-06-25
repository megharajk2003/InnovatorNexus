import { MessageCircle, Edit, BarChart3, Palette } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ServicesSection() {
  const { isVisible: titleVisible, elementRef: titleRef } = useScrollAnimation();
  const { isVisible: servicesVisible, elementRef: servicesRef } = useScrollAnimation();
  const { isVisible: imagesVisible, elementRef: imagesRef } = useScrollAnimation();
  const services = [
    {
      icon: MessageCircle,
      title: "Social Media Management",
      description: "Strategic social media planning, content scheduling, community management, and performance analytics across all platforms.",
      color: "primary",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
    {
      icon: Edit,
      title: "Content Creation",
      description: "Engaging blog posts, video content, infographics, and multimedia assets that resonate with your target audience.",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
    {
      icon: BarChart3,
      title: "Business Strategy",
      description: "Data-driven strategic planning, market analysis, competitive research, and growth optimization frameworks.",
      color: "accent",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Brand identity design, marketing materials, digital assets, and visual communications that make lasting impressions.",
      color: "primary",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
    {
      icon: MessageCircle,
      title: "Web Design",
      description: "Modern, responsive website design and development that delivers exceptional user experiences and drives conversions.",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
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
          bg: "bg-secondary/10 group-hover:bg-secondary/20",
          text: "text-secondary",
          link: "text-secondary hover:text-secondary/80",
        };
      case "accent":
        return {
          bg: "bg-accent/10 group-hover:bg-accent/20",
          text: "text-accent",
          link: "text-accent hover:text-accent/80",
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
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive meaningful results
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
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral ${
                  servicesVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} workspace`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <a href="#" className={`${colorClasses.link} font-semibold transition-colors duration-300 inline-flex items-center`}>
                    Learn More 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
