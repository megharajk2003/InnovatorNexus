import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CareersSection() {
  const { isVisible: titleVisible, elementRef: titleRef } =
    useScrollAnimation();
  const { isVisible: benefitsVisible, elementRef: benefitsRef } =
    useScrollAnimation();
  const { isVisible: jobsVisible, elementRef: jobsRef } = useScrollAnimation();
  const { isVisible: formVisible, elementRef: formRef } = useScrollAnimation();

  const jobs = [
    {
      title: "Senior Social Media Manager",
      type: "Full-time • Remote",
      salary: "$70,000 - $90,000",
      description:
        "Lead social media strategy for multiple clients, manage content calendars, and drive engagement across all platforms.",
      skills: ["Social Media", "Strategy", "Analytics"],
      id: "social-media-manager",
    },
    {
      title: "Content Creator & Copywriter",
      type: "Full-time • Remote",
      salary: "$60,000 - $75,000",
      description:
        "Create engaging content across multiple formats including blog posts, social media content, and marketing materials.",
      skills: ["Content Writing", "Copywriting", "SEO"],
      id: "content-creator",
    },
    {
      title: "Graphic Designer",
      type: "Full-time • Hybrid",
      salary: "$55,000 - $70,000",
      description:
        "Design visual assets for digital and print media, create brand identities, and collaborate with marketing teams.",
      skills: ["Adobe Creative Suite", "Brand Design", "UI/UX"],
      id: "graphic-designer",
    },
    {
      title: "Web Designer & Developer",
      type: "Full-time • Remote",
      salary: "$65,000 - $80,000",
      description:
        "Create modern, responsive websites and web applications with exceptional user experiences and optimal performance.",
      skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
      id: "web-designer",
    },
  ];

  const benefits = [
    {
      title: "Remote-First Culture",
      description:
        "Work from anywhere with flexible hours and work-life balance.",
    },
    {
      title: "Professional Growth",
      description:
        "Continuous learning opportunities and career advancement paths.",
    },
    {
      title: "Competitive Benefits",
      description:
        "Health insurance, retirement plans, and performance bonuses.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Join Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with a team of passionate professionals dedicated
            to innovation and excellence
          </p>
        </div>

        <div
          ref={benefitsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 ${
            benefitsVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
        >
          <div
            className={`transition-all duration-1000 delay-200 ${
              benefitsVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional team meeting in modern office"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              benefitsVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-3xl font-bold font-poppins text-charcoal">
              Why Work With Us?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div ref={jobsRef} className="space-y-6">
          <h3
            className={`text-3xl font-bold font-poppins text-center mb-12 transition-all duration-1000 ${
              jobsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Open Positions
          </h3>

          {jobs.map((job, index) => (
            <Card
              key={index}
              className={`border-2 border-neutral hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                jobsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold font-poppins text-charcoal">
                        {job.title}
                      </h4>
                      <p className="text-gray-600">
                        {job.type} • {job.salary}
                      </p>
                    </div>
                    <p className="text-gray-700">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-3 py-1 text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <a
                      href="http://forms.gle/NvfDYjAWFhfR3XHV7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
