import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | Home";
  }, []);

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-rajdhani">
          Hi, I'm <span className="text-cyber-green">Shahmeer Abbas Khan</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium mb-8 font-rajdhani gradient-text">
          Full Stack Developer & Cyber Security Enthusiast
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 font-fira">
          I build secure, scalable web applications with modern technologies. Passionate about creating efficient solutions and protecting them from vulnerabilities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/projects" 
            className="px-8 py-3 bg-cyber-green text-navy-dark font-bold rounded-md hover:bg-electric-blue transition-colors duration-300 font-rajdhani"
          >
            View My Work
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-3 border-2 border-cyber-green text-cyber-green font-bold rounded-md hover:bg-navy-light transition-colors duration-300 font-rajdhani"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-navy-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-cyber-green text-4xl mb-4">
            <i className="fas fa-code"></i>
          </div>
          <h3 className="text-xl font-bold mb-2 font-rajdhani">Web Development</h3>
          <p className="font-fira">
            Building responsive, user-friendly websites and web applications with React, Django, and other modern technologies.
          </p>
        </div>
        <div className="bg-navy-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-electric-blue text-4xl mb-4">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="text-xl font-bold mb-2 font-rajdhani">Cyber Security</h3>
          <p className="font-fira">
            Implementing security best practices and conducting vulnerability assessments to protect applications from threats.
          </p>
        </div>
        <div className="bg-navy-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-accent-pink text-4xl mb-4">
            <i className="fas fa-server"></i>
          </div>
          <h3 className="text-xl font-bold mb-2 font-rajdhani">Backend Systems</h3>
          <p className="font-fira">
            Developing robust server-side applications and APIs with Python, Go, and other backend technologies.
          </p>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center font-rajdhani">
          Featured <span className="text-cyber-green">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* These would be mapped from data in a real app */}
          <div className="bg-navy-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-cyber-green to-electric-blue"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-rajdhani">Secure Auth System</h3>
              <p className="text-sm mb-4 font-fira">A multi-factor authentication system with JWT and OAuth2 integration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-navy-dark text-cyber-green text-xs rounded font-fira">React</span>
                <span className="px-2 py-1 bg-navy-dark text-electric-blue text-xs rounded font-fira">Django</span>
                <span className="px-2 py-1 bg-navy-dark text-accent-pink text-xs rounded font-fira">JWT</span>
              </div>
              <Link 
                to="/projects/1" 
                className="mt-4 inline-block text-cyber-green hover:underline font-rajdhani"
              >
                View Project →
              </Link>
            </div>
          </div>
          <div className="bg-navy-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-electric-blue to-accent-pink"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-rajdhani">Vulnerability Scanner</h3>
              <p className="text-sm mb-4 font-fira">A tool to scan web applications for common security vulnerabilities.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-navy-dark text-cyber-green text-xs rounded font-fira">Python</span>
                <span className="px-2 py-1 bg-navy-dark text-electric-blue text-xs rounded font-fira">Go</span>
                <span className="px-2 py-1 bg-navy-dark text-accent-pink text-xs rounded font-fira">Security</span>
              </div>
              <Link 
                to="/projects/2" 
                className="mt-4 inline-block text-cyber-green hover:underline font-rajdhani"
              >
                View Project →
              </Link>
            </div>
          </div>
          <div className="bg-navy-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-accent-pink to-cyber-green"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-rajdhani">E-commerce Platform</h3>
              <p className="text-sm mb-4 font-fira">A full-featured online store with payment integration and admin dashboard.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-navy-dark text-cyber-green text-xs rounded font-fira">React</span>
                <span className="px-2 py-1 bg-navy-dark text-electric-blue text-xs rounded font-fira">Node.js</span>
                <span className="px-2 py-1 bg-navy-dark text-accent-pink text-xs rounded font-fira">MongoDB</span>
              </div>
              <Link 
                to="/projects/3" 
                className="mt-4 inline-block text-cyber-green hover:underline font-rajdhani"
              >
                View Project →
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/projects" 
            className="inline-block px-6 py-2 border-2 border-cyber-green text-cyber-green rounded-md hover:bg-navy-light transition-colors duration-300 font-rajdhani"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;