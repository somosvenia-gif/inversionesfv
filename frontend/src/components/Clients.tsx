import { CLIENT_LOGOS } from '../data/site'

export default function Clients() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-outline-variant/20 overflow-hidden" id="clientes">
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto mb-12">
        <h3 className="text-center font-headline-md text-headline-md text-industrial-taupe uppercase tracking-widest">
          Confían en Nosotros
        </h3>
      </div>
      <div className="relative w-full overflow-hidden h-24 flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="logo-scroll gap-16 md:gap-28 px-12">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center gap-16 md:gap-28" aria-hidden={group === 1}>
              {CLIENT_LOGOS.map((client) => (
                <img
                  key={client.name}
                  src={client.src}
                  alt={client.name}
                  title={client.name}
                  className="h-10 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
