import { Star, CheckCircle } from "lucide-react";
const TourExperiencePhilosophy = () => {
  return <section className="py-12 md:py-16">
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
          <h3 className="text-2xl font-bold text-foreground mb-3">Reserve Now &amp; Pay Later</h3>
          <p className="text-muted-foreground">
            Our flexible booking model makes planning your trip easy and secure. Here's how it works.
          </p>
        </div>
        
        <div className="bg-card p-8 rounded-2xl shadow-card transform hover:scale-105 transition-transform duration-300 border border-border">
          <div className="text-5xl mb-4 text-success">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Free Cancellation</h3>
          <p className="text-muted-foreground">
            For a full refund of your deposit, you must cancel at least 48 hours (2 days) before the tour's start time.
          </p>
        </div>
      </div>
    </section>;
};
export default TourExperiencePhilosophy;