import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}