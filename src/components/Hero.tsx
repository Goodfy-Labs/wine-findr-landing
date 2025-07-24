import { Button } from "@/components/ui/button";
import { Search, MapPin, Wine } from "lucide-react";
import heroImage from "@/assets/wine-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/90 via-wine-primary/80 to-wine-secondary/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-wine-gold">Wine Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover restaurants with your favorite wines in their adega. From rare vintages to perfect pairings, 
            find exactly what you're craving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Search Wines
            </Button>
            <Button variant="gold" size="lg" className="group">
              <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Find Restaurants
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-wine-gold mb-2">500+</div>
              <div className="text-white/80">Partner Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wine-gold mb-2">10K+</div>
              <div className="text-white/80">Wine Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wine-gold mb-2">50K+</div>
              <div className="text-white/80">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;