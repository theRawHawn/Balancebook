import { useState } from "react";
import { Download, FileText, Calculator, TrendingUp, DollarSign, PieChart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const downloadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  businessType: z.string().min(1, "Please select your business type"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type DownloadFormData = z.infer<typeof downloadFormSchema>;

interface ToolkitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  fileType: string;
  size: string;
  category: string;
  features: string[];
}

const toolkitItems: ToolkitItem[] = [
  {
    id: "business-budget-template",
    title: "Business Budget Template",
    description: "Comprehensive CSV template for monthly and yearly business budget planning with sample data and calculations",
    icon: Calculator,
    fileType: "CSV (.csv)",
    size: "15 KB",
    category: "Planning",
    features: ["Monthly & Annual Views", "Automatic Calculations", "Expense Categories", "Variance Analysis"]
  },
  {
    id: "cash-flow-tracker",
    title: "Cash Flow Tracker",
    description: "Monitor your business cash flow with this detailed tracking template including forecasting tools and payment tracking",
    icon: TrendingUp,
    fileType: "CSV (.csv)",
    size: "12 KB",
    category: "Tracking",
    features: ["Daily Cash Flow", "Forecasting", "Payment Tracking", "Visual Charts"]
  },
  {
    id: "tax-calendar",
    title: "Tax Calendar 2024-25",
    description: "Complete calendar of all important tax deadlines, GST dates, and compliance requirements with penalty information",
    icon: Calendar,
    fileType: "Text (.txt)",
    size: "8 KB",
    category: "Compliance",
    features: ["GST Due Dates", "Income Tax Deadlines", "TDS Due Dates", "Penalty Information"]
  },
  {
    id: "profit-loss-template",
    title: "Profit & Loss Statement Template",
    description: "Professional P&L template designed for small businesses with Indian accounting standards and ratio analysis",
    icon: PieChart,
    fileType: "CSV (.csv)",
    size: "10 KB",
    category: "Reporting",
    features: ["Monthly P&L", "Comparative Analysis", "Ratio Calculations", "Professional Format"]
  },
  {
    id: "expense-tracker",
    title: "Business Expense Tracker",
    description: "Track all business expenses with categories, receipts, GST calculations, and tax deduction analysis",
    icon: DollarSign,
    fileType: "CSV (.csv)",
    size: "18 KB",
    category: "Tracking",
    features: ["Expense Categories", "Receipt Tracking", "Tax Deductions", "Monthly Reports"]
  },
  {
    id: "financial-ratios-guide",
    title: "Financial Ratios Analysis Guide",
    description: "Complete guide to understanding and calculating key financial ratios with industry benchmarks and templates",
    icon: FileText,
    fileType: "Text (.txt)",
    size: "25 KB",
    category: "Education",
    features: ["20+ Key Ratios", "Industry Benchmarks", "Calculation Examples", "Interpretation Guide"]
  }
];

export default function FinancialToolkit() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedToolkit, setSelectedToolkit] = useState<ToolkitItem | null>(null);
  const { toast } = useToast();

  const form = useForm<DownloadFormData>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      phone: "",
    },
  });

  const handleDownload = (toolkit: ToolkitItem) => {
    setSelectedToolkit(toolkit);
    setIsDialogOpen(true);
  };

  const onSubmit = async (data: DownloadFormData) => {
    try {
      // Send download request to backend
      const response = await fetch("/api/toolkit-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          toolkitId: selectedToolkit?.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process download request");
      }

      // Trigger file download
      const downloadUrl = `/api/download/${selectedToolkit?.id}`;
      const link = document.createElement('a');
      link.href = downloadUrl;
      
      // Determine file extension based on file type
      let extension = 'txt';
      if (selectedToolkit?.fileType.includes('CSV')) extension = 'csv';
      else if (selectedToolkit?.fileType.includes('Excel')) extension = 'xlsx';
      else if (selectedToolkit?.fileType.includes('PDF')) extension = 'pdf';
      
      link.download = `${selectedToolkit?.title.replace(/\s+/g, '-').toLowerCase()}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: `${selectedToolkit?.title} is now downloading. We've also added you to our newsletter for exclusive financial tips.`,
      });

      setIsDialogOpen(false);
      form.reset();
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Something went wrong. Please try again or contact our support team.",
        variant: "destructive",
      });
    }
  };

  const categories = Array.from(new Set(toolkitItems.map(item => item.category)));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Financial Planning Toolkit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive collection of financial planning tools, templates, and guides 
            designed specifically for Indian businesses. All tools are created by our expert accountants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {toolkitItems.map((item) => (
            <Card key={item.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{item.fileType}</span>
                    <span>{item.size}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-gray-900">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                      {item.features.length > 3 && (
                        <li className="text-primary-600 font-medium">
                          +{item.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => handleDownload(item)}
                    className="w-full"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Download {selectedToolkit?.title}</DialogTitle>
            <DialogDescription>
              Please provide your details to download this free resource. 
              We'll also send you exclusive financial tips for your business.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Retail, Manufacturing, Services" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex space-x-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
}