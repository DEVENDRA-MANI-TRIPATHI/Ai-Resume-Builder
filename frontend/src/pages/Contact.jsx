import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isDark } = useTheme();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className={`${isDark ? 'text-blue-400' : 'text-blue-600'} text-2xl`} />,
      title: "Email Us",
      details: "support@resumeai.com",
      description: "Send us an email anytime"
    },
    {
      icon: <FaPhone className={`${isDark ? 'text-green-400' : 'text-green-600'} text-2xl`} />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <FaMapMarkerAlt className={`${isDark ? 'text-purple-400' : 'text-purple-600'} text-2xl`} />,
      title: "Visit Us",
      details: "123 Tech Street, San Francisco, CA 94105",
      description: "Our headquarters"
    },
    {
      icon: <FaClock className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-2xl`} />,
      title: "Response Time",
      details: "< 24 hours",
      description: "We respond quickly"
    }
  ];

  const faqs = [
    {
      question: "How accurate is your AI analysis?",
      answer: "Our AI has been trained on thousands of successful resumes and job descriptions, achieving 95% accuracy in ATS compatibility predictions."
    },
    {
      question: "Do you support international resumes?",
      answer: "Yes, we support resumes from all countries and can analyze them against both local and international job requirements."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and never store your resume data permanently. Your privacy is our top priority."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans if you're not satisfied with our service."
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all duration-300`}>
      {/* Hero Section */}
      <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text animate-fade-in-up">
            Get in Touch
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fade-in-up stagger-1`}>
            Have questions about ResumeAI? Need help with your account? We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'} p-6 rounded-xl border text-center transition-all duration-300 glass-morphism animate-fade-in-up stagger-${index + 1} hover-lift`}>
                <div className="flex justify-center mb-4 animate-float">
                  {info.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{info.title}</h3>
                <p className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium mb-1`}>{info.details}</p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{info.description}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-8 border glass-morphism animate-fade-in-up stagger-2`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-scale-in">
                  <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4 animate-glow" />
                  <h3 className="text-2xl font-semibold mb-2 text-green-400">Message Sent!</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className={`mt-4 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors hover-lift`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Inquiry Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className={`w-full p-3 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full p-3 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical transition-all duration-300`}
                      placeholder="Tell us more about your question or feedback..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 animate-glow hover-lift"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div className="animate-fade-in-up stagger-3">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border glass-morphism hover-lift animate-fade-in-up stagger-${index + 1}`}>
                    <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{faq.question}</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className={`mt-8 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border glass-morphism animate-fade-in-up stagger-4`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} p-3 rounded-lg transition-all duration-300 hover-glow`}
                  >
                    <FaTwitter className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </a>
                  <a
                    href="#"
                    className={`${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} p-3 rounded-lg transition-all duration-300 hover-glow`}
                  >
                    <FaLinkedin className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </a>
                  <a
                    href="#"
                    className={`${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} p-3 rounded-lg transition-all duration-300 hover-glow`}
                  >
                    <FaGithub className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                  </a>
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mt-4`}>
                  Stay updated with the latest features and career tips
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className={`py-20 ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} neon-text animate-fade-in-up`}>Office Hours</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border glass-morphism animate-fade-in-up stagger-1 hover-lift`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Support Hours</h3>
              <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM EST</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border glass-morphism animate-fade-in-up stagger-2 hover-lift`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-green-400' : 'text-green-600'}`}>Response Times</h3>
              <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Email:</strong> Within 24 hours</p>
                <p><strong>Live Chat:</strong> Within 5 minutes</p>
                <p><strong>Phone:</strong> Immediate during office hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;