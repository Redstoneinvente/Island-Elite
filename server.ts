import express from "express";
import { createServer as createViteServer } from "vite";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MAILERSEND_API_URL = "https://api.mailersend.com/v1/email";
const MAILERSEND_API_TOKEN = process.env.MAILERSEND_API_TOKEN;
const MAILERSEND_FROM_EMAIL = process.env.MAILERSEND_FROM_EMAIL;
const MAILERSEND_FROM_NAME =
  process.env.MAILERSEND_FROM_NAME || "COCO MORIS ADVENTURES";
const FRONTEND_ORIGINS = (process.env.FRONTEND_ORIGINS ||
  "http://localhost:5173,http://localhost:3000,https://cocomorisadventures.com,https://www.cocomorisadventures.com")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  console.log("[dev] Booting server...");
  console.log(`[dev] Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`[dev] Target port: ${PORT}`);

  // Middleware
  app.use(express.json());
  app.use(cookieParser());
  app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (origin && FRONTEND_ORIGINS.includes(origin)) {
      res.header("Access-Control-Allow-Origin", origin);
      res.header("Vary", "Origin");
    }

    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }

    next();
  });

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      greeting: "Welcome to COCO MORIS ADVENTURES API",
      emailProvider: MAILERSEND_API_TOKEN ? "mailersend-api" : "not-configured",
    });
  });

  app.post("/api/send-email", async (req, res) => {
    const { recipientEmail, emailTitle, emailMessage } = req.body ?? {};

    if (!recipientEmail || !emailTitle || !emailMessage) {
      return res.status(400).json({
        success: false,
        error: "recipientEmail, emailTitle, and emailMessage are required.",
      });
    }

    if (!MAILERSEND_API_TOKEN || !MAILERSEND_FROM_EMAIL) {
      return res.status(500).json({
        success: false,
        error:
          "MailerSend API is not configured. Set MAILERSEND_API_TOKEN and MAILERSEND_FROM_EMAIL in your server environment.",
      });
    }

    try {
      const response = await fetch(MAILERSEND_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${MAILERSEND_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: {
            email: MAILERSEND_FROM_EMAIL,
            name: MAILERSEND_FROM_NAME,
          },
          to: [
            {
              email: recipientEmail,
            },
          ],
          subject: emailTitle,
          text: emailMessage,
          html: `<pre style="font-family: inherit; white-space: pre-wrap;">${emailMessage}</pre>`,
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        return res.status(502).json({
          success: false,
          error: "Unable to send email through the MailerSend API.",
          details,
        });
      }

      return res.json({ success: true });
    } catch (error) {
      return res.status(502).json({
        success: false,
        error: "Unable to reach the MailerSend API.",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("[dev] Creating Vite dev server...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    console.log("[dev] Vite dev server ready, attaching middleware...");
    app.use(vite.middlewares);
    
    // Fallback route for SPA - serve index.html with Vite transforms
    app.get("*", async (req, res) => {
      try {
        let html = fs.readFileSync(
          path.join(__dirname, "index.html"),
          "utf-8"
        );
        html = await vite.transformIndexHtml(req.url, html);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (err) {
        console.error("[dev] Error serving index.html:", err);
        res.status(500).end("Error loading app");
      }
    });
  } else {
    console.log("[dev] Production mode detected, serving dist/ ...");
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  console.log("[dev] Starting Express listener...");
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[dev] Server running on http://localhost:${PORT}`);
  });
}

startServer();
