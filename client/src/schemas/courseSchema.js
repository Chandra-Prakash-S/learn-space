import { z } from "zod";

export const courseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters"),

  thumbnail: z
    .string()
    .trim()
    .url("Please enter a valid image URL")
    .or(z.literal("")),

  category: z
    .string()
    .trim()
    .min(2, "Category is required"),

  level: z.enum([
    "Beginner",
    "Intermediate",
    "Advanced",
  ]),

  duration: z
    .string()
    .trim()
    .min(1, "Duration is required"),
});

export const defaultCourseValues = {
  title: "",
  description: "",
  thumbnail: "",
  category: "",
  level: "Beginner",
  duration: "",
};