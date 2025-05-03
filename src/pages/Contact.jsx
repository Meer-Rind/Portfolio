import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [isHovered, setIsHovered] = useState({
    email: false,
    phone: false,
    location: false,
    github: false,
    linkedin: false,
    twitter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | Contact";
    
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const socialItem = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingShapeVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 15, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    },
    floatReverse: {
      y: [0, 15, 0],
      x: [0, -15, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 3
      }
    }
  };

  const gradientAnimation = {
    initial: { backgroundPosition: '0% 50%' },
    animate: { 
      backgroundPosition: '100% 50%',
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Interactive cursor effect */}
      <motion.div 
        className="fixed w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          left: cursorPosition.x - 192,
          top: cursorPosition.y - 192,
          background: 'radial-gradient(circle, rgba(0,255,170,0.08) 0%, rgba(0,0,0,0) 70%)',
        }}
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0.5, 1, 1.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      
      {/* Animated gradient background */}
      <motion.div 
        className="fixed inset-0 w-full h-full bg-gradient-to-br from-cyber-green/5 via-navy-dark/5 to-electric-blue/5 opacity-50 dark:opacity-70 -z-20"
        initial="initial"
        animate="animate"
        variants={gradientAnimation}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjJnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </motion.div>

      {/* Floating animated shapes */}
      <motion.div 
        className="fixed top-20 left-10 w-32 h-32 rounded-full bg-cyber-green/10 dark:bg-cyber-green/20 blur-xl pointer-events-none"
        variants={floatingShapeVariants}
        animate="float"
      />
      <motion.div 
        className="fixed bottom-20 right-10 w-24 h-24 rounded-full bg-electric-blue/10 dark:bg-electric-blue/20 blur-xl pointer-events-none"
        variants={floatingShapeVariants}
        animate="floatReverse"
      />
      <motion.div 
        className="fixed top-1/3 right-1/4 w-16 h-16 bg-electric-blue/10 dark:bg-electric-blue/20 blur-lg pointer-events-none"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }
        }}
      />

      {/* Glowing particles */}
      <AnimatePresence>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed pointer-events-none z-0"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              borderRadius: '50%',
              backgroundColor: `rgba(0, 255, 170, ${Math.random() * 0.4 + 0.1})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
              opacity: 0
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              transition: {
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
                delay: Math.random() * 5
              }
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main content */}
      <motion.div 
        className="text-center mb-16 relative"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 font-rajdhani relative inline-block"
          variants={item}
        >
          <span className="relative z-10">
            Let's <motion.span 
              className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyber-green to-electric-blue"
              animate={{
                textShadow: ["0 0 15px rgba(0, 255, 170, 0.5)", "0 0 25px rgba(0, 255, 170, 0.8)", "0 0 15px rgba(0, 255, 170, 0.5)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Connect
            </motion.span>
          </span>
          <motion.span 
            className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyber-green to-transparent rounded-full"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scaleX: [0.8, 1.1, 0.8],
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.h1>
        
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent mx-auto mb-8 rounded-full"
          variants={item}
          animate={{
            scaleX: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto font-fira text-gray-700 dark:text-gray-300 relative z-10"
          variants={item}
        >
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          <motion.span 
            className="block mt-2 text-sm text-cyber-green"
            animate={{
              scale: [1, 1.05, 1],
              textShadow: ["0 0 5px rgba(0, 255, 170, 0)", "0 0 10px rgba(0, 255, 170, 0.3)", "0 0 5px rgba(0, 255, 170, 0)"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            I typically respond within 24 hours
          </motion.span>
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Contact Information Card */}
        <motion.div 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
          variants={item}
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 255, 170, 0.25)"
          }}
        >
          {/* Card glow effect */}
          <motion.div 
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-cyber-green/20 blur-3xl pointer-events-none"
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h2 
            className="text-2xl font-bold mb-8 font-rajdhani flex items-center justify-center relative z-10"
            variants={item}
          >
            <motion.span 
              className="mr-3"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 5
              }}
            >
              <FiMail className="text-cyber-green w-8 h-8" />
            </motion.span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyber-green to-electric-blue">
              Contact Information
            </span>
          </motion.h2>
          
          <motion.div 
            className="space-y-8 relative z-10"
            variants={container}
          >
            {/* Email */}
            <motion.div 
              className="flex items-start p-5 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer group relative overflow-hidden"
              variants={item}
              onMouseEnter={() => setIsHovered({...isHovered, email: true})}
              onMouseLeave={() => setIsHovered({...isHovered, email: false})}
              whileHover={{ 
                x: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                animate={{
                  x: isHovered.email ? '100%' : '-100%',
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className={`mr-4 mt-1 transition-all duration-300 ${isHovered.email ? 'text-cyber-green scale-125' : 'text-cyber-green/80'}`}
                animate={{
                  rotate: isHovered.email ? [0, 15, -15, 0] : 0,
                  transition: { duration: 0.6 }
                }}
              >
                <FiMail className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold mb-1 font-rajdhani">Email</h3>
                <a href="mailto:shahmeer@example.com" className="text-electric-blue hover:text-cyber-green transition-colors duration-300 font-fira">
                  shahmeer@example.com
                </a>
              </div>
            </motion.div>
            
            {/* Phone */}
            <motion.div 
              className="flex items-start p-5 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer group relative overflow-hidden"
              variants={item}
              onMouseEnter={() => setIsHovered({...isHovered, phone: true})}
              onMouseLeave={() => setIsHovered({...isHovered, phone: false})}
              whileHover={{ 
                x: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                animate={{
                  x: isHovered.phone ? '100%' : '-100%',
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className={`mr-4 mt-1 transition-all duration-300 ${isHovered.phone ? 'text-cyber-green scale-125' : 'text-cyber-green/80'}`}
                animate={{
                  rotate: isHovered.phone ? [0, 15, -15, 0] : 0,
                  transition: { duration: 0.6 }
                }}
              >
                <FiPhone className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold mb-1 font-rajdhani">Phone</h3>
                <a href="tel:+1234567890" className="text-electric-blue hover:text-cyber-green transition-colors duration-300 font-fira">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>
            
            {/* Location */}
            <motion.div 
              className="flex items-start p-5 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer group relative overflow-hidden"
              variants={item}
              onMouseEnter={() => setIsHovered({...isHovered, location: true})}
              onMouseLeave={() => setIsHovered({...isHovered, location: false})}
              whileHover={{ 
                x: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                animate={{
                  x: isHovered.location ? '100%' : '-100%',
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className={`mr-4 mt-1 transition-all duration-300 ${isHovered.location ? 'text-cyber-green scale-125' : 'text-cyber-green/80'}`}
                animate={{
                  rotate: isHovered.location ? [0, 15, -15, 0] : 0,
                  transition: { duration: 0.6 }
                }}
              >
                <FiMapPin className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold mb-1 font-rajdhani">Location</h3>
                <p className="text-electric-blue font-fira">Karachi, Pakistan</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-12 relative z-10"
            variants={item}
          >
            <motion.h2 
              className="text-2xl font-bold mb-8 font-rajdhani flex items-center justify-center"
              variants={item}
            >
              <motion.span 
                className="mr-3"
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <svg className="w-8 h-8 text-cyber-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </motion.span>
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyber-green to-electric-blue">
                Connect With Me
              </span>
            </motion.h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={container}
            >
              {[
                { 
                  name: 'github', 
                  href: 'https://github.com/Meer-Rind',
                  icon: <FiGithub />,
                  color: 'from-gray-800 to-gray-900'
                },
                { 
                  name: 'linkedin', 
                  href: 'https://www.linkedin.com/in/meer-rind',
                  icon: <FiLinkedin />,
                  color: 'from-blue-600 to-blue-800'
                },
                { 
                  name: 'twitter', 
                  href: 'https://twitter.com/meer_rind',
                  icon: <FiTwitter />,
                  color: 'from-blue-400 to-blue-600'
                }
              ].map((social, index) => (
                <motion.a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`relative p-4 rounded-xl transition-all duration-500 bg-gradient-to-br ${social.color} shadow-lg hover:shadow-xl overflow-hidden`}
                  aria-label={social.name.charAt(0).toUpperCase() + social.name.slice(1)}
                  onMouseEnter={() => setIsHovered({...isHovered, [social.name]: true})}
                  onMouseLeave={() => setIsHovered({...isHovered, [social.name]: false})}
                  variants={socialItem}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Social icon glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-cyber-green/10 opacity-0 group-hover:opacity-100 rounded-xl"
                    animate={{
                      scale: isHovered[social.name] ? 1.5 : 1,
                      opacity: isHovered[social.name] ? 0.3 : 0,
                    }}
                    transition={{
                      duration: 0.3
                    }}
                  />
                  
                  <motion.div
                    className="w-8 h-8 text-white relative z-10"
                    animate={{
                      scale: isHovered[social.name] ? [1, 1.2, 1] : 1,
                      rotate: isHovered[social.name] ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{
                      duration: 0.6
                    }}
                  >
                    {social.icon}
                  </motion.div>
                  {isHovered[social.name] && (
                    <motion.span 
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-fira bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900 px-2 py-1 rounded whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.name.charAt(0).toUpperCase() + social.name.slice(1)}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
          variants={item}
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 255, 170, 0.25)"
          }}
        >
          {/* Card glow effect */}
          <motion.div 
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-electric-blue/20 blur-3xl pointer-events-none"
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.h2 
            className="text-2xl font-bold mb-8 font-rajdhani flex items-center justify-center relative z-10"
            variants={item}
          >
            <motion.span 
              className="mr-3"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <svg className="w-8 h-8 text-cyber-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </motion.span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyber-green to-electric-blue">
              Send Me a Message
            </span>
          </motion.h2>
          
          <AnimatePresence mode="wait">
            {submitSuccess ? (
              <motion.div
                key="success"
                className="text-center py-12 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-20 h-20 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 1.5
                  }}
                >
                  <FiMail className="text-cyber-green w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-cyber-green font-rajdhani mb-3">Message Sent!</h3>
                <p className="text-lg font-fira text-gray-700 dark:text-gray-300 mb-6">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <motion.button
                  className="px-6 py-2 bg-cyber-green text-navy-dark font-bold rounded-lg hover:bg-electric-blue transition-colors duration-300 font-rajdhani"
                  onClick={() => setSubmitSuccess(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <ContactForm 
                  onSubmit={handleFormSubmit} 
                  isSubmitting={isSubmitting} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Floating call-to-action */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#contact-form"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-green to-electric-blue shadow-lg hover:shadow-xl text-navy-dark font-bold relative overflow-hidden"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 10, -10, 0],
            boxShadow: "0 0 25px rgba(0, 255, 170, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button pulse effect */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-cyber-green/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <FiSend className="w-6 h-6 relative z-10" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
