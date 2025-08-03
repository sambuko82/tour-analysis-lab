import { Car, Users, Trophy } from "lucide-react";

const VehicleAllocationSection = () => {
  const vehicleData = [
    { groupSize: "1-3 Pax", vehicle: "MPV", crew: "Driver-cum-Guide" },
    { groupSize: "4-11 Pax", vehicle: "Hiace Van", crew: "Driver + Local Guides" },
    { groupSize: ">11 Pax", vehicle: "Additional Vehicle", crew: "Customized Crew" }
  ];

  const groupBenefits = [
    { minPax: "18+ Paying Pax", freeSlots: 1, highlight: false },
    { minPax: "35+ Paying Pax", freeSlots: 2, highlight: false },
    { minPax: "50+ Paying Pax", freeSlots: 3, highlight: true }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">On The Road</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide the right vehicle and crew for your group size to ensure comfort and a great experience. Larger groups also receive special benefits!
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Vehicle Allocation Table */}
        <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
          <div className="flex items-center justify-center mb-6">
            <Car className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Vehicle & Crew Allocation</h3>
          </div>
          
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="p-4 text-left font-semibold text-foreground">Group Size</th>
                  <th className="p-4 text-left font-semibold text-foreground">Vehicle</th>
                  <th className="p-4 text-left font-semibold text-foreground">Crew</th>
                </tr>
              </thead>
              <tbody>
                {vehicleData.map((row, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 text-foreground">{row.groupSize}</td>
                    <td className="p-4 text-muted-foreground">{row.vehicle}</td>
                    <td className="p-4 text-muted-foreground">{row.crew}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Group Benefits */}
        <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-accent mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Group Benefits</h3>
          </div>
          
          <div className="space-y-4">
            {groupBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  benefit.highlight 
                    ? 'bg-accent/10 border-accent shadow-cta' 
                    : 'bg-muted border-border'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-muted-foreground mr-3" />
                    <span className="font-semibold text-foreground">{benefit.minPax}</span>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${benefit.highlight ? 'text-accent' : 'text-primary'}`}>
                      {benefit.freeSlots}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      FOC Slot{benefit.freeSlots > 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-sm text-success font-medium">
              <strong>Free of Charge (FOC):</strong> Additional travelers join your tour at no extra cost when you reach the minimum paying participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleAllocationSection;