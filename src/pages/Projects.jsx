import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | Projects";
  }, []);

  const projects = [
    {
      id: 1,
      title: "Secure Auth System",
      description: "A multi-factor authentication system with JWT and OAuth2 integration.",
      tags: ["React", "Django", "JWT", "Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Vulnerability Scanner",
      description: "A tool to scan web applications for common security vulnerabilities.",
      tags: ["Python", "Go", "Security"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "API Gateway",
      description: "A high-performance API gateway with rate limiting and authentication.",
      tags: ["Go", "Microservices", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
    },
    {
      id: 5,
      title: "Password Manager",
      description: "A secure password manager with end-to-end encryption.",
      tags: ["React", "Node.js", "Security", "Encryption"],
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      title: "DevOps Dashboard",
      description: "A dashboard for monitoring CI/CD pipelines and server status.",
      tags: ["React", "Go", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-rajdhani">
          My <span className="text-cyber-green">Projects</span>
        </h1>
        <div className="w-24 h-1 bg-cyber-green mx-auto mb-8"></div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-fira">
          Here are some of my recent projects. Each one was built with a focus on security, performance, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mb-6 font-fira">
          Interested in seeing more? Check out my GitHub profile for additional projects and contributions.
        </p>
        <a 
          href="https://github.com/Meer-Rind" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-navy-light border border-cyber-green text-cyber-green rounded-md hover:bg-cyber-green hover:text-navy-dark transition-colors duration-300 font-rajdhani"
        >
          Visit My GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;