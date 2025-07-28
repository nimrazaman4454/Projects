import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Alzheimer Monitoring App",
      description: "AI-based app to detect Alzheimer's stages using MRI scans.",
      link: "https://github.com/nimrazaman4454/alzheimer-monitoring-app",
    },
    {
      title: "Campus 2 Career",
      description: "Career portal for students with job listings, FYPs, and courses.",
      link: "https://github.com/nimrazaman4454/campus2career",
    },
    {
      title: "Lead Management System",
      description: "PHP + MySQL CRM for lead tracking and outreach automation.",
      link: "https://github.com/nimrazaman4454/lead-management",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((project, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-6 hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
