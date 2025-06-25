import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertJobApplicationSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit job application
  app.post("/api/job-applications", async (req, res) => {
    try {
      const validatedData = insertJobApplicationSchema.parse(req.body);
      const application = await storage.createJobApplication(validatedData);
      
      // Send email notification
      try {
        await fetch('/api/send-application-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            applicantName: `${validatedData.firstName} ${validatedData.lastName}`,
            applicantEmail: validatedData.email,
            position: validatedData.position,
            resumeFileName: validatedData.resumeFileName,
            coverLetter: validatedData.coverLetter
          })
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }
      
      res.json({ success: true, id: application.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit application" });
      }
    }
  });

  // Get job applications (for admin use)
  app.get("/api/job-applications", async (req, res) => {
    try {
      const applications = await storage.getJobApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  // Submit contact message
  app.post("/api/contact-messages", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit message" });
      }
    }
  });

  // Get contact messages (for admin use)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  // Send job application email
  app.post("/api/send-application-email", async (req, res) => {
    try {
      const { applicantName, applicantEmail, position, resumeFileName, coverLetter } = req.body;
      
      if (!process.env.SENDGRID_API_KEY) {
        console.error('SendGrid API key not configured');
        return res.status(500).json({ error: "Email service not configured" });
      }

      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: 'team.innovatorsnexus@gmail.com',
        from: 'noreply@innovatornexus.com', // Use a verified sender
        subject: `New Job Application: ${position}`,
        html: `
          <h2>New Job Application Received</h2>
          <p><strong>Applicant:</strong> ${applicantName}</p>
          <p><strong>Email:</strong> ${applicantEmail}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Resume:</strong> ${resumeFileName}</p>
          ${coverLetter ? `<p><strong>Cover Letter:</strong></p><p>${coverLetter}</p>` : ''}
          <p><strong>Applied on:</strong> ${new Date().toLocaleDateString()}</p>
        `
      };

      await sgMail.send(msg);
      res.json({ success: true });
    } catch (error) {
      console.error('SendGrid error:', error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
