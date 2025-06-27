import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format Errors
// @ts-ignore
export const formatError = (error: unknown): string => {
  // @ts-ignore
  if (error.name === "ZodError") {
    // Handle Zod error
    // @ts-ignore
    const fieldErrors = Object.keys(error.errors).map((field) => {
      // @ts-ignore
      const message: any = error.errors[field].message;
      // @ts-ignore
      return typeof message === "string" ? message : JSON.stringify(message);
    });
    // @ts-ignore
    return fieldErrors.join(". ");
    // @ts-ignore
  } else if (
    // @ts-ignore
    error.name === "PrismaClientKnownRequestError" &&
    // @ts-ignore
    error.code === "P2002"
  ) {
    // Handle Prisma error
    // @ts-ignore
    const field: any = error.meta?.target ? error.meta.target[0] : "Field";
    // @ts-ignore
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else {
    // Handle other errors
    // @ts-ignore
    return typeof error.message === "string"
      ? // @ts-ignore
        error.message
      : // @ts-ignore
        JSON.stringify(error.message);
  }
};
