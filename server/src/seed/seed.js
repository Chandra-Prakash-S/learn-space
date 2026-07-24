import dotenv from "dotenv";

import connectDB from "../config/db.js";

import Course from "../models/Course.js";
import LiveSession from "../models/LiveSession.js";

import courses from "./courses.seed.js";
import liveSessions from "./liveSessions.seed.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Course.deleteMany();
    await LiveSession.deleteMany();

    console.log("🗑️ Existing data removed");

    // Seed fresh data
    await Course.insertMany(courses);
    await LiveSession.insertMany(liveSessions);

    console.log("✅ Database seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error while seeding:", error.message);
    process.exit(1);
  }
};

seedDatabase();