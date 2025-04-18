
import { Brain, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMTIyMDJmIiBvcGFjaXR5PSIwLjIiPjxwYXRoIGQ9Ik0xOCAwdjE4SDBWMGgxOHpNMiAydjE0aDE0VjJIMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 -z-10"></div>

      <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-3/5 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="block">Transforming Ideas into</span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Specialized expertise in AI and blockchain development,
            bringing cutting-edge technology to your ambitious projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-8 py-6 text-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Innovate Together
            </Button>
            <Button
              variant="outline"
              className="border-green-500 text-black hover:bg-green-500/10 px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-black flex items-center justify-center">
              <div className="text-9xl font-bold text-green-500">S</div>
            </div>
            <Brain className="absolute -bottom-4 -left-4 text-green-500 w-16 h-16 animate-bounce" />
            <Bitcoin className="absolute -top-4 -right-4 text-green-500 w-16 h-16 animate-bounce delay-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
