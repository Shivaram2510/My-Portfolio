import React from "react";
import { Badge } from "@/components/ui/badge";
import { experience, education } from "@/lib/constants";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" data-testid="experience-title">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Experience Item */}
          <div className="relative flex items-center mb-16">
            <div className="w-1/2 pr-8 text-right">
              <div className="card-elevated p-6 rounded-xl" data-testid="experience-card">
                <h3 className="text-xl font-bold mb-2" data-testid="experience-job-title">
                  {experience[0].title}
                </h3>
                <h4 className="text-blue-400 font-semibold mb-2" data-testid="experience-company">
                  {experience[0].company}
                </h4>
                <p className="text-gray-400 text-sm mb-4" data-testid="experience-period">
                  {experience[0].period} | {experience[0].location}
                </p>
                <ul className="text-gray-300 text-sm space-y-2">
                  {experience[0].description.map((item, index) => (
                    <li key={index} className="text-left" data-testid={`experience-description-${index}`}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900"></div>

            <div className="w-1/2 pl-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Modern office workspace with team collaboration"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="experience-image"
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center" data-testid="education-title">
            Education
          </h3>
          <div className="card-elevated p-8 rounded-2xl max-w-4xl mx-auto" data-testid="education-card">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2" data-testid="education-degree">
                  {education.degree}
                </h4>
                <h5 className="text-blue-400 font-semibold mb-2" data-testid="education-institution">
                  {education.institution}
                </h5>
                <p className="text-gray-400 mb-4" data-testid="education-period">
                  {education.period} | {education.location}
                </p>
                <div className="mb-4">
                  <h6 className="font-semibold mb-2">Relevant Coursework:</h6>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`education-course-${course.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Modern university campus with students"
                  className="rounded-xl w-64 h-48 object-cover"
                  data-testid="education-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
