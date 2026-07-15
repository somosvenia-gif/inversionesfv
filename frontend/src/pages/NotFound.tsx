import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-margin-mobile gap-6">
      <p className="text-subtle-gold font-label-bold text-label-bold tracking-widest">ERROR 404</p>
      <h1 className="text-deep-burgundy font-headline-lg text-headline-lg">Página no encontrada</h1>
      <p className="text-on-surface-variant font-body-md text-body-md max-w-md">
        La página que busca no existe o fue movida.
      </p>
      <Link
        to="/"
        className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-bold text-label-bold hover:bg-deep-burgundy transition-all"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
