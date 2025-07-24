import { Button } from "@/components/ui/button";
import { Smartphone, Download as DownloadIcon, Globe, Wine, MapPin } from "lucide-react";
import wineAppImage from "@/assets/wine-app.jpg";

const Download = () => {
  return (
    <section id="download" className="py-20 bg-wine-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-6">
              Take FindMyWine
              <span className="block text-wine-primary">Everywhere</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Available as a Progressive Web App (PWA) for the best mobile experience. Install directly from your browser or download from app stores.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wine-primary rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-wine-dark">Native App Experience</h3>
                  <p className="text-muted-foreground">Works offline and loads instantly</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wine-secondary rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-wine-dark">Cross-Platform</h3>
                  <p className="text-muted-foreground">Available on iOS, Android, and Web</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wine-gold-dark rounded-full flex items-center justify-center">
                  <DownloadIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-wine-dark">Easy Installation</h3>
                  <p className="text-muted-foreground">Install with one tap from your browser</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button variant="wine" size="lg" className="w-full sm:w-auto mr-4">
                <DownloadIcon className="mr-2 h-5 w-5" />
                Install PWA
              </Button>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <span>Download on the App Store</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <span>Get it on Google Play</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src={wineAppImage} 
                alt="FindMyWine App Interface" 
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-primary/10 to-transparent rounded-3xl" />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-wine-gold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Wine className="h-8 w-8 text-wine-dark" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-wine-primary rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;