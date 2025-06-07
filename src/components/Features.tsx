
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cpu, Globe, Clock, Database } from "lucide-react";
import { useEffect, useRef } from "react";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced DDoS protection and regular security updates to keep your data safe"
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Latest generation hardware with NVMe SSDs for lightning-fast performance"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Multiple locations worldwide with low-latency network connections"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert technical support available round the clock"
    },
    {
      icon: Database,
      title: "Instant Deployment",
      description: "Get your server up and running in minutes with our automated setup"
    },
    {
      icon: Database,
      title: "Full Control",
      description: "Root access and complete control over your server configuration"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = featuresRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="py-20 px-4" ref={featuresRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Why Choose Nitrix Cloud?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg scroll-animate group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
