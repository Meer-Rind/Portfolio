import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { FaTwitter, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';

const Blog = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | Blog";
    // Check for dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addListener((e) => setIsDarkMode(e.matches));
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Securing React Applications",
      excerpt: "Best practices for building secure React applications in 2023.",
      date: "June 15, 2023",
      readTime: "8 min read",
      tags: ["React", "Security", "Web Development"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Go Lang for Web APIs",
      excerpt: "Why Go is becoming a popular choice for building high-performance web APIs.",
      date: "May 22, 2023",
      readTime: "10 min read",
      tags: ["Go", "Backend", "APIs"],
      image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Django Security Features",
      excerpt: "Exploring Django's built-in security features and how to use them effectively.",
      date: "April 10, 2023",
      readTime: "12 min read",
      tags: ["Django", "Python", "Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "JWT Authentication Deep Dive",
      excerpt: "Understanding JWT authentication and common security pitfalls to avoid.",
      date: "March 5, 2023",
      readTime: "15 min read",
      tags: ["Authentication", "Security", "JWT"],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title: "Building Secure Microservices",
      excerpt: "Architectural patterns for secure microservice communication.",
      date: "February 18, 2023",
      readTime: "20 min read",
      tags: ["Microservices", "Security", "Architecture"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    },
    {
      id: 6,
      title: "Modern CSS Techniques",
      excerpt: "Exploring modern CSS features that can improve your workflow.",
      date: "January 30, 2023",
      readTime: "9 min read",
      tags: ["CSS", "Frontend", "Web Development"],
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
    },
  ];

  return (
    <div className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Animated background elements */}
      {isDarkMode && (
        <>
          <div className="fixed top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-cyber-green/10 to-transparent -z-10"></div>
          <div className="fixed bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-electric-blue/10 to-transparent -z-10"></div>
        </>
      )}

      <div className="text-center mb-16 relative">
        <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full ${isDarkMode ? 'bg-cyber-green/20' : 'bg-cyber-green/10'} blur-3xl -z-10`}></div>
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 font-rajdhani ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          My <span className="text-cyber-green">Blog</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-electric-blue mx-auto mb-8"></div>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto font-fira ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Thoughts, tutorials, and insights on web development, cyber security, and technology.
        </p>
      </div>

      {/* Category filter chips */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {['All', 'Security', 'Web Development', 'React', 'Go', 'Django', 'CSS', 'APIs'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-rajdhani font-medium transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            } shadow-sm hover:shadow-md ${
              category === 'All' 
                ? 'bg-gradient-to-r from-cyber-green to-electric-blue text-white' 
                : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/30 to-electric-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <BlogCard 
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              tags={post.tags}
              image={post.image}
              isDarkMode={isDarkMode}
            />
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-green to-electric-blue transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100 ${
              isDarkMode ? 'opacity-80' : 'opacity-100'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className={`flex justify-center items-center gap-2 mb-16 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        <button className={`p-2 rounded-md ${
          isDarkMode 
            ? 'hover:bg-gray-700' 
            : 'hover:bg-gray-200'
        }`} disabled>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button className={`px-4 py-2 rounded-md font-medium ${
          isDarkMode 
            ? 'bg-cyber-green text-white' 
            : 'bg-cyber-green text-white'
        }`}>1</button>
        {[2, 3, 4].map((page) => (
          <button 
            key={page}
            className={`px-4 py-2 rounded-md font-medium ${
              isDarkMode 
                ? 'hover:bg-gray-700' 
                : 'hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}
        <button className={`p-2 rounded-md ${
          isDarkMode 
            ? 'hover:bg-gray-700' 
            : 'hover:bg-gray-200'
        }`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Newsletter and social section */}
      <div className={`mt-16 p-8 rounded-2xl shadow-lg ${
        isDarkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 font-rajdhani ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Stay Updated with My Latest Posts
          </h2>
          <p className={`mb-6 font-fira ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Subscribe to my newsletter or follow me on social media to get notified about new articles and tutorials.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <input 
              type="email" 
              placeholder="Your email address" 
              className={`flex-grow max-w-md px-4 py-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-cyber-green focus:border-cyber-green' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-cyber-green focus:border-cyber-green'
              } focus:outline-none focus:ring-2`}
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyber-green to-electric-blue text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 font-rajdhani shadow-md hover:shadow-lg">
              Subscribe
            </button>
          </div>
          
          <div className="flex justify-center gap-6">
  {[
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/meer_rind', color: 'text-blue-400' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/meer-rind', color: 'text-blue-500' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/meer-rind', color: 'text-gray-400' },
    { name: 'Dev.to', icon: <FaMedium />, url: 'https://medium.com/@meer-rind', color: 'text-black dark:text-white' },
  ].map((social) => (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-2xl hover:scale-110 transition-transform duration-300 ${social.color}`}
      aria-label={social.name}
    >
      {social.icon}
    </a>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Blog;