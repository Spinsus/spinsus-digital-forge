import { Brain, Globe, Code2, ChevronDown, ChevronUp, Bitcoin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const PricingSection = () => {
  const [openCategories, setOpenCategories] = useState<string[]>(["AI Solutions"]);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const categories = [
    {
      title: "AI Solutions",
      icon: <Brain className="w-8 h-8 text-green-500" />,
      description: "From prototypes to production-ready AI systems",
      plans: [
        {
          name: "Prototype",
          price: 5000,
          description: "Perfect for startups testing AI concepts",
          features: ["Custom AI Model", "Basic Integration", "Documentation", "2 Weeks Support"]
        },
        {
          name: "Startup",
          price: 15000,
          description: "For businesses ready to implement AI",
          features: ["Advanced AI Models", "Full Integration", "API Development", "1 Month Support"]
        },
        {
          name: "Scale-up",
          price: 35000,
          description: "For growing companies needing robust AI",
          features: ["Multiple AI Models", "Complex Integration", "Performance Optimization", "3 Months Support"]
        },
        {
          name: "Enterprise",
          price: 75000,
          description: "Full-scale enterprise AI solutions",
          features: ["Enterprise AI Suite", "Full System Integration", "Custom Features", "6 Months Support"]
        },
        {
          name: "Custom",
          price: null,
          description: "Tailored enterprise solutions",
          features: ["Custom Everything", "24/7 Support", "Dedicated Team", "Full Maintenance"]
        }
      ]
    },
    {
      title: "Blockchain & Web3",
      icon: <Bitcoin className="w-8 h-8 text-green-500" />,
      description: "Complete blockchain and Web3 development solutions",
      plans: [
        {
          name: "DApp Starter",
          price: 8000,
          description: "Perfect for MVPs and proof of concepts",
          features: ["Smart Contract Development", "Web3 Frontend", "Basic Testing", "1 Month Support"]
        },
        {
          name: "Token Launch",
          price: 20000,
          description: "Launch your own token or NFT collection",
          features: ["Token Smart Contracts", "NFT Functionality", "Security Audit", "2 Months Support"]
        },
        {
          name: "DeFi Platform",
          price: 45000,
          description: "Build your decentralized finance platform",
          features: ["DeFi Smart Contracts", "Full Platform Development", "Advanced Security", "3 Months Support"]
        },
        {
          name: "Enterprise Blockchain",
          price: 85000,
          description: "Enterprise-grade blockchain solutions",
          features: ["Private Blockchain", "Custom Protocols", "Enterprise Integration", "6 Months Support"]
        },
        {
          name: "Custom Web3",
          price: null,
          description: "Tailored blockchain solutions",
          features: ["Custom Architecture", "Full Development", "Comprehensive Security", "Ongoing Support"]
        }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8 text-green-500" />,
      description: "From simple websites to complex web applications",
      plans: [
        {
          name: "Basic",
          price: 3000,
          description: "Simple but effective web presence",
          features: ["Modern Design", "Mobile Responsive", "Basic SEO", "1 Month Support"]
        },
        {
          name: "Professional",
          price: 8000,
          description: "Professional web application",
          features: ["Custom Design", "Advanced Features", "CMS Integration", "2 Months Support"]
        },
        {
          name: "E-commerce",
          price: 15000,
          description: "Full-featured online store",
          features: ["E-commerce Platform", "Payment Integration", "Inventory System", "3 Months Support"]
        },
        {
          name: "SaaS",
          price: 25000,
          description: "Custom SaaS application",
          features: ["Full SaaS Platform", "User Management", "Billing System", "6 Months Support"]
        },
        {
          name: "Enterprise",
          price: null,
          description: "Enterprise-grade applications",
          features: ["Custom Architecture", "Full Integration", "Scalable Infrastructure", "Ongoing Support"]
        }
      ]
    },
    {
      title: "API Development",
      icon: <Code2 className="w-8 h-8 text-green-500" />,
      description: "Robust and scalable API solutions",
      plans: [
        {
          name: "Custom API Solution",
          price: 10000,
          description: "Professional API development and integration",
          features: [
            "RESTful/GraphQL API",
            "Authentication & Security",
            "Documentation",
            "Performance Optimization",
            "3 Months Support"
          ]
        }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Investment Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for transformative technology solutions
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category, index) => (
            <Collapsible
              key={index}
              open={openCategories.includes(category.title)}
              onOpenChange={() => toggleCategory(category.title)}
              className="border border-gray-800 rounded-lg p-6 hover:border-green-500/30 transition-colors"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
                {openCategories.includes(category.title) ? (
                  <ChevronUp className="w-6 h-6 text-green-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-green-500" />
                )}
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {category.plans.map((plan, planIndex) => (
                    <Card key={planIndex} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-green-500/50 transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-2xl font-bold text-white">
                          {plan.price ? `$${plan.price.toLocaleString()}` : 'Custom Quote'}
                        </div>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-400 flex items-center gap-2">
                              <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                                {feature}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            All plans include project management, regular updates, and flexible payment terms.
            <br />
            Custom solutions available for specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
