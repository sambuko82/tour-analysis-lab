import { Star, CheckCircle } from "lucide-react";

const TourExperiencePhilosophy = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">The JVTO Experience</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We believe in providing a seamless, high-quality journey from start to finish. Our model is built on core principles to guarantee your comfort and safety.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card p-8 rounded-2xl shadow-card transform hover:scale-105 transition-transform duration-300 border border-border">
          <div className="text-5xl mb-4 text-primary">
            <Star className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Exclusively Private Tours</h3>
          <p className="text-muted-foreground">
            Every tour is a private package for you and your group. This ensures personalized attention, flexibility, and a journey tailored to your pace.
          </p>
        </div>
        
        <div className="bg-card p-8 rounded-2xl shadow-card transform hover:scale-105 transition-transform duration-300 border border-border">
          <div className="text-5xl mb-4 text-success">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Truly Comprehensive</h3>
          <p className="text-muted-foreground">
            From private transport and quality hotels to entrance fees, guides, and even the Ijen medical check-up, we've got it covered. No hidden fees, no logistical headaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourExperiencePhilosophy;