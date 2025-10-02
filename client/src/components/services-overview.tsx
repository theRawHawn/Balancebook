import { Calculator, FileText, Receipt, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesOverview() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive accounting solutions for your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl text-primary-600 mb-4 flex justify-center">
                <Calculator className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Accounting & Bookkeeping</h3>
              <p className="text-gray-600 mb-4">Complete accounting services from data entry to financial reports.</p>
              <button 
                onClick={scrollToServices}
                className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl text-primary-600 mb-4 flex justify-center">
                <FileText className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GST Services</h3>
              <p className="text-gray-600 mb-4">GST registration, filing, and compliance management made simple.</p>
              <button 
                onClick={scrollToServices}
                className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl text-primary-600 mb-4 flex justify-center">
                <Receipt className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">TDS Services</h3>
              <p className="text-gray-600 mb-4">TAN application, return filing, and TDS compliance support.</p>
              <button 
                onClick={scrollToServices}
                className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl text-primary-600 mb-4 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payroll Processing</h3>
              <p className="text-gray-600 mb-4">Complete payroll management with salary calculations and compliance.</p>
              <button 
                onClick={scrollToServices}
                className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToServices}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
            size="lg"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
