
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI-Powered Healthcare Analytics",
    description: "Developed a machine learning system for healthcare data analysis, improving diagnostic accuracy by 35%.",
    image: "/lovable-uploads/af4e3828-bc54-4e21-acc3-2152d0a2efea.png",
    technologies: ["Python", "TensorFlow", "Healthcare"]
  },
  {
    title: "Decentralized Finance Platform",
    description: "Built a secure blockchain-based DeFi platform enabling peer-to-peer transactions and smart contract automation.",
    image: "/lovable-uploads/450906e5-0514-4bcc-8bde-5261667f643c.png",
    technologies: ["Solidity", "Ethereum", "Web3.js"]
  },
  {
    title: "Political Networking Platform",
    description: "Created a secure platform connecting political candidates with supporters and volunteers.",
    image: "/lovable-uploads/f74e19a0-96f6-4708-8c17-35fca7172251.png",
    technologies: ["Ruby on Rails", "React", "PostgreSQL"]
  },
  {
    title: "Restaurant Management System",
    description: "Built a comprehensive inventory and order management system for restaurant chains.",
    image: "/lovable-uploads/cc6ff183-6801-4482-9c81-396c5fd83b60.png",
    technologies: ["JavaScript", "Node.js", "MongoDB"]
  },
  {
    title: "Chefsheet Recipe Platform",
    description: "Designed and implemented a digital recipe management system for professional chefs.",
    image: "/lovable-uploads/5c3b6dd0-c0c9-495a-8e2f-dde9f5727e3d.png",
    technologies: ["Full Stack", "UX Design", "Cloud Hosting"]
  },
  {
    title: "Healthcare API Integration",
    description: "Developed a secure API system for healthcare data exchange, improving patient care coordination.",
    image: "/lovable-uploads/064963d7-c091-4628-a99d-0bd182a53409.png",
    technologies: ["Ruby on Rails", "API Design", "Healthcare"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-green-500/50 transition-all">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-white mb-3">{project.title}</CardTitle>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-green-500/10 text-green-500 border-green-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
