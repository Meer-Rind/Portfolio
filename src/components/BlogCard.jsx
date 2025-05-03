import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ id, title, excerpt, date, readTime, tags, image }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 15px -3px rgba(59, 130, 246, 0.3)"
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.1,
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
      boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.3)"
    }
  };

  return (
    <motion.div 
      className="bg-navy-light rounded-lg overflow-hidden shadow-lg relative"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      variants={cardVariants}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-cyber-green/5 opacity-0 pointer-events-none"
        variants={{
          hover: {
            opacity: 1,
            transition: { duration: 0.3 }
          }
        }}
      />
      
      {/* Image with parallax effect */}
      <motion.div 
        className="h-48 overflow-hidden relative"
        whileHover={imageHoverVariants}
      >
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent" />
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
          className="text-sm mb-4 font-fira text-gray-300 hover:text-white"
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
              className="px-2 py-1 bg-navy-dark text-cyber-green text-xs rounded-full font-fira cursor-default"
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
          className="inline-flex items-center text-cyber-green hover:text-electric-blue font-rajdhani font-semibold group"
        >
          <motion.span 
            className="mr-2"
            whileHover={{ 
              x: 2,
              transition: { duration: 0.2 }
            }}
          >
            Read More
          </motion.span>
          <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{
              x: [0, 4, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            whileHover={{
              x: [0, 8, 0],
              transition: { 
                duration: 1,
                repeat: Infinity 
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