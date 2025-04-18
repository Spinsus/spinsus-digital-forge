
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you shortly.",
    });

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss how my expertise in AI and blockchain can bring your vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/5">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-400">kevin@spinsus.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Social</h4>
                      <div className="flex gap-2 mt-2">
                        <a
                          href="https://www.linkedin.com/in/kevin-l-9950605b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-500 transition-colors"
                        >
                          LinkedIn
                        </a>
                        <span className="text-gray-600">•</span>
                        <a
                          href="https://www.upwork.com/freelancers/~01cb4f0156348f7118"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-500 transition-colors"
                        >
                          Upwork
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-800 placeholder:text-gray-500 h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-800 placeholder:text-gray-500 h-12"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-800 placeholder:text-gray-500 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-700 text-white py-6 text-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
                >
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
