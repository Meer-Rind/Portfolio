const SkillCard = ({ name, level, color }) => {
    return (
      <div className="bg-navy-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-center mb-2">
          <h3 className={`text-lg font-bold font-rajdhani ${color}`}>{name}</h3>
          <span className="text-text-light font-fira">{level}%</span>
        </div>
        <div className="w-full bg-navy-dark rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${color.replace('text', 'bg')}`} 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default SkillCard;