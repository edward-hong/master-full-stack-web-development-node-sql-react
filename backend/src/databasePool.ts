import { Pool } from 'pg'
import { config } from 'dotenv'

config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
})

export default pool
