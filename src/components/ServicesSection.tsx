
import { Brain, Bitcoin, Database, Code, Cloud, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-10 h-10 text-green-500" />,
      title: "AI Solutions",
      description: "Custom AI models and implementations for business automation, data analysis, and intelligent decision-making systems."
    },
    {
      icon: <Bitcoin className="w-10 h-10 text-green-500" />,
      title: "Blockchain Development",
      description: "Smart contracts, DApps, and crypto solutions built with the latest secure and efficient blockchain technologies."
    },
    {
      icon: <Database className="w-10 h-10 text-green-500" />,
      title: "Data Engineering",
      description: "Scalable data architecture that turns your information into actionable insights with optimized performance."
    },
    {
      icon: <Code className="w-10 h-10 text-green-500" />,
      title: "Full-Stack Development",
      description: "End-to-end web applications with responsive UIs and robust backend systems for seamless user experiences."
    },
    {
      icon: <Cloud className="w-10 h-10 text-green-500" />,
      title: "Cloud Solutions",
      description: "Optimized cloud infrastructure for maximum performance, security, and cost-efficiency."
    },
    {
      icon: <Key className="w-10 h-10 text-green-500" />,
      title: "Security Implementation",
      description: "Comprehensive security measures for protecting sensitive data and transactions in your applications."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Specialized Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technology to build innovative solutions for forward-thinking clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-green-500/50 transition-all">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
