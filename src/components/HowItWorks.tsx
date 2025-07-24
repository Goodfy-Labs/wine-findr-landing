import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Search Your Wine",
      description: "Enter the name of your desired wine, vintage, or grape variety. Our smart search will find exact matches across all partner restaurants."
    },
    {
      step: "02",
      icon: MapPin,
      title: "Find Restaurants",
      description: "View a curated list of restaurants that have your wine in their adega. See locations, prices, and availability in real-time."
    },
    {
      step: "03",
      icon: Calendar,
      title: "Book & Enjoy",
      description: "Make a reservation directly through the app or call the restaurant. Arrive knowing your perfect wine is waiting for you."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-6">
            How FindMyWine
            <span className="block text-wine-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to discover your next perfect wine experience. It's never been easier to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-wine-primary via-wine-secondary to-wine-gold transform -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-wine-primary/30 bg-background">
              <CardContent className="p-8 text-center relative z-10">
                {/* Step Number */}
                <div className="text-6xl font-bold text-wine-gold/20 absolute top-4 right-6">
                  {step.step}
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-wine-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-wine-dark mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to discover your next favorite wine?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-wine-primary text-white px-8 py-4 rounded-lg hover:bg-wine-secondary transition-all duration-300 shadow-lg hover:shadow-xl">
              Download for iOS
            </button>
            <button className="bg-wine-gold text-wine-dark px-8 py-4 rounded-lg hover:bg-wine-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl">
              Download for Android
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;