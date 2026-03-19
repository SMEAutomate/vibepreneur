import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please select your role"),
  industry: z.string().min(1, "Please select your industry"),
  consent: z.boolean().default(true),
  source: z.string().optional(),
  ref: z.string().optional(),
  persona: z.string().optional(),
  goal: z.string().optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export const solutionsQuerySchema = z.object({
  email: z.string().email().optional(),
  role: z.string().min(1),
  industry: z.string().optional(),
});

export type SolutionsQuery = z.infer<typeof solutionsQuerySchema>;
