import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 LearnSpace API is running",
  });
});

export default app;