import { Heart, Shield, CheckCircle } from "lucide-react";

const HealthCertificateSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Enhanced Health & Safety</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We prioritize your health and safety with comprehensive medical support and enhanced safety protocols.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Health Certificate Highlight */}
        <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
          <div className="bg-success/10 border border-success/20 text-success p-6 rounded-lg w-full">
            <div className="flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 mr-2" />
              <h3 className="font-bold text-lg">NEW: Ijen Health Certificate Included!</h3>
            </div>
            <p className="text-sm">
              To enhance our comprehensive promise, the mandatory Ijen medical check-up is <strong>now included</strong> in your package price. Our medical team will come to your hotel for a hassle-free check-up.
            </p>
          </div>
        </div>

        {/* Safety Record */}
        <div className="bg-card p-8 rounded-2xl shadow-card border border-border flex flex-col justify-center items-center text-center">
          <div className="text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            100%
          </div>
          <div className="flex items-center mb-3">
            <Shield className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-2xl font-bold text-foreground">Safety Record</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Your well-being is our top priority. Our dedicated local crew ensures you're in safe hands.
          </p>
          
          <div className="flex items-center text-success">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">Zero Incidents in 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCertificateSection;