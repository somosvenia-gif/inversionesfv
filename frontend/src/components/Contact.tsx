import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT_INFO } from '../data/site'
import { submitContactForm, type ApiError, type ContactPayload } from '../lib/api'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const initialForm: ContactPayload = { name: '', company: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<ContactPayload>(initialForm)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange =
    (field: keyof ContactPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      const apiError = err as ApiError
      setErrorMessage(apiError.message || 'No se pudo enviar el formulario. Intente de nuevo.')
      setStatus('error')
    }
  }

  return (
    <section className="py-16 md:py-section-gap bg-surface relative" id="contacto">
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-deep-burgundy font-headline-lg text-headline-lg">Hablemos</h2>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Complete el formulario y nuestro equipo de expertos se pondrá en contacto con usted en
                breve.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-label-bold text-label-bold text-deep-burgundy">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-surface-container border-b-2 border-industrial-taupe focus:border-deep-burgundy transition-all p-3 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="font-label-bold text-label-bold text-deep-burgundy">
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange('company')}
                    placeholder="Nombre de su organización"
                    className="w-full bg-surface-container border-b-2 border-industrial-taupe focus:border-deep-burgundy transition-all p-3 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-label-bold text-label-bold text-deep-burgundy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="email@empresa.com"
                  className="w-full bg-surface-container border-b-2 border-industrial-taupe focus:border-deep-burgundy transition-all p-3 focus:ring-0 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-label-bold text-label-bold text-deep-burgundy">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="¿En qué podemos ayudarle?"
                  className="w-full bg-surface-container border-b-2 border-industrial-taupe focus:border-deep-burgundy transition-all p-3 focus:ring-0 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-deep-burgundy text-on-primary w-full py-4 rounded-lg font-label-bold text-label-bold hover:bg-subtle-gold hover:text-deep-burgundy transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitud'}
                <span className="material-symbols-outlined" aria-hidden="true">
                  send
                </span>
              </button>

              <div role="status" aria-live="polite">
                {status === 'success' && (
                  <p className="text-sm font-label-bold text-label-bold text-deep-burgundy bg-secondary-container/40 border border-subtle-gold/40 rounded-lg p-4">
                    ¡Gracias! Su mensaje fue enviado. Nos pondremos en contacto pronto.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-label-bold text-label-bold text-on-error-container bg-error-container/60 border border-error/30 rounded-lg p-4">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="bg-primary-container text-off-white p-8 md:p-12 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-subtle-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                <h3 className="font-headline-md text-headline-md text-subtle-gold">Información de Contacto</h3>
                <div className="h-1 w-16 bg-subtle-gold/40" />
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-subtle-gold" aria-hidden="true">
                    phone_iphone
                  </span>
                  <div className="space-y-1">
                    <p className="font-label-bold text-label-bold text-surface-variant/70">Teléfonos</p>
                    {CONTACT_INFO.phones.map((phone) => (
                      <p key={phone} className="font-body-md text-body-md">
                        {phone}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-subtle-gold" aria-hidden="true">
                    mail
                  </span>
                  <div className="space-y-1">
                    <p className="font-label-bold text-label-bold text-surface-variant/70">Canales Digitales</p>
                    {CONTACT_INFO.emails.map((email) => (
                      <p key={email} className="font-body-md text-body-md">
                        {email}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-subtle-gold" aria-hidden="true">
                    location_on
                  </span>
                  <div className="space-y-1">
                    <p className="font-label-bold text-label-bold text-surface-variant/70">Ubicación</p>
                    <p className="font-body-md text-body-md">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex gap-4">
              <a
                className="w-10 h-10 rounded-full border border-surface-variant/20 flex items-center justify-center hover:bg-subtle-gold hover:text-deep-burgundy transition-all"
                href="#"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-surface-variant/20 flex items-center justify-center hover:bg-subtle-gold hover:text-deep-burgundy transition-all"
                href="#"
                aria-label="Twitter / X"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
