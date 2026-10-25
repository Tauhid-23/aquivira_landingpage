import { z } from "zod"

export const checkoutFormSchema = z.object({
  bundleId: z.string().min(1, "Please select a product bundle"),
  extraCartridges: z.number().min(0).max(10).default(0),
  fullName: z.string().trim().min(3, "Full name must be at least 3 characters"),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^(?:\+?880|0)?1[3-9]\d{8}$/, "Please enter a valid 11-digit Bangladeshi mobile number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  division: z.string().min(1, "Please select your division"),
  district: z.string().min(1, "Please select your district"),
  address: z.string().trim().min(5, "Please provide complete street or house details"),
  deliveryNotes: z.string().trim().optional(),
  paymentMethod: z.enum(["cod", "bkash", "nagad", "card"]),
  // Mockup payment details
  mfsSenderNumber: z.string().trim().optional(),
  mfsTrxId: z.string().trim().optional(),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>
