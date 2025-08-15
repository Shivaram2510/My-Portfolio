import React, { useEffect, useRef } from "react";
import { Code, Layers, Bot, Database, Cloud, GitBranch } from "lucide-react";
import { skills } from "@/lib/constants";

const Skills = () => {
  const skillRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector(".skill-bar") as HTMLElement;
            const skillLevel = entry.target.getAttribute("data-skill");
            if (skillBar && skillLevel) {
              setTimeout(() => {
                skillBar.style.width = skillLevel + "%";
              }, 500);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(skillRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "blue",
      skills: skills.languages,
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "purple",
      skills: skills.frameworks,
    },
    {
      title: "AI/ML Tools",
      icon: Bot,
      color: "cyan",
      skills: skills.aiTools,
    },
    {
      title: "Databases",
      icon: Database,
      color: "green",
      skills: skills.databases,
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "yellow",
      skills: skills.devops,
    },
    {
      title: "Version Control",
      icon: GitBranch,
      color: "red",
      skills: skills.tools,
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-500 from-blue-500 to-blue-400",
      purple: "text-purple-500 from-purple-500 to-purple-400",
      cyan: "text-blue-400 from-blue-400 to-blue-300",
      green: "text-purple-400 from-purple-400 to-purple-300",
      yellow: "text-blue-300 from-blue-300 to-blue-200",
      red: "text-purple-300 from-purple-300 to-purple-200",
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 bg-slate-900" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" data-testid="skills-title">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
            alt="Abstract AI and machine learning neural network visualization"
            className="rounded-xl opacity-20 w-full h-32 object-cover mb-8"
            data-testid="skills-background-image"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);

            return (
              <div
                key={category.title}
                className="card-elevated p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
                data-testid={`skill-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`${colorClasses.split(' ')[0]} text-2xl mr-3`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      ref={(el) => {
                        skillRefs.current[`${categoryIndex}-${index}`] = el;
                      }}
                      className="skill-item"
                      data-skill={skill.level}
                      data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className={colorClasses.split(' ')[0].replace('text-', 'text-')}>{skill.level}%</span>
                      </div>
                      <div className="bg-slate-700 rounded-full h-2">
                        <div
                          className={`skill-bar bg-gradient-to-r ${colorClasses.split(' ').slice(1).join(' ')} h-2 rounded-full`}
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
