import { z } from "zod";

export const postSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Post cannot be empty")
    .max(1000, "Post cannot exceed 1000 characters"),
});