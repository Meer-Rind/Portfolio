import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const SkillCard = ({ name, level, color }) => {
  const controls = useAnimation();
  const bgColor = color.replace('text', 'bg');
  
  // Color mapping for glow effects
  const glowColors = {
    'text-cyber-green': '#4ade80',
    'text-electric-blue': '#3b82f6',
    'text-accent-pink': '#ec4899',
    'text-yellow-400': '#facc15',
    'text-purple-500': '#a855f7'
  };

  const glowColor = glowColors[color] || '#3b82f6';

  useEffect(() => {
    // Animate the progress bar when component mounts
    controls.start({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    });
  }, [level, controls]);

  return (
    <motion.div 
      className="group bg-navy-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 15px -3px ${glowColor}40`
      }}
    >
      {/* Animated background elements */}
      <motion.div 
        className={`absolute -top-10 -left-10 w-20 h-20 rounded-full ${bgColor} opacity-10 blur-xl`}
        animate={{
          x: [0, 10, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className={`absolute -bottom-5 -right-5 w-16 h-16 rounded-full ${bgColor} opacity-10 blur-xl`}
        animate={{
          x: [0, -5, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-3">
          <motion.h3 
            className={`text-lg font-bold font-rajdhani ${color} transition-colors duration-300 group-hover:text-electric-blue`}
            whileHover={{ scale: 1.05 }}
          >
            {name}
          </motion.h3>
          
          <motion.span 
            className="text-text-light font-fira transition-colors duration-300 group-hover:text-white"
            initial={{ opacity: 0.7 }}
            whileHover={{ 
              opacity: 1,
              scale: 1.2,
              textShadow: `0 0 8px ${glowColor}`
            }}
          >
            {level}%
          </motion.span>
        </div>
        
        <div className="w-full bg-navy-dark rounded-full h-2.5 overflow-hidden relative">
          <motion.div 
            className={`h-full rounded-full ${bgColor} relative`}
            style={{ 
              width: `${level}%`,
              boxShadow: `0 0 10px ${glowColor}`
            }}
            initial={{ width: 0 }}
            animate={controls}
          >
            {/* Animated pulse effect */}
            <motion.div 
              className="absolute inset-0 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.2, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            
            {/* Sparkle particles */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`absolute top-0 w-1 h-1 rounded-full ${bgColor}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  boxShadow: `0 0 6px 2px ${glowColor}`
                }}
                animate={{
                  y: [0, -3, 0],
                  opacity: [0.8, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 3,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Animated level indicator */}
        <motion.div 
          className={`text-xs font-fira mt-1 ${color} flex justify-end items-center`}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="inline-block mr-1"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            ▴
          </motion.span>
          <motion.span
            animate={{
              textShadow: [`0 0 0px ${glowColor}`, `0 0 6px ${glowColor}`, `0 0 0px ${glowColor}`]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            Skill Level
          </motion.span>
        </motion.div>
      </div>
      
      {/* Hover effect overlay */}
      <motion.div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 0.1,
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillCard;