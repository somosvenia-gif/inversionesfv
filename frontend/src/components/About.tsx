import Reveal from './Reveal'
import { VALUES } from '../data/site'

export default function About() {
  return (
    <section className="py-16 md:py-section-gap bg-surface relative overflow-hidden" id="nosotros">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-1/2" />
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-deep-burgundy font-headline-lg text-headline-lg">Nosotros</h2>
              <div className="h-1.5 w-24 bg-subtle-gold" />
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Somos una empresa constituida con valores apegados a la responsabilidad y contribución
              social que nace con el objeto de prestar servicios y suministros en el ámbito automotriz
              como parte de un negocio familiar, sin embargo con la intención de diversificarnos,
              adaptarnos a las necesidades del mercado y ser parte del desarrollo del país, nos hemos
              enfocado en ampliar nuestros fines para la prestación de servicios de toda índole:
              mantenimiento, suministros, construcción, manufactura, importación, exportación, y
              distribución de todo tipo de bienes, es por ello que contamos con un equipo de trabajo
              multidisciplinario altamente capacitado.
            </p>
          </Reveal>

          <Reveal delay={150} className="md:col-span-5 space-y-6">
            <div className="bg-deep-burgundy p-8 rounded-xl text-off-white shadow-xl">
              <h3 className="font-headline-md text-headline-md mb-4 flex items-center gap-3 text-subtle-gold">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  flag
                </span>
                Misión
              </h3>
              <p className="font-body-md text-body-md text-surface-variant/90">
                Brindar de manera integral soluciones multifacéticas a los requerimientos de nuestros
                clientes, con una excelente relación calidad y precio, generando un ambiente de
                satisfacción y bienestar tanto para el cliente como para nuestro personal.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-md">
              <h3 className="font-headline-md text-headline-md mb-4 flex items-center gap-3 text-deep-burgundy">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  visibility
                </span>
                Visión
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Ser una empresa multiservicios consolidada en el mercado nacional, con responsabilidad
                y compromiso social, enfocados en la mejora continua para alcanzar un crecimiento
                rentable con impacto sostenible.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 pt-16 border-t border-outline-variant/30">
          <h3 className="text-center font-headline-md text-headline-md text-deep-burgundy mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {VALUES.map((value, i) => (
              <Reveal key={value.label} delay={i * 80} className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-off-white border border-subtle-gold/30 flex items-center justify-center text-subtle-gold group-hover:bg-subtle-gold group-hover:text-off-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <span className="font-label-bold text-label-bold text-deep-burgundy">{value.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
