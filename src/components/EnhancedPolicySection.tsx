import { Shield, Clock, AlertTriangle, Heart } from "lucide-react";

const EnhancedPolicySection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Policies & Safety</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We prioritize transparency and your safety. Please familiarize yourself with our cancellation policy and our enhanced all-inclusive services.
        </p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-8">
        {/* Cancellation Policy */}
        <div className="md:col-span-3 bg-card p-8 rounded-2xl shadow-card border border-border">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Cancellation Policy</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="font-semibold text-green-800 dark:text-green-200">
                For a full refund of your deposit, you must cancel at least 48 hours (2 days) before the tour's start time.
              </p>
            </div>
            
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="font-semibold text-red-800 dark:text-red-200">
                  If you cancel less than 48 hours before the tour's start time, a cancellation fee of 50% of the total tour price will be charged.
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-muted border border-border rounded-lg">
              <p className="text-muted-foreground">
                Any changes made less than 48 hours before the tour's start time will not be accepted.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Cut-off times are based on the tour's local time (Western Indonesia Time, GMT+7).
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Weather & Minimum Travelers:</strong> If a tour is canceled due to poor weather or because the minimum number of travelers isn't met, you'll be offered a different date or a full refund.
              </p>
            </div>
          </div>
        </div>

        {/* Safety & Enhanced Services */}
        <div className="md:col-span-2 bg-card p-8 rounded-2xl shadow-card border border-border flex flex-col justify-center items-center text-center">
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
          
          <div className="bg-success/10 border border-success/20 text-success p-6 rounded-lg w-full">
            <div className="flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 mr-2" />
              <h4 className="font-bold text-lg">NEW: Ijen Health Certificate Included!</h4>
            </div>
            <p className="text-sm">
              To enhance our comprehensive promise, the mandatory Ijen medical check-up is <strong>now included</strong> in your package price. Our medical team will come to your hotel for a hassle-free check-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedPolicySection;