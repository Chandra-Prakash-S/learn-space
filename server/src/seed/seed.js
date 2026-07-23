import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Course from "../models/Course.js";
import courses from "./courses.seed.js";

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    // Delete existing courses
    await Course.deleteMany();

    console.log("🗑️ Existing courses removed");

    // Insert fresh data
    await Course.insertMany(courses);

    console.log("✅ Courses seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error while seeding:", error.message);
    process.exit(1);
  }
};

importData();