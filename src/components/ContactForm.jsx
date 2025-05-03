import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {submitStatus && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'} shadow-lg`}
        >
          {submitStatus.message}
        </motion.div>
      )}
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <label htmlFor="name" className="block text-sm font-medium mb-1 font-rajdhani text-electric-blue">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-dark border border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira text-white transition-all duration-300 hover:border-electric-blue"
        />
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <label htmlFor="email" className="block text-sm font-medium mb-1 font-rajdhani text-electric-blue">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-dark border border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira text-white transition-all duration-300 hover:border-electric-blue"
        />
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <label htmlFor="subject" className="block text-sm font-medium mb-1 font-rajdhani text-electric-blue">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-dark border border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira text-white transition-all duration-300 hover:border-electric-blue"
        />
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <label htmlFor="message" className="block text-sm font-medium mb-1 font-rajdhani text-electric-blue">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-dark border border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira text-white transition-all duration-300 hover:border-electric-blue"
        ></textarea>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-md font-bold font-rajdhani transition-all duration-300 flex items-center justify-center gap-2 ${
            isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-cyber-green text-navy-dark hover:bg-electric-blue shadow-lg hover:shadow-electric-blue/30'
          }`}
        >
          {isSubmitting ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ↻
              </motion.span>
              Sending...
            </>
          ) : (
            <>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Send Message
            </>
          )}
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;