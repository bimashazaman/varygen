import * as z from 'zod'

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt is required.',
  }),
  wordCount: z.string().min(1),
  tone: z.string().min(1),
  applicantType: z.string().min(1),
})
