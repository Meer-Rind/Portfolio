import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-dark text-cyber-text">
      <h1 className="text-6xl font-bold text-cyber-green mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link 
        to="/" 
        className="bg-cyber-green hover:bg-cyber-blue text-cyber-dark px-6 py-3 rounded-lg font-semibold btn-glow"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;