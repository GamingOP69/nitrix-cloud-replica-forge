
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanSelection = (planName: string, price: string) => {
    setSelectedPlan(planName);
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setSelectedPlan(null);
      if (planName === "Enterprise") {
        alert("Enterprise sales team will contact you within 24 hours!");
      } else {
        alert(`Welcome to ${planName} plan! Redirecting to setup...`);
      }
    }, 2000);
  };

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for personal projects and learning",
      features: [
        "1 Project",
        "100GB Bandwidth",
        "SSL Certificate",
        "24/7 Support",
        "Global CDN",
        "Basic Analytics"
      ],
      popular: false,
      icon: Sparkles,
      gradient: "from-green-500/20 to-orange-500/20"
    },
    {
      name: "Professional",
      price: "$15",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "10 Projects",
        "1TB Bandwidth",
        "Custom Domains",
        "Advanced Analytics",
        "Priority Support",
        "Managed Database",
        "Auto Scaling",
        "Team Collaboration"
      ],
      popular: true,
      icon: Zap,
      gradient: "from-orange-500/20 to-green-500/20"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited Projects",
        "Unlimited Bandwidth",
        "Dedicated Infrastructure",
        "Custom Integrations",
        "SLA Guarantee",
        "Advanced Security",
        "24/7 Phone Support",
        "Custom Onboarding"
      ],
      popular: false,
      icon: Star,
      gradient: "from-green-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent
            <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group ${
                plan.popular ? 'border-primary shadow-lg scale-105 ring-2 ring-primary/20' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center animate-pulse-glow">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-full flex items-center justify-center group-hover:from-green-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center group/item">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm group-hover/item:text-primary transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 transform hover:scale-105' 
                      : 'hover:bg-gradient-to-r hover:from-green-500/10 hover:to-orange-500/10'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handlePlanSelection(plan.name, plan.price)}
                  disabled={selectedPlan === plan.name && isLoading}
                >
                  {selectedPlan === plan.name && isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    plan.name === "Enterprise" ? "Contact Sales" : "Get Started"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We can build something tailored for your specific requirements.
          </p>
          <Button 
            variant="outline"
            onClick={() => alert("Custom solutions team will contact you!")}
            className="hover:bg-gradient-to-r hover:from-green-500/10 hover:to-orange-500/10"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
