
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | BoardCalculate</title>
        <meta 
          name="description" 
          content="BoardCalculate privacy policy and how we protect your personal information." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
          
          <div className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                <strong>Personal Information:</strong> When you contact us or sign up for our newsletter, 
                we may collect personal information such as your name and email address.
              </p>
              <p className="text-gray-600">
                <strong>Usage Data:</strong> We automatically collect certain information when you visit 
                our website, including your IP address, browser type, device information, and pages visited.
                This information helps us improve our services and user experience.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Provide and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send periodic emails if you've opted into our newsletter</li>
                <li>Monitor and analyze usage patterns and trends</li>
              </ul>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
              <p className="text-gray-600">
                We use cookies to enhance your experience on our website. Cookies are small files stored 
                on your device that help us analyze website traffic and customize content. You can set 
                your browser to refuse cookies, but some portions of our site may not function properly 
                without them.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the Internet or electronic storage is 100% secure, and we 
                cannot guarantee absolute security.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600">
                We may use third-party services, such as analytics tools and email marketing platforms, 
                that collect, monitor, and analyze data. These third parties have their own privacy 
                policies addressing how they use such information.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-gray-600">
                Depending on your location, you may have certain rights regarding your personal data, 
                including the right to access, correct, or delete your information. To exercise these 
                rights, please contact us at privacy@boardcalculate.com.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page. You are advised to review this Privacy Policy 
                periodically for any changes.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@boardcalculate.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
