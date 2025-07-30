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
  Play,
  Workflow,
  MessageSquare,
  Calendar,
  Filter,
  TrendingUp,
  Bell
} from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "Automation & Workflows",
      features: [
        {
          icon: Workflow,
          title: "Drag & Drop Builder",
          description: "Create complex automation workflows with our intuitive visual builder. No coding required."
        },
        {
          icon: Zap,
          title: "Trigger-Based Actions",
          description: "Set up automated responses based on user behavior, clicks, opens, and custom events."
        },
        {
          icon: Calendar,
          title: "Smart Scheduling",
          description: "Optimize send times based on recipient timezone and engagement patterns."
        }
      ]
    },
    {
      title: "Personalization & Targeting",
      features: [
        {
          icon: Target,
          title: "Advanced Segmentation",
          description: "Create highly targeted segments based on demographics, behavior, and engagement data."
        },
        {
          icon: MessageSquare,
          title: "Dynamic Content",
          description: "Personalize email content in real-time based on recipient data and preferences."
        },
        {
          icon: Filter,
          title: "Behavioral Triggers",
          description: "Send targeted messages based on website visits, product views, and purchase history."
        }
      ]
    },
    {
      title: "Analytics & Optimization",
      features: [
        {
          icon: BarChart3,
          title: "Real-Time Analytics",
          description: "Track opens, clicks, conversions, and revenue attribution in real-time dashboards."
        },
        {
          icon: TrendingUp,
          title: "A/B Testing",
          description: "Test subject lines, content, and send times to optimize campaign performance."
        },
        {
          icon: Bell,
          title: "Performance Alerts",
          description: "Get notified when campaigns underperform or when opportunities arise."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-brand-cream-light to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="border-brand-red text-brand-red">
              Comprehensive Feature Set
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Everything You Need for
              <span className="block text-brand-red">Email Marketing Success</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the powerful features that make iEMA the leading choice for B2B email marketing automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="cta-outline" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-muted'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                {category.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
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
      ))}

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-brand-cream to-brand-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              See iEMA in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our platform with an interactive demo or schedule a personalized walkthrough
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Interactive Demo
                <Play className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="cta-outline" size="lg" className="text-lg px-8 py-6">
                Schedule Walkthrough
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;