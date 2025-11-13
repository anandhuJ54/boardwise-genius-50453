
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | BoardCalculate</title>
        <meta name="description" content="Terms and conditions for using BoardCalculate calculators and resources." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
          
          <div className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using BoardCalculate.com, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service. If you do not agree 
                with any part of these terms, you may not use our services.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use of Our Services</h2>
              <p className="text-gray-600 mb-4">
                BoardCalculate provides woodworking calculators and resources for informational purposes 
                only. While we strive for accuracy in our calculations and content, we cannot guarantee 
                complete precision for every project or application.
              </p>
              <p className="text-gray-600">
                You agree to use our services at your own risk and discretion. We recommend verifying 
                any critical measurements or calculations before making purchasing decisions or 
                proceeding with woodworking projects.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on BoardCalculate, including but not limited to calculators, text, graphics, 
                logos, and images, is the property of BoardCalculate and is protected by copyright and 
                other intellectual property laws. You may not reproduce, distribute, modify, or create 
                derivative works from any content without our explicit written permission.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-600">
                BoardCalculate and its operators shall not be liable for any direct, indirect, 
                incidental, consequential, or punitive damages arising from your use of our services, 
                any errors in calculations, or any decisions made based on information provided on our 
                website.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Modifications to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms of Service at any time. Changes will be 
                effective immediately upon posting to the website. Your continued use of BoardCalculate 
                after any such changes constitutes your acceptance of the new Terms of Service.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
              <p className="text-gray-600">
                If you have any questions or concerns about our Terms of Service, please contact us at 
                support@boardcalculate.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
