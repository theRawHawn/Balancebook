import { Handshake, TrendingUp, Clock } from "lucide-react";
import accountingImage from "@assets/file_000.png";
export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Balance Book</h2>
            <p className="text-lg text-gray-600 mb-6">
             Balance Book is a modern accounting firm dedicated to serving the unique needs of businesses in Tier 3 and Tier 4 cities across India. We understand that growing businesses need reliable, affordable, and professional accounting services.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team specializes in working with retailers, traders, service providers, and MSMEs who need comprehensive accounting support without the complexity and high costs of traditional accounting firms.
            </p>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 italic">"Making compliance stress-free, affordable, and professional for every business"</p>
            </div>
          </div>
          <div className="lg:pl-8">
            <img 
              src={accountingImage}
              alt="Professional accounting and financial analysis with charts, calculator, and money"  
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl text-primary-600 mb-4 flex justify-center">
              <Handshake className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Partner</h3>
            <p className="text-gray-600">Building long-term relationships with our clients based on trust and reliability.</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl text-primary-600 mb-4 flex justify-center">
              <TrendingUp className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Focused</h3>
            <p className="text-gray-600">Supporting businesses at every stage of their growth journey.</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl text-primary-600 mb-4 flex justify-center">
              <Clock className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Service</h3>
            <p className="text-gray-600">Meeting all deadlines and keeping your business compliant on time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
