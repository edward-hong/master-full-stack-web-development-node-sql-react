import * as dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config({ path: __dirname + '/.env' })

const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'dragonstackdb',
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
})

export default pool
