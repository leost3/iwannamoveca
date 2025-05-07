import * as dotenv from 'dotenv'
import { Client } from 'pg'

dotenv.config({ path: '.env.local' })

const client = new Client({
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'local_password',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5433'),
  database: process.env.POSTGRES_DB || 'postgres',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

// Track connection state
let isConnected = false

export async function query(queryObject?: any) {
  try {
    // Only connect if not already connected
    if (!isConnected) {
      await client.connect()
      isConnected = true
      console.log('🚀 database connected 🚀')
    }
    // Execute query
    const result = await client.query(queryObject)
    return result
  } catch (error) {
    console.error('Database error:', error)
    throw error // Re-throw so caller can handle
  }
  // Remove the finally block that closes the connection
  // We want to keep the connection open for subsequent queries
}

// Optional: Add a function to explicitly close the connection when needed
export async function closeConnection() {
  if (isConnected) {
    await client.end()
    isConnected = false
    console.log('Database connection closed')
  }
}

// Handle cleanup when process exits
process.on('exit', () => {
  if (isConnected) {
    client.end().catch(console.error)
  }
})