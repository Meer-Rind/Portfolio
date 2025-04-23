import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | Blog";
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
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-rajdhani">
          My <span className="text-cyber-green">Blog</span>
        </h1>
        <div className="w-24 h-1 bg-cyber-green mx-auto mb-8"></div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-fira">
          Thoughts, tutorials, and insights on web development, cyber security, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard 
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            readTime={post.readTime}
            tags={post.tags}
            image={post.image}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mb-6 font-fira">
          Want to be notified when I publish new posts? Follow me on Twitter or LinkedIn.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://twitter.com/meer_rind" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-navy-light border border-electric-blue text-electric-blue rounded-md hover:bg-electric-blue hover:text-navy-dark transition-colors duration-300 font-rajdhani"
          >
            Twitter
          </a>
          <a 
            href="https://linkedin.com/in/meer-rind" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-navy-light border border-cyber-green text-cyber-green rounded-md hover:bg-cyber-green hover:text-navy-dark transition-colors duration-300 font-rajdhani"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;