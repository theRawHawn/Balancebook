import { IndianRupee, Languages, Shield, Store } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose BALANCE BOOK?</h2>
          <p className="text-xl text-gray-600">Professional accounting services tailored for growing businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-blue-100 transition-colors">
            <div className="text-4xl text-primary-600 mb-4 flex justify-center">
              <IndianRupee className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">Clear, upfront pricing with no hidden costs. Know exactly what you pay for.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-blue-100 transition-colors">
            <div className="text-4xl text-primary-600 mb-4 flex justify-center">
              <Languages className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Language Support</h3>
            <p className="text-gray-600">Communicate in your preferred language. We understand local business needs.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-blue-100 transition-colors">
            <div className="text-4xl text-primary-600 mb-4 flex justify-center">
              <Shield className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Compliance</h3>
            <p className="text-gray-600">Complete compliance management from registration to filing and beyond.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-blue-100 transition-colors">
            <div className="text-4xl text-primary-600 mb-4 flex justify-center">
              <Store className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Micro Business Friendly</h3>
            <p className="text-gray-600">Services available even for the smallest businesses. Grow with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
