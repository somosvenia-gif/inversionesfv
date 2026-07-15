import type { ReactNode } from 'react'

interface LegalPageProps {
  title: string
  children: ReactNode
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <section className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
      <h1 className="text-deep-burgundy font-headline-lg text-headline-lg mb-8">{title}</h1>
      <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
        {children}
      </div>
    </section>
  )
}
