import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef();

  // Enhanced scroll effect with parallax
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 100], [0, -20]);
  const opacityRange = useTransform(scrollY, [0, 50], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Enhanced animations
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }
    },
    closed: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
  };

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <motion.nav 
      ref={navRef}
      className={`bg-navy-light/90 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-1 shadow-xl' : 'py-2'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{
        y: yRange,
        opacity: opacityRange
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center relative overflow-hidden"
              onClick={createRipple}
            >
              <span className="text-cyber-green text-2xl font-rajdhani font-bold hover:text-electric-blue transition-colors duration-300 relative z-10">
                Meer-Rind
              </span>
              <motion.span 
                className="absolute inset-0 bg-cyber-green/10 rounded-full scale-0"
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `px-4 py-2 rounded-md text-sm font-rajdhani font-medium transition-all duration-300 relative overflow-hidden ${
                        isActive 
                          ? 'text-cyber-green bg-navy-dark/50 shadow-inner' 
                          : 'text-text-light hover:text-cyber-green hover:bg-navy-dark/30'
                      }`
                    }
                    onClick={createRipple}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-blue"
                        layoutId="navIndicator"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                onClick={(e) => {
                  setDarkMode(!darkMode);
                  createRipple(e);
                }}
                className="ml-4 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-cyber-green relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-cyber-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-cyber-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={(e) => {
                setIsOpen(!isOpen);
                createRipple(e);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-light hover:text-cyber-green focus:outline-none relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu with enhanced animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-navy-light/95 backdrop-blur-sm shadow-inner"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `block px-3 py-3 rounded-md text-base font-rajdhani font-medium transition-colors duration-300 relative overflow-hidden ${
                        isActive 
                          ? 'text-cyber-green bg-navy-dark/50 shadow-inner' 
                          : 'text-text-light hover:text-cyber-green hover:bg-navy-dark/30'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-blue"
                        layoutId="mobileNavIndicator"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                onClick={(e) => {
                  setDarkMode(!darkMode);
                  setIsOpen(false);
                  createRipple(e);
                }}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-rajdhani font-medium text-text-light hover:text-cyber-green hover:bg-navy-dark/30 transition-colors duration-300 relative overflow-hidden"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  {darkMode ? (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                      </svg>
                      Light Mode
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                      Dark Mode
                    </>
                  )}
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;