import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = `Project ${id} | Shahmeer Abbas Khan`;
  }, [id]);

  // In a real app, you would fetch project data based on the id
  const projects = {
    1: {
      title: "Secure Auth System",
      description: "A comprehensive authentication system with multiple layers of security.",
      longDescription: "This project involved creating a secure authentication system that implements JWT for session management, OAuth2 for third-party logins, and multi-factor authentication via SMS and email. The system includes rate limiting, brute force protection, and security headers to prevent common web vulnerabilities.",
      technologies: ["React", "Django", "JWT", "OAuth2", "PostgreSQL", "Redis"],
      features: [
        "JWT-based authentication with refresh tokens",
        "OAuth2 integration with Google, GitHub, and Facebook",
        "Multi-factor authentication via SMS and email",
        "Rate limiting and brute force protection",
        "Security headers (CSP, HSTS, XSS Protection)",
        "Password strength enforcement"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/Meer-Rind/secure-auth-system",
      liveDemo: "https://auth-demo.meer-rind.com"
    },
    2: {
      title: "Vulnerability Scanner",
      description: "A tool to identify security vulnerabilities in web applications.",
      longDescription: "This vulnerability scanner automates the process of identifying common security issues in web applications. It checks for vulnerabilities like SQL injection, XSS, CSRF, insecure headers, and more. The tool generates detailed reports with remediation suggestions.",
      technologies: ["Python", "Go", "SQLite", "Docker"],
      features: [
        "Automated scanning for common web vulnerabilities",
        "Customizable scanning profiles",
        "Detailed reporting with remediation suggestions",
        "REST API for integration with CI/CD pipelines",
        "Scheduled scanning capabilities",
        "Email notifications for critical findings"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/Meer-Rind/vulnerability-scanner",
      liveDemo: null
    },
    3: {
      title: "E-commerce Platform",
      description: "A full-featured online store with admin dashboard.",
      longDescription: "This e-commerce platform includes a customer-facing store with product listings, shopping cart, and checkout process, as well as an admin dashboard for managing products, orders, and customers. The platform integrates with Stripe for payments and includes features like product reviews, discounts, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redis"],
      features: [
        "Product catalog with categories and filters",
        "Shopping cart and checkout process",
        "Stripe integration for payments",
        "Admin dashboard for store management",
        "User reviews and ratings",
        "Discount and coupon system",
        "Order tracking and history"
      ],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/Meer-Rind/ecommerce-platform",
      liveDemo: "https://store.meer-rind.com"
    }
  };

  const project = projects[id] || projects[1];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-electric-blue hover:text-cyber-green transition-colors duration-300 font-rajdhani"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="bg-navy-light rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-rajdhani">{project.title}</h1>
          <p className="text-lg mb-6 font-fira">{project.longDescription}</p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-rajdhani">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-navy-dark text-cyber-green rounded-full text-sm font-fira"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-navy-light border border-cyber-green text-cyber-green rounded-md hover:bg-cyber-green hover:text-navy-dark transition-colors duration-300 font-rajdhani"
              >
                View on GitHub
              </a>
            )}
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-cyber-green text-navy-dark rounded-md hover:bg-electric-blue transition-colors duration-300 font-rajdhani"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 font-rajdhani">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <div key={index} className="bg-navy-light p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-cyber-green rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-rajdhani">Feature {index + 1}</h3>
              </div>
              <p className="font-fira">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link 
          to="/contact" 
          className="inline-block px-8 py-3 bg-cyber-green text-navy-dark font-bold rounded-md hover:bg-electric-blue transition-colors duration-300 font-rajdhani"
        >
          Interested in this project? Contact Me
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;