import { useState } from 'react'
import Reveal from './Reveal'
import { SERVICES, SUPPLIES } from '../data/site'

type Tab = 'servicios' | 'suministros'

export default function Services() {
  const [tab, setTab] = useState<Tab>('servicios')

  return (
    <section className="py-16 md:py-section-gap bg-surface-container-lowest" id="servicios">
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-deep-burgundy font-headline-lg text-headline-lg">Servicios y Suministros</h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto">
            Soluciones profesionales diseñadas para impulsar la productividad y eficiencia de su
            organización.
          </p>

          <div
            className="flex justify-center mt-8"
            role="tablist"
            aria-label="Servicios y suministros"
          >
            <div className="inline-flex bg-surface-container-high p-1.5 rounded-xl border border-outline-variant/30">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'servicios'}
                className={`px-6 md:px-8 py-2.5 rounded-lg font-label-bold text-label-bold transition-all ${
                  tab === 'servicios'
                    ? 'bg-deep-burgundy text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-deep-burgundy'
                }`}
                onClick={() => setTab('servicios')}
              >
                Nuestros Servicios
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'suministros'}
                className={`px-6 md:px-8 py-2.5 rounded-lg font-label-bold text-label-bold transition-all ${
                  tab === 'suministros'
                    ? 'bg-deep-burgundy text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-deep-burgundy'
                }`}
                onClick={() => setTab('suministros')}
              >
                Suministros de Alto Impacto
              </button>
            </div>
          </div>
        </div>

        {tab === 'servicios' ? (
          <div className="bento-grid" role="tabpanel">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 60}>
                <div className="h-full bg-white p-8 rounded-xl border-l-4 border-subtle-gold card-shadow transition-all group">
                  <span className="material-symbols-outlined text-4xl text-deep-burgundy mb-6 block group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <h4 className="font-headline-md text-headline-md text-deep-burgundy mb-2">
                    {service.title}
                  </h4>
                  <p className="text-on-surface-variant font-body-md text-body-md">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="tabpanel">
            {SUPPLIES.map((supply, i) => (
              <Reveal key={supply.title} delay={i * 60}>
                <div className="h-full bg-white rounded-xl overflow-hidden card-shadow transition-all border border-outline-variant/20">
                  <div className="h-48 bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" alt="" role="presentation" src={supply.image} />
                  </div>
                  <div className="p-6">
                    <h4 className="font-headline-md text-headline-md text-deep-burgundy mb-2">
                      {supply.title}
                    </h4>
                    <p className="text-on-surface-variant font-body-md text-body-md">{supply.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
