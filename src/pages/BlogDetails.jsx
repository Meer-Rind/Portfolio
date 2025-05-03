import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiTwitter, FiGithub, FiLinkedin, FiMail, FiShare2 } from 'react-icons/fi';

const BlogDetails = () => {
  const { id } = useParams();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHoveringBack, setIsHoveringBack] = useState(false);
  const [activeShare, setActiveShare] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    document.title = `Blog Post ${id} | Shahmeer Abbas Khan`;
  }, [id]);

  // Enhanced blog posts data
  const blogPosts = {
    1: {
      title: "Securing React Applications in 2023",
      date: "June 15, 2023",
      readTime: "8 min read",
      tags: ["React", "Security", "Web Development"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt: "Comprehensive guide to implementing security best practices in modern React applications.",
      content: `
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Introduction</h2>
        <p class="mb-4 font-fira leading-relaxed">Building secure React applications is more important than ever in today's digital landscape. With the increasing number of cyber threats, developers need to be proactive about implementing security measures from the start.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">1. Secure Dependencies</h2>
        <p class="mb-4 font-fira leading-relaxed">Always keep your dependencies up to date. Use tools like <code class="bg-navy-dark/50 px-1.5 py-0.5 rounded">npm audit</code> or <code class="bg-navy-dark/50 px-1.5 py-0.5 rounded">yarn audit</code> to identify vulnerabilities in your project's dependencies. Consider using dependabot or renovatebot to automate dependency updates.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">2. XSS Protection</h2>
        <p class="mb-4 font-fira leading-relaxed">React automatically escapes content rendered in JSX, but there are still scenarios where XSS can occur:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Avoid dangerouslySetInnerHTML unless absolutely necessary</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Sanitize any user input that will be rendered</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Use libraries like DOMPurify to sanitize HTML</li>
        </ul>
        
        <div class="bg-navy-light/20 p-6 rounded-xl border border-navy-light/30 mb-6">
          <h3 class="text-lg font-bold mb-2 font-rajdhani text-cyber-green">Pro Tip</h3>
          <p class="font-fira">Implement Content Security Policy (CSP) headers to add an extra layer of protection against XSS attacks.</p>
        </div>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">3. Authentication</h2>
        <p class="mb-4 font-fira leading-relaxed">Implement secure authentication practices:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Use HTTPS for all communications</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Store tokens securely (HttpOnly, Secure cookies)</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Implement proper session timeout</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Consider adding multi-factor authentication</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">4. CSP Implementation</h2>
        <p class="mb-4 font-fira leading-relaxed">Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including XSS and data injection attacks. Implement a strict CSP for your React application.</p>
        
        <pre class="bg-navy-dark p-4 rounded-lg mb-6 overflow-x-auto text-sm font-fira border border-navy-light/30"><code>Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;</code></pre>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Conclusion</h2>
        <p class="mb-4 font-fira leading-relaxed">Security should be a priority at every stage of development, not an afterthought. By following these practices, you can significantly reduce the attack surface of your React applications and protect your users' data.</p>
      `
    },
    2: {
      title: "Building High-Performance APIs with Go",
      date: "May 22, 2023",
      readTime: "10 min read",
      tags: ["Go", "Backend", "APIs"],
      image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt: "Why Go is becoming the language of choice for building modern web APIs.",
      content: `
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Why Choose Go for Web APIs?</h2>
        <p class="mb-4 font-fira leading-relaxed">Go (or Golang) has been gaining popularity as a language for building web APIs due to its simplicity, performance, and excellent standard library. Here's why you should consider it for your next API project.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Performance Benefits</h2>
        <p class="mb-4 font-fira leading-relaxed">Go is a compiled language that produces statically linked binaries, resulting in:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Fast startup times</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Low memory footprint</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> Excellent throughput for concurrent requests</li>
        </ul>
        
        <div class="bg-navy-light/20 p-6 rounded-xl border border-navy-light/30 mb-6">
          <h3 class="text-lg font-bold mb-2 font-rajdhani text-cyber-green">Benchmark Results</h3>
          <p class="font-fira">In our tests, a simple Go API handled 15,000 requests per second with an average latency of 2.3ms.</p>
        </div>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Concurrency Model</h2>
        <p class="mb-4 font-fira leading-relaxed">Go's goroutines and channels make it easy to write concurrent code that can handle thousands of simultaneous connections efficiently.</p>
        
        <pre class="bg-navy-dark p-4 rounded-lg mb-6 overflow-x-auto text-sm font-fira border border-navy-light/30"><code>func handleRequest(w http.ResponseWriter, r *http.Request) {
    // Process request in a goroutine
    go func() {
        // Intensive processing here
        response := processRequest(r)
        
        // Send response back
        w.Write(response)
    }()
}</code></pre>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Standard Library</h2>
        <p class="mb-4 font-fira leading-relaxed">Go comes with a robust standard library that includes everything you need to build production-ready APIs:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> net/http for HTTP servers and clients</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> encoding/json for JSON handling</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> database/sql for database interactions</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Conclusion</h2>
        <p class="mb-4 font-fira leading-relaxed">Go is an excellent choice for building high-performance web APIs. Its simplicity, performance, and comprehensive standard library make it a strong contender in the backend development space.</p>
      `
    },
    3: {
      title: "Django Security Features You Should Know",
      date: "April 10, 2023",
      readTime: "12 min read",
      tags: ["Django", "Python", "Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt: "Exploring Django's built-in security features that protect your web applications by default.",
      content: `
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Django's Security Philosophy</h2>
        <p class="mb-4 font-fira leading-relaxed">Django was developed with security in mind from the beginning. It provides protection against many common security threats right out of the box.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">1. Cross Site Scripting (XSS) Protection</h2>
        <p class="mb-4 font-fira leading-relaxed">Django templates escape specific characters which are particularly dangerous to HTML. This protects against XSS attacks by automatically escaping:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> &lt; is converted to &amp;lt;</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> &gt; is converted to &amp;gt;</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> ' (single quote) is converted to &amp;#39;</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> " (double quote) is converted to &amp;quot;</li>
          <li class="flex items-start"><span class="text-cyber-green mr-2">•</span> &amp; is converted to &amp;amp;</li>
        </ul>
        
        <div class="bg-navy-light/20 p-6 rounded-xl border border-navy-light/30 mb-6">
          <h3 class="text-lg font-bold mb-2 font-rajdhani text-cyber-green">Did You Know?</h3>
          <p class="font-fira">Django's template system automatically escapes variables unless they're explicitly marked as safe.</p>
        </div>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">2. Cross Site Request Forgery (CSRF) Protection</h2>
        <p class="mb-4 font-fira leading-relaxed">Django has built-in protection against CSRF attacks. The <code class="bg-navy-dark/50 px-1.5 py-0.5 rounded">{% csrf_token %}</code> template tag provides easy implementation:</p>
        <pre class="bg-navy-dark p-4 rounded-lg mb-6 overflow-x-auto text-sm font-fira border border-navy-light/30"><code>&lt;form method="post"&gt;
  {% csrf_token %}
  &lt;!-- form fields --&gt;
&lt;/form&gt;</code></pre>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">3. SQL Injection Protection</h2>
        <p class="mb-4 font-fira leading-relaxed">Django's ORM uses parameterized queries, which separates SQL code from data. This prevents SQL injection attacks:</p>
        <pre class="bg-navy-dark p-4 rounded-lg mb-6 overflow-x-auto text-sm font-fira border border-navy-light/30"><code># Safe from SQL injection
Entry.objects.filter(headline__contains='user input')</code></pre>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-green">Conclusion</h2>
        <p class="mb-4 font-fira leading-relaxed">Django's built-in security features provide excellent protection against common web vulnerabilities. However, developers should still follow security best practices and stay updated on new threats.</p>
      `
    }
  };

  const post = blogPosts[id] || blogPosts[1];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 15px 30px -10px rgba(0, 255, 170, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const backButtonVariants = {
    hover: {
      x: -5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const shareButtonVariants = {
    hover: { 
      scale: 1.1,
      color: '#00ffaa'
    },
    tap: { scale: 0.9 }
  };

  const subscribeButtonVariants = {
    hover: { 
      scale: 1.02,
      backgroundPosition: '100% 50%'
    },
    tap: { scale: 0.98 }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Back button with animated hover effect */}
      <motion.div 
        className="mb-8"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link 
          to="/blog" 
          className="inline-flex items-center text-electric-blue hover:text-cyber-green transition-colors duration-300 font-rajdhani group"
          onMouseEnter={() => setIsHoveringBack(true)}
          onMouseLeave={() => setIsHoveringBack(false)}
        >
          <motion.div
            variants={backButtonVariants}
            animate={isHoveringBack ? "hover" : "initial"}
            className="mr-2"
          >
            <FiArrowLeft className="w-5 h-5" />
          </motion.div>
          <span>Back to Blog</span>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Article header with animated gradient */}
          <motion.div 
            className="bg-gradient-to-r from-navy-dark/20 to-navy-light/10 p-6 rounded-xl border border-navy-light/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-cyber-green/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <span className="text-sm text-electric-blue font-fira tracking-wider">{post.date} • {post.readTime}</span>
            <motion.h1 
              className="text-3xl md:text-4xl font-bold my-4 font-rajdhani bg-clip-text text-transparent bg-gradient-to-r from-cyber-green to-electric-blue"
              whileHover={{ x: 3 }}
            >
              {post.title}
            </motion.h1>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-navy-dark/60 text-cyber-green rounded-full text-xs font-fira tracking-wide border border-cyber-green/20 hover:bg-cyber-green/10 transition-colors duration-300"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: '#00ffaa',
                    color: '#1a1a2e'
                  }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Featured image with parallax effect */}
          <motion.div 
            className="group relative overflow-hidden rounded-xl shadow-2xl border border-navy-light/20"
            initial="hidden"
            animate={isImageLoaded ? "visible" : "hidden"}
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <motion.img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-96 object-cover"
                onLoad={() => setIsImageLoaded(true)}
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.7 }}
              />
            </div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span className="text-sm text-cyber-green font-fira">Featured Image</span>
            </motion.div>
          </motion.div>

          {/* Article content with animated elements */}
          <motion.article 
            className="prose prose-invert max-w-none font-fira
              prose-headings:font-rajdhani
              prose-a:text-electric-blue prose-a:underline hover:prose-a:text-cyber-green
              prose-ul:marker:text-electric-blue prose-li:pl-2
              prose-blockquote:border-l-2 prose-blockquote:border-electric-blue prose-blockquote:pl-4
              prose-pre:bg-navy-dark prose-pre:border prose-pre:border-navy-light/30 prose-pre:shadow-lg
              prose-code:before:content-none prose-code:after:content-none prose-code:bg-navy-dark/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-img:rounded-lg prose-img:shadow-lg prose-img:border prose-img:border-navy-light/20
              dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />

          {/* Author signature with animation */}
          <motion.div 
            className="mt-12 pt-6 border-t border-navy-light/20 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-cyber-green to-electric-blue flex items-center justify-center">
              <span className="text-xl font-bold text-navy-dark font-rajdhani">SAK</span>
            </div>
            <div>
              <p className="text-sm text-electric-blue font-fira">Written by</p>
              <h4 className="font-bold text-cyber-green font-rajdhani">Shahmeer Abbas Khan</h4>
              <p className="text-sm text-electric-blue font-fira">Full Stack Developer & Security Specialist</p>
            </div>
          </motion.div>

          {/* Social sharing buttons with animations */}
          <motion.div 
            className="mt-8 p-6 bg-navy-light/20 rounded-xl border border-navy-light/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-lg font-bold mb-4 font-rajdhani text-cyber-green">Share this article</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Twitter', icon: <FiTwitter />, color: 'from-blue-400 to-blue-600' },
                { name: 'LinkedIn', icon: <FiLinkedin />, color: 'from-blue-500 to-blue-700' },
                { name: 'Facebook', icon: <FiGithub />, color: 'from-purple-500 to-purple-700' },
                { name: 'Email', icon: <FiMail />, color: 'from-red-400 to-red-600' }
              ].map((platform, index) => (
                <motion.button
                  key={platform.name}
                  className={`px-4 py-2 rounded-lg bg-navy-dark/50 text-white hover:text-white border border-navy-light/20 flex items-center bg-gradient-to-r ${platform.color}`}
                  variants={shareButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setActiveShare(index)}
                  onHoverEnd={() => setActiveShare(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="mr-2">{platform.icon}</span>
                  <AnimatePresence mode="wait">
                    {activeShare === index && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.3 }}
                        className="whitespace-nowrap overflow-hidden"
                      >
                        Share on {platform.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar with sticky positioning */}
        <div className="lg:col-span-1 space-y-6">
          {/* Author card with glass morphism effect */}
          <motion.div 
            className="bg-navy-light/20 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-navy-light/20 sticky top-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 font-rajdhani text-cyber-green">About the Author</h3>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-cyber-green to-electric-blue flex items-center justify-center">
                <span className="text-2xl font-bold text-navy-dark font-rajdhani">SAK</span>
              </div>
              <div>
                <h4 className="font-bold font-rajdhani">Shahmeer Abbas Khan</h4>
                <p className="text-sm text-electric-blue font-fira">Full Stack Developer & Security Enthusiast</p>
              </div>
            </div>
            <p className="mb-4 font-fira text-sm">
              I write about web development, cyber security, and technology. Follow me for more content like this.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Twitter', url: 'https://twitter.com/meer_rind', icon: <FiTwitter /> },
                { name: 'GitHub', url: 'https://github.com/Meer-Rind', icon: <FiGithub /> },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/meer-rind', icon: <FiLinkedin /> },
                { name: 'Email', url: 'mailto:contact@meer-rind.com', icon: <FiMail /> }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-electric-blue hover:text-cyber-green transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-navy-dark/50 hover:bg-cyber-green/10 border border-navy-light/20"
                  aria-label={social.name}
                  variants={shareButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Recent posts with hover effects */}
          <motion.div 
            className="bg-navy-light/20 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-navy-light/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 font-rajdhani text-cyber-green">Recent Posts</h3>
            <ul className="space-y-4">
              {Object.entries(blogPosts).map(([postId, postData]) => (
                postId !== id && (
                  <motion.li 
                    key={postId}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <Link 
                      to={`/blog/${postId}`}
                      className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-navy-dark/30 transition-all duration-300 border border-transparent hover:border-navy-light/20"
                    >
                      <motion.div 
                        className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden relative"
                        variants={cardHoverVariants}
                      >
                        <img 
                          src={postData.image} 
                          alt={postData.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium group-hover:text-electric-blue transition-colors duration-300 font-rajdhani line-clamp-2">
                          {postData.title}
                        </h4>
                        <div className="flex items-center text-xs text-electric-blue font-fira mt-1 space-x-2">
                          <span>{postData.readTime}</span>
                          <span>•</span>
                          <span>{postData.date}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.li>
                )
              ))}
            </ul>
          </motion.div>

          {/* Newsletter signup with animated success state */}
          <motion.div 
            className="bg-gradient-to-br from-navy-dark/50 to-cyber-green/10 p-6 rounded-xl shadow-lg border border-navy-light/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-2 font-rajdhani text-cyber-green">Stay Updated</h3>
            <p className="text-sm text-electric-blue font-fira mb-4">Get the latest articles delivered to your inbox</p>
            
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form 
                  className="space-y-3"
                  initial={{ opacity: 1, height: 'auto' }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleSubscribe}
                >
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-lg bg-navy-dark/50 border border-navy-light/20 text-white placeholder-electric-blue/50 focus:outline-none focus:ring-2 focus:ring-cyber-green focus:border-transparent transition-all duration-300"
                    required
                  />
                  <motion.button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-gradient-to-r from-electric-blue to-cyber-green text-navy-dark font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
                    variants={subscribeButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ backgroundPosition: '0% 50%' }}
                  >
                    Subscribe
                    <FiArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  className="text-center py-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="w-12 h-12 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FiMail className="text-cyber-green w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-cyber-green font-rajdhani mb-1">Thanks for subscribing!</h4>
                  <p className="text-sm text-electric-blue font-fira">You'll receive our next article directly in your inbox.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <AnimatePresence>
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="fixed pointer-events-none z-0"
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#00ffaa',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogDetails;