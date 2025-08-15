import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const handleNavClick = (href: string) => {
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 py-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4" data-testid="footer-copyright">
            © 2025 Naradashi Shiva Ram. Crafted with{" "}
            <Heart className="inline w-4 h-4 text-purple-500" /> using AI-powered tools.
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              data-testid="footer-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("#about")}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              data-testid="footer-nav-about"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("#projects")}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              data-testid="footer-nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              data-testid="footer-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
