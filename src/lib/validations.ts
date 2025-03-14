import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  occupation: z.string().min(2, 'Occupation must be at least 2 characters'),
  industry: z.string().min(1, 'Please select an industry'),
});

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});