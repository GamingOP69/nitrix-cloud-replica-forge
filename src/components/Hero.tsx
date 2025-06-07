
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleOurDeals = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight animate-slide-in">
            Design the dream,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              host with us.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in" style={{animationDelay: '0.2s'}}>
            Explore a variety of hosting options, including VPS and Shared hosting, to ensure your online presence stays secure and operates seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300"
              onClick={handleOurDeals}
            >
              Our Deals
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleContactUs}
              className="border-border hover:bg-accent px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
