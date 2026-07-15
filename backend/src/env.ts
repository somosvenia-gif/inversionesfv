import 'dotenv/config'

function optional(name: string): string | undefined {
  const value = process.env[name]
  return value && value.length > 0 ? value : undefined
}

export const env = {
  port: Number(optional('PORT') ?? 4000),
  corsOrigin: optional('CORS_ORIGIN') ?? 'http://localhost:5173',
  contactRecipient: optional('CONTACT_TO_EMAIL') ?? 'info@inversionesfv.com',
  smtp: {
    host: optional('SMTP_HOST'),
    port: Number(optional('SMTP_PORT') ?? 587),
    user: optional('SMTP_USER'),
    pass: optional('SMTP_PASS'),
    from: optional('SMTP_FROM') ?? 'Inversiones FV <no-reply@inversionesfv.com>',
  },
}

export const isEmailConfigured = Boolean(env.smtp.host && env.smtp.user && env.smtp.pass)
