import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | Home";
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Preload animations
    controls.start("visible");
  }, [controls]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1.2,
        ease: "circOut"
      } 
    }
  };

  const slideUp = {
    hidden: { y: 80, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  const pulse = {
    initial: { scale: 1 },
    pulse: { 
      scale: [1, 1.05, 1],
      transition: { 
        repeat: Infinity, 
        duration: 2.5,
        ease: "easeInOut"
      } 
    }
  };

  const gradientAnimation = {
    initial: { backgroundPosition: '0% 50%' },
    animate: { 
      backgroundPosition: '100% 50%',
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textGlow = {
    initial: { textShadow: "0 0 0px rgba(74, 222, 128, 0)" },
    animate: {
      textShadow: [
        "0 0 0px rgba(74, 222, 128, 0)",
        "0 0 10px rgba(74, 222, 128, 0.6)",
        "0 0 0px rgba(74, 222, 128, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Floating particles background */}
      <AnimatePresence>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + 'vw',
              top: Math.random() * 100 + 'vh',
              opacity: Math.random() * 0.4 + 0.1
            }}
            initial={{ y: 0 }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1 + Math.random() * 0.4, 0],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }
            }}
          />
        ))}
      </AnimatePresence>

      <div className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        {/* Enhanced Dark mode toggle */}
        <motion.button 
          onClick={toggleDarkMode}
          className={`fixed top-6 right-6 z-50 p-3 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} shadow-2xl`}
          aria-label="Toggle dark mode"
          whileHover={{ 
            scale: 1.15,
            rotate: 15,
            boxShadow: darkMode ? '0 0 20px rgba(234, 179, 8, 0.5)' : '0 0 20px rgba(0, 0, 0, 0.2)'
          }}
          whileTap={{ scale: 0.85 }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.8 }
          }}
        >
          {darkMode ? (
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </motion.svg>
          ) : (
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </motion.svg>
          )}
        </motion.button>

        {/* Hero Section - Enhanced with more depth */}
        <section className="text-center mb-24 overflow-hidden relative">
          <div className="relative z-10">
            {/* Animated background elements - More dynamic */}
            <motion.div 
              className={`absolute -top-32 -left-32 w-64 h-64 rounded-full ${darkMode ? 'bg-cyber-green opacity-10' : 'bg-cyber-green opacity-15'} blur-3xl`}
              animate={{
                x: [0, 40, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className={`absolute -bottom-32 -right-32 w-72 h-72 rounded-full ${darkMode ? 'bg-electric-blue opacity-10' : 'bg-electric-blue opacity-15'} blur-3xl`}
              animate={{
                x: [0, -40, 0],
                y: [0, -30, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 5
              }}
            />
            
            {/* Floating accent elements */}
            <motion.div 
              className={`absolute top-1/4 left-1/4 w-8 h-8 rounded-full ${darkMode ? 'bg-accent-pink opacity-70' : 'bg-accent-pink opacity-40'} blur-md`}
              animate={floatingAnimation}
              transition={{ delay: 2, duration: 12 }}
            />
            
            <motion.div 
              className={`absolute top-3/4 right-1/3 w-6 h-6 rounded-full ${darkMode ? 'bg-cyber-green opacity-70' : 'bg-cyber-green opacity-40'} blur-md`}
              animate={floatingAnimation}
              transition={{ delay: 3, duration: 15 }}
            />
            
            {/* Main content with enhanced animations */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              ref={ref}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 font-rajdhani relative z-10 leading-tight"
                variants={item}
              >
                Hi, I'm <motion.span 
                  className="text-cyber-green relative inline-block"
                  animate={textGlow}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <motion.span 
                    className="absolute -inset-2 rounded-lg opacity-0"
                    animate={{
                      opacity: isHovering ? 0.3 : 0,
                      background: darkMode ? 'radial-gradient(circle, rgba(74,222,128,0.5) 0%, rgba(0,0,0,0) 70%)' : 'radial-gradient(circle, rgba(74,222,128,0.3) 0%, rgba(0,0,0,0) 70%)'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  Shahmeer Abbas Khan
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                className="text-3xl md:text-5xl font-medium mb-8 font-rajdhani relative z-10"
                variants={item}
              >
                <motion.span 
                  className={`inline-block px-6 py-3 rounded-xl ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-100/80 backdrop-blur-sm'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: darkMode ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-green via-electric-blue to-cyber-green bg-[length:200%_auto]"
                    animate={gradientAnimation}
                  >
                    Full Stack Developer & Cyber Security Enthusiast
                  </motion.span>
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-fira relative z-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}
                variants={item}
              >
                Crafting secure, high-performance web applications with cutting-edge technologies. 
                Passionate about building elegant solutions and fortifying them against emerging threats.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-6 relative z-10"
                variants={item}
              >
                <Link 
                  to="/projects" 
                  className={`px-10 py-4 rounded-lg font-bold transition-all duration-500 font-rajdhani shadow-xl hover:shadow-2xl 
                    ${darkMode ? 'bg-cyber-green hover:bg-electric-blue text-gray-900' : 'bg-cyber-green hover:bg-electric-blue text-gray-900'}
                    relative overflow-hidden group`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    View My Work
                  </motion.div>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-cyber-green/30 to-electric-blue/30 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%', opacity: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-10 py-4 border-2 rounded-lg font-bold transition-all duration-500 font-rajdhani shadow-xl hover:shadow-2xl
                    ${darkMode ? 'border-cyber-green hover:bg-gray-800/50 text-cyber-green' : 'border-cyber-green hover:bg-gray-100/50 text-cyber-green'}
                    relative overflow-hidden group`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    Contact Me
                  </motion.div>
                  <motion.span 
                    className="absolute inset-0 bg-cyber-green/10 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileHover={{ scale: 1.2, opacity: 0.3 }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated scroll indicator */}
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={darkMode ? 'currentColor' : '#1a1a1a'} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </section>

        {/* Services Section - Enhanced with cards */}
        <section className="mt-32 mb-32 relative">
          {/* Decorative elements */}
          <motion.div 
            className={`absolute -top-32 left-1/4 w-48 h-48 rounded-full ${darkMode ? 'bg-cyber-green opacity-5' : 'bg-cyber-green opacity-10'} blur-3xl`}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center font-rajdhani relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "backOut" }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.span 
              className={`inline-block px-8 py-3 rounded-xl ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-100/80 backdrop-blur-sm'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              My <motion.span 
                className="text-cyber-green"
                animate={textGlow}
              >Services</motion.span>
            </motion.span>
            <motion.div 
              className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 ${darkMode ? 'bg-cyber-green' : 'bg-cyber-green'} rounded-full`}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ 
                scaleX: 1, 
                opacity: 1,
                transition: { duration: 1, delay: 0.3 }
              }}
              viewport={{ once: false, amount: 0.5 }}
            />
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Service 1 - Enhanced */}
            <motion.div 
              className={`p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden 
                ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'}`}
              variants={slideUp}
              whileHover={{ 
                scale: 1.03,
                boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-cyber-green opacity-10 blur-2xl"></div>
              <motion.div 
                className="text-cyber-green text-5xl mb-6"
                animate={pulse}
              >
                <i className="fas fa-code"></i>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 font-rajdhani">Web Development</h3>
              <p className={`font-fira ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                Building responsive, user-friendly websites and web applications with React, Django, and other modern technologies.
              </p>
              <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <span className={`text-sm font-fira ${darkMode ? 'text-cyber-green' : 'text-cyber-green'} flex items-center`}>
                  <motion.span 
                    className="inline-block mr-2"
                    animate={{
                      x: [0, 5, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity
                      }
                    }}
                  >
                    →
                  </motion.span>
                  React • Django • JavaScript
                </span>
              </div>
            </motion.div>
            
            {/* Service 2 - Enhanced */}
            <motion.div 
              className={`p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden 
                ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'}`}
              variants={slideUp}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-electric-blue opacity-10 blur-2xl"></div>
              <motion.div 
                className="text-electric-blue text-5xl mb-6"
                animate={pulse}
              >
                <i className="fas fa-shield-alt"></i>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 font-rajdhani">Cyber Security</h3>
              <p className={`font-fira ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                Implementing security best practices and conducting vulnerability assessments to protect applications from threats.
              </p>
              <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <span className={`text-sm font-fira ${darkMode ? 'text-electric-blue' : 'text-electric-blue'} flex items-center`}>
                  <motion.span 
                    className="inline-block mr-2"
                    animate={{
                      x: [0, 5, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.3
                      }
                    }}
                  >
                    →
                  </motion.span>
                  Pen Testing • OWASP • Security
                </span>
              </div>
            </motion.div>
            
            {/* Service 3 - Enhanced */}
            <motion.div 
              className={`p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden 
                ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'}`}
              variants={slideUp}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent-pink opacity-10 blur-2xl"></div>
              <motion.div 
                className="text-accent-pink text-5xl mb-6"
                animate={pulse}
              >
                <i className="fas fa-server"></i>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 font-rajdhani">Backend Systems</h3>
              <p className={`font-fira ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                Developing robust server-side applications and APIs with Python, Go, and other backend technologies.
              </p>
              <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <span className={`text-sm font-fira ${darkMode ? 'text-accent-pink' : 'text-accent-pink'} flex items-center`}>
                  <motion.span 
                    className="inline-block mr-2"
                    animate={{
                      x: [0, 5, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.6
                      }
                    }}
                  >
                    →
                  </motion.span>
                  Python • Go • Node.js
                </span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section - Enhanced with better cards */}
        <section className="mt-32 mb-32 relative">
          {/* Decorative elements */}
          <motion.div 
            className={`absolute -top-32 right-1/4 w-48 h-48 rounded-full ${darkMode ? 'bg-electric-blue opacity-5' : 'bg-electric-blue opacity-10'} blur-3xl`}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center font-rajdhani relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "backOut" }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.span 
              className={`inline-block px-8 py-3 rounded-xl ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-100/80 backdrop-blur-sm'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              Featured <motion.span 
                className="text-cyber-green"
                animate={textGlow}
              >Projects</motion.span>
            </motion.span>
            <motion.div 
              className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 ${darkMode ? 'bg-cyber-green' : 'bg-cyber-green'} rounded-full`}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ 
                scaleX: 1, 
                opacity: 1,
                transition: { duration: 1, delay: 0.3 }
              }}
              viewport={{ once: false, amount: 0.5 }}
            />
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Project 1 - Enhanced */}
            <motion.div 
              className={`rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 
                ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'}`}
              variants={slideUp}
              whileHover={{ 
                scale: 1.03,
                boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="relative h-64 overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyber-green to-electric-blue"
                  animate={gradientAnimation}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold font-rajdhani z-10">Secure Auth System</span>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-rajdhani">Secure Auth System</h3>
                <p className={`text-base mb-6 font-fira ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  A multi-factor authentication system with JWT and OAuth2 integration, featuring advanced security protocols.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-cyber-green' : 'bg-gray-100 text-cyber-green'} shadow-md`}>React</span>
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-electric-blue' : 'bg-gray-100 text-electric-blue'} shadow-md`}>Django</span>
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-accent-pink' : 'bg-gray-100 text-accent-pink'} shadow-md`}>JWT</span>
                </div>
                <Link 
                  to="/projects/1" 
                  className={`inline-flex items-center font-rajdhani transition-all duration-300 group
                    ${darkMode ? 'text-cyber-green hover:text-electric-blue' : 'text-cyber-green hover:text-electric-blue'}`}
                >
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center"
                  >
                    <span className="mr-2">Explore Project</span>
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity
                        }
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className={`h-0.5 mt-1 ${darkMode ? 'bg-cyber-green' : 'bg-cyber-green'} rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
            </motion.div>
            
            {/* Project 2 - Enhanced */}
            <motion.div 
              className={`rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 
                ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'}`}
              variants={slideUp}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="relative h-64 overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-electric-blue to-accent-pink"
                  animate={gradientAnimation}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold font-rajdhani z-10">Vulnerability Scanner</span>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-rajdhani">Vulnerability Scanner</h3>
                <p className={`text-base mb-6 font-fira ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  A comprehensive tool to scan web applications for common security vulnerabilities with detailed reporting.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-cyber-green' : 'bg-gray-100 text-cyber-green'} shadow-md`}>Python</span>
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-electric-blue' : 'bg-gray-100 text-electric-blue'} shadow-md`}>Go</span>
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-accent-pink' : 'bg-gray-100 text-accent-pink'} shadow-md`}>Security</span>
                </div>
                <Link 
                  to="/projects/2" 
                  className={`inline-flex items-center font-rajdhani transition-all duration-300 group
                    ${darkMode ? 'text-electric-blue hover:text-accent-pink' : 'text-electric-blue hover:text-accent-pink'}`}
                >
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center"
                  >
                    <span className="mr-2">Explore Project</span>
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.3
                        }
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className={`h-0.5 mt-1 ${darkMode ? 'bg-electric-blue' : 'bg-electric-blue'} rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
            </motion.div>
            
            {/* Project 3 - Enhanced */}
            <motion.div 
              className={`rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 
                ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'}`}
              variants={slideUp}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="relative h-64 overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent-pink to-cyber-green"
                  animate={gradientAnimation}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold font-rajdhani z-10">E-commerce Platform</span>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-rajdhani">E-commerce Platform</h3>
                <p className={`text-base mb-6 font-fira ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  A full-featured online store with payment integration, inventory management, and analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-cyber-green' : 'bg-gray-100 text-cyber-green'} shadow-md`}>React</span>
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-electric-blue' : 'bg-gray-100 text-electric-blue'} shadow-md`}>Node.js</span>
                  <span className={`px-3 py-1.5 text-sm rounded-lg font-fira ${darkMode ? 'bg-gray-700 text-accent-pink' : 'bg-gray-100 text-accent-pink'} shadow-md`}>MongoDB</span>
                </div>
                <Link 
                  to="/projects/3" 
                  className={`inline-flex items-center font-rajdhani transition-all duration-300 group
                    ${darkMode ? 'text-accent-pink hover:text-cyber-green' : 'text-accent-pink hover:text-cyber-green'}`}
                >
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center"
                  >
                    <span className="mr-2">Explore Project</span>
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.6
                        }
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className={`h-0.5 mt-1 ${darkMode ? 'bg-accent-pink' : 'bg-accent-pink'} rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.6, duration: 0.8 }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Link 
              to="/projects" 
              className={`inline-block px-8 py-4 rounded-lg font-bold transition-all duration-500 font-rajdhani 
                ${darkMode ? 'border-2 border-cyber-green hover:bg-gray-800/50 text-cyber-green' : 'border-2 border-cyber-green hover:bg-gray-100/50 text-cyber-green'}
                shadow-xl hover:shadow-2xl hover:scale-105 transform relative overflow-hidden group`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                View All Projects
              </motion.div>
              <motion.span 
                className="absolute inset-0 bg-cyber-green/10 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.5, opacity: 0 }}
                whileHover={{ scale: 1.2, opacity: 0.3 }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>
        </section>

        {/* Tech Stack Section - Enhanced with interactive elements */}
        <section className="mt-32 mb-32 relative">
          {/* Decorative elements */}
          <motion.div 
            className={`absolute -top-32 left-1/3 w-48 h-48 rounded-full ${darkMode ? 'bg-accent-pink opacity-5' : 'bg-accent-pink opacity-10'} blur-3xl`}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6
            }}
          />
          
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center font-rajdhani relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "backOut" }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.span 
              className={`inline-block px-8 py-3 rounded-xl ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-100/80 backdrop-blur-sm'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              My <motion.span 
                className="text-cyber-green"
                animate={textGlow}
              >Tech Stack</motion.span>
            </motion.span>
            <motion.div 
              className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 ${darkMode ? 'bg-cyber-green' : 'bg-cyber-green'} rounded-full`}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ 
                scaleX: 1, 
                opacity: 1,
                transition: { duration: 1, delay: 0.3 }
              }}
              viewport={{ once: false, amount: 0.5 }}
            />
          </motion.h2>
          
          <motion.div 
            className={`p-10 rounded-3xl ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-100/80 backdrop-blur-sm'} shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: "backOut" }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {[
                { name: 'React', icon: 'fab fa-react', color: 'text-blue-400', hover: 'hover:bg-blue-400/10' },
                { name: 'Django', icon: 'fab fa-python', color: 'text-green-500', hover: 'hover:bg-green-500/10' },
                { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400', hover: 'hover:bg-yellow-400/10' },
                { name: 'Python', icon: 'fab fa-python', color: 'text-blue-500', hover: 'hover:bg-blue-500/10' },
                { name: 'Go', icon: 'fas fa-code', color: 'text-cyan-500', hover: 'hover:bg-cyan-500/10' },
                { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600', hover: 'hover:bg-green-600/10' },
                { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-400', hover: 'hover:bg-green-400/10' },
                { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-blue-600', hover: 'hover:bg-blue-600/10' },
                { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-300', hover: 'hover:bg-blue-300/10' },
                { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-500', hover: 'hover:bg-orange-500/10' },
                { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600', hover: 'hover:bg-orange-600/10' },
                { name: 'Linux', icon: 'fab fa-linux', color: darkMode ? 'text-white' : 'text-gray-800', hover: darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-800/10' },
              ].map((tech, index) => (
                <motion.div 
                  key={index} 
                  className={`flex flex-col items-center p-6 rounded-xl transition-all duration-500 ${tech.hover} 
                    ${darkMode ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}
                  variants={item}
                  whileHover={{ 
                    y: -8,
                    scale: 1.1,
                    boxShadow: darkMode ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <i className={`${tech.icon} ${tech.color} text-4xl mb-4`}></i>
                  </motion.div>
                  <span className="font-fira font-medium text-lg">{tech.name}</span>
                  <motion.div 
                    className={`w-8 h-1 mt-3 rounded-full ${tech.color}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className={`mt-32 mb-24 p-12 rounded-3xl text-center ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-100/80 backdrop-blur-sm'} shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} relative overflow-hidden`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "backOut" }
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Background elements */}
          <motion.div 
            className={`absolute -top-32 left-1/4 w-64 h-64 rounded-full ${darkMode ? 'bg-cyber-green opacity-10' : 'bg-cyber-green opacity-15'} blur-3xl`}
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className={`absolute -bottom-32 right-1/4 w-72 h-72 rounded-full ${darkMode ? 'bg-electric-blue opacity-10' : 'bg-electric-blue opacity-15'} blur-3xl`}
            animate={{
              x: [0, -40, 0],
              y: [0, -30, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 5
            }}
          />
          
          <motion.h2 
            className="text-4xl font-bold mb-6 font-rajdhani relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.3 }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Ready to bring your ideas to life?
          </motion.h2>
          
          <motion.p 
            className={`text-xl max-w-2xl mx-auto mb-10 font-fira relative z-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.5 }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Let's collaborate on your next project and create something amazing together.
          </motion.p>
          
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.7 }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Link 
              to="/contact" 
              className={`inline-block px-12 py-5 rounded-xl font-bold transition-all duration-500 font-rajdhani shadow-2xl hover:shadow-3xl 
                ${darkMode ? 'bg-gradient-to-r from-cyber-green to-electric-blue text-gray-900' : 'bg-gradient-to-r from-cyber-green to-electric-blue text-gray-900'}
                relative overflow-hidden group`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                Get In Touch
              </motion.div>
              <motion.span 
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;