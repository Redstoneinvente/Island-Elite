import express from "express";
import { createServer as createViteServer } from "vite";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0fAi9HEgmav4cVqA_FCmBdmrUMUpmXGDRL6x8lwuDE8Kaw9CF8JS1KgehtVGm0IQ/exec";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());
  app.use(cookieParser());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", greeting: "Welcome to COCO MORIS ADVENTURES API" });
  });

  app.post("/api/send-email", async (req, res) => {
    const { recipientEmail, emailTitle, emailMessage } = req.body ?? {};

    if (!recipientEmail || !emailTitle || !emailMessage) {
      return res.status(400).json({
        success: false,
        error: "recipientEmail, emailTitle, and emailMessage are required.",
      });
    }

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipientEmail, emailTitle, emailMessage }),
      });

      const responseText = await response.text();

      if (
        !response.ok ||
        responseText.includes("Script function not found: doPost") ||
        responseText.includes("Script function not found: doGet")
      ) {
        return res.status(502).json({
          success: false,
          error:
            "The Apps Script endpoint is deployed, but it does not expose a working doPost handler yet.",
          details: responseText,
        });
      }

      return res.json({ success: true });
    } catch (error) {
      return res.status(502).json({
        success: false,
        error: "Unable to reach the Apps Script email service.",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
