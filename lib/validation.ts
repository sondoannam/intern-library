import { z } from "zod";
import { USER_SIGN_UP_TYPES } from "../constants/common";

export const signUpSchema = z
  .object({
    fullName: z.string().min(3),
    email: z.string().email(),
    userSignUpType: z.enum([
      USER_SIGN_UP_TYPES.STUDENT,
      USER_SIGN_UP_TYPES.EMPLOYEE,
      USER_SIGN_UP_TYPES.FREELANCER,
    ]),
    universityId: z.coerce.number().optional(),
    universityCard: z.string().optional(),
    company: z.string().optional(),
    password: z.string().min(8),
  })
  .refine(
    (data) => {
      if (data.userSignUpType === USER_SIGN_UP_TYPES.STUDENT) {
        return data.universityId != null && data.universityCard != null;
      }
      if (data.userSignUpType === USER_SIGN_UP_TYPES.EMPLOYEE) {
        return data.company != null;
      }
      if (data.userSignUpType === USER_SIGN_UP_TYPES.FREELANCER) {
        return (
          data.universityId == null &&
          data.universityCard == null &&
          data.company == null
        );
      }
      return true;
    },
    {
      message: "Invalid fields for the selected user type",
    }
  );

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const bookSchema = z.object({
  title: z.string().trim().min(2).max(100),
  description: z.string().trim().min(10).max(1000),
  author: z.string().trim().min(2).max(100),
  genre: z.string().trim().min(2).max(50),
  rating: z.coerce.number().min(1).max(5),
  totalCopies: z.coerce.number().int().positive().lte(10000),
  coverUrl: z.string().nonempty(),
  coverColor: z
    .string()
    .trim()
    .regex(/^#[0-9A-F]{6}$/i),
  videoUrl: z.string().nonempty(),
  summary: z.string().trim().min(10),
});