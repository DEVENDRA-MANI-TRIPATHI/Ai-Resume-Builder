import React from 'react';
import { FaGavel, FaUserCheck, FaExclamationTriangle, FaHandshake } from 'react-icons/fa';

const Terms = () => {
  const lastUpdated = "December 15, 2024";

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Please read these terms carefully before using our service.
          </p>
          <p className="text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FaGavel className="text-blue-400 text-2xl" />
              <h2 className="text-2xl font-bold">Agreement to Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of ResumeAI's website and services (the "Service") 
              operated by ResumeAI ("us", "we", or "our").
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any 
              part of these terms, then you may not access the Service.
            </p>
          </div>

          {/* Service Description */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaUserCheck className="text-green-400 text-2xl" />
              <h2 className="text-2xl font-bold">Service Description</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              ResumeAI provides AI-powered resume analysis and optimization services. Our service includes:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Resume analysis against job descriptions</li>
              <li>• ATS compatibility scoring</li>
              <li>• Personalized improvement recommendations</li>
              <li>• Cover letter generation</li>
              <li>• Industry-specific insights</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of our Service at any time 
              with or without notice.
            </p>
          </div>

          {/* User Accounts */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-4">User Accounts and Responsibilities</h2>
            
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Account Creation</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              To access certain features of our Service, you may be required to create an account. 
              You must provide accurate, complete, and current information during registration.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-400">Account Security</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You are responsible for safeguarding your account credentials and for all activities 
              that occur under your account. You must notify us immediately of any unauthorized use.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-400">Acceptable Use</h3>
            <p className="text-gray-300 leading-relaxed mb-2">You agree not to:</p>
            <ul className="text-gray-300 space-y-1 mb-4">
              <li>• Use the Service for any unlawful purpose</li>
              <li>• Upload malicious files or content</li>
              <li>• Attempt to reverse engineer our AI algorithms</li>
              <li>• Share your account credentials with others</li>
              <li>• Violate any applicable laws or regulations</li>
            </ul>
          </div>

          {/* Subscription and Billing */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-4">Subscription and Billing</h2>
            
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Free and Paid Plans</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We offer both free and paid subscription plans. Free plans have usage limitations, 
              while paid plans provide unlimited access to our features.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-400">Billing</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Paid subscriptions are billed in advance on a monthly or annual basis. All fees are 
              non-refundable except as required by law or as specifically stated in our refund policy.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-400">Cancellation</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You may cancel your subscription at any time. Cancellation will take effect at the 
              end of your current billing period.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Our Content</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by ResumeAI 
              and are protected by international copyright, trademark, patent, trade secret, and other 
              intellectual property laws.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-400">Your Content</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You retain ownership of any content you upload to our Service, including your resume. 
              By uploading content, you grant us a limited license to process and analyze it for 
              the purpose of providing our services.
            </p>
          </div>

          {/* Privacy and Data */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
              protect your information when you use our Service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our Service, you agree to the collection and use of information in accordance 
              with our Privacy Policy.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-yellow-400 text-2xl" />
              <h2 className="text-2xl font-bold">Disclaimers and Limitations</h2>
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Service Availability</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We strive to provide reliable service, but we cannot guarantee 100% uptime. 
              The Service is provided "as is" without warranties of any kind.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-400">AI Accuracy</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              While our AI provides valuable insights, we cannot guarantee the accuracy or 
              completeness of our analysis. Results should be used as guidance, not absolute truth.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-400">Job Placement</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not guarantee that using our Service will result in job offers or employment. 
              Success depends on many factors beyond resume optimization.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In no event shall ResumeAI, its directors, employees, partners, agents, suppliers, 
              or affiliates be liable for any indirect, incidental, special, consequential, or 
              punitive damages arising from your use of the Service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our total liability to you for all claims arising from the use of the Service 
              shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </div>

          {/* Termination */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may terminate or suspend your account and access to the Service immediately, 
              without prior notice, for any reason, including breach of these Terms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Upon termination, your right to use the Service will cease immediately, and 
              we may delete your account and data.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-purple-400 text-2xl" />
              <h2 className="text-2xl font-bold">Governing Law and Disputes</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of 
              the State of California, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Any disputes arising from these Terms or your use of the Service shall be 
              resolved through binding arbitration in San Francisco, California.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-yellow-900/20 border border-yellow-700 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">Changes to Terms</h3>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of 
              any material changes by posting the new Terms on this page and updating the 
              "Last updated" date. Your continued use of the Service after changes constitutes 
              acceptance of the new Terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> legal@resumeai.com</p>
              <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;