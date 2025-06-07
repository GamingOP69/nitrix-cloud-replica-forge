
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@nitrixcloud.com",
      action: () => window.open('mailto:hello@nitrixcloud.com')
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      action: () => window.open('tel:+15551234567')
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Cloud Street, Tech City, TC 12345",
      action: () => window.open('https://maps.google.com')
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in
            <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your applications? Contact our team for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MessageSquare className="w-6 h-6 mr-2 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Have questions about our services? We're here to help you succeed in the cloud.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md cursor-pointer"
                  onClick={info.action}
                >
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border bg-gradient-to-r from-green-500/10 to-orange-500/10">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Enterprise Support</h4>
                <p className="text-muted-foreground mb-4">
                  Need dedicated support for your organization? Contact our enterprise team for custom solutions.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => alert('Enterprise contact form would open here')}
                  className="hover:bg-gradient-to-r hover:from-green-500/10 hover:to-orange-500/10"
                >
                  Contact Enterprise Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
