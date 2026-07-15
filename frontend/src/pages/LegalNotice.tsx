import LegalPage from './LegalPage'
import { CONTACT_INFO } from '../data/site'

export default function LegalNotice() {
  return (
    <LegalPage title="Aviso Legal">
      <p>
        Inversiones FV (RIF: {CONTACT_INFO.rif}) es una empresa venezolana dedicada a la prestación de
        servicios y suministros en los ámbitos automotriz, industrial, de construcción, médico y
        petroquímico a nivel nacional.
      </p>
      <p>
        El contenido de este sitio web tiene carácter informativo y no constituye una oferta
        vinculante. Inversiones FV se reserva el derecho de modificar la información publicada sin
        previo aviso.
      </p>
      <p>
        Para consultas contractuales o comerciales, comuníquese a través de los canales indicados en la
        sección de contacto: {CONTACT_INFO.emails.join(' · ')}.
      </p>
    </LegalPage>
  )
}
