
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const handleStartTrial = () => {
    // Simulate account creation/trial start
    console.log("Starting free trial...");
    alert("Welcome! Your free trial is starting...");
  };

  const handleWatchDemo = () => {
    setIsVideoLoading(true);
    // Simulate video loading
    setTimeout(() => {
      setIsVideoLoading(false);
      alert("Demo video would play here!");
    }, 1500);
  };

  return (
    <section className="pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-slide-in">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-orange-500/10 text-primary rounded-full text-sm font-medium mb-6 animate-pulse-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              ⚡ Lightning Fast Cloud Hosting
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-slide-in" style={{animationDelay: '0.2s'}}>
            Deploy Your Apps to the
            <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent"> Cloud</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in" style={{animationDelay: '0.4s'}}>
            Experience ultra-fast deployment, global CDN, and 99.9% uptime. 
            Scale your applications effortlessly with our premium cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300"
              onClick={handleStartTrial}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleWatchDemo}
              disabled={isVideoLoading}
              className="hover:bg-gradient-to-r hover:from-green-500/10 hover:to-orange-500/10 transition-all duration-300"
            >
              {isVideoLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              {isVideoLoading ? "Loading..." : "Watch Demo"}
            </Button>
          </div>
          
          <div className="relative max-w-4xl mx-auto animate-slide-in" style={{animationDelay: '0.8s'}}>
            <div className="bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-500">
              <div className="bg-background rounded-lg p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="text-left">
                  <pre className="text-green-400 text-sm">
                    <code>{`$ nitrix deploy my-app
✓ Building application...
✓ Optimizing assets...
✓ Deploying to global CDN...
✓ Your app is live at: https://my-app.nitrix.cloud

Deployment completed in 23s`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
