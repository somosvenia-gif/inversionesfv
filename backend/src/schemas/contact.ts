import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres').max(120),
  company: z.string().trim().max(150).optional().default(''),
  email: z.string().trim().email('Ingrese un correo electrónico válido').max(200),
  message: z.string().trim().min(10, 'El mensaje debe tener al menos 10 caracteres').max(5000),
})

export type ContactPayload = z.infer<typeof contactSchema>
