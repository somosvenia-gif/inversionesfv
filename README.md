# Inversiones FV — Sitio Corporativo

Sitio web corporativo para Inversiones FV, empresa venezolana multiservicios (automotriz,
construcción, industrial, médico y petroquímico). Basado en el sistema de diseño "Industrial
Prestige" (ver [`DESIGN.md`](./DESIGN.md)).

## Estructura

```
.
├── DESIGN.md          # Sistema de diseño (colores, tipografía, spacing)
├── code.html           # Mockup estático original (referencia)
├── frontend/           # React + Vite + TypeScript + Tailwind CSS
└── backend/            # API Node.js + Express + TypeScript
```

## Frontend

React 19 + Vite + TypeScript + Tailwind CSS + React Router.

```bash
cd frontend
cp .env.example .env   # ajustar VITE_API_URL si el backend corre en otro host/puerto
npm install
npm run dev            # http://localhost:5173
npm run build           # build de producción en dist/
```

Incluye: menú móvil, animaciones de aparición al hacer scroll, tabs de Servicios/Suministros,
formulario de contacto conectado a la API, y páginas de Aviso Legal / Privacidad.

## Backend

Node.js + Express + TypeScript. Expone `POST /api/contact` con validación (zod), rate limiting,
persistencia en `backend/data/submissions.json` y envío de correo opcional vía SMTP.

```bash
cd backend
cp .env.example .env   # configurar SMTP_* para envío real de correos (opcional)
npm install
npm run dev             # http://localhost:4000
npm run build && npm start   # producción
```

### Variables de entorno del backend

| Variable            | Descripción                                             | Default                 |
|---------------------|----------------------------------------------------------|--------------------------|
| `PORT`               | Puerto del servidor                                       | `4000`                   |
| `CORS_ORIGIN`        | Origen permitido para CORS                                 | `http://localhost:5173` |
| `CONTACT_TO_EMAIL`   | Correo destino de las notificaciones de contacto           | `info@inversionesfv.com` |
| `SMTP_HOST/PORT/USER/PASS/FROM` | Credenciales SMTP para envío real de correo. Si se omiten, las solicitudes solo quedan guardadas en `data/submissions.json`. | — |

## Notas de diseño

Se preservó la paleta e identidad del mockup original (`code.html`) y se agregaron mejoras:

- Menú de navegación móvil funcional (el mockup original no tenía uno).
- Animaciones de aparición progresiva al hacer scroll.
- Formulario de contacto con validación, estados de carga/éxito/error y conexión real a un backend.
- Metadatos SEO/Open Graph y mejoras de accesibilidad (labels, `aria-*`, foco visible).
- Páginas de Aviso Legal y Privacidad enlazadas desde el footer.

Las imágenes (logo, hero, suministros) referencian actualmente las URLs generadas por la
herramienta de diseño original; se recomienda reemplazarlas por assets propios alojados en
`frontend/src/assets` cuando estén disponibles.
