import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, excerpt, date, readTime, tags, image }) => {
  return (
    <div className="bg-navy-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-electric-blue font-fira">{date}</span>
          <span className="text-sm text-text-light font-fira">{readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 font-rajdhani">{title}</h3>
        <p className="text-sm mb-4 font-fira">{excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-navy-dark text-cyber-green text-xs rounded font-fira"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          to={`/blog/${id}`} 
          className="inline-flex items-center text-cyber-green hover:text-electric-blue transition-colors duration-300 font-rajdhani"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;