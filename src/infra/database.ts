import * as dotenv from 'dotenv'
import { Client } from 'pg'

dotenv.config({ path: '.env.local' })

const client = new Client({
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'local_password',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5433'),
  database: process.env.POSTGRES_DB || 'postgres',
})

export async function database(query?: string) {
  await client.connect()
  console.log('🚀 database connected 🚀')
  const result = await client.query('SELECT 1+1')
  await client.end()
  return result
}