import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Heart, Users, Wine, Star } from "lucide-react";
import wineSearchImage from "@/assets/wine-search.jpg";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Wine Search",
      description: "Search by wine name, vintage, region, or grape variety. Our intelligent system finds exact matches in restaurant adegas.",
      color: "text-wine-primary"
    },
    {
      icon: MapPin,
      title: "Restaurant Discovery",
      description: "Find nearby restaurants that stock your desired wine. Get directions, hours, and reservation links instantly.",
      color: "text-wine-secondary"
    },
    {
      icon: Heart,
      title: "Personal Favorites",
      description: "Save your favorite wines and restaurants. Get notified when new vintages arrive or special events happen.",
      color: "text-wine-gold-dark"
    },
    {
      icon: Users,
      title: "Community Reviews",
      description: "Read reviews from fellow wine enthusiasts. Share your dining experiences and wine discoveries.",
      color: "text-wine-primary"
    },
    {
      icon: Wine,
      title: "Sommelier Recommendations",
      description: "Get expert pairing suggestions from certified sommeliers. Discover new wines based on your taste profile.",
      color: "text-wine-secondary"
    },
    {
      icon: Star,
      title: "Exclusive Access",
      description: "Access to limited edition wines and exclusive restaurant events. Be the first to know about rare finds.",
      color: "text-wine-gold-dark"
    }
  ];

  return (
    <section id="features" className="py-20 bg-wine-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-6">
            Everything You Need to Find
            <span className="block text-wine-primary">Your Perfect Wine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From casual dining to fine dining experiences, discover the perfect wine for every occasion with our comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-wine-primary/30 bg-background/80">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <feature.icon className={`h-12 w-12 mx-auto ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-semibold text-wine-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-wine-dark mb-6">
              Real-Time Adega Inventory
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our platform connects directly with restaurant inventory systems to provide you with real-time information about wine availability. No more disappointment when you arrive – know exactly what's in stock before you go.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Wine className="h-5 w-5 text-wine-primary" />
                Live inventory updates
              </li>
              <li className="flex items-center gap-3">
                <Wine className="h-5 w-5 text-wine-primary" />
                Price transparency
              </li>
              <li className="flex items-center gap-3">
                <Wine className="h-5 w-5 text-wine-primary" />
                Reservation integration
              </li>
            </ul>
          </div>
          <div className="relative">
            <img 
              src={wineSearchImage} 
              alt="Wine selection in restaurant" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;