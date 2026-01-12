import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaGavel } from 'react-icons/fa';

const Privacy = () => {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      title: "Information We Collect",
      icon: <FaUserShield className="text-blue-400" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you use ResumeAI, we may collect personal information such as your name, email address, and contact details when you create an account or contact us for support."
        },
        {
          subtitle: "Resume Content",
          text: "We temporarily process the content of your resume and job descriptions to provide our AI analysis services. This content is not stored permanently and is deleted after processing."
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about how you use our service, including pages visited, features used, and time spent on our platform to improve our services."
        },
        {
          subtitle: "Technical Information",
          text: "We automatically collect certain technical information such as your IP address, browser type, device information, and operating system for security and optimization purposes."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <FaLock className="text-green-400" />,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our AI-powered resume analysis services, including generating insights and recommendations."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you service-related notifications, respond to your inquiries, and provide customer support."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how our service is used and to make improvements to our platform and AI algorithms."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with applicable laws, regulations, and legal processes."
        }
      ]
    },
    {
      title: "Data Security",
      icon: <FaShieldAlt className="text-purple-400" />,
      content: [
        {
          subtitle: "Encryption",
          text: "All data transmitted to and from our servers is encrypted using industry-standard SSL/TLS protocols. Your resume content is encrypted both in transit and during processing."
        },
        {
          subtitle: "Access Controls",
          text: "We implement strict access controls to ensure that only authorized personnel can access your data, and only when necessary for service provision or support."
        },
        {
          subtitle: "Data Retention",
          text: "Resume content and job descriptions are automatically deleted from our servers within 24 hours of processing. Account information is retained only as long as your account is active."
        },
        {
          subtitle: "Security Monitoring",
          text: "We continuously monitor our systems for security threats and vulnerabilities, and we regularly update our security measures to protect your data."
        }
      ]
    },
    {
      title: "Your Rights",
      icon: <FaGavel className="text-yellow-400" />,
      content: [
        {
          subtitle: "Access and Portability",
          text: "You have the right to access your personal data and request a copy of the information we hold about you in a portable format."
        },
        {
          subtitle: "Correction and Updates",
          text: "You can update or correct your personal information at any time through your account settings or by contacting our support team."
        },
        {
          subtitle: "Deletion",
          text: "You have the right to request deletion of your personal data. You can delete your account at any time, and we will permanently remove your information within 30 days."
        },
        {
          subtitle: "Opt-out",
          text: "You can opt out of non-essential communications at any time by updating your preferences or using the unsubscribe link in our emails."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-12">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ResumeAI ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered resume analysis service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our service, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our service.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">{item.subtitle}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Third-Party Services</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may use third-party services to help us operate our business and provide our services to you. 
                These services may include:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Cloud hosting providers</li>
                <li>• Analytics services</li>
                <li>• Payment processors</li>
                <li>• Customer support tools</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                These third parties are bound by confidentiality agreements and are not permitted to use your information for any other purpose.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">International Transfers</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers comply with applicable data protection laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you are located in the European Economic Area (EEA), we ensure that adequate safeguards 
                are in place to protect your personal data when it is transferred outside the EEA.
              </p>
            </div>
          </div>

          {/* Cookies Section */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-12">
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              Cookies are small data files stored on your device that help us:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Remember your preferences and settings</li>
              <li>• Analyze website traffic and usage patterns</li>
              <li>• Provide personalized content and recommendations</li>
              <li>• Ensure the security of our service</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              You can control cookies through your browser settings. However, disabling cookies may affect 
              the functionality of our service.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> privacy@resumeai.com</p>
              <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Updates Notice */}
          <div className="bg-yellow-900/20 border border-yellow-700 rounded-xl p-6 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">Policy Updates</h3>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review 
              this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;