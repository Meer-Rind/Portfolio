import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft, FiCheck } from 'react-icons/fi';

const ProjectDetails = () => {
  const { id } = useParams();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [isHoveringContact, setIsHoveringContact] = useState(false);

  useEffect(() => {
    document.title = `Project ${id} | Shahmeer Abbas Khan`;
  }, [id]);

  // Enhanced project data with more details
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
      challenges: [
        "Implementing secure token storage",
        "Handling OAuth2 callback flows",
        "Optimizing MFA user experience",
        "Preventing replay attacks"
      ],
      solutions: [
        "Used HttpOnly cookies for token storage",
        "Created state management for OAuth flows",
        "Implemented QR code scanning for MFA",
        "Added nonce validation to prevent replays"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/Meer-Rind/secure-auth-system",
      liveDemo: "https://auth-demo.meer-rind.com",
      stats: [
        { label: "Security Vulnerabilities", value: "0", unit: "" },
        { label: "Authentication Speed", value: "200", unit: "ms" },
        { label: "Uptime", value: "99.99", unit: "%" }
      ]
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
      challenges: [
        "Reducing false positives",
        "Handling large scale scans",
        "Generating actionable reports",
        "Integrating with various frameworks"
      ],
      solutions: [
        "Implemented machine learning for result analysis",
        "Used Go for performance-critical components",
        "Created templated report generation",
        "Built plugin system for framework support"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/Meer-Rind/vulnerability-scanner",
      liveDemo: null,
      stats: [
        { label: "Vulnerabilities Detected", value: "50+", unit: "" },
        { label: "Scan Speed", value: "10x", unit: "faster" },
        { label: "Accuracy", value: "95", unit: "%" }
      ]
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
      challenges: [
        "Handling concurrent inventory updates",
        "Securing payment processing",
        "Optimizing product search",
        "Managing user sessions"
      ],
      solutions: [
        "Implemented Redis for inventory locking",
        "Used Stripe Elements for secure payments",
        "Added Elasticsearch for product search",
        "Created JWT-based session management"
      ],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/Meer-Rind/ecommerce-platform",
      liveDemo: "https://store.meer-rind.com",
      stats: [
        { label: "Conversion Rate", value: "3.5", unit: "%" },
        { label: "Page Load Time", value: "1.2", unit: "s" },
        { label: "Monthly Transactions", value: "10K+", unit: "" }
      ]
    }
  };

  const project = projects[id] || projects[1];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const featureCardVariants = {
    initial: { y: 0, opacity: 1 },
    hover: {
      y: -5,
      boxShadow: "0 15px 30px -10px rgba(0, 255, 170, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.98 }
  };

  const statCardVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const challengeSolutionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactButtonVariants = {
    initial: { backgroundPosition: '0% 50%' },
    hover: { 
      backgroundPosition: '100% 50%',
      transition: { 
        duration: 1.5,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Back button with animation */}
      <motion.div 
        className="mb-8"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link 
          to="/projects" 
          className="inline-flex items-center text-electric-blue hover:text-cyber-green transition-colors duration-300 font-rajdhani group"
        >
          <motion.div
            className="mr-2"
            animate={{ 
              x: [0, -5, 0],
              transition: { 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }
            }}
          >
            <FiArrowLeft className="w-5 h-5" />
          </motion.div>
          <motion.span
            className="group-hover:underline"
            whileHover={{ x: 3 }}
          >
            Back to Projects
          </motion.span>
        </Link>
      </motion.div>

      {/* Main project content */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Project image with loading state */}
        <motion.div 
          className="relative"
          variants={imageVariants}
        >
          <div className="bg-navy-light rounded-xl overflow-hidden shadow-2xl relative aspect-video">
            {!isImageLoaded && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-navy-dark to-gray-900"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              initial="hidden"
              animate={isImageLoaded ? "visible" : "hidden"}
              variants={imageVariants}
              onLoad={() => setIsImageLoaded(true)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <motion.h3 
                className="text-2xl font-bold text-white"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
            </div>
          </div>
        </motion.div>
        
        {/* Project details */}
        <motion.div variants={containerVariants}>
          {/* Title with gradient text */}
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4 font-rajdhani"
            variants={itemVariants}
          >
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">
              {project.title}
            </span>
          </motion.h1>
          
          {/* Description with animated border */}
          <motion.div 
            className="mb-6 relative"
            variants={itemVariants}
          >
            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-electric-blue to-cyber-green rounded-full"></div>
            <motion.p 
              className="text-lg font-fira leading-relaxed pl-6"
              whileHover={{ x: 3 }}
            >
              {project.longDescription}
            </motion.p>
          </motion.div>
          
          {/* Technologies with staggered animation */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold mb-4 font-rajdhani flex items-center"
              whileHover={{ x: 3 }}
            >
              <span className="mr-2">🛠️</span>
              Technologies Used
            </motion.h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-navy-dark text-cyber-green rounded-full text-sm font-fira flex items-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 500,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: '#00ffaa',
                    color: '#1a1a2e'
                  }}
                >
                  <FiCheck className="mr-1" />
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Project links */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            variants={itemVariants}
          >
            {project.githubLink && (
              <motion.a
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-navy-light border border-cyber-green text-cyber-green rounded-lg hover:bg-cyber-green hover:text-navy-dark transition-colors duration-300 font-rajdhani flex items-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 255, 170, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-5 h-5 mr-2" />
                View on GitHub
              </motion.a>
            )}
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-cyber-green text-navy-dark rounded-lg hover:bg-electric-blue transition-colors duration-300 font-rajdhani flex items-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 255, 170, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Key Features section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="text-2xl font-bold mb-6 font-rajdhani flex items-center"
          whileHover={{ x: 3 }}
        >
          <span className="mr-2">✨</span>
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-navy-light p-6 rounded-xl shadow-lg border border-navy-dark hover:border-cyber-green transition-all duration-300 relative overflow-hidden"
              variants={featureCardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              custom={index}
              transition={{ delay: 0.1 * index }}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-cyber-green rounded-full flex items-center justify-center mr-3">
                  <span className="text-navy-dark font-bold">{index + 1}</span>
                </div>
                <motion.h3 
                  className="text-lg font-bold font-rajdhani"
                  whileHover={{ color: '#00ffaa' }}
                >
                  {feature.split(':')[0]}
                </motion.h3>
              </div>
              <motion.p 
                className="font-fira"
                initial={{ height: 'auto' }}
                animate={{ height: 'auto' }}
              >
                {feature}
              </motion.p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-cyber-green/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats & Challenges/Solutions section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Project stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 font-rajdhani flex items-center">
            <span className="mr-2">📊</span>
            Project Stats
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {project.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-navy-light p-4 rounded-xl text-center border border-navy-dark hover:border-cyber-green transition-colors duration-300"
                variants={statCardVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl font-bold font-rajdhani text-cyber-green mb-1">
                  {stat.value}
                  {stat.unit && <span className="text-sm">{stat.unit}</span>}
                </div>
                <div className="text-sm font-fira">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 font-rajdhani flex items-center">
            <span className="mr-2">🧩</span>
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <motion.div 
                key={index}
                variants={challengeSolutionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-navy-light p-5 rounded-xl shadow-lg"
              >
                <motion.h3 
                  className="text-lg font-bold font-rajdhani text-electric-blue mb-2"
                  whileHover={{ x: 3 }}
                >
                  Challenge: {challenge}
                </motion.h3>
                <motion.p 
                  className="font-fira"
                  whileHover={{ x: 3 }}
                >
                  <span className="text-cyber-green">Solution:</span> {project.solutions[index]}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact CTA with animated gradient */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="inline-block rounded-xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 font-bold rounded-xl font-rajdhani relative overflow-hidden group"
            onMouseEnter={() => setIsHoveringContact(true)}
            onMouseLeave={() => setIsHoveringContact(false)}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cyber-green to-electric-blue opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              initial={{ opacity: 1 }}
              animate={{ opacity: isHoveringContact ? 0 : 1 }}
            />
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHoveringContact ? 1 : 0 }}
            />
            <span className="relative z-10 text-navy-dark group-hover:text-navy-dark">
              Interested in this project? Let's Build Something Together!
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating particles decoration */}
      <AnimatePresence>
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="fixed pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#00ffaa'
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              transition: {
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectDetails;