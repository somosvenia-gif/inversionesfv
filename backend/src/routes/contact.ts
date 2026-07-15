import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { contactSchema } from '../schemas/contact.js'
import { saveSubmission } from '../lib/storage.js'
import { sendContactNotification } from '../lib/mailer.js'

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Demasiadas solicitudes. Intente de nuevo más tarde.' },
})

export const contactRouter = Router()

contactRouter.post('/', contactLimiter, async (req, res) => {
  const parsed = contactSchema.safeParse(req.body)

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]
      if (typeof key === 'string' && !fieldErrors[key]) {
        fieldErrors[key] = issue.message
      }
    }
    res.status(400).json({ message: 'Datos de formulario inválidos.', fieldErrors })
    return
  }

  try {
    await saveSubmission(parsed.data)
    await sendContactNotification(parsed.data)
    res.status(201).json({ message: 'Solicitud recibida correctamente.' })
  } catch (error) {
    console.error('[contact] Error al procesar la solicitud:', error)
    res.status(500).json({ message: 'No se pudo procesar la solicitud. Intente de nuevo más tarde.' })
  }
})
