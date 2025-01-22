import { z } from "zod";

export const passwordSchema = z.string().min(6).max(100);

// Models
export const authTokenSchema = z.object({
  token: z.string(),
  refreshToken: z.string().nullish(),
  tokenType: z.string(),
  issuedAt: z.number(),
  expiresIn: z.number(),
});

export type AuthToken = z.infer<typeof authTokenSchema>;

// API Schema

// Login API
export const loginParamsSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export type LoginParams = z.infer<typeof loginParamsSchema>;
