
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/9ac84df5-0697-4104-9440-e460569172c0.png')"
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transforming Ideas into
            <span className="block text-[#4AE288]">Digital Reality</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            With 18+ years of experience in full-stack development, AI, and 
            blockchain technologies for businesses that demand excellence
          </p>
          <Button
            className="bg-[#4AE288] text-black hover:bg-[#4AE288]/90 px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
