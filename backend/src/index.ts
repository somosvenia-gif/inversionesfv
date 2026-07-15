import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { env } from './env.js'
import { contactRouter } from './routes/contact.js'

const app = express()

app.use(helmet())
app.use(cors({ origin: env.corsOrigin }))
app.use(express.json({ limit: '10kb' }))

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRouter)

app.use((_req, res) => {
  res.status(404).json({ message: 'Recurso no encontrado.' })
})

app.listen(env.port, () => {
  console.log(`API de Inversiones FV escuchando en http://localhost:${env.port}`)
})
