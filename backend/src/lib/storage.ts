import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { ContactPayload } from '../schemas/contact.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, '..', '..', 'data')
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json')

interface StoredSubmission extends ContactPayload {
  receivedAt: string
}

async function readSubmissions(): Promise<StoredSubmission[]> {
  try {
    const raw = await readFile(SUBMISSIONS_FILE, 'utf-8')
    return JSON.parse(raw) as StoredSubmission[]
  } catch {
    return []
  }
}

export async function saveSubmission(payload: ContactPayload): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true })
  const submissions = await readSubmissions()
  submissions.push({ ...payload, receivedAt: new Date().toISOString() })
  await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8')
}
