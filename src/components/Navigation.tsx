import { Button } from "@/components/ui/button";
import { Wine } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wine className="h-8 w-8 text-wine-primary" />
          <span className="text-2xl font-bold text-wine-dark">FindMyWine</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-wine-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-wine-primary transition-colors">
            How it Works
          </a>
          <a href="#download" className="text-foreground hover:text-wine-primary transition-colors">
            Download
          </a>
        </div>
        
        <Button variant="wine" className="hidden md:flex">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;