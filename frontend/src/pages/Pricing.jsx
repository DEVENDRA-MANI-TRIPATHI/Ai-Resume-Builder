import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Crown, Rocket, Users, ArrowRight, DollarSign, IndianRupee } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

/* ── Currency config ─────────────────────────────────────── */
const CURRENCIES = {
  USD: {
    symbol: '$',
    label: 'USD',
    flag: '🇺🇸',
    plans: {
      free:       { monthly: 0, annual: 0 },
      pro:        { monthly: 4, annual: 3 },
      enterprise: { monthly: 9, annual: 7 },
    }
  },
  INR: {
    symbol: '₹',
    label: 'INR',
    flag: '🇮🇳',
    plans: {
      free:       { monthly: 0,   annual: 0   },
      pro:        { monthly: 299, annual: 249 },
      enterprise: { monthly: 699, annual: 549 },
    }
  }
};

const Pricing = () => {
  const [isAnnual, setIsAnnual]     = useState(false);
  const [currency, setCurrency]     = useState('USD');
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const currencyRef = React.useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setShowCurrencyMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const curr = CURRENCIES[currency];

  const plans = [
    {
      key: 'free',
      name: 'Free',
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      description: 'Perfect for trying out our AI-powered resume analysis',
      features: ['3 resume analyses per month', 'Basic ATS compatibility check', 'General improvement suggestions', 'PDF upload support', 'Email support'],
      limitations: ['No cover letter generation', 'Limited detailed insights', 'No priority support'],
      buttonText: 'Get Started Free',
      buttonClass: 'btn-secondary',
      popular: false,
      border: 'border-white/10',
      glow: ''
    },
    {
      key: 'pro',
      name: 'Pro',
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      description: 'Ideal for active job seekers and career changers',
      features: ['Unlimited resume analyses', 'Advanced ATS optimization', 'Detailed improvement insights', 'Cover letter generation', 'Industry-specific recommendations', 'Multiple export formats', 'Priority email support', 'Job matching scores'],
      limitations: [],
      buttonText: 'Start Pro Trial',
      buttonClass: 'btn-primary text-white',
      popular: true,
      border: 'border-blue-500/40',
      glow: 'shadow-lg shadow-blue-500/20'
    },
    {
      key: 'enterprise',
      name: 'Enterprise',
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      description: 'For teams, recruiters, and career services',
      features: ['Everything in Pro', 'Bulk resume processing', 'Team collaboration tools', 'Custom branding', 'API access', 'Advanced analytics', 'Dedicated account manager', 'Custom integrations', 'White-label solution'],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonClass: 'border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white transition-all duration-300',
      popular: false,
      border: 'border-yellow-500/20',
      glow: ''
    }
  ];

  const faqs = [
    { question: 'Can I cancel my subscription anytime?', answer: "Yes, you can cancel at any time. You'll continue to have access to Pro features until the end of your billing period." },
    { question: 'Is there a free trial for Pro plans?', answer: 'Yes, we offer a 7-day free trial for all Pro plans. No credit card required to start your trial.' },
    { question: 'What file formats do you support?', answer: "Currently we support PDF files up to 5MB. We're working on adding support for Word documents and other formats." },
    { question: 'How accurate is the ATS compatibility check?', answer: 'Our ATS compatibility check is based on analysis of 100+ popular ATS systems and has a 95% accuracy rate.' },
    { question: 'Do you offer refunds?', answer: "Yes, we offer a 30-day money-back guarantee for all paid plans if you're not satisfied with our service." }
  ];

  const tableRows = [
    { feature: 'Resume Analyses',          free: '3/month', pro: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'ATS Compatibility',         free: 'Basic',   pro: 'Advanced',  enterprise: 'Advanced'  },
    { feature: 'Cover Letter Generation',   free: '✗',       pro: '✓',         enterprise: '✓'         },
    { feature: 'Industry Insights',         free: '✗',       pro: '✓',         enterprise: '✓'         },
    { feature: 'Export Formats',            free: 'PDF',     pro: 'Multiple',  enterprise: 'Multiple'  },
    { feature: 'Priority Support',          free: '✗',       pro: '✓',         enterprise: '✓'         },
    { feature: 'API Access',                free: '✗',       pro: '✗',         enterprise: '✓'         },
    { feature: 'Team Collaboration',        free: '✗',       pro: '✗',         enterprise: '✓'         },
    { feature: 'Custom Branding',           free: '✗',       pro: '✗',         enterprise: '✓'         }
  ];

  /* ── helpers ── */
  const getPrice = (planKey) => {
    const p = curr.plans[planKey];
    return isAnnual ? p.annual : p.monthly;
  };

  const getSaving = (planKey) => {
    const p = curr.plans[planKey];
    return (p.monthly - p.annual) * 12;
  };

  const formatPrice = (amount) => {
    if (amount === 0) return '0';
    if (currency === 'INR') {
      // Indian number formatting: 1,299 / 4,099
      return amount.toLocaleString('en-IN');
    }
    return amount.toString();
  };

  return (
    <motion.div
      className="min-h-screen theme-bg"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div className="absolute w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
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
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary max-w-3xl mx-auto mb-10" variants={itemVariants}>
              Choose the perfect plan for your career goals. All plans include our core AI-powered resume analysis.
            </motion.p>

            {/* Controls row: billing toggle + currency switcher */}
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6" variants={itemVariants}>

              {/* Billing Toggle */}
              <div className="flex items-center gap-3 glass px-5 py-3 rounded-full">
                <span className={`font-inter text-sm transition-colors ${!isAnnual ? 'theme-text font-semibold' : 'theme-text-muted'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${isAnnual ? 'bg-cyan-500' : 'bg-white/20'}`}
                >
                  <motion.span
                    className="inline-block h-4 w-4 rounded-full bg-white shadow"
                    animate={{ x: isAnnual ? 24 : 4 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
                <span className={`font-inter text-sm transition-colors ${isAnnual ? 'theme-text font-semibold' : 'theme-text-muted'}`}>
                  Annual{' '}
                  <AnimatePresence>
                    {isAnnual && (
                      <motion.span
                        className="text-green-400 font-semibold"
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      >
                        (Save 20%)
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {!isAnnual && <span className="text-green-400/60"> (Save 20%)</span>}
                </span>
              </div>

              {/* Currency Switcher */}
              <div className="relative" ref={currencyRef}>
                <button
                  onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                  className="flex items-center gap-2 glass px-5 py-3 rounded-full font-inter text-sm theme-text hover:border-cyan-400/40 border border-transparent transition-all duration-300"
                >
                  <span className="text-base">{curr.flag}</span>
                  <span className="font-semibold">{curr.label}</span>
                  <motion.svg
                    className="w-4 h-4 theme-text-muted"
                    animate={{ rotate: showCurrencyMenu ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {showCurrencyMenu && (
                    <motion.div
                      className="absolute bottom-full mb-2 left-0 glass-dark rounded-xl overflow-hidden z-50 min-w-[140px] border border-white/10 shadow-xl"
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                    >
                      {Object.entries(CURRENCIES).map(([code, config]) => (
                        <button
                          key={code}
                          onClick={() => { setCurrency(code); setShowCurrencyMenu(false); }}
                          className={`w-full flex items-center gap-3 px-4 py-3 font-inter text-sm transition-all duration-200 ${
                            currency === code
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : 'theme-text-secondary hover:theme-bg-secondary hover:theme-text'
                          }`}
                        >
                          <span className="text-base">{config.flag}</span>
                          <span className="font-semibold">{code}</span>
                          <span className="theme-text-muted text-xs ml-auto">{config.symbol}</span>
                          {currency === code && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          >
            {plans.map((plan, index) => {
              const price  = getPrice(plan.key);
              const saving = getSaving(plan.key);
              return (
                <motion.div
                  key={index}
                  className={`relative glass rounded-2xl p-6 border ${plan.border} ${plan.glow} hover-lift flex flex-col`}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: plan.popular ? '0 20px 40px rgba(0,102,255,0.2)' : '0 12px 30px rgba(0,0,0,0.2)' }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="btn-primary text-white px-3 py-1 rounded-full text-xs font-semibold font-inter whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <motion.div className="flex justify-center mb-3" whileHover={{ scale: 1.15 }}>
                      {plan.icon}
                    </motion.div>
                    <h3 className="font-orbitron font-bold text-xl theme-text mb-1">{plan.name}</h3>
                    <p className="font-inter text-xs theme-text-secondary mb-4 leading-relaxed">{plan.description}</p>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${currency}-${isAnnual}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {price === 0 ? (
                          <span className="font-orbitron font-bold text-3xl theme-text">Free</span>
                        ) : (
                          <div className="flex items-baseline justify-center gap-0.5 mb-1">
                            <span className="font-inter text-base theme-text-muted">{curr.symbol}</span>
                            <span className="font-orbitron font-bold text-3xl theme-text">{formatPrice(price)}</span>
                            <span className="font-inter text-xs theme-text-muted">/mo</span>
                          </div>
                        )}
                        {isAnnual && price > 0 && (
                          <>
                            <motion.div
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full mt-1"
                              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                            >
                              <span className="font-inter text-xs text-green-400 font-semibold">Save {curr.symbol}{formatPrice(saving)}/yr</span>
                            </motion.div>
                            <p className="font-inter text-xs theme-text-muted mt-1">{curr.symbol}{formatPrice(price * 12)}/year</p>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2 mb-5 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        <span className="font-inter text-xs theme-text-secondary">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <X className="w-3.5 h-3.5 text-red-400/50 flex-shrink-0" />
                        <span className="font-inter text-xs theme-text-muted">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/analyze'}
                    className={`block w-full text-center px-4 py-2.5 rounded-xl font-inter text-sm font-semibold transition-all duration-300 ${plan.buttonClass}`}
                  >
                    {plan.buttonText}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Currency note */}
          <motion.p
            className="text-center font-inter text-xs theme-text-muted mt-6"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Prices shown in {curr.label} ({curr.symbol}). Taxes may apply based on your location.
          </motion.p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 theme-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="font-orbitron font-bold text-responsive-4xl accent-line-center theme-text mb-4" variants={itemVariants}>
              Compare All Features
            </motion.h2>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary" variants={itemVariants}>
              See what's included in each plan
            </motion.p>
          </motion.div>
          <motion.div
            className="glass rounded-2xl overflow-hidden theme-border border"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="theme-bg-secondary border-b theme-border">
                  <tr>
                    <th className="text-left p-4 font-inter font-semibold theme-text">Feature</th>
                    <th className="text-center p-4 font-inter font-semibold theme-text-secondary">Free</th>
                    <th className="text-center p-4 font-inter font-semibold text-cyan-400">Pro</th>
                    <th className="text-center p-4 font-inter font-semibold text-yellow-400">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, index) => (
                    <tr key={index} className={`border-b theme-border last:border-0 ${index % 2 === 0 ? '' : 'theme-bg-secondary'}`}>
                      <td className="p-4 font-inter text-sm theme-text-secondary">{row.feature}</td>
                      <td className="p-4 text-center font-inter text-sm theme-text-muted">{row.free}</td>
                      <td className="p-4 text-center font-inter text-sm text-cyan-400 font-medium">{row.pro}</td>
                      <td className="p-4 text-center font-inter text-sm text-yellow-400 font-medium">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="font-orbitron font-bold text-responsive-4xl accent-line-center theme-text mb-4" variants={itemVariants}>
              Frequently Asked Questions
            </motion.h2>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary" variants={itemVariants}>
              Got questions? We've got answers.
            </motion.p>
          </motion.div>
          <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            {faqs.map((faq, index) => (
              <motion.div key={index} className="glass p-6 rounded-xl theme-border border hover-lift"
                variants={itemVariants} whileHover={{ x: 4 }}
              >
                <h3 className="font-inter font-semibold text-responsive-base text-cyan-400 mb-3">{faq.question}</h3>
                <p className="font-inter text-responsive-sm theme-text-secondary leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="font-orbitron font-bold text-responsive-4xl text-white mb-6" variants={itemVariants}>
              Ready to Boost Your Career?
            </motion.h2>
            <motion.p className="font-inter text-responsive-xl text-gray-300 mb-8" variants={itemVariants}>
              Join thousands of professionals who have improved their job prospects with ResumeAI
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/analyze" className="btn-primary text-white px-8 py-4 rounded-lg font-inter font-semibold flex items-center gap-2 hover-lift">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-secondary px-8 py-4 rounded-lg font-inter font-semibold hover-lift">
                  Contact Sales
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
