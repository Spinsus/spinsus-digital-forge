
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/450906e5-0514-4bcc-8bde-5261667f643c.png')"
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/450906e5-0514-4bcc-8bde-5261667f643c.png')"
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transforming Ideas into
            <span className="block text-[#4AE288]">Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Specialized expertise in AI and blockchain development,
            bringing cutting-edge technology to your ambitious projects.
          </p>
          <span style={{padding: "20px"}}>
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-8 py-6 text-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Innovate Together
            </Button>
          </span>
          <span>
            <Button
              variant="outline"
              className="border-green-500 text-black hover:bg-black-500/10 px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
