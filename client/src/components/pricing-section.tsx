import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Basic Plan */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">₹5,000 - ₹10,000</div>
                <p className="text-gray-600">per month</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "GST Returns",
                  "Basic Bookkeeping",
                  "Sales & Purchase Entries",
                  "Monthly Financial Reports"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="w-full"
                size="lg"
              >
                Choose Basic
              </Button>
            </CardContent>
          </Card>
          
          {/* Standard Plan (Recommended) */}
          <Card className="border-2 border-primary-600 shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">Recommended</span>
            </div>
            
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">₹10,000 - ₹15,000+</div>
                <p className="text-gray-600">per month</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "GST Returns & Compliance",
                  "TDS Returns & Filing",
                  "Full Accounting & Bookkeeping",
                  "Bank Reconciliation",
                  "Financial Reports (P&L, Balance Sheet)"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary-600 hover:bg-primary-700"
                size="lg"
              >
                Choose Standard
              </Button>
            </CardContent>
          </Card>
          
          {/* Premium Plan */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">₹15,000 - ₹20,000+</div>
                <p className="text-gray-600">per month</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "GST & TDS Complete Management",
                  "Payroll Processing",
                  "Complete Accounting Services",
                  "Advanced Financial Reports",
                  "Priority Support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="w-full"
                size="lg"
              >
                Choose Premium
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <h2><p className="text-black-600 mb-6"><div className="text-2xl font-bold text-primary-400 mb-3">Not an Ideal Pricing? </div>Need a custom solution? Let's discuss your specific requirements.</p></h2>
          <Button 
            onClick={scrollToContact}
            className="bg-primary-600 text-white hover:bg-primary-700"
            size="lg"
          >
            Contact for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
