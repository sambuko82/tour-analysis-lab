import { CalendarCheck, CreditCard, MapPin, PartyPopper } from "lucide-react";

const BookingProcessSection = () => {
  const steps = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Find Your Experience",
      description: "Choose your ideal tour, knowing you can secure your spot without being locked in.",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
      textColor: "text-yellow-800 dark:text-yellow-200"
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Make a Reservation", 
      description: "Pay a small 20% deposit to reserve your spot and lock in your price.",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      textColor: "text-orange-800 dark:text-orange-200"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Choose When to Pay",
      description: "Pay the final balance anytime up to 3 days before your tour begins.",
      bgColor: "bg-red-100 dark:bg-red-900/20",
      textColor: "text-red-800 dark:text-red-200"
    },
    {
      icon: <PartyPopper className="w-6 h-6" />,
      title: "Enjoy Your Experience",
      description: "You're all set! Have an amazing, hassle-free adventure.",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      textColor: "text-green-800 dark:text-green-200"
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Reserve Now & Pay Later</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our flexible booking model makes planning your trip easy and secure. Here's how it works.
        </p>
      </div>
      
      <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 ${step.bgColor} ${step.textColor} font-bold rounded-full flex items-center justify-center mr-4`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="hidden md:block text-center">
            <div className="text-8xl mb-4">🎉</div>
            <p className="text-lg font-semibold text-muted-foreground">
              Secure your spot with ease, stay flexible, and never miss out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcessSection;