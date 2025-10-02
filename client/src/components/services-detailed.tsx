import { Calculator, FileText, Receipt, Users, Check, FileSpreadsheet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesDetailed() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Complete accounting solutions tailored for your business</p>
        </div>
        
        {/* Full Accounting & Bookkeeping */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start mb-6">
              <div className="text-4xl text-primary-600 mr-6 mt-2">
                <Calculator className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accounting & Bookkeeping</h3>
                <p className="text-gray-600 font-bold mb-6">Comprehensive accounting services to keep your books accurate and up-to-date.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Sales, Purchase, Expense Entries",
                "Bank Reconciliation",
                "Cash Book Maintenance",
                "Journal Entries & Depreciation",
                "Fixed Asset Register",
                "Trial Balance, P&L, Balance Sheet",
                "Receivables & Payables Tracking",
                "Tally Data Setup & Cleanup",
                "Year-End Closing Support"
              ].map((service, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* ITR Services */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start mb-6">
              <div className="text-4xl text-primary-600 mr-6 mt-2">
                <FileSpreadsheet className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ITR Services</h3>
                <p className="text-gray-600 font-bold mb-6">Comprehensive ITR compliance and filing services to keep you tax-compliant.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Applicability Check(Mandatory/Voluntary Filing)",
                "PAN-Aadhaar Linking Verification",
                "Computation of Total Income & Tax Liability",
                "Income & Deduction Documentation(Form 16, 26AS, AIS, TIS)",
                "Filing of Correct ITR File(ITR-1 to ITR-7)",
                "Notice & Penalty Resolution(143(1), 139(9), 143(2) Responses)"
              ].map((service, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* GST Services */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start mb-6">
              <div className="text-4xl text-primary-600 mr-6 mt-2">
                <FileText className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GST Services</h3>
                <p className="text-gray-600 font-bold mb-6">Complete GST compliance and filing services to keep your business tax-compliant.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "GST Registration",
                "GSTR-1, 3B, 9 Filing",
                "GST Input Credit Matching (2B vs Books)",
                "Late Fee and Penalty Resolution"
              ].map((service, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* TDS Services */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start mb-6">
              <div className="text-4xl text-primary-600 mr-6 mt-2">
                <Receipt className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">TDS Services</h3>
                <p className="text-gray-600 font-bold mb-6">Comprehensive TDS management and filing services for your business.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "TAN Application",
                "Filing of Form 24Q, 26Q",
                "Advance Tax & Challan Management",
                "Form 16/16A Generation"
              ].map((service, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Payroll Processing */}
        <Card>
          <CardContent className="p-8">
            <div className="flex items-start mb-6">
              <div className="text-4xl text-primary-600 mr-6 mt-2">
                <Users className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Payroll Processing</h3>
                <p className="text-gray-600 font-bold mb-6">Complete payroll management with accurate calculations and compliance.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Employee Master Creation (PAN, Aadhar, Bank)",
                "Monthly Salary Calculations",
                "Payroll Register",
                "Issuing Salary Slips",
                "TDS on Salary & Form 16",
                "PF/ESI Return Support (optional add-on)"
              ].map((service, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
