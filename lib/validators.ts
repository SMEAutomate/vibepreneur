import { z } from "zod";

const optionalText = z
  .string()
  .optional()
  .transform((value) => (value ? value : undefined));

export const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please select your role"),
  industry: optionalText,
  consent: z.boolean().default(true),
  source: optionalText,
  ref: optionalText,
  persona: optionalText,
  goal: optionalText,
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export const solutionsQuerySchema = z.object({
  email: z.string().email().optional(),
  role: z.string().min(1),
  industry: optionalText,
});

export type SolutionsQuery = z.infer<typeof solutionsQuerySchema>;
