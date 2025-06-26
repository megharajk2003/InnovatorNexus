import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function TestimonialsSection() {
  const { isVisible: titleVisible, elementRef: titleRef } = useScrollAnimation();
  const { isVisible: cardsVisible, elementRef: cardsRef } = useScrollAnimation();
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "CEO, TechStart Solutions",
      initials: "SM",
      rating: 5,
      text: "Innovator Nexus delivered exceptional results for our startup. Their fresh approach to social media helped us grow our following by 300% and generate quality leads.",
      color: "primary",
    },
    {
      name: "Michael Johnson",
      title: "Marketing Director, GrowthCorp",
      initials: "MJ",
      rating: 5,
      text: "The content creation team delivered exceptional results. Our blog traffic increased by 250% and our content now ranks on the first page of Google for our target keywords.",
      color: "secondary",
    },
    {
      name: "Emily Chen",
      title: "Founder, InnovateRetail",
      initials: "EC",
      rating: 5,
      text: "Their strategic approach to our business helped us identify new market opportunities. We've expanded into two new verticals and increased revenue by 60% this year.",
      color: "accent",
    },
  ];

  const getAvatarColor = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "accent":
        return "bg-accent";
      default:
        return "bg-primary";
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral">
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
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from businesses that have transformed their digital presence with our expertise
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                cardsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${getAvatarColor(testimonial.color)} rounded-full flex items-center justify-center text-white font-semibold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
