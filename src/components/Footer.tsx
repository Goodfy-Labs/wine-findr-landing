import { Wine, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wine-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Wine className="h-8 w-8 text-wine-gold" />
              <span className="text-2xl font-bold">FindMyWine</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Connecting wine lovers with their perfect dining experiences. Discover restaurants with your favorite wines in their adega.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-wine-primary rounded-full flex items-center justify-center hover:bg-wine-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-wine-primary rounded-full flex items-center justify-center hover:bg-wine-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-wine-primary rounded-full flex items-center justify-center hover:bg-wine-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-wine-gold">Product</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-wine-gold">Support</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2024 FindMyWine. All rights reserved. Made with ❤️ for wine lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;