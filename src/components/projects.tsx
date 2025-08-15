import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, X } from "lucide-react";
import { projects } from "@/lib/constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-800" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-elevated rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              data-testid={`project-card-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs" data-testid={`project-tag-${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-semibold" data-testid={`project-highlight-${project.id}`}>
                    {project.highlight}
                  </span>
                  <ArrowRight className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto card-elevated border-slate-700" data-testid="project-modal">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold" data-testid="modal-project-title">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl"
                    data-testid="modal-project-image"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-blue-400">Project Overview</h4>
                      <p className="text-gray-300 mb-4" data-testid="modal-project-overview">
                        {selectedProject.details.overview}
                      </p>
                      <h4 className="text-xl font-semibold mb-3 text-purple-400">Key Features</h4>
                      <ul className="text-gray-300 space-y-2">
                        {selectedProject.details.features.map((feature, index) => (
                          <li key={index} data-testid={`modal-feature-${index}`}>
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-blue-400">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.details.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-sm" data-testid={`modal-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="text-xl font-semibold mb-3 text-purple-400">Results</h4>
                      <ul className="text-gray-300 space-y-2">
                        {selectedProject.details.results.map((result, index) => (
                          <li key={index} data-testid={`modal-result-${index}`}>
                            • {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
