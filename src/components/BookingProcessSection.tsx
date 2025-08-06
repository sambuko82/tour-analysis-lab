import { CalendarCheck, CreditCard, MapPin, PartyPopper } from "lucide-react";
const BookingProcessSection = () => {
  const steps = [{
    icon: <MapPin className="w-6 h-6" />,
    title: "Find Your Experience",
    description: "Choose your ideal tour, knowing you can secure your spot without being locked in.",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
    textColor: "text-yellow-800 dark:text-yellow-200"
  }, {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Make a Reservation",
    description: "Pay a small 20% deposit to reserve your spot and lock in your price.",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    textColor: "text-orange-800 dark:text-orange-200"
  }, {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Choose When to Pay",
    description: "Pay the final balance anytime up to 3 days before your tour begins.",
    bgColor: "bg-red-100 dark:bg-red-900/20",
    textColor: "text-red-800 dark:text-red-200"
  }, {
    icon: <PartyPopper className="w-6 h-6" />,
    title: "Enjoy Your Experience",
    description: "You're all set! Have an amazing, hassle-free adventure.",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    textColor: "text-green-800 dark:text-green-200"
  }];
  
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">How Our Booking Process Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Simple, flexible, and designed with your peace of mind in mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${step.bgColor} flex items-center justify-center`}>
                <div className={step.textColor}>
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BookingProcessSection;