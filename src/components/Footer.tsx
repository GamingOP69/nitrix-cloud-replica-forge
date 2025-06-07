
import { Mail, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-foreground">Nitrix Cloud</span>
            </div>
            <p className="text-muted-foreground">
              Premium VPS and Dedicated Server hosting solutions for your business.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">VPS Hosting</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dedicated Servers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Minecraft Hosting</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Limited Deals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Policies</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                support@nitrixcloud.cloud
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                India
              </li>
              <li className="flex items-center text-muted-foreground">
                <MessageSquare className="w-4 h-4 mr-2" />
                Join our Discord
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Nitrix Cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
