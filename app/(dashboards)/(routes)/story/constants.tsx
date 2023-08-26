import * as z from 'zod'

export const formSchema = z.object({
  theme: z.string().nonempty(),
  setting: z.string().nonempty(),
  length: z.string().nonempty(),
  characters: z.string().nonempty(),
  languages: z.string().nonempty(),
})

export const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Korean',
  'Italian',
  'Bangla',
  'Hindi',
  'Portuguese',
  'Russian',
  'Turkish',
  'Arabic',
  'Dutch',
]
