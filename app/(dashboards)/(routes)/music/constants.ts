import * as z from 'zod'

export const formSchema = z.object({
  audio: z.any(),
})
