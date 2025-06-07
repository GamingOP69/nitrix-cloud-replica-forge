
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStarted = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-foreground">
              Nitrix Cloud
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              VPS Hosting
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Dedicated
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Minecraft
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center"
            >
              ⚡ Limited Deals
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-slide-in">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                VPS Hosting
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Dedicated
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Minecraft
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                ⚡ Limited Deals
              </button>
              <Button 
                onClick={handleGetStarted}
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
