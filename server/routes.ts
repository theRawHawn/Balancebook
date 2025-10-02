import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  // Toolkit download request
  const downloadRequestSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    businessType: z.string().min(1),
    phone: z.string().min(10),
    toolkitId: z.string().min(1),
  });

  app.post("/api/toolkit-download", async (req, res) => {
    try {
      const validatedData = downloadRequestSchema.parse(req.body);
      
      // Store download request (could be used for lead generation)
      const downloadRecord = {
        id: Math.random().toString(36).substr(2, 9),
        ...validatedData,
        downloadedAt: new Date().toISOString(),
      };
      
      // In a real implementation, you would:
      // 1. Store the download request in database
      // 2. Send an email with the download link
      // 3. Track downloads for analytics
      
      res.json({ 
        success: true, 
        message: "Download request processed successfully",
        downloadId: downloadRecord.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to process download request" 
        });
      }
    }
  });

  // Download endpoint for toolkit files
  app.get("/api/download/:toolkitId", async (req, res) => {
    const { toolkitId } = req.params;
    
    // Toolkit file mappings (in production, these would be real files)
    const toolkitFiles: Record<string, { filename: string; contentType: string; content: string }> = {
      "business-budget-template": {
        filename: "Business-Budget-Template.xlsx",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        content: "Excel template content would be here"
      },
      "cash-flow-tracker": {
        filename: "Cash-Flow-Tracker.xlsx",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        content: "Cash flow tracker content would be here"
      },
      "tax-calendar": {
        filename: "Tax-Calendar-2024-25.pdf",
        contentType: "application/pdf",
        content: "Tax calendar PDF content would be here"
      },
      "profit-loss-template": {
        filename: "Profit-Loss-Statement-Template.xlsx",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        content: "P&L template content would be here"
      },
      "expense-tracker": {
        filename: "Business-Expense-Tracker.xlsx",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        content: "Expense tracker content would be here"
      },
      "financial-ratios-guide": {
        filename: "Financial-Ratios-Analysis-Guide.pdf",
        contentType: "application/pdf",
        content: "Financial ratios guide PDF content would be here"
      }
    };

    const file = toolkitFiles[toolkitId];
    if (!file) {
      return res.status(404).json({ message: "Toolkit not found" });
    }

    // In production, you would serve actual files
    res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
    res.setHeader('Content-Type', file.contentType);
    res.send(`This would be the actual ${file.filename} file content. 
    
In a real implementation, this endpoint would:
1. Serve actual Excel/PDF files from a secure storage location
2. Track download analytics
3. Require authentication or email verification
4. Generate personalized files with company branding

File: ${file.filename}
Type: ${file.contentType}
Toolkit ID: ${toolkitId}

This is a demonstration of the download functionality for TaxNBooks Financial Planning Toolkit.`);
  });

  const httpServer = createServer(app);
  return httpServer;
}
