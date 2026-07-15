const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'

export interface ContactPayload {
  name: string
  company: string
  email: string
  message: string
}

export interface ApiError {
  message: string
  fieldErrors?: Partial<Record<keyof ContactPayload, string>>
}

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as ApiError | null
    const error: ApiError = body ?? { message: 'No se pudo enviar el formulario. Intente de nuevo.' }
    throw error
  }
}
