import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProjectCard = ({ id, title, description, tags, image, githubLink, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: -10,
      scale: 1.02,
      boxShadow: isDarkMode 
        ? '0 20px 25px -5px rgba(0, 255, 170, 0.2), 0 10px 10px -5px rgba(0, 255, 170, 0.04)'
        : '0 20px 25px -5px rgba(0, 200, 130, 0.2), 0 10px 10px -5px rgba(0, 200, 130, 0.04)'
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 }
  };

  const tagVariants = {
    initial: { y: 0 },
    hover: { y: -2, scale: 1.05 }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const shimmerVariants = {
    initial: { x: '-100%' },
    hover: { 
      x: '100%',
      transition: { duration: 1.2, ease: 'linear' }
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/20 to-transparent z-10 pointer-events-none"
          variants={shimmerVariants}
        />
      )}

      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          onLoad={() => setIsImageLoaded(true)}
          style={{
            opacity: isImageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        {/* Loading placeholder */}
        {!isImageLoaded && (
          <div className={`absolute inset-0 animate-pulse ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
        )}

        {/* Image overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4"
          variants={overlayVariants}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h3 className={`text-xl font-bold text-white mb-1 font-rajdhani`}>{title}</h3>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <motion.span
                  key={index}
                  variants={tagVariants}
                  transition={{ duration: 0.2 }}
                  className="text-xs px-2 py-1 rounded-full bg-black/50 text-white"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Content container */}
      <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <motion.h3 
          className={`text-xl font-bold mb-2 font-rajdhani ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          whileHover={{ color: isDarkMode ? '#00ffaa' : '#00c082' }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className={`mb-4 font-fira ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {description}
        </motion.p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              whileHover={{ 
                y: -2,
                backgroundColor: isDarkMode ? '#00ffaa' : '#00c082',
                color: isDarkMode ? '#1a1a2e' : '#ffffff'
              }}
              transition={{ duration: 0.2 }}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-700 text-cyber-green' : 'bg-gray-100 text-gray-800'}`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <motion.a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${isDarkMode ? 'text-gray-300 hover:text-cyber-green' : 'text-gray-700 hover:text-cyber-green'}`}
          >
            <FiGithub className="text-lg" />
            <motion.span 
              className="text-sm font-fira"
              whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Code
            </motion.span>
          </motion.a>
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: isDarkMode 
                ? '0 0 15px rgba(0, 255, 170, 0.5)'
                : '0 0 15px rgba(0, 200, 130, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link 
              to={`/projects/${id}`}
              className={`block px-4 py-2 rounded-md font-rajdhani font-bold ${isDarkMode ? 'bg-cyber-green text-gray-900 hover:bg-cyber-green/90' : 'bg-cyber-green text-navy-dark hover:bg-cyber-green/90'}`}
            >
              View Details
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Glow effect */}
      {isHovered && (
        <div className={`absolute inset-0 rounded-xl pointer-events-none ${
          isDarkMode 
            ? 'shadow-[0_0_25px_rgba(0,255,170,0.3)]' 
            : 'shadow-[0_0_25px_rgba(0,200,130,0.2)]'
        }`} />
      )}
    </motion.div>
  );
};

export default ProjectCard;