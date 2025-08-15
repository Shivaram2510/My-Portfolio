import React from "react";
import { personalInfo } from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="card-elevated p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white" data-testid="about-summary-title">
                Professional Summary
              </h3>
              <div className="text-gray-300 leading-relaxed mb-6 space-y-4" data-testid="about-summary-content">
                <p>
                  Highly skilled and innovative Full-Stack Developer with a strong foundation in designing, developing, and
                  deploying high-impact applications that leverage AI and machine learning. Proven expertise in building
                  end-to-end solutions, from dynamic front-end interfaces with React to scalable back-end services with
                  Node.js and MongoDB.
                </p>
                <p>
                  Adept at applying data-driven methodologies to solve complex problems and create intelligent, user-centric
                  platforms. Seeking to apply advanced technical skills to contribute to a dynamic and forward-thinking team.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center" data-testid="stat-experience">
                  <div className="text-2xl font-bold text-blue-400">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center" data-testid="stat-projects">
                  <div className="text-2xl font-bold text-purple-400">15+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center" data-testid="stat-coverage">
                  <div className="text-2xl font-bold text-blue-400">95%</div>
                  <div className="text-gray-400 text-sm">Code Coverage</div>
                </div>
                <div className="text-center" data-testid="stat-accuracy">
                  <div className="text-2xl font-bold text-purple-400">91%</div>
                  <div className="text-gray-400 text-sm">ML Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern tech background with circuit patterns"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                data-testid="about-image"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
