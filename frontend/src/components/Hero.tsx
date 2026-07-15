import { CENTRAL_LOGO_URL, HERO_IMAGE_URL } from '../data/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-36 overflow-hidden" id="inicio">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-burgundy/90 to-deep-burgundy/40 z-10" />
        <img
          className="w-full h-full object-cover"
          alt=""
          role="presentation"
          src={HERO_IMAGE_URL}
        />
      </div>

      <div className="relative z-20 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-off-white space-y-6">
          <span className="inline-block px-4 py-1 bg-subtle-gold/20 border border-subtle-gold/40 rounded-full text-subtle-gold font-label-bold text-label-bold tracking-widest">
            Inversiones FV
          </span>
          <h1 className="font-headline-display max-w-xl text-[32px] leading-[38px] tracking-tight md:text-headline-display md:leading-[56px]">
            Soluciones Integrales y Multifacéticas para el Desarrollo Nacional
          </h1>
          <p className="font-body-lg text-body-lg text-surface-variant/90 max-w-lg">
            Desde el sector automotriz hasta suministros médicos, industriales y petroquímicos.
            Diversificación, excelencia y compromiso social en un solo lugar.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              className="bg-subtle-gold text-deep-burgundy px-8 py-4 rounded-lg font-label-bold text-label-bold hover:bg-off-white transition-all flex items-center gap-2"
              href="#servicios"
            >
              Ver Servicios
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </a>
            <a
              className="border-2 border-off-white text-off-white px-8 py-4 rounded-lg font-label-bold text-label-bold hover:bg-off-white hover:text-deep-burgundy transition-all"
              href="#contacto"
            >
              Contáctanos
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 border-2 border-subtle-gold/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-off-white/20 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 lg:w-96 lg:h-96 bg-off-white p-12 rounded-full shadow-2xl flex items-center justify-center">
                <img
                  alt="Inversiones FV"
                  className="w-full h-auto object-contain"
                  src={CENTRAL_LOGO_URL}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
