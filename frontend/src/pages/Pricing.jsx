import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimes, FaCrown, FaRocket, FaUsers } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { isDark } = useTheme();

  const plans = [
    {
      name: "Free",
      icon: <FaUsers className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-3xl`} />,
      price: { monthly: 0, annual: 0 },
      description: "Perfect for trying out our AI-powered resume analysis",
      features: [
        "3 resume analyses per month",
        "Basic ATS compatibility check",
        "General improvement suggestions",
        "PDF upload support",
        "Email support"
      ],
      limitations: [
        "No cover letter generation",
        "Limited detailed insights",
        "No priority support"
      ],
      buttonText: "Get Started Free",
      buttonClass: `border ${isDark ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white' : 'border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900'}`,
      popular: false
    },
    {
      name: "Pro",
      icon: <FaRocket className={`${isDark ? 'text-blue-400' : 'text-blue-600'} text-3xl`} />,
      price: { monthly: 19, annual: 15 },
      description: "Ideal for active job seekers and career changers",
      features: [
        "Unlimited resume analyses",
        "Advanced ATS optimization",
        "Detailed improvement insights",
        "Cover letter generation",
        "Industry-specific recommendations",
        "Multiple export formats",
        "Priority email support",
        "Job matching scores"
      ],
      limitations: [],
      buttonText: "Start Pro Trial",
      buttonClass: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white",
      popular: true
    },
    {
      name: "Enterprise",
      icon: <FaCrown className={`${isDark ? 'text-yellow-400' : 'text-yellow-500'} text-3xl`} />,
      price: { monthly: 49, annual: 39 },
      description: "For teams, recruiters, and career services",
      features: [
        "Everything in Pro",
        "Bulk resume processing",
        "Team collaboration tools",
        "Custom branding",
        "API access",
        "Advanced analytics",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solution"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonClass: "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period."
    },
    {
      question: "Is there a free trial for Pro plans?",
      answer: "Yes, we offer a 7-day free trial for all Pro plans. No credit card required to start your trial."
    },
    {
      question: "What file formats do you support?",
      answer: "Currently, we support PDF files up to 5MB. We're working on adding support for Word documents and other formats."
    },
    {
      question: "How accurate is the ATS compatibility check?",
      answer: "Our ATS compatibility check is based on analysis of 100+ popular ATS systems and has a 95% accuracy rate."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans if you're not satisfied with our service."
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all duration-300`}>
      {/* Hero Section */}
      <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text animate-fade-in-up">
            Simple, Transparent Pricing
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8 animate-fade-in-up stagger-1`}>
            Choose the perfect plan for your career goals. All plans include our core AI-powered resume analysis.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12 animate-fade-in-up stagger-2">
            <span className={`mr-3 ${!isAnnual ? (isDark ? 'text-white' : 'text-gray-900') : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-500' : (isDark ? 'bg-gray-600' : 'bg-gray-300')
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? (isDark ? 'text-white' : 'text-gray-900') : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>
              Annual <span className="text-green-400 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-8 border transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-${index + 1} ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20 animate-glow' 
                    : 'hover:border-gray-600'
                } glass-morphism hover-lift`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4 animate-float">
                    {plan.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>{plan.name}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{plan.description}</p>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        /{isAnnual ? 'month' : 'month'}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.price.monthly > 0 && (
                    <div className="text-sm text-green-400">
                      Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-400 flex-shrink-0" />
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaTimes className="text-red-400 flex-shrink-0" />
                      <span className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/analyze'}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover-lift ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className={`py-20 ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Compare All Features</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>See what's included in each plan</p>
          </div>
          
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl overflow-hidden border glass-morphism animate-fade-in-up stagger-1`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <tr>
                    <th className={`text-left p-4 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Feature</th>
                    <th className={`text-center p-4 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Free</th>
                    <th className={`text-center p-4 font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Pro</th>
                    <th className={`text-center p-4 font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Resume Analyses", free: "3/month", pro: "Unlimited", enterprise: "Unlimited" },
                    { feature: "ATS Compatibility", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
                    { feature: "Cover Letter Generation", free: "✗", pro: "✓", enterprise: "✓" },
                    { feature: "Industry Insights", free: "✗", pro: "✓", enterprise: "✓" },
                    { feature: "Export Formats", free: "PDF", pro: "Multiple", enterprise: "Multiple" },
                    { feature: "Priority Support", free: "✗", pro: "✓", enterprise: "✓" },
                    { feature: "API Access", free: "✗", pro: "✗", enterprise: "✓" },
                    { feature: "Team Collaboration", free: "✗", pro: "✗", enterprise: "✓" },
                    { feature: "Custom Branding", free: "✗", pro: "✗", enterprise: "✓" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? (isDark ? 'bg-gray-800' : 'bg-white') : (isDark ? 'bg-gray-750' : 'bg-gray-50')}>
                      <td className={`p-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{row.feature}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{row.free}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{row.pro}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Frequently Asked Questions</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Got questions? We've got answers.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border glass-morphism animate-fade-in-up stagger-${(index % 4) + 1} hover-lift`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{faq.question}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 holographic">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-white neon-text animate-hologram">Ready to Boost Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have improved their job prospects with ResumeAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/analyze"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 animate-glow hover-lift"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;