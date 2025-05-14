import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const BlogCard = ({ id, title, excerpt, date, readTime, tags, image }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Enhanced animations
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const tagHoverVariants = {
    hover: {
      y: -2,
      scale: 1.05,
      backgroundColor: "#3b82f6",
      color: "#0f172a",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Ripple effect
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
    <motion.div 
      ref={ref}
      className="bg-navy-light/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl relative border border-navy-dark/20 hover:border-electric-blue/30 transition-all duration-300"
      initial="hidden"
      animate={controls}
      whileHover="hover"
      variants={cardVariants}
    >
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/20 to-cyber-green/5 backdrop-blur-sm pointer-events-none" />
      
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-cyber-green/5 opacity-0 pointer-events-none"
        variants={{
          hover: {
            opacity: 0.8,
            transition: { duration: 0.4 }
          }
        }}
      />
      
      {/* Image with parallax effect */}
      <motion.div 
        className="h-52 overflow-hidden relative"
        variants={imageHoverVariants}
      >
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
      </motion.div>
      
      <div className="p-6 relative z-10">
        {/* Date and read time */}
        <motion.div 
          className="flex justify-between items-center mb-3 opacity-90 hover:opacity-100"
          whileHover={{ 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
        >
          <motion.span 
            className="text-sm text-electric-blue font-fira"
            whileHover={{
              color: "#4ade80",
              x: -2,
              transition: { duration: 0.2 }
            }}
          >
            {date}
          </motion.span>
          <motion.span 
            className="text-sm text-text-light font-fira"
            whileHover={{
              color: "#ffffff",
              x: 2,
              transition: { duration: 0.2 }
            }}
          >
            {readTime}
          </motion.span>
        </motion.div>
        
        {/* Title with underline animation */}
        <motion.h3 
          className="text-xl font-bold mb-3 font-rajdhani relative inline-block"
          whileHover={{ color: "#3b82f6" }}
        >
          {title}
          <motion.span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue"
            initial={{ width: 0 }}
            whileHover={{ 
              width: "100%",
              transition: { 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
          />
        </motion.h3>
        
        {/* Excerpt */}
        <motion.p 
          className="text-sm mb-4 font-fira text-gray-300 hover:text-white line-clamp-3"
          whileHover={{
            color: "#ffffff",
            transition: { duration: 0.3 }
          }}
        >
          {excerpt}
        </motion.p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <motion.span 
              key={index}
              className="px-2 py-1 bg-navy-dark/50 text-cyber-green text-xs rounded-full font-fira cursor-default backdrop-blur-sm"
              variants={tagHoverVariants}
              whileHover="hover"
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* Read More link with animated arrow */}
        <Link 
          to={`/blog/${id}`} 
          className="inline-flex items-center text-cyber-green hover:text-electric-blue font-rajdhani font-semibold group relative overflow-hidden"
          onClick={createRipple}
        >
          <motion.span 
            className="mr-2 relative z-10"
            whileHover={{ 
              x: 2,
              transition: { duration: 0.2 }
            }}
          >
            Read More
          </motion.span>
          <motion.svg 
            className="w-4 h-4 relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{
              x: [0, 4, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            whileHover={{
              x: [0, 8, 0],
              transition: { 
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </motion.svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;