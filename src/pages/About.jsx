import { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SkillCard from '../components/SkillCard';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const refs = {
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null)
  };
  
  const isInView = {
    about: useInView(refs.about, { once: true, margin: "-100px" }),
    skills: useInView(refs.skills, { once: true, margin: "-100px" }),
    experience: useInView(refs.experience, { once: true, margin: "-100px" })
  };

  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | About";
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addListener((e) => setIsDarkMode(e.matches));
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'text-yellow-400', icon: '💛' },
    { name: 'Python', level: 85, color: 'text-blue-400', icon: '🐍' },
    { name: 'Django', level: 80, color: 'text-green-500', icon: '🟩' },
    { name: 'Go Lang', level: 75, color: 'text-cyan-400', icon: '🦫' },
    { name: 'React JS', level: 90, color: 'text-blue-300', icon: '⚛️' },
    { name: 'Cyber Security', level: 85, color: 'text-red-400', icon: '🔒' },
    { name: 'HTML/CSS', level: 95, color: 'text-orange-500', icon: '🎨' },
    { name: 'Node.js', level: 80, color: 'text-green-400', icon: '🟢' },
    { name: 'Docker', level: 70, color: 'text-blue-500', icon: '🐳' },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      period: "2021 - Present",
      company: "TechSecure Solutions",
      bullets: [
        "Developed secure web applications with React and Django",
        "Implemented security protocols and conducted penetration testing",
        "Led a team of 5 developers in building a financial application",
        "Reduced security vulnerabilities by 80% through code reviews"
      ]
    },
    {
      title: "Backend Developer",
      period: "2019 - 2021",
      company: "DataFort Systems",
      bullets: [
        "Built RESTful APIs with Python and Go",
        "Optimized database queries improving performance by 40%",
        "Implemented authentication and authorization systems",
        "Worked on data encryption and secure storage solutions"
      ]
    },
    {
      title: "Junior Developer",
      period: "2017 - 2019",
      company: "WebCraft Studios",
      bullets: [
        "Developed frontend components with JavaScript and React",
        "Assisted in building responsive user interfaces",
        "Learned security best practices for web development",
        "Participated in code reviews and team collaborations"
      ]
    }
  ];

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariantsReverse = {
    initial: { y: 0 },
    animate: {
      y: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 255, 170, 0.4)"
    }
  };

  const imageHoverVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 5 }
  };

  return (
    <div className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <motion.div 
        ref={refs.about}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView.about ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={isInView.about ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 font-rajdhani ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            About <motion.span 
              className="text-cyber-green"
              animate={{
                textShadow: isInView.about ? "0 0 10px rgba(0, 255, 170, 0.7)" : "none"
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2 
              }}
            >
              Me
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.div 
          className="w-24 h-1 bg-cyber-green mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={isInView.about ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        <motion.p 
          className={`text-lg md:text-xl max-w-3xl mx-auto font-fira ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
          initial={{ opacity: 0 }}
          animate={isInView.about ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I'm a passionate full-stack developer with expertise in web development and cyber security. I love building secure, efficient, and user-friendly applications.
        </motion.p>
      </motion.div>

      {/* About Me Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView.about ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className={`text-3xl font-bold mb-6 font-rajdhani ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <motion.span
              whileHover={{ color: '#00ffaa' }}
              transition={{ duration: 0.3 }}
            >
              Who Am I?
            </motion.span>
          </h2>
          
          <motion.p 
            className={`mb-4 font-fira ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hello! I'm Shahmeer Abbas Khan, also known as Meer-Rind in the developer community. I specialize in building modern web applications with a strong focus on security and performance.
          </motion.p>
          
          <motion.p 
            className={`mb-4 font-fira ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            With a background in both development and cyber security, I bring a unique perspective to every project, ensuring that applications are not just functional but also secure by design.
          </motion.p>
          
          <motion.p 
            className={`mb-4 font-fira ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            When I'm not coding, you can find me researching the latest security vulnerabilities, contributing to open-source projects, or mentoring aspiring developers.
          </motion.p>
          
          <motion.div 
            className="mt-6 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={isInView.about ? { opacity: 1 } : {}}
            transition={{ staggerChildren: 0.1, delay: 1 }}
          >
            <motion.a 
              href="/path/to/resume.pdf" 
              download
              className="inline-block px-6 py-3 bg-cyber-green text-navy-dark font-bold rounded-md hover:bg-electric-blue transition-all duration-300 font-rajdhani hover:scale-105 shadow-lg hover:shadow-cyber-green/30"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 255, 170, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            
            <motion.button 
              className="inline-block px-6 py-3 border-2 border-cyber-green text-cyber-green font-bold rounded-md hover:bg-cyber-green/10 transition-all duration-300 font-rajdhani hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: isDarkMode ? 'rgba(0, 255, 170, 0.1)' : 'rgba(0, 255, 170, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView.about ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 group"
            whileHover="hover"
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="absolute inset-0 border-4 border-cyber-green rounded-lg transform rotate-6"
              variants={floatingVariants}
            />
            
            <motion.div 
              className="absolute inset-0 border-4 border-electric-blue rounded-lg transform -rotate-6"
              variants={floatingVariantsReverse}
            />
            
            <motion.div 
              className="absolute inset-4 bg-navy-light rounded-lg overflow-hidden shadow-xl"
              variants={imageHoverVariants}
              whileHover={{ rotate: 5 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-cyber-green to-electric-blue flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-500"></div>
                <motion.span 
                  className="text-4xl font-bold text-navy-dark font-rajdhani z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  MK
                </motion.span>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg font-rajdhani font-bold text-cyber-green border border-cyber-green/30`}
              animate={{
                y: [0, -5, 0],
                boxShadow: ["0 4px 6px rgba(0, 0, 0, 0.1)", "0 10px 15px rgba(0, 255, 170, 0.2)", "0 4px 6px rgba(0, 0, 0, 0.1)"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Shahmeer Khan
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div 
        ref={refs.skills}
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={isInView.skills ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className={`text-3xl font-bold mb-8 text-center font-rajdhani ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ y: 20 }}
          animate={isInView.skills ? { y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <motion.span 
            className="text-cyber-green"
            animate={isInView.skills ? {
              textShadow: "0 0 8px rgba(0, 255, 170, 0.5)"
            } : {}}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 2 
            }}
          >
            Skills
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView.skills ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className={`p-1 rounded-lg bg-gradient-to-br from-cyber-green to-electric-blue hover:shadow-lg hover:shadow-cyber-green/30 transition-all duration-300 hover:-translate-y-1 ${isDarkMode ? 'bg-opacity-20' : 'bg-opacity-10'}`}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 255, 170, 0.3)"
              }}
            >
              <div className={`h-full rounded-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center mb-2">
                  <motion.span 
                    className="text-2xl mr-3"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h3 className={`text-xl font-bold font-rajdhani ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <motion.div 
                    className={`h-2.5 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={isInView.skills ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
                <span className={`text-sm font-fira ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {skill.level}% proficiency
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        ref={refs.experience}
        initial={{ opacity: 0 }}
        animate={isInView.experience ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className={`text-3xl font-bold mb-8 text-center font-rajdhani ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ y: 20 }}
          animate={isInView.experience ? { y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <motion.span 
            className="text-cyber-green"
            animate={isInView.experience ? {
              textShadow: "0 0 8px rgba(0, 255, 170, 0.5)"
            } : {}}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 2 
            }}
          >
            Experience
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="space-y-8 relative"
          initial={{ opacity: 0 }}
          animate={isInView.experience ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Timeline decoration */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyber-green to-electric-blue hidden md:block"></div>
          
          {experiences.map((job, index) => (
            <motion.div 
              key={index} 
              className={`relative p-1 rounded-lg bg-gradient-to-r from-cyber-green to-electric-blue hover:shadow-lg hover:shadow-cyber-green/30 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-auto md:w-5/6 md:pr-16' : 'md:ml-auto md:w-5/6 md:pl-16'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView.experience ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 255, 170, 0.3)"
              }}
            >
              <div className={`h-full rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <motion.h3 
                    className={`text-xl font-bold font-rajdhani ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    whileHover={{ color: '#00ffaa' }}
                    transition={{ duration: 0.3 }}
                  >
                    {job.title}
                  </motion.h3>
                  <motion.span 
                    className="text-cyber-green font-fira"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {job.period}
                  </motion.span>
                </div>
                <motion.h4 
                  className="text-electric-blue mb-2 font-rajdhani"
                  animate={{
                    color: ['#00ffaa', '#00e0ff', '#00ffaa'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {job.company}
                </motion.h4>
                <ul className="list-disc pl-5 space-y-2 font-fira">
                  {job.bullets.map((bullet, i) => (
                    <motion.li 
                      key={i} 
                      className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}
                      initial={{ x: -10, opacity: 0 }}
                      animate={isInView.experience ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
                {/* Timeline dot */}
                <motion.div 
                  className="absolute hidden md:block top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-cyber-green border-4 border-electric-blue" 
                  style={index % 2 === 0 ? { right: '-2.5rem' } : { left: '-2.5rem' }}
                  initial={{ scale: 0 }}
                  animate={isInView.experience ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating particles for decoration */}
      <AnimatePresence>
        {isDarkMode && (
          <>
            <motion.div 
              className="fixed top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyber-green opacity-70"
              initial={{ y: 0, x: 0 }}
              animate={{
                y: [0, -50, 0, 50, 0],
                x: [0, 30, 0, -30, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="fixed top-1/3 right-1/3 w-1 h-1 rounded-full bg-electric-blue opacity-50"
              initial={{ y: 0, x: 0 }}
              animate={{
                y: [0, 40, 0, -40, 0],
                x: [0, -20, 0, 20, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="fixed bottom-1/4 right-1/4 w-1 h-1 rounded-full bg-cyber-green opacity-60"
              initial={{ y: 0, x: 0 }}
              animate={{
                y: [0, -30, 0, 30, 0],
                x: [0, 20, 0, -20, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="fixed bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-electric-blue opacity-40"
              initial={{ y: 0, x: 0 }}
              animate={{
                y: [0, 60, 0, -60, 0],
                x: [0, -40, 0, 40, 0]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Animated background elements */}
      {isDarkMode && (
        <>
          <motion.div 
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-cyber-green blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-electric-blue blur-3xl opacity-30"></div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default About;