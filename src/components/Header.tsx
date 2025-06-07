
import { Button } from "@/components/ui/button";
import { Cloud, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      alert("Login functionality would be implemented here!");
    }, 1500);
  };

  const handleGetStarted = () => {
    // Scroll to pricing section
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
            <Cloud className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">
              NitrixCloud
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform"
            >
              Contact
            </button>
            <button 
              onClick={() => alert('About page would be here')}
              className="text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform"
            >
              About
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="hover:bg-gradient-to-r hover:from-green-500/10 hover:to-orange-500/10 transition-all duration-200"
            >
              {isLoggingIn ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </Button>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200"
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
                onClick={() => scrollToSection('features')}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Contact
              </button>
              <button 
                onClick={() => alert('About page would be here')}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                About
              </button>
              <div className="flex flex-col space-y-2 mt-4">
                <Button 
                  variant="outline"
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? "Logging in..." : "Login"}
                </Button>
                <Button 
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
