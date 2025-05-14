import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      // Simulate API call with more realistic delay
      await new Promise(resolve => setTimeout(resolve, 1800));
      
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

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6 bg-navy-light/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-navy-dark/20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatePresence>
        {submitStatus && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-4 rounded-md ${
              submitStatus.success 
                ? 'bg-green-900/80 text-green-100' 
                : 'bg-red-900/80 text-red-100'
            } shadow-lg backdrop-blur-sm border ${
              submitStatus.success 
                ? 'border-green-700/50' 
                : 'border-red-700/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: submitStatus.success ? [0, 10, -10, 0] : [0, -5, 5, 0]
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                {submitStatus.success ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </motion.div>
              <span>{submitStatus.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <label htmlFor="name" className="block text-sm font-medium mb-1 font-rajdhani text-electric-blue">
          <motion.span
            whileHover={{ color: "#4ade80" }}
            className="inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Name
          </motion.span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-dark/70 backdrop-blur-sm border border-navy-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira text-white transition-all duration-300 hover:border-electric-blue/70"
        />
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <label htmlFor="email" className="block text-sm font-medium mb-1 font-rajdhani text-electric-blue">
          <motion.span
            whileHover={{ color: "#4ade80" }}
            className="inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </motion.span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-dark/70 backdrop-blur-sm border border-navy-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira text-white transition-all duration-300 hover:border-electric-blue/70"
        />
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <label htmlFor="subject" className="block text-sm font-medium mb-1 font-rajdhani text-electric-blue">
          <motion.span
            whileHover={{ color: "#4ade80" }}
            className="inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Subject
          </motion.span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-dark/70 backdrop-blur-sm border border-navy-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira text-white transition-all duration-300 hover:border-electric-blue/70"
        />
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <label htmlFor="message" className="block text-sm font-medium mb-1 font-rajdhani text-electric-blue">
          <motion.span
            whileHover={{ color: "#4ade80" }}
            className="inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Message
          </motion.span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-navy-dark/70 backdrop-blur-sm border border-navy-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira text-white transition-all duration-300 hover:border-electric-blue/70"
        ></textarea>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-lg font-bold font-rajdhani transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
            isSubmitting 
              ? 'bg-gray-600/80 cursor-not-allowed' 
              : 'bg-cyber-green text-navy-dark hover:bg-electric-blue shadow-lg hover:shadow-electric-blue/30'
          }`}
          onClick={createRipple}
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
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{
                  x: [0, 2, 0],
                  y: [0, -2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </motion.svg>
              Send Message
            </>
          )}
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;