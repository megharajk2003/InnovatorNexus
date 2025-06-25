import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "CEO, TechStart Solutions",
      initials: "SM",
      rating: 5,
      text: "Innovator Nexus completely transformed our social media presence. Our engagement increased by 400% in just 3 months, and we've seen a significant boost in qualified leads.",
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
    <section id="testimonials" className="py-32 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from businesses that have transformed their digital presence with our expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
