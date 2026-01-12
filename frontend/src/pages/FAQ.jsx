import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How does ResumeAI work?",
          answer: "ResumeAI uses advanced AI algorithms to analyze your resume against job descriptions. Simply upload your PDF resume, paste the job description, and our AI will provide detailed insights on how well your resume matches the role, along with specific recommendations for improvement."
        },
        {
          question: "What file formats do you support?",
          answer: "Currently, we support PDF files up to 5MB in size. We're working on adding support for Word documents (.docx) and other formats in future updates."
        },
        {
          question: "Is ResumeAI free to use?",
          answer: "Yes! We offer a free plan that includes 3 resume analyses per month. For unlimited analyses and advanced features like cover letter generation, you can upgrade to our Pro plan."
        },
        {
          question: "How long does the analysis take?",
          answer: "Our AI analysis typically takes less than 30 seconds to complete. You'll receive detailed insights almost instantly after submitting your resume and job description."
        }
      ]
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What is ATS compatibility?",
          answer: "ATS (Applicant Tracking System) compatibility refers to how well your resume can be read and parsed by automated systems that many companies use to screen resumes. Our AI checks formatting, keywords, and structure to ensure your resume passes through these systems successfully."
        },
        {
          question: "How accurate is the job matching score?",
          answer: "Our job matching algorithm has been trained on thousands of successful job applications and achieves 95% accuracy in predicting ATS compatibility. The matching score considers skills, experience, keywords, and other relevant factors."
        },
        {
          question: "Can you generate cover letters for any job?",
          answer: "Yes! Our AI can generate personalized cover letters for any job description you provide. The cover letter will be tailored to highlight your relevant experience and skills that match the specific role requirements."
        },
        {
          question: "Do you provide industry-specific advice?",
          answer: "Absolutely! Our AI has been trained on resumes and job descriptions across all major industries including tech, healthcare, finance, marketing, education, and more. The recommendations are tailored to your specific industry and role."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "Is my resume data secure?",
          answer: "Yes, your privacy and security are our top priorities. We use enterprise-grade encryption to protect your data, and we never store your resume content permanently on our servers. Your data is processed and then securely deleted."
        },
        {
          question: "Do you share my information with third parties?",
          answer: "No, we never share, sell, or distribute your personal information or resume content to third parties. Your data is used solely for providing our AI analysis services to you."
        },
        {
          question: "Can I delete my account and data?",
          answer: "Yes, you can delete your account and all associated data at any time. Simply contact our support team, and we'll permanently remove all your information from our systems within 24 hours."
        },
        {
          question: "Are you GDPR compliant?",
          answer: "Yes, we are fully GDPR compliant. We follow strict data protection regulations and give you full control over your personal data, including the right to access, modify, or delete your information."
        }
      ]
    },
    {
      category: "Billing & Plans",
      questions: [
        {
          question: "What's included in the free plan?",
          answer: "The free plan includes 3 resume analyses per month, basic ATS compatibility checks, general improvement suggestions, and email support. It's perfect for trying out our service."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your current billing period, and then your account will automatically switch to the free plan."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service for any reason, contact us within 30 days of your purchase for a full refund."
        },
        {
          question: "Is there a discount for annual plans?",
          answer: "Yes! Annual plans save you 20% compared to monthly billing. For example, our Pro plan costs $19/month when billed monthly, but only $15/month when billed annually."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if my PDF won't upload?",
          answer: "Make sure your PDF is under 5MB and is a standard PDF format. If you're still having issues, try converting your resume to PDF using a different tool, or contact our support team for assistance."
        },
        {
          question: "Why is my analysis taking longer than usual?",
          answer: "Occasionally, high demand can cause slight delays. If your analysis is taking more than 2 minutes, please refresh the page and try again. If the problem persists, contact our support team."
        },
        {
          question: "Can I use ResumeAI on mobile devices?",
          answer: "Yes! Our platform is fully responsive and works great on mobile devices and tablets. You can upload resumes and view analyses from any device with an internet connection."
        },
        {
          question: "Do you have an API for developers?",
          answer: "Yes, we offer API access for Enterprise customers. This allows you to integrate our resume analysis capabilities into your own applications or workflows. Contact our sales team for more information."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemKey = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(itemKey)) {
      newOpenItems.delete(itemKey);
    } else {
      newOpenItems.add(itemKey);
    }
    
    setOpenItems(newOpenItems);
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Find answers to common questions about ResumeAI and how to get the most out of our platform.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const itemKey = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openItems.has(itemKey);
                      
                      return (
                        <div
                          key={questionIndex}
                          className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
                          >
                            <span className="font-semibold text-lg">{faq.question}</span>
                            {isOpen ? (
                              <FaChevronUp className="text-blue-400 flex-shrink-0 ml-4" />
                            ) : (
                              <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <div className="border-t border-gray-700 pt-4">
                                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@resumeai.com"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;