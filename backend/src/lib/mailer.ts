import nodemailer from 'nodemailer'
import { env, isEmailConfigured } from '../env.js'
import type { ContactPayload } from '../schemas/contact.js'

const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.port === 465,
      auth: { user: env.smtp.user, pass: env.smtp.pass },
    })
  : null

export async function sendContactNotification(payload: ContactPayload): Promise<void> {
  if (!transporter) {
    console.log('[mailer] SMTP no configurado, se omite el envío de correo. Payload:', payload)
    return
  }

  await transporter.sendMail({
    from: env.smtp.from,
    to: env.contactRecipient,
    replyTo: payload.email,
    subject: `Nuevo contacto desde el sitio web: ${payload.name}`,
    text: [
      `Nombre: ${payload.name}`,
      `Empresa: ${payload.company || 'N/A'}`,
      `Email: ${payload.email}`,
      '',
      payload.message,
    ].join('\n'),
  })
}
