
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      Icon: Facebook,
      url: "https://www.facebook.com/spinsus.official",
      ariaLabel: "Spinsus Facebook"
    },
    {
      Icon: Instagram,
      url: "https://www.instagram.com/spinsus_official/",
      ariaLabel: "Spinsus Instagram"
    },
    {
      Icon: Twitter,
      url: "https://x.com/spinsus",
      ariaLabel: "Spinsus X (Twitter)"
    },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/company/76534347/admin/dashboard/",
      ariaLabel: "Spinsus LinkedIn"
    }
  ];

  return (
    <footer className="py-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              SPINSUS
            </div>
            <p className="text-gray-400 mt-2">Transforming Ideas into Intelligent Solutions</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(({ Icon, url, ariaLabel }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors mb-4"
            >
              <ArrowUp className="h-5 w-5 text-green-500" />
            </button>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Spinsus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
