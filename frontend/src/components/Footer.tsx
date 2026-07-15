import { Link } from 'react-router-dom'
import { LOGO_URL } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full border-t border-subtle-gold/30">
      <div className="px-margin-mobile md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6 max-w-sm">
          <div className="inline-flex items-center bg-white rounded-xl p-3 shadow-lg">
            <img alt="Inversiones FV" className="h-16 md:h-20 object-contain" src={LOGO_URL} />
          </div>
          <p className="text-surface-variant/80 font-body-md text-body-md">
            Comprometidos con la excelencia operativa y el desarrollo productivo nacional, brindando
            soluciones integrales de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="font-label-bold text-label-bold text-subtle-gold uppercase tracking-widest">
              Empresa
            </h4>
            <ul className="space-y-4">
              <li>
                <a className="text-surface-variant/80 hover:text-off-white transition-colors" href="#nosotros">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a className="text-surface-variant/80 hover:text-off-white transition-colors" href="#nosotros">
                  Nuestros Valores
                </a>
              </li>
              <li>
                <a className="text-surface-variant/80 hover:text-off-white transition-colors" href="#clientes">
                  Nuestros Clientes
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-label-bold text-label-bold text-subtle-gold uppercase tracking-widest">
              Servicios
            </h4>
            <ul className="space-y-4">
              <li>
                <a className="text-surface-variant/80 hover:text-off-white transition-colors" href="#servicios">
                  Suministros
                </a>
              </li>
              <li>
                <Link className="text-surface-variant/80 hover:text-off-white transition-colors" to="/aviso-legal">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link className="text-surface-variant/80 hover:text-off-white transition-colors" to="/privacidad">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-off-white/10 py-6">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface-variant/60 font-body-md text-body-md text-center md:text-left">
            © {new Date().getFullYear()} Inversiones FV. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-subtle-gold font-label-bold text-label-bold">
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              verified
            </span>
            Certificación de Calidad Corporativa
          </div>
        </div>
      </div>
    </footer>
  )
}
