import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Shield, 
  CheckCircle, 
  Star,
  Quote,
  ArrowRight,
  Play
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Homepage = () => {
  const features = [
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "AI-powered email sequences that adapt to recipient behavior and engagement patterns."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced segmentation tools to deliver the right message to the right audience at the perfect time."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting dashboard with actionable insights to optimize your campaigns."
    },
    {
      icon: Users,
      title: "Lead Nurturing",
      description: "Automated workflows that guide prospects through your sales funnel with personalized content."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP Marketing",
      company: "TechFlow Solutions",
      content: "iEMA transformed our lead nurturing process. We saw a 340% increase in qualified leads within the first quarter.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Revenue Officer",
      company: "DataSync Corp",
      content: "The automation capabilities are incredible. We've reduced manual work by 80% while improving conversion rates.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "Marketing Director",
      company: "CloudScale Inc",
      content: "Outstanding platform with exceptional support. Our email engagement rates have never been higher.",
      rating: 5
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Mailchimp", "Pipedrive", "Slack", "Zapier", "Microsoft Dynamics", "Zoho CRM"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-brand-cream-light to-accent py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-brand-red text-brand-red">
                  iEMA - Email Marketing Automation
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transform Your
                  <span className="block text-brand-red">Email Marketing</span>
                  with Intelligent Automation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Automate personalized email campaigns that enhance lead nurturing, 
                  improve engagement, and boost B2B conversion rates with our advanced 
                  marketing automation platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="cta-outline" size="lg" className="text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Book Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="iEMA Dashboard" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-lg font-medium text-muted-foreground">
              Trusted by 2,500+ companies worldwide
            </h2>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <Badge variant="secondary" className="text-lg px-4 py-2">SOC 2 Certified</Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">GDPR Compliant</Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">99.9% Uptime</Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">24/7 Support</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Powerful Features for Modern Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create, automate, and optimize your email marketing campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-20 bg-gradient-to-r from-brand-cream to-brand-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Calculate Your ROI with iEMA
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how much revenue you could generate with our email marketing automation platform
            </p>
            <Card className="max-w-md mx-auto p-8">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-red">340%</div>
                  <div className="text-sm text-muted-foreground">Average ROI Increase</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">80%</div>
                    <div className="text-xs text-muted-foreground">Less Manual Work</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">65%</div>
                    <div className="text-xs text-muted-foreground">Higher Open Rates</div>
                  </div>
                </div>
                <Button variant="cta" className="w-full">
                  Calculate Your ROI
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers who trust iEMA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-brand-red opacity-50" />
                    <p className="text-muted-foreground">{testimonial.content}</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Seamless Integrations
              </h2>
              <p className="text-xl text-muted-foreground">
                Connect with your favorite tools and platforms
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((integration, index) => (
                <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                  {integration}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-white/90">
            Join thousands of companies using iEMA to automate their success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;