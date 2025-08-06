import { Star, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
          <p className="text-muted-foreground mb-4">
            For a full refund of your deposit, you must cancel at least 48 hours (2 days) before the tour's start time.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="cancellation-details">
              <AccordionTrigger className="flex items-center text-left hover:no-underline">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold">Detailed Cancellation Policy</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>;
};
export default TourExperiencePhilosophy;