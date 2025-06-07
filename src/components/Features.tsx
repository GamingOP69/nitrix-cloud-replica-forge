
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Globe, Cpu, Database, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy in seconds with our optimized build pipeline and global CDN network."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SSL certificates, DDoS protection, and data encryption."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "200+ edge locations worldwide ensure your users get the fastest experience."
    },
    {
      icon: Cpu,
      title: "Auto Scaling",
      description: "Automatically scale your resources based on traffic with zero downtime."
    },
    {
      icon: Database,
      title: "Managed Databases",
      description: "PostgreSQL, MySQL, and Redis databases with automatic backups and monitoring."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team available around the clock to help you succeed."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your development workflow seamless and your applications performant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
