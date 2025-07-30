import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses getting started with email automation",
      features: [
        "Up to 5,000 contacts",
        "10,000 emails per month",
        "Basic automation workflows",
        "Email templates library",
        "Basic analytics",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses that need advanced features",
      features: [
        "Up to 25,000 contacts",
        "100,000 emails per month",
        "Advanced automation workflows",
        "A/B testing",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Priority email & chat support",
        "Custom landing pages"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited contacts",
        "Unlimited emails",
        "Custom workflow builder",
        "Advanced personalization",
        "Dedicated account manager",
        "Custom integrations & API",
        "24/7 phone support",
        "Custom onboarding",
        "SLA guarantee",
        "Single sign-on (SSO)"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data remains accessible for 30 days after cancellation. You can export all your data during this period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for annual plans. Monthly plans can be cancelled anytime."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees. You only pay the monthly or annual subscription cost."
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
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Simple Pricing for
              <span className="block text-brand-red">Every Business Size</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the perfect plan for your email marketing needs. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-soft hover:shadow-strong transition-all ${plan.popular ? 'ring-2 ring-brand-red scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-red text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4 pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-brand-red">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "cta" : "cta-outline"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-r from-brand-cream to-brand-cream-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-muted-foreground">
              See how much revenue you could generate with iEMA
            </p>
            
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-red">340%</div>
                  <div className="text-sm text-muted-foreground">Average ROI Increase</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-red">$2.4M</div>
                  <div className="text-sm text-muted-foreground">Average Revenue Generated</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-red">6 months</div>
                  <div className="text-sm text-muted-foreground">Average Payback Period</div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="cta" size="lg">
                  Get Your Custom ROI Report
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90">
            Join thousands of companies transforming their email marketing
          </p>
          <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;