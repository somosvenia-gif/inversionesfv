// Logo oficial de Inversiones FV. Colocar el archivo en frontend/public/logo.png
export const LOGO_URL = '/logo.png'

export const CENTRAL_LOGO_URL = LOGO_URL

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBu40NrC1dzgEmH3s-3sUgn3Hl_9cMV_8eajT-SfPvHGvmq8I_LBQwa3YqQNqS8nBNZxR0dt4ylHXDbu4S8XNVQs95gZ9s-tPxc850EX97qLZEGf8Fr7h9Dk4iouLvC3nMwtpotjCEKdnep-TvrlIQ0Q_YBY07kcoyRuHodeNUHoJvlef3ENJ0KI8vZGdtbsupZPvzH8UEubFWWCn6ki-YnEFBgXok9czRDCMjw7pQCgfZHJBHZvq5TG3u4A2CH94HjYk10SJ4hdwU'

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contacto', label: 'Contacto' },
] as const

export const VALUES = [
  { icon: 'verified', label: 'Satisfacción de clientes' },
  { icon: 'star', label: 'Excelencia' },
  { icon: 'high_quality', label: 'Calidad' },
  { icon: 'trending_up', label: 'Mejora continua' },
  { icon: 'groups', label: 'Compromiso Social' },
] as const

export const SERVICES = [
  {
    icon: 'precision_manufacturing',
    title: 'Perforación',
    description: 'Especializados en minería, petróleo y gas con tecnología de punta.',
  },
  {
    icon: 'architecture',
    title: 'Construcción',
    description: 'Mantenimiento de infraestructuras y obras civiles de gran escala.',
  },
  {
    icon: 'cleaning_services',
    title: 'Limpieza Industrial',
    description: 'Protocolos avanzados para entornos industriales complejos.',
  },
  {
    icon: 'science',
    title: 'Investigación Química',
    description: 'Formulación y desarrollo de productos químicos especializados.',
  },
  {
    icon: 'directions_car',
    title: 'Alquiler de Vehículos',
    description: 'Flota diversificada para necesidades corporativas sin chofer.',
  },
] as const

export const SUPPLIES = [
  {
    title: 'Industriales',
    description: 'Combustibles, químicos, gases y repuestos automotrices.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARPyc_VTOHKi6DLCemsQFb6x7JRuOp_Nt7s02iIzloYUaRbCFxKJ89bw1cKn_ql2e2xE2CgWPGH8IGAYq1qaqPJ9caW1srDv3aiSbRm8hQ54h-3xYlbyg8SXLuYjzg2e7TdQeLSA-oDvYCoEe4X10gAOPoSUu1MZw4DyyYWvq41O1u3odO6JsAxwDKIJ5AGs_U7r1D-cBTgdyOLZlA3ZeJxgbxasdO87AjcpnawarhSU3KZuEDhSzU7zZpcDGFrCqcqvsxMw6zY3U',
  },
  {
    title: 'Para Obras',
    description: 'Maquinaria, accesorios eléctricos y componentes de fabricación.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdgpObqAKX-qf_iWtbbXPoChtj4_WGvL6Ojlgjc4xVGG-1iw_fjCPzGw2U9kpzuJMvSLx3nGYgajJ_R5FK86IFxHMqTvmrO_Jvc3WWdYMOAmAlK5f1ysIDRxVzb3Z1iUYuuvkbkR3cyMgrIv9q_koRgfoM_7BGns7oKlFOo68bJlnwRMBsSK9lKS9RI43xRPiHTBTGQYSACptzP15J4JeND2DguugtZHTzMxNMp-A5U4-72zC41nPYrCKbKZGAtEwHhjGOqEPbZjc',
  },
  {
    title: 'Mobiliario',
    description: 'Muebles de oficina, electrodomésticos y equipos electrónicos.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCd6e-EfS89uhGYWSmJRjtHom1jNJ43Ns3tQYSScaUXwKG03abPvAS91XabUp88tNlvuecXOIPCYVBM9Zkp_p7zH4NOpum-CtB-LyKrXHcvUHv2FnltDXAKjBzkY6JEYybXlg-UAFUHRziWF_4Wld_fWqW7UoZptbtNAKkibCRXOSewi7MwQrNkSv2e5j6YJTAX6MM1rb0x2KmgPFCRGyE_ld3EnuIs8rADvUEr3A1ovKWj4mLJ7aVDa6oeS5n5Fser8i-BAmy5PZM',
  },
  {
    title: 'Médicos',
    description: 'Insumos quirúrgicos, farmacéuticos y equipos especializados.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7d0J0KctNtUK4cxaIZM4Da69D3ZZ2MY61arjYH3J0tkNTc13oMwVWx0VgaRSRKErkOSm8WKZrGMgrDVI_sa_nNJeBE0-4SUA5cS1TJl5sAWa_c7ygTnISeWLiRUhbcJpYm2X-yEGUR7RxylgmgPa4dp6r05mcuKpnGoP0vmmvk2MIzXBzTHnEZH0aeHvlJ0aPYQOFeODbscxQfMGTItUJ937JeW-1mPZ75cioUUM9DaLuSPVUxEL-54XiVbjb8RUsH2YMefAOFVY',
  },
] as const

// Logos de clientes. Colocar los archivos en frontend/public/clients/
export const CLIENT_LOGOS = [
  { name: 'ACNUR', src: '/clients/acnur.png' },
  { name: 'ACTED', src: '/clients/acted.png' },
  { name: 'PDVSA', src: '/clients/pdvsa.png' },
  { name: 'Premiere Urgence Internationale', src: '/clients/premiere-urgence.png' },
  { name: 'PROMARCA', src: '/clients/promarca.png' },
  { name: 'Química y Fluidos', src: '/clients/quimica-y-fluidos.png' },
] as const

export const CONTACT_INFO = {
  phones: ['+58 0412 5430455', '+58 0412 5764454 / +58 0412 2690580'],
  emails: ['info@inversionesfv.com', 'contratos@inversionesfv.com'],
  location: 'Venezuela. Operaciones a nivel nacional.',
  rif: 'J-41120824-8',
}
