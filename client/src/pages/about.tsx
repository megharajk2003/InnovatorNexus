import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  CheckCircle,
  Target,
  Users,
  Award,
  Lightbulb,
  Heart,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const { isVisible: heroVisible, elementRef: heroRef } = useScrollAnimation();
  const { isVisible: missionVisible, elementRef: missionRef } =
    useScrollAnimation();
  const { isVisible: valuesVisible, elementRef: valuesRef } =
    useScrollAnimation({
      threshold: 0.1,
      rootMargin: "85% 0px -10% 0px",

      // or just omit it since false is default
    });
  const { isVisible: whyVisible, elementRef: whyRef } =   useScrollAnimation({
      threshold: 0.1,
      rootMargin: "90% 0px -10% 0px",

      // or just omit it since false is default
    });

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our team is driven by genuine passion for helping businesses succeed in the digital landscape.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in working closely with our clients as true partners in their growth journey.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from strategy to execution.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Fresh Perspective",
      description:
        "Innovative approaches with 25+ successful projects delivered across various industries",
    },
    {
      title: "Passionate Team",
      description:
        "Dedicated professionals with diverse backgrounds and combined expertise",
    },
    {
      title: "Data-Driven Approach",
      description:
        "Every strategy is backed by comprehensive analytics and market research",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock support to ensure your business never misses an opportunity",
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored strategies that align perfectly with your business goals",
    },
    {
      title: "Transparent Reporting",
      description:
        "Regular, detailed reports that show exactly how we're driving your success",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-white">
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
              About <span className="text-primary">Innovator Nexus</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking digital services company dedicated to
              transforming businesses through innovative social media
              strategies, compelling content creation, and strategic business
              consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={missionRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
              missionVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div>
              <h2 className="text-4xl font-bold font-poppins mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Innovator Nexus, we believe every business has the potential
                to create meaningful connections with their audience. Our
                mission is to bridge the gap between brands and their
                communities through strategic digital solutions that drive real
                results.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As a newly founded company in 2024, we're an ambitious team of
                digital enthusiasts passionate about helping businesses
                establish their online presence. We combine fresh perspectives
                with proven strategies to deliver innovative solutions that
                perform exceptionally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold">
                    Strategic Planning
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold">
                    Community Building
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold">
                    Results-Driven Solutions
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">
                          25+
                        </div>
                        <div className="text-gray-600">Projects Completed</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">
                          15+
                        </div>
                        <div className="text-gray-600">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">
                          2024
                        </div>
                        <div className="text-gray-600">Founded</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">
                          24/7
                        </div>
                        <div className="text-gray-600">Support Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={valuesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              valuesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    valuesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whyRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              whyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                  whyVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold font-poppins mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
