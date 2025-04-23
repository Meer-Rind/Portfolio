import { useEffect } from 'react';
import SkillCard from '../components/SkillCard';

const About = () => {
  useEffect(() => {
    document.title = "Shahmeer Abbas Khan | About";
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'text-yellow-400' },
    { name: 'Python', level: 85, color: 'text-blue-400' },
    { name: 'Django', level: 80, color: 'text-green-500' },
    { name: 'Go Lang', level: 75, color: 'text-cyan-400' },
    { name: 'React JS', level: 90, color: 'text-blue-300' },
    { name: 'Cyber Security', level: 85, color: 'text-red-400' },
    { name: 'HTML/CSS', level: 95, color: 'text-orange-500' },
    { name: 'Node.js', level: 80, color: 'text-green-400' },
    { name: 'Docker', level: 70, color: 'text-blue-500' },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-rajdhani">
          About <span className="text-cyber-green">Me</span>
        </h1>
        <div className="w-24 h-1 bg-cyber-green mx-auto mb-8"></div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-fira">
          I'm a passionate full-stack developer with expertise in web development and cyber security. I love building secure, efficient, and user-friendly applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 font-rajdhani">Who Am I?</h2>
          <p className="mb-4 font-fira">
            Hello! I'm Shahmeer Abbas Khan, also known as Meer-Rind in the developer community. I specialize in building modern web applications with a strong focus on security and performance.
          </p>
          <p className="mb-4 font-fira">
            With a background in both development and cyber security, I bring a unique perspective to every project, ensuring that applications are not just functional but also secure by design.
          </p>
          <p className="mb-4 font-fira">
            When I'm not coding, you can find me researching the latest security vulnerabilities, contributing to open-source projects, or mentoring aspiring developers.
          </p>
          <div className="mt-6">
            <a 
              href="/path/to/resume.pdf" 
              download
              className="inline-block px-6 py-3 bg-cyber-green text-navy-dark font-bold rounded-md hover:bg-electric-blue transition-colors duration-300 font-rajdhani"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 border-4 border-cyber-green rounded-lg transform rotate-6 animate-float"></div>
            <div className="absolute inset-0 border-4 border-electric-blue rounded-lg transform -rotate-6 animate-float-reverse"></div>
            <div className="absolute inset-4 bg-navy-light rounded-lg overflow-hidden">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gradient-to-br from-cyber-green to-electric-blue flex items-center justify-center">
                <span className="text-4xl font-bold text-navy-dark font-rajdhani">MK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-rajdhani">
          My <span className="text-cyber-green">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center font-rajdhani">
          My <span className="text-cyber-green">Experience</span>
        </h2>
        <div className="space-y-8">
          <div className="bg-navy-light p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold font-rajdhani">Senior Full Stack Developer</h3>
              <span className="text-cyber-green font-fira">2021 - Present</span>
            </div>
            <h4 className="text-electric-blue mb-2 font-rajdhani">TechSecure Solutions</h4>
            <ul className="list-disc pl-5 space-y-2 font-fira">
              <li>Developed secure web applications with React and Django</li>
              <li>Implemented security protocols and conducted penetration testing</li>
              <li>Led a team of 5 developers in building a financial application</li>
              <li>Reduced security vulnerabilities by 80% through code reviews</li>
            </ul>
          </div>
          <div className="bg-navy-light p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold font-rajdhani">Backend Developer</h3>
              <span className="text-cyber-green font-fira">2019 - 2021</span>
            </div>
            <h4 className="text-electric-blue mb-2 font-rajdhani">DataFort Systems</h4>
            <ul className="list-disc pl-5 space-y-2 font-fira">
              <li>Built RESTful APIs with Python and Go</li>
              <li>Optimized database queries improving performance by 40%</li>
              <li>Implemented authentication and authorization systems</li>
              <li>Worked on data encryption and secure storage solutions</li>
            </ul>
          </div>
          <div className="bg-navy-light p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold font-rajdhani">Junior Developer</h3>
              <span className="text-cyber-green font-fira">2017 - 2019</span>
            </div>
            <h4 className="text-electric-blue mb-2 font-rajdhani">WebCraft Studios</h4>
            <ul className="list-disc pl-5 space-y-2 font-fira">
              <li>Developed frontend components with JavaScript and React</li>
              <li>Assisted in building responsive user interfaces</li>
              <li>Learned security best practices for web development</li>
              <li>Participated in code reviews and team collaborations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;