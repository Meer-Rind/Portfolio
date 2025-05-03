import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = `Blog Post ${id} | Shahmeer Abbas Khan`;
  }, [id]);

  // Blog posts data
  const blogPosts = {
    1: {
      title: "Securing React Applications",
      date: "June 15, 2023",
      readTime: "8 min read",
      tags: ["React", "Security", "Web Development"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Introduction</h2>
        <p class="mb-4 font-fira">Building secure React applications is more important than ever in today's digital landscape. With the increasing number of cyber threats, developers need to be proactive about implementing security measures from the start.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">1. Secure Dependencies</h2>
        <p class="mb-4 font-fira">Always keep your dependencies up to date. Use tools like npm audit or yarn audit to identify vulnerabilities in your project's dependencies. Consider using dependabot or renovatebot to automate dependency updates.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">2. XSS Protection</h2>
        <p class="mb-4 font-fira">React automatically escapes content rendered in JSX, but there are still scenarios where XSS can occur:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li>Avoid dangerouslySetInnerHTML unless absolutely necessary</li>
          <li>Sanitize any user input that will be rendered</li>
          <li>Use libraries like DOMPurify to sanitize HTML</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">3. Authentication</h2>
        <p class="mb-4 font-fira">Implement secure authentication practices:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li>Use HTTPS for all communications</li>
          <li>Store tokens securely (HttpOnly, Secure cookies)</li>
          <li>Implement proper session timeout</li>
          <li>Consider adding multi-factor authentication</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">4. CSP Implementation</h2>
        <p class="mb-4 font-fira">Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including XSS and data injection attacks. Implement a strict CSP for your React application.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Conclusion</h2>
        <p class="mb-4 font-fira">Security should be a priority at every stage of development, not an afterthought. By following these practices, you can significantly reduce the attack surface of your React applications and protect your users' data.</p>
      `
    },
    2: {
      title: "Go Lang for Web APIs",
      date: "May 22, 2023",
      readTime: "10 min read",
      tags: ["Go", "Backend", "APIs"],
      image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Why Choose Go for Web APIs?</h2>
        <p class="mb-4 font-fira">Go (or Golang) has been gaining popularity as a language for building web APIs due to its simplicity, performance, and excellent standard library. Here's why you should consider it for your next API project.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Performance Benefits</h2>
        <p class="mb-4 font-fira">Go is a compiled language that produces statically linked binaries, resulting in:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li>Fast startup times</li>
          <li>Low memory footprint</li>
          <li>Excellent throughput for concurrent requests</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Concurrency Model</h2>
        <p class="mb-4 font-fira">Go's goroutines and channels make it easy to write concurrent code that can handle thousands of simultaneous connections efficiently.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Standard Library</h2>
        <p class="mb-4 font-fira">Go comes with a robust standard library that includes everything you need to build production-ready APIs:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li>net/http for HTTP servers and clients</li>
          <li>encoding/json for JSON handling</li>
          <li>database/sql for database interactions</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Getting Started</h2>
        <p class="mb-4 font-fira">Here's a simple example of a Go web API:</p>
        <pre class="bg-navy-dark p-4 rounded mb-4 overflow-x-auto font-fira text-sm"><code>package main

import (
  "encoding/json"
  "net/http"
)

func main() {
  http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(map[string]string{"message": "Hello, World!"})
  })
  
  http.ListenAndServe(":8080", nil)
}</code></pre>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Conclusion</h2>
        <p class="mb-4 font-fira">Go is an excellent choice for building high-performance web APIs. Its simplicity, performance, and comprehensive standard library make it a strong contender in the backend development space.</p>
      `
    },
    3: {
      title: "Django Security Features",
      date: "April 10, 2023",
      readTime: "12 min read",
      tags: ["Django", "Python", "Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Django's Security Philosophy</h2>
        <p class="mb-4 font-fira">Django was developed with security in mind from the beginning. It provides protection against many common security threats right out of the box.</p>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">1. Cross Site Scripting (XSS) Protection</h2>
        <p class="mb-4 font-fira">Django templates escape specific characters which are particularly dangerous to HTML. This protects against XSS attacks by automatically escaping:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li>&lt; is converted to &amp;lt;</li>
          <li>&gt; is converted to &amp;gt;</li>
          <li>' (single quote) is converted to &amp;#39;</li>
          <li>" (double quote) is converted to &amp;quot;</li>
          <li>&amp; is converted to &amp;amp;</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">2. Cross Site Request Forgery (CSRF) Protection</h2>
        <p class="mb-4 font-fira">Django has built-in protection against CSRF attacks. The {% csrf_token %} template tag provides easy implementation:</p>
        <pre class="bg-navy-dark p-4 rounded mb-4 overflow-x-auto font-fira text-sm"><code>&lt;form method="post"&gt;
  {% csrf_token %}
  &lt;!-- form fields --&gt;
&lt;/form&gt;</code></pre>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">3. SQL Injection Protection</h2>
        <p class="mb-4 font-fira">Django's ORM uses parameterized queries, which separates SQL code from data. This prevents SQL injection attacks:</p>
        <pre class="bg-navy-dark p-4 rounded mb-4 overflow-x-auto font-fira text-sm"><code># Safe from SQL injection
Entry.objects.filter(headline__contains='user input')</code></pre>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">4. Clickjacking Protection</h2>
        <p class="mb-4 font-fira">Django provides middleware and decorators to prevent clickjacking:</p>
        <pre class="bg-navy-dark p-4 rounded mb-4 overflow-x-auto font-fira text-sm"><code>from django.views.decorators.clickjacking import xframe_options_deny

@xframe_options_deny
def my_view(request):
    ...</code></pre>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">5. Security Headers</h2>
        <p class="mb-4 font-fira">Django provides middleware for important security headers:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 font-fira">
          <li>SecurityMiddleware for various headers</li>
          <li>XFrameOptionsMiddleware for clickjacking protection</li>
          <li>XContentTypeOptionsMiddleware to prevent MIME sniffing</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 font-rajdhani">Conclusion</h2>
        <p class="mb-4 font-fira">Django's built-in security features provide excellent protection against common web vulnerabilities. However, developers should still follow security best practices and stay updated on new threats.</p>
      `
    }
  };

  const post = blogPosts[id] || blogPosts[1];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button with animated hover effect */}
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-electric-blue hover:text-cyber-green transition-colors duration-300 font-rajdhani group"
        >
          <svg 
            className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content area */}
        <div className="lg:col-span-2">
          {/* Article header with gradient underline */}
          <div className="mb-8">
            <span className="text-sm text-electric-blue font-fira">{post.date} • {post.readTime}</span>
            <h1 className="text-3xl md:text-4xl font-bold my-4 font-rajdhani relative inline-block">
              {post.title}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue to-cyber-green rounded-full"></span>
            </h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-navy-dark text-cyber-green rounded-full text-sm font-fira hover:bg-opacity-80 transition-all duration-200 hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured image with hover zoom effect */}
          <div className="mb-8 overflow-hidden rounded-xl shadow-2xl hover:shadow-electric-blue/20 transition-shadow duration-500">
            <div className="relative overflow-hidden group">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-rajdhani text-lg">Featured Image</span>
              </div>
            </div>
          </div>

          {/* Article content with improved typography */}
          <article 
            className="prose prose-invert max-w-none font-fira
              prose-headings:font-rajdhani
              prose-h2:border-b prose-h2:border-electric-blue/30 prose-h2:pb-2
              prose-a:text-electric-blue prose-a:no-underline hover:prose-a:text-cyber-green
              prose-blockquote:border-l-4 prose-blockquote:border-cyber-green prose-blockquote:pl-4 prose-blockquote:italic
              prose-pre:bg-navy-dark prose-pre:border prose-pre:border-electric-blue/20 prose-pre:shadow-lg
              prose-ul:marker:text-electric-blue
              prose-img:rounded-lg prose-img:shadow-lg
              dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author signature at the end */}
          <div className="mt-12 pt-6 border-t border-electric-blue/20 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-cyber-green to-electric-blue flex items-center justify-center">
              <span className="text-lg font-bold text-navy-dark font-rajdhani">SAK</span>
            </div>
            <div>
              <p className="font-fira text-sm text-electric-blue">Written by</p>
              <h4 className="font-bold font-rajdhani">Shahmeer Abbas Khan</h4>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Author card with glass morphism effect */}
          <div className="bg-navy-light/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-electric-blue/10 sticky top-24 transition-all duration-300 hover:shadow-electric-blue/20">
            <h3 className="text-xl font-bold mb-4 font-rajdhani flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About the Author
            </h3>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-electric-blue ring-offset-2 ring-offset-navy-light">
                <div className="w-full h-full bg-gradient-to-br from-cyber-green to-electric-blue flex items-center justify-center">
                  <span className="text-2xl font-bold text-navy-dark font-rajdhani">SAK</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold font-rajdhani">Shahmeer Abbas Khan</h4>
                <p className="text-sm text-electric-blue font-fira">Full Stack Developer & Security Enthusiast</p>
              </div>
            </div>
            <p className="mb-4 font-fira text-sm leading-relaxed">
              I write about web development, cyber security, and technology. Follow me for more content like this.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/meer_rind" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-electric-blue hover:text-cyber-green transition-colors duration-300 hover:-translate-y-1 transform transition-all"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://github.com/Meer-Rind" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-electric-blue hover:text-cyber-green transition-colors duration-300 hover:-translate-y-1 transform transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/meer-rind" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-electric-blue hover:text-cyber-green transition-colors duration-300 hover:-translate-y-1 transform transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Recent posts with animated cards */}
          <div className="bg-navy-light/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-electric-blue/10">
            <h3 className="text-xl font-bold mb-4 font-rajdhani flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Recent Posts
            </h3>
            <ul className="space-y-4">
              {Object.entries(blogPosts).map(([postId, postData]) => (
                postId !== id && (
                  <li key={postId}>
                    <Link 
                      to={`/blog/${postId}`}
                      className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-navy-dark/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden shadow-md group-hover:shadow-electric-blue/20 transition-shadow duration-300">
                        <img 
                          src={postData.image} 
                          alt={postData.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-electric-blue transition-colors duration-300 font-rajdhani">
                          {postData.title}
                        </h4>
                        <p className="text-sm text-electric-blue font-fira">
                          {postData.readTime}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {postData.tags.slice(0, 2).map((tag, index) => (
                            <span 
                              key={index}
                              className="px-2 py-0.5 bg-navy-dark text-cyber-green rounded-full text-xs font-fira"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="bg-gradient-to-br from-navy-dark to-electric-blue/20 p-6 rounded-xl shadow-lg border border-electric-blue/20">
            <h3 className="text-xl font-bold mb-2 font-rajdhani text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stay Updated
            </h3>
            <p className="text-sm text-electric-blue mb-4 font-fira">
              Subscribe to get notified about new posts and updates.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-navy-light border border-electric-blue/30 focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none transition-all duration-300 text-white font-fira text-sm"
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-electric-blue to-cyber-green text-navy-dark font-rajdhani font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-md hover:shadow-electric-blue/30"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;