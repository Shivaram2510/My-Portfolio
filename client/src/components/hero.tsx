import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Globe } from "lucide-react";
import { personalInfo } from "@/lib/constants";

const Hero = () => {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/resume");
      const data = await response.json();
      // TODO: Implement actual file download
      alert(data.message);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-animated relative overflow-hidden"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Naradashi Shiva Ram</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-200" data-testid="hero-subtitle">
            {personalInfo.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
            Crafting intelligent solutions that bridge the gap between cutting-edge AI and seamless user experiences.
            Specialized in MERN stack with machine learning integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleScrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="px-8 py-3 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a
              href={personalInfo.linkedin}
              className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.github}
              className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.portfolio}
              className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
              data-testid="link-portfolio"
            >
              <Globe className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '-1s' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
