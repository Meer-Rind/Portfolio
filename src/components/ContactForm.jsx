import { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus && (
        <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 font-rajdhani">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-navy-dark border border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 font-rajdhani">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-navy-dark border border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1 font-rajdhani">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-navy-dark border border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 font-rajdhani">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-navy-dark border border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green font-fira"
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-md font-bold font-rajdhani transition-colors duration-300 ${
            isSubmitting 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-cyber-green text-navy-dark hover:bg-electric-blue'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;