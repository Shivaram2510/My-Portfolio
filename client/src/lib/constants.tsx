export const personalInfo = {
  name: "Naradashi Shiva Ram",
  title: "AI-Powered Full-Stack Developer",
  email: "naradashishivaram25@gmail.com",
  phone: "+91-8309450179",
  location: "Hyderabad, Telangana, India",
  summary: "Highly skilled and innovative Full-Stack Developer with a strong foundation in designing, developing, and deploying high-impact applications that leverage AI and machine learning. Proven expertise in building end-to-end solutions, from dynamic front-end interfaces with React to scalable back-end services with Node.js and MongoDB.",
  portfolio: "https://naradashi-shiva-ram-portfolio.vercel.app"
};

export const skills = {
  languages: [
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "GoLang", level: 80 },
  ],
  frameworks: [
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "React Native", level: 85 },
  ],
  aiTools: [
    { name: "Cursor", level: 90 },
    { name: "GitHub Copilot", level: 85 },
    { name: "TensorFlow", level: 80 },
    { name: "PyTorch", level: 75 },
  ],
  databases: [
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 80 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "AWS", level: 80 },
    { name: "Vercel", level: 90 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "GitHub", level: 90 },
    { name: "GitLab", level: 85 },
  ]
};

export const projects = [
  {
    id: "canteen",
    title: "AI-Powered Canteen Webapp",
    description: "Full-stack web application for canteen management with intelligent ordering and ML-based inventory optimization.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["MERN Stack", "Machine Learning", "Vercel"],
    highlight: "91% Accuracy",
    details: {
      overview: "Developed a comprehensive full-stack web application for canteen management with a focus on intelligent ordering and enhanced user experience. The system integrates machine learning for inventory optimization and predictive analytics.",
      features: [
        "Intuitive ordering interface built with Cursor and Lovable",
        "ML model for predicting popular food items (91% accuracy)",
        "Real-time inventory tracking and optimization",
        "Secure payment integration",
        "Admin dashboard for management"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Machine Learning", "Vercel"],
      results: [
        "91% accuracy in item prediction",
        "40% reduction in food waste",
        "Improved customer satisfaction",
        "Streamlined ordering process",
        "Fast and reliable deployment on Vercel"
      ]
    }
  },
  {
    id: "travel",
    title: "Intelligent Travel Planner",
    description: "AI-powered travel planning application with optimized itineraries, accommodations, and activity suggestions.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["React", "GoLang", "MongoDB", "AI"],
    highlight: "High Performance",
    details: {
      overview: "Developed a sophisticated full-stack travel planning application that leverages artificial intelligence to generate optimized itineraries, accommodation suggestions, and activity recommendations based on user preferences and constraints.",
      features: [
        "AI-powered itinerary generation",
        "Smart accommodation matching",
        "Activity recommendations based on interests",
        "Budget optimization algorithms",
        "Real-time weather integration",
        "Social sharing capabilities"
      ],
      technologies: ["React", "GoLang", "MongoDB", "AI APIs", "Maps API"],
      results: [
        "High-performance GoLang backend",
        "Complex AI model queries processing",
        "Efficient data persistence with MongoDB",
        "Responsive React interface",
        "RESTful API architecture"
      ]
    }
  },
  {
    id: "meritcurve",
    title: "MeritCurve AI Analytics",
    description: "AI-powered platform for employee performance analytics with dynamic visualizations and predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["MERN Stack", "PyTorch", "Analytics"],
    highlight: "Dynamic Insights",
    details: {
      overview: "Developed a comprehensive, AI-powered platform for employee performance analytics, inspired by advanced merit curve methodologies. The platform provides deep insights into performance metrics and delivers predictive analytics for organizational growth.",
      features: [
        "Advanced performance metrics analysis",
        "Predictive insights using PyTorch models",
        "Dynamic data visualizations",
        "Actionable recommendations engine",
        "Role-based access control",
        "Real-time performance tracking"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "PyTorch", "D3.js"],
      results: [
        "PyTorch-based ML models",
        "Performance pattern recognition",
        "Predictive analytics algorithms",
        "Automated insight generation",
        "Data-driven recommendations"
      ]
    }
  }
];

export const experience = [
  {
    title: "AI-Powered Full-Stack Intern",
    company: "Innovate AI Solutions",
    period: "Jan 2025 - Apr 2025",
    location: "Remote",
    description: [
      "Pioneered AI coding tools like Cursor and GitHub Copilot to enhance team velocity by 30%",
      "Achieved 95% code coverage through comprehensive testing strategies",
      "Developed dynamic web applications using MERN stack with real-time features",
      "Implemented scalable CI/CD pipeline and deployment strategy on Vercel"
    ]
  }
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "ACE Engineering College",
  location: "Hyderabad, Telangana",
  period: "2022 - 2026",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management",
    "Web Development",
    "Software Engineering"
  ]
};
