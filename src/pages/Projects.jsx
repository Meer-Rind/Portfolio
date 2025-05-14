import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiLock, FiServer, FiCpu, FiChevronRight } from 'react-icons/fi';
import SecurityComponent from '../components/SecurityComponent';

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const projectRefs = useRef([]);

  const projectCategories = [
    { name: 'All', icon: <FiCode /> },
    { name: 'Security', icon: <FiLock /> },
    { name: 'Backend', icon: <FiServer /> },
    { name: 'Frontend', icon: <FiCpu /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Secure Auth System",
      description: "A multi-factor authentication system with JWT and OAuth2 integration featuring advanced security protocols and biometric verification.",
      tags: ["React", "Django", "JWT", "Security"],
      category: "Security",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/example/auth-system",
      liveDemo: "https://auth-demo.example.com",
      stats: [
        { label: "Security Score", value: "98%", icon: "🔒" },
        { label: "Uptime", value: "99.99%", icon: "⏱️" }
      ]
    },
    {
      id: 2,
      title: "Vulnerability Scanner",
      description: "Comprehensive security tool that scans web applications for OWASP Top 10 vulnerabilities with detailed reporting and remediation guidance.",
      tags: ["Python", "Go", "Security"],
      category: "Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/example/vuln-scanner",
      stats: [
        { label: "Vulnerabilities", value: "50+", icon: "🛡️" },
        { label: "Scan Speed", value: "10x", icon: "⚡" }
      ]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration, inventory management, and analytics dashboard serving thousands of customers.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/example/ecommerce",
      liveDemo: "https://store.example.com",
      stats: [
        { label: "Conversion", value: "3.5%", icon: "📈" },
        { label: "Transactions", value: "10K+", icon: "💰" }
      ]
    },
    {
      id: 4,
      title: "API Gateway",
      description: "High-performance microservices gateway with rate limiting, authentication, and real-time monitoring for distributed systems.",
      tags: ["Go", "Microservices", "Kubernetes"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      githubLink: "https://github.com/example/api-gateway",
      stats: [
        { label: "Requests", value: "15K/s", icon: "🚀" },
        { label: "Latency", value: "2.3ms", icon: "⏱️" }
      ]
    },
    {
      id: 5,
      title: "Password Manager",
      description: "Zero-knowledge password manager with end-to-end encryption, secure sharing, and cross-platform synchronization.",
      tags: ["React", "Node.js", "Security", "Encryption"],
      category: "Security",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/example/password-manager",
      liveDemo: "https://passwords.example.com",
      stats: [
        { label: "Users", value: "50K+", icon: "👥" },
        { label: "Security", value: "A+", icon: "🛡️" }
      ]
    },
    {
      id: 6,
      title: "DevOps Dashboard",
      description: "Centralized monitoring platform for CI/CD pipelines, server health, and deployment metrics across multiple environments.",
      tags: ["React", "Go", "Docker", "Kubernetes"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/example/devops-dashboard",
      stats: [
        { label: "Servers", value: "100+", icon: "🖥️" },
        { label: "Uptime", value: "99.9%", icon: "⏱️" }
      ]
    }
  ];

  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | Projects";
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addListener((e) => setIsDarkMode(e.matches));
    
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const filterButtonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: isDarkMode ? 'rgba(0, 255, 170, 0.1)' : 'rgba(0, 200, 130, 0.1)',
      boxShadow: isDarkMode ? '0 0 15px rgba(0, 255, 170, 0.2)' : '0 0 15px rgba(0, 200, 130, 0.1)'
    },
    tap: { scale: 0.95 },
    active: {
      backgroundColor: isDarkMode ? 'rgba(0, 255, 170, 0.2)' : 'rgba(0, 200, 130, 0.2)',
      borderColor: '#00ffaa',
      boxShadow: isDarkMode ? '0 0 20px rgba(0, 255, 170, 0.3)' : '0 0 20px rgba(0, 200, 130, 0.2)'
    }
  };

  const gradientAnimation = {
    initial: { backgroundPosition: '0% 50%' },
    animate: { 
      backgroundPosition: '100% 50%',
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  const floatingShapeVariants = {
    float: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    },
    floatReverse: {
      y: [0, 20, 0],
      x: [0, -20, 0],
      transition: {
        duration: 18,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 3
      }
    }
  };

  const glowPulse = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: [0.3, 0.6, 0.3],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleHoverStart = (index) => {
    if (projectRefs.current[index]) {
      const rect = projectRefs.current[index].getBoundingClientRect();
      setHoveredProject({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
  };

  const handleHoverEnd = () => {
    setHoveredProject(null);
  };

  return (
    <div className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Animated gradient background */}
<motion.div 
  className="fixed inset-0 w-full h-full bg-gradient-to-br from-cyber-green/10 via-electric-blue/5 to-cyber-green/10 opacity-30 dark:opacity-20 -z-10 overflow-hidden pointer-events-none"
  initial="initial"
  animate="animate"
  variants={gradientAnimation}
>
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjJnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
</motion.div>

{/* Floating animated shapes */}
<motion.div 
  className="fixed top-20 left-10 w-40 h-40 rounded-full bg-cyber-green/10 dark:bg-cyber-green/20 blur-2xl pointer-events-none"
  variants={floatingShapeVariants}
  animate="float"
/>
<motion.div 
  className="fixed bottom-20 right-10 w-32 h-32 rounded-full bg-electric-blue/10 dark:bg-electric-blue/20 blur-2xl pointer-events-none"
  variants={floatingShapeVariants}
  animate="floatReverse"
/>
<motion.div 
  className="fixed top-1/3 right-1/4 w-24 h-24 bg-electric-blue/10 dark:bg-electric-blue/20 blur-xl pointer-events-none"
  animate={{
    y: [0, -20, 0],
    x: [0, 15, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 2
    }
  }}
/>

{/* Glowing particles */}
<AnimatePresence>
  {[...Array(12)].map((_, i) => (
    <motion.div
      key={i}
      className="fixed pointer-events-none z-0"
      style={{
        width: `${Math.random() * 6 + 4}px`,
        height: `${Math.random() * 6 + 4}px`,
        borderRadius: '50%',
        backgroundColor: '#00ffaa',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: 0,
        filter: 'blur(1px)'
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
          duration: 12 + Math.random() * 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          delay: Math.random() * 5
        }
      }}
    />
  ))}
</AnimatePresence>

{/* Project glow effects that follow hover */}
<AnimatePresence>
  {hoveredProject && (
    <>
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,170,0.15) 0%, rgba(0,255,170,0) 70%)',
          left: `${hoveredProject.x}px`,
          top: `${hoveredProject.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,200,255,0.1) 0%, rgba(0,200,255,0) 70%)',
          left: `${hoveredProject.x}px`,
          top: `${hoveredProject.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.5, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
    </>
  )}
</AnimatePresence>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        className="text-center mb-16 relative z-10"
      >
        <motion.div 
  ref={ref}
  initial="hidden"
  animate={controls}
  className="text-center mb-16 relative z-10"
>
  <motion.h1 
    className={`text-5xl md:text-6xl font-bold mb-6 font-rajdhani ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
    variants={titleVariants}
  >
    My <motion.span 
      className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyber-green to-electric-blue"
      animate={{
        textShadow: isDarkMode 
          ? "0 0 20px rgba(74, 222, 128, 0.6)" 
          : "0 0 15px rgba(74, 222, 128, 0.4)",
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      Projects
    </motion.span>
  </motion.h1>
  
  <motion.div 
    className="w-32 h-1.5 bg-gradient-to-r from-cyber-green to-electric-blue mx-auto mb-8 rounded-full"
    variants={titleVariants}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  />
  
  <motion.p 
    className={`text-xl md:text-2xl max-w-3xl mx-auto font-fira ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
    variants={titleVariants}
  >
    Explore my portfolio of innovative solutions, each crafted with cutting-edge technologies and a focus on security, performance, and exceptional user experiences.
  </motion.p>

  {/* Project filters */}
  <motion.div 
    className="flex flex-wrap justify-center gap-3 mt-12"
    variants={container}
  >
    {projectCategories.map((category) => (
      <motion.button
        key={category.name}
        className={`px-5 py-2.5 rounded-full text-sm font-rajdhani flex items-center gap-2 border transition-all duration-300 ${
          isDarkMode 
            ? 'border-gray-700 hover:border-cyber-green text-gray-300' 
            : 'border-gray-300 hover:border-cyber-green text-gray-700'
        } relative overflow-hidden`}
        variants={filterButtonVariants}
        whileHover="hover"
        whileTap="tap"
        animate={activeFilter === category.name ? "active" : ""}
        onClick={() => setActiveFilter(category.name)}
      >
        <span className="text-cyber-green">{category.icon}</span>
        {category.name}
        <motion.span 
          className="absolute inset-0 bg-cyber-green/10 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0.5, opacity: 0 }}
          whileHover={{ scale: 1.2, opacity: 0.3 }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>
    ))}
  </motion.div>
</motion.div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              ref={el => projectRefs.current[index] = el}
              variants={item}
              layout
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400 }
              }}
              onHoverStart={() => handleHoverStart(index)}
              onHoverEnd={handleHoverEnd}
              className="relative"
            >
              {/* Project card glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
                variants={glowPulse}
                initial="hidden"
                animate="visible"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-cyber-green/20 to-electric-blue/10' : 'from-cyber-green/10 to-electric-blue/5'} rounded-xl`} />
              </motion.div>
              
              {/* Enhanced hover effect */}
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject?.index === index ? 0.3 : 0,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/30 to-electric-blue/20" />
              </motion.div>
              
              <ProjectCard 
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                githubLink={project.githubLink}
                liveDemo={project.liveDemo}
                stats={project.stats}
                isDarkMode={isDarkMode}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="mt-24 text-center relative z-10"
      >
        <motion.div
          className={`p-12 rounded-3xl ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'bg-gray-100/50 backdrop-blur-sm border border-gray-200'} shadow-xl`}
          whileInView={{
            boxShadow: isDarkMode 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' 
              : '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            transition: { duration: 0.8 }
          }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className={`text-3xl font-bold mb-6 font-rajdhani ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              transition: { duration: 0.6, delay: 0.2 }
            }}
            viewport={{ once: true }}
          >
            Want to see more?
          </motion.h3>
          
          <motion.p 
            className={`text-lg mb-8 font-fira max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              transition: { duration: 0.6, delay: 0.3 }
            }}
            viewport={{ once: true }}
          >
            Explore my GitHub profile for additional projects, open-source contributions, and code samples.
          </motion.p>
          
          <motion.a 
            href="https://github.com/Meer-Rind" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyber-green to-electric-blue text-gray-900 font-bold rounded-xl hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -5px rgba(0, 255, 170, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.4 }
            }}
            viewport={{ once: true }}
          >
            <FiGithub className="mr-3 text-xl" />
            <span className="relative z-10">Visit My GitHub</span>
            <FiChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            <motion.span 
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
      </motion.div> 
    </div>
  );
};

export default Projects;