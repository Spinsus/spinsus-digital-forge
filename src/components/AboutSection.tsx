
import { Calendar, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    {
      icon: <Calendar className="w-6 h-6 text-green-500" />,
      value: "19+",
      label: "Years"
    },
    {
      icon: <Code className="w-6 h-6 text-green-500" />,
      value: "135+",
      label: "Projects"
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      value: "10+",
      label: "Global Clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-green-500"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-green-500"></div>

              <div className="relative overflow-hidden rounded-lg shadow-xl shadow-green-500/10">
                <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-9xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">S</div>
                    <h3 className="text-2xl font-bold text-white">Kevin L.</h3>
                    <p className="text-gray-400 mt-2">Founder & Lead Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-around mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              About Spinsus
            </h2>

            <p className="text-gray-300 mb-6">
              Spinsus is a boutique software consulting company focused on delivering cutting-edge solutions in AI and blockchain technologies.
              Founded by Kevin L., a seasoned software engineer with over a decade of experience in solving complex technical challenges.
            </p>

            <p className="text-gray-300 mb-6">
              We take pride in our ability to transform complex concepts into elegant, functional solutions.
              Our approach combines technical excellence with a deep understanding of business needs, ensuring
              that every project we undertake delivers real value.
            </p>

            <p className="text-gray-300 mb-8">
              What sets us apart is our specialized focus on emerging technologies like artificial intelligence and
              blockchain, allowing us to push boundaries and create innovative solutions that give our clients a competitive edge.
            </p>

            <Button
              variant="outline"
              className="border-green-500 text-black hover:bg-green-500/10"
              onClick={() => window.open("https://www.linkedin.com/in/kevin-l-9950605b/", "_blank")}
            >
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
