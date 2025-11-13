
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from "@/components/ui/use-toast";
import { Send, Loader2 } from 'lucide-react';

interface LeadFormProps {
  location?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ location }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email) {
      toast({
        title: "Missing information",
        description: "Please enter your name and email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would implement the actual API call to Supabase
      // For now, we'll just simulate a successful submission after a delay
      setTimeout(() => {
        // Simulate successful submission
        toast({
          title: "Contact request submitted",
          description: "Thank you for your message. We'll get back to you soon!",
        });
        
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsSubmitting(false);
      }, 1500);
      
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-glass overflow-hidden">
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {location ? `Get ${location} Lumber Quotes` : "Get Lumber Quotes"}
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Need help with your lumber project? Fill out the form below and we'll connect you with top suppliers in your area.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="calculator-input"
              placeholder="John Smith"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="calculator-input"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="calculator-input"
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="calculator-input min-h-[100px]"
              placeholder="Tell us about your project and lumber needs..."
              rows={4}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-medium rounded-md shadow-sm transition-all duration-300 transform",
              isSubmitting 
                ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                : "bg-primary text-white hover:translate-y-[-2px] hover:shadow-md"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Get Quotes
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
