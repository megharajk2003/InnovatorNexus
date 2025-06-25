import Navigation from "@/components/navigation";
import CareersSection from "@/components/careers-section";
import Footer from "@/components/footer";

export default function Careers() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <CareersSection />
      </div>
      <Footer />
    </div>
  );
}