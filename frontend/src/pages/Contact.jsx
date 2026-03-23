import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import useTranslation from '../i18n/useTranslation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const contactInfo = [
  { icon: <Mail className="w-6 h-6 text-cyan-400" />,   title: 'Email Us',       detail: 'support@resumeai.com',              sub: 'Send us an email anytime' },
  { icon: <Phone className="w-6 h-6 text-green-400" />, title: 'Call Us',        detail: '+1 (555) 123-4567',                 sub: 'Mon–Fri 9AM–6PM EST' },
  { icon: <MapPin className="w-6 h-6 text-purple-400" />,title: 'Visit Us',      detail: '123 Tech Street, San Francisco',    sub: 'Our headquarters' },
  { icon: <Clock className="w-6 h-6 text-yellow-400" />, title: 'Response Time', detail: '< 24 hours',                        sub: 'We respond quickly' },
];

const faqs = [
  { question: 'How accurate is your AI analysis?',    answer: 'Our AI achieves 95% accuracy in ATS compatibility predictions, trained on thousands of successful resumes.' },
  { question: 'Do you support international resumes?', answer: 'Yes, we support resumes from all countries against both local and international job requirements.' },
  { question: 'Is my data secure?',                   answer: 'We use enterprise-grade encryption and never store your resume data permanently.' },
  { question: 'Can I get a refund?',                  answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans.' },
];

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', type: 'general' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
    }, 2000);
  };

  return (
    <motion.div
      className="min-h-screen theme-bg"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div className="absolute w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }} transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '5%', left: '0%' }} />
        <motion.div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }} transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '5%', right: '0%' }} />
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1 className="font-orbitron font-bold text-responsive-5xl text-gradient mb-6" variants={itemVariants}>
              Get in Touch
            </motion.h1>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary max-w-2xl mx-auto" variants={itemVariants}>
              Have questions about ResumeAI? We're here to help you succeed in your career journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          >
            {contactInfo.map((info, i) => (
              <motion.div key={i} className="glass rounded-2xl p-6 text-center border theme-border hover-lift" variants={itemVariants}>
                <div className="flex justify-center mb-3">{info.icon}</div>
                <h3 className="font-orbitron font-semibold text-sm theme-text mb-1">{info.title}</h3>
                <p className="font-inter text-sm theme-text font-medium mb-0.5">{info.detail}</p>
                <p className="font-inter text-xs theme-text-muted">{info.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <motion.div
              className="glass rounded-2xl p-8 border theme-border"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <h2 className="font-orbitron font-bold text-2xl theme-text mb-6">Send a Message</h2>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center gap-4 py-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-400" />
                    <h3 className="font-orbitron font-bold text-xl text-green-400">Message Sent!</h3>
                    <p className="font-inter text-sm theme-text-secondary">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="font-inter text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-inter text-xs font-medium theme-text-secondary mb-1.5 block">{t('contact.nameLabel')}</label>
                        <input
                          type="text" name="name" value={formData.name} onChange={handleChange} required
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 theme-bg-secondary theme-border border rounded-xl font-inter text-sm theme-text focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="font-inter text-xs font-medium theme-text-secondary mb-1.5 block">{t('contact.emailLabel')}</label>
                        <input
                          type="email" name="email" value={formData.email} onChange={handleChange} required
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 theme-bg-secondary theme-border border rounded-xl font-inter text-sm theme-text focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-inter text-xs font-medium theme-text-secondary mb-1.5 block">{t('contact.typeLabel')}</label>
                      <select
                        name="type" value={formData.type} onChange={handleChange}
                        className="w-full px-4 py-2.5 theme-bg-secondary theme-border border rounded-xl font-inter text-sm theme-text focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-inter text-xs font-medium theme-text-secondary mb-1.5 block">{t('contact.subjectLabel')}</label>
                      <input
                        type="text" name="subject" value={formData.subject} onChange={handleChange} required
                        placeholder="Brief description of your inquiry"
                        className="w-full px-4 py-2.5 theme-bg-secondary theme-border border rounded-xl font-inter text-sm theme-text focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-inter text-xs font-medium theme-text-secondary mb-1.5 block">{t('contact.messageLabel')}</label>
                      <textarea
                        name="message" value={formData.message} onChange={handleChange} required rows={5}
                        placeholder="Tell us more about your question..."
                        className="w-full px-4 py-2.5 theme-bg-secondary theme-border border rounded-xl font-inter text-sm theme-text focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none transition-all"
                      />
                    </div>

                    <motion.button
                      type="submit" disabled={isSubmitting}
                      className="w-full btn-primary text-white px-6 py-3 rounded-xl font-inter font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting
                        ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                        : <><Send className="w-4 h-4" /> Send Message</>
                      }
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ + Social */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <h2 className="font-orbitron font-bold text-2xl theme-text">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i} className="glass rounded-2xl p-5 border theme-border hover-lift"
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }} whileHover={{ x: 4 }}
                >
                  <h3 className="font-inter font-semibold text-sm text-cyan-400 mb-2">{faq.question}</h3>
                  <p className="font-inter text-sm theme-text-secondary leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}

              {/* Social */}
              <div className="glass rounded-2xl p-5 border theme-border">
                <h3 className="font-orbitron font-semibold text-sm theme-text mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
                    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                    { icon: <Github className="w-4 h-4" />,   label: 'GitHub' },
                  ].map(({ icon, label }) => (
                    <motion.a
                      key={label} href="#"
                      className="flex items-center gap-2 px-4 py-2 glass rounded-xl font-inter text-xs theme-text-secondary hover:text-cyan-400 border theme-border transition-colors"
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >
                      {icon} {label}
                    </motion.a>
                  ))}
                </div>
                <p className="font-inter text-xs theme-text-muted mt-3">Stay updated with the latest features and career tips</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 theme-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-orbitron font-bold text-2xl theme-text text-center mb-8 accent-line-center"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Office Hours
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          >
            <motion.div className="glass rounded-2xl p-6 border theme-border" variants={itemVariants}>
              <h3 className="font-orbitron font-semibold text-sm text-cyan-400 mb-4">Support Hours</h3>
              <div className="space-y-2 font-inter text-sm theme-text-secondary">
                <p><span className="theme-text font-medium">Mon – Fri:</span> 9:00 AM – 6:00 PM EST</p>
                <p><span className="theme-text font-medium">Saturday:</span> 10:00 AM – 4:00 PM EST</p>
                <p><span className="theme-text font-medium">Sunday:</span> Closed</p>
              </div>
            </motion.div>
            <motion.div className="glass rounded-2xl p-6 border theme-border" variants={itemVariants}>
              <h3 className="font-orbitron font-semibold text-sm text-green-400 mb-4">Response Times</h3>
              <div className="space-y-2 font-inter text-sm theme-text-secondary">
                <p><span className="theme-text font-medium">Email:</span> Within 24 hours</p>
                <p><span className="theme-text font-medium">Live Chat:</span> Within 5 minutes</p>
                <p><span className="theme-text font-medium">Phone:</span> Immediate during office hours</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
