
import { CircuitBoard, MicrochipIcon, Database, Lock, GitBranch, Code2 } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <CircuitBoard size={28} />,
      name: "Machine Learning & Neural Networks",
      percentage: 95,
    },
    {
      icon: <MicrochipIcon size={28} />,
      name: "Smart Contract Development",
      percentage: 90,
    },
    {
      icon: <Database size={28} />,
      name: "Distributed Database Systems",
      percentage: 85,
    },
    {
      icon: <GitBranch size={28} />,
      name: "Agile Development Process",
      percentage: 95,
    },
    {
      icon: <Code2 size={28} />,
      name: "Full-Stack Development",
      percentage: 90,
    },
    {
      icon: <Lock size={28} />,
      name: "Cybersecurity Implementation",
      percentage: 85,
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Years of experience across cutting-edge technologies to deliver robust, future-proof solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-gray-800 rounded-md text-green-500 group-hover:bg-green-500/20 transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{area.name}</h3>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-1000 ease-out group-hover:opacity-90"
                  style={{ width: `${area.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
