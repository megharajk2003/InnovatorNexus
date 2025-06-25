import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  const handleViewWork = () => {
    const element = document.querySelector("#services");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-16 pb-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              Transform Your{" "}
              <span className="text-primary">Digital Presence</span>
              {" "}with Expert Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help businesses thrive in the digital landscape through comprehensive social media management,
              content creation, strategic planning, and stunning graphic design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Get Started Today
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleViewWork}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace with digital devices"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">500+ Projects</p>
                  <p className="text-sm text-gray-600">Successfully Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
